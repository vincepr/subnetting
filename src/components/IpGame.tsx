import React from "react"
import { Assignment } from "./ipgame/Assignment"
import { createData } from "./ipgame/createData"
import { QuestionBlock } from "./ipgame/QuestionsBlock"
import { SubnetQuestionsAndAnswers } from "./ipgame/Subnet"

// export const IpGame = () => {
//     let data = createData()
//     return (
//     <div>
//         <h2>Ipv4 Rechenaufgaben, Enter zum Absenden</h2>
//         <Assignment data={data.assignment}/>
//         <QuestionBlock data={data.subnets} /> 
//         {/* {data.subnets.map((subnet, index)=>{return <SubnetQuestionsAndAnswers key ={index} data={subnet}/>})} */}
//     </div>
//     )
// }



export class IpGame extends React.Component {
    
    data = createData()
    state = {
      reload: false
    };
  
    handleClick = () => {
      // to "reload" we refresh the state
      this.setState({ reload: true })
    };
  
    render() {
      return (
        <>
          <button onClick={this.handleClick}>Restart</button>
          <div>{this.state.reload}</div>
          <h2>Ipv4 Rechenaufgaben, Enter zum Absenden</h2>
          <Assignment data={this.data.assignment}/>
          <QuestionBlock data={this.data.subnets} /> 

        </>
      );
    }
  }
  