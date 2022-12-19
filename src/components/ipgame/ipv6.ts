// class that holds an ipv4 and all relevant data to it. Random if no default. 
// .getInfo() -> info regarding the ip adress.
// .getRandomSubnet() -> creates a random subnet combination of the subnet and passes back info about it.

// output
export type OutputIpInfo = {
    ip: string;
    cidr: number;
    subnetmask: any;
    hostnetmask: any;
    netid: any;
    broadcast: any;
    firstHost: any;
    lastHost: any;
    maxPossibleHosts: number;
}

export type OutputSubnetInfo = {
    newCidr : number
    maxHostsPerSubnet : number
    rngHostsPerSubnet: number
        subnetCount: number
    rngSubnetCount: number
    firstSubnet: OutputIpInfo
    secondSubnet?: OutputIpInfo
    lastSubnet: OutputIpInfo
}

// parseInt("1234", 16)
// .toString(16)

export default class IPv6{
    ipArray : number[]
    ipHexa : string[]
    constructor(ip:number[]|"random" = "random"){
        if (ip==="random"){this.ipArray = getRandomIp()}
        else{ this.ipArray=ip}
        this.ipHexa = humanizeIp(this.ipArray)
        
    }
}

function getRandomIp() : number[] {
    function getRandomIntInclusive(min:number, max:number):number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);   // The maximum is inclusive and the minimum is inclusive
    }
    function rngChunk(){
        if (Math.random()<0.4){
                return getRandomIntInclusive(0, 0xFFF)              // priorize 0 as the first hexa-digit -> or it is statistically way to unlikely.
        }
        else if (Math.random()<0.3){
            return getRandomIntInclusive(0, 0xFFFF)                 // default full random range
        }
        return 0                                                    // priroize 0 or it is way to unlikely
    }

    // start with a "private ip block"
    let rngIp= [0xfe00,]

    if (Math.random() < 0.5){
        for (let i of [1,2,3]){
            rngIp.push(rngChunk())
            
        }
        for (let i of [1,2,3,4]){
            // priorize :: at the end
            rngIp.push(0)
        }
    } else {
        for (let i=0; i<7 ; i++){
            rngIp.push(rngChunk())
        }
    }
    return rngIp
}

function humanizeIp(array: number[]) : string[] {
    let hexaIp = []
    for (let chunk of array){
        hexaIp.push(chunk.toString(16))
    }
    console.log(possibleCombinations(hexaIp))
    substitutioneDoubleDotIp(hexaIp)
    return hexaIp
}

/** remove 0.0... -> :: */
function substitutioneDoubleDotIp(hexaIp: string[]){
    // find longest successive zeros to replace with ::

}

function possibleCombinations(arr: string[]){
    let combinations = []
    // find all combinations of concurrent chunks
    for(let start=0; start<arr.length; start++){
        for(let end=start+1; end<arr.length+1; end++){
            let slice = arr.slice(start, end)
            if(slice.length>1){combinations.push({slice:slice, start:start, end:end})}
        }
    }
    // filter out all not "0" chunks
    combinations = combinations.filter((a)=>isAllZeros(a.slice))
    // get index of the longest array:
    let lengths = combinations.map(a=>a.slice.length)
    console.log(lengths)
    // console.log(lengths.indexOf(Math.max(...lengths)))
    // let indexMaxLength = combinations.reduce((maxI, el, i, arr)=>
    // (el.slice.length>arr[maxI].slice.length)?i: maxI, 0)
    // let maxLength = combinations[indexMaxLength].slice.length
    // console.log(indexMaxLength + " "+ maxLength)
    return combinations
}

function isAllZeros(arr:string[]){
    let isAllZeros = true
    arr.forEach(
        (string)=>{
            if(!(string==="0")){isAllZeros = false}}
    )
    return isAllZeros
}
















