import Ipv4 from "./ipv4.js"

let ip = new Ipv4
let subnet = ip.getRandomSubnet()
console.log(ip)
console.log(subnet)

let rng_ip= ip.info.ip
let rng_cidr = ip.info.cidr



const ae = document.getElementById("aufgabenstellung")

let rng = Math.random()
if (rng<0.5){
    let rngHostsPerSubnet = subnet.rngHostsPerSubnet
    ae.innerHTML=`Gegeben ist die Ip adresse: ${rng_ip}/${rng_cidr}. <br/>
    Es werden Subnetze mit ${rngHostsPerSubnet} Rechnern pro Netz benötigt. <br/>
    Berechne: <br/>`
}
else {
    let rngSubnetCount = subnet.rngSubnetCount
    ae.innerHTML=`Gegeben ist die Ip adresse: ${rng_ip}/${rng_cidr}. <br/>
    Es werden ${rngSubnetCount} Subnetze benötigt. <br/>
    Berechne: <br/>`
}


ae.innerHTML+="<h3>1. Subnetz: </h3>"
ae.innerHTML+="NetzID: <input/> <br/>"
ae.innerHTML+="erster Host: <input/> <br/>"
ae.innerHTML+="letzer Host: <input/> <br/>"
ae.innerHTML+="Broadcastadresse: <input/> <br/>"
ae.innerHTML+="Subnetzmaske: <input/> <br/>"


ae.innerHTML+="<h3>2. Subnetz</h3>"
ae.innerHTML+="NetzID: <input/> <br/>"
ae.innerHTML+="erster Host: <input/> <br/>"
ae.innerHTML+="letzer Host: <input/> <br/>"
ae.innerHTML+="Broadcastadresse: <input/> <br/>"
ae.innerHTML+="Subnetzmaske: <input/> <br/>"

ae.innerHTML+="<h3>Letztes. Subnetz </h3>"
ae.innerHTML+="NetzID: <input/> <br/>"
ae.innerHTML+="erster Host: <input/> <br/>"
ae.innerHTML+="letzer Host: <input/> <br/>"
ae.innerHTML+="Broadcastadresse: <input/> <br/>"
ae.innerHTML+="Subnetzmaske: <input/> <br/>"
















// let Aufgabentyp1 = {
//     Aufgabenstellung: [`Gegeben sind IP-Nummer: ${ip}
//     Subnetzmaske: ${subnetmask}.
//     Gesucht sind:`,
//     `Gegeben ist die ${ip}/${cidr}.
//     Gesucht sind:`

// ],
//     gesucht: {
//         NetzwerkID: "type:ip",
//         CIDR_Suffix: "type:int",
//         Erster_Nutzbarer_Host: "type:ip",
//         Letzter_Nutzbarer_Host: "type:ip",
//         BroadcastIP: "type:ip",
//         Anzahl_nutzbarer_Hosts: "type:int"
//     },
// }

