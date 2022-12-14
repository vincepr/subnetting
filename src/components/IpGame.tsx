import { Assignment } from "./ipgame/Assignment"
import { createData } from "./ipgame/createData"
import { SubnetQuestionsAndAnswers } from "./ipgame/Subnet"

export const IpGame = () => {
    let data = createData()
    return (
    <div>
        <h2>Ipv4 Rechenaufgaben, Enter zum Absenden</h2>
        <Assignment data={data.assignment}/>
        {data.subnets.map((subnet, index)=>{return <SubnetQuestionsAndAnswers key ={index} data={subnet}/>})}
    </div>
    )
}