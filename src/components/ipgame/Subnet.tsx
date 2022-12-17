import React from "react";

type SubnetDataProps = {data:
    {
    name: string
    questionAnswers: {
        question: string
        answer: string
    }[] 
    },
    isAnswerVisible:boolean
}


/** draw Subnetname and its questions -> inputbox-> answers */
export const SubnetQuestionsAndAnswers = (props:SubnetDataProps) =>{
    return (
            <div>
                <h3>{props.data.name}:</h3>
                {props.data.questionAnswers.map((line)=>{
                    return questionAnswerLine(line, props.isAnswerVisible)})}
            </div>
    )
}


/** one Row/Line of the Question an Input and the Correct Answer */
function questionAnswerLine(line: {question: string, answer:string}, isAnswerVisible:boolean){
    return (
        <p key={line.question}>
            <label>{line.question} </label>
            <Input/>
            <label style={{visibility: isAnswerVisible ? 'visible' : 'hidden'}}>{line.answer}</label>
        </p>
    )
}


// Input element that also handles the Enter-Key-Down-Event
const Input = () => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        console.log('Enter Key was pressed')
        
      }
    }

    return <input type="text" onKeyDown={handleKeyDown} />
  }