/*

class IPv4{
    // using numbers not human like "10.2.3.4" patterns for ips
    ip: number
    cidr: number
    subnetmask: number
    hostnetmask: number
    netid:number
    broadcast: number
    firstHost: number
    lastHost: number
    info: OutputIpInfo


    constructor(ip:number=0, cidr= 8){
        if (ip===0){                                        // using for random ip
            let random = getRandomPrivateIp()               // returns everything in decimal values / normal numbers
            this.ip = random.ip
            this.cidr = random.cidr
        }else{
            this.ip=ip
            this.cidr = cidr
        }

        // calc net-masks:
        let masks=calcNetMasks(this.cidr)
        this.subnetmask = masks.sub
        this.hostnetmask = masks.host

        //calc netz-id
        this.netid = bitwiseAnd_53bit(this.ip,  this.subnetmask)
        this.broadcast = this.netid+ this.hostnetmask
        this.firstHost = this.netid + 1
        this.lastHost = this.broadcast -1
        this.info=this.getInfo()
    }

    getInfo(): OutputIpInfo{
        let info = {
            ip: humanizeIp(this.ip),
            //ip_dec: this.ip,
            cidr: this.cidr,
            subnetmask: humanizeIp(this.subnetmask),
            //subnetmask_dec: this.subnetmask,
            hostnetmask: humanizeIp(this.hostnetmask),
            netid: humanizeIp(this.netid),
            //netid_dec: this.netid,
            broadcast: humanizeIp(this.broadcast),
            firstHost: humanizeIp(this.firstHost),
            lastHost: humanizeIp(this.lastHost),
            maxPossibleHosts: Math.pow(2, (32-this.cidr) )-2,
        }
        return info
    }

    getRandomSubnet():OutputSubnetInfo{
        let newCidr = getRandomIntInclusive(this.cidr+1, 30)
        let subnetCount = Math.pow(2, newCidr-this.cidr)
        let rngSubnetCount = getRandomIntInclusive(1+Math.pow(2, newCidr-this.cidr-1),subnetCount)
        
        let FirstSubnet = new IPv6(this.netid, newCidr)
        let SecondSubnet = new IPv6(FirstSubnet.broadcast+1 , newCidr)
        let LastSubnet = new IPv6(this.broadcast, newCidr)

        let maxHosts =      Math.pow(2, (32-newCidr) )-2
        let minHosts = 1 +  Math.pow(2, (32-newCidr-1) )-2
        let rngHosts = getRandomIntInclusive(minHosts, maxHosts)
        

        let data:OutputSubnetInfo = {
            newCidr : newCidr,
            maxHostsPerSubnet : maxHosts,
            rngHostsPerSubnet:rngHosts,
            subnetCount: subnetCount,
            rngSubnetCount: rngSubnetCount,
            firstSubnet: FirstSubnet.info,
            lastSubnet: LastSubnet.info,
        }
        // case more than 2 Subnets:
        if (!(SecondSubnet.netid===LastSubnet.netid)){
            data.secondSubnet= SecondSubnet.info
            
        }
        return data
    }
}


// cidr->4->1111000000....0 -> int 
function calcNetMasks(cidr:number){
    //flip all bits for some-ammount of digits 
    function flipbits(v:number, digits:number) {
        return ~v & (Math.pow(2, digits) - 1);
    }

    // get 11110000... for cidr times 1s
    let binaryDigits = ``
    for (let i =0; i<32; i++){
        if (i<cidr){binaryDigits+="1"}
        else {binaryDigits+="0"}
    }
    // calculate the 2 masks
    let decimalSubnetMask = parseInt(binaryDigits,2)
    let decimalHostMask = flipbits(decimalSubnetMask, 32)

    return {sub: decimalSubnetMask, host: decimalHostMask}
}


// Bitwise AND Works with values up to 2^53 since 32Bit-SIGNED! numbers are not enough for full IP-Adresses
function bitwiseAnd_53bit(value1:number, value2:number) {
    const maxInt32Bits = 65536.0; // 2^16 Split 32 bit into 2 16 bit chunks

    const value1_highBits = value1 / maxInt32Bits;
    const value1_lowBits = value1 % maxInt32Bits;
    const value2_highBits = value2 / maxInt32Bits;
    const value2_lowBits = value2 % maxInt32Bits;
    return (value1_highBits & value2_highBits) * maxInt32Bits + (value1_lowBits & value2_lowBits)
}





// get a random PRIVATE Ipv4 Adress. (Broadcast or ) 
function getRandomPrivateIp(){
    // randomize with "equal" chances
    let rng = Math.random()
    let ip
    if (rng < 0.33) {
        ip = {min: 167772160, max: 184549375, cidr:  8}                 // 10.0.0.0/8 -> von 10*2^24 bis 10*2^24+255*2^16+255*2^8+255
    }
    else if (rng<0.66){
        ip = {min: 2886729728, max: 2887843839, cidr: 12}               // 172.16.0.0/12
    }
    else {
        ip = {min: 3232235520, max: 3232301055, cidr: 16}               // 192.168.0.0/16
    }

    // half the time we want to use the default cidr, since it's most commonly used. 
    // Otherwise we set it to a random possible number: (ex 8-30)
    rng = Math.random()
    if (rng<0.5){
        ip.cidr = getRandomIntInclusive(ip.cidr, 29)    	            // cidr=/29 ->2subnets-> /30 last possible subnet configuration
    }

    return { ip: getRandomIntInclusive(ip.min, ip.max), cidr: ip.cidr}

}


// deicmal INT to human dottet-IP. example: 259 -> 0.0.1.3 
function humanizeIp(inputInt:number):string{
    // split INT into chunks of (x ammounts of bits)-Sized chunks 
    function splitIntoChunks(inputInt:number, maxBits = 32, bitsPerChunk = 8):string{
        function recursion(inputInt:number, exponent:number, bitsPerChunk:number):string{
            let currentChunk = Math.pow(2, exponent)
            if (exponent <= 0){return inputInt.toString()}
            let digit = Math.floor(inputInt/currentChunk)
            let digitString:string
            if (digit === 0){digitString = "0"}
            else{digitString = digit.toString()}
            let followingDigits = recursion(inputInt%currentChunk, (exponent-8), bitsPerChunk )
            return  digitString + "."+followingDigits
        }
        return recursion(inputInt, (maxBits-bitsPerChunk), bitsPerChunk)          // 24 bit to get the frist 32-24 bit and then 
    }
    return splitIntoChunks(inputInt)
}


// 10.0.0.0 -> 167772160  
function humanToDecimal(str:string):number{
    if (!(typeof str === 'string')){throw "error: cant parse Ipv4-adress, no string"}
    let chunks = str.split(".")
    if (!(chunks.length ===4)){throw "error: cant parse Ipv4-adress, format broken"}
    let currentPow = 24               // 2^24 -> 2^16 -> 2^8 -> 2^0
    let sum = 0
    for (let chunk of chunks){
        let int = parseInt(chunk)
        if (isNaN(int) || int >255){throw "error: cant parse Ipv4-adress, NaN or >255"}
        sum += int * Math.pow(2, currentPow) 
        currentPow -=8
    }
    return sum
}

*/