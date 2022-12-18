// input
type AssignmentInfo = {data:{
    ip: string;
    cidr: number;
    rngHostsPerSubnet: number;
    rngSubnetCount: number;
}}

export const Assignment = (props:AssignmentInfo) =>{
    let rng = Math.random()
    let aufgabenText : string[] = []
    if (rng<0.5){
        // let rngHostsPerSubnet = subnet.rngHostsPerSubnet
        aufgabenText=[
            `Gegeben ist die Ip adresse: ${props.data.ip}/${props.data.cidr}. \u000A`,
            `Es werden Subnetze mit ${props.data.rngHostsPerSubnet} Rechnern pro Netz benötigt.`,
            `Berechne:`,
        ] 
    }
    else {
        aufgabenText=[
            `Gegeben ist die Ip adresse: ${props.data.ip}/${props.data.cidr}.`,
            `Es werden ${props.data.rngSubnetCount} Subnetze benötigt.`,
            `Berechne:`,
        ] 
    }
    
    return <div>
        { aufgabenText.map((txt, index)=><p key={index}>{txt}</p>)}
    </div>
}