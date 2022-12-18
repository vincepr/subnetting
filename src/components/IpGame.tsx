import { Assignment } from "./ipgame/Assignment"
import { createData } from "./ipgame/createData"
import { QuestionBlock } from "./ipgame/QA_AllBlock"


export const IpGame = () => {
    let data = createData()
    return (
    <div className="form-box">
        <h2>Zufällige Ipv4 Rechenaufgaben, Enter zum Absenden</h2>
        <Assignment data={data.assignment}/>
        <QuestionBlock data={data.subnets} /> 
    </div>
    )
}
