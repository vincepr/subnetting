import { Assignment } from "./ipgame/Assignment"
import {createData} from "./ipgame/createData"

export const IpGame = () => {
    let data = createData()
    console.log(data)
    return (<div>
        <h2>Ipv4 Rechenaufgaben, Enter zum Absenden</h2>
        <Assignment data={data.assignment}/>
    </div>)
}