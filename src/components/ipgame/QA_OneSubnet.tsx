import React, {useState} from "react";

// input
type SubnetDataProps = {data:
    {
    name: string
    questionAnswers: {
        question: string
        answer: string
    }[] 
    },
    isAnswerVisible:boolean,
}


/** for each subnet draw a question-answer block with a iinput-field*/
export const SubnetQuestionsAndAnswers = (props:SubnetDataProps) =>{

    return (
            <div>
                <h3>{props.data.name}:</h3>
                {props.data.questionAnswers.map((line)=>{
                    return QuestionInputAnswer(line, props.isAnswerVisible)})}
            </div>
    )
}


/** one Row/Line of the Question an Input and the Correct Answer */
function QuestionInputAnswer(line: {question: string, answer:string}, isAnswerVisible:boolean){
    // states
    const [state, setState] = useState({
        inputValue:"", 
        isCorrectAnswer:false
    })
    
    // keypress Enter to submit
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        console.log('Enter Key was pressed')
      }
    }

    // handle input-field change by user typing:
    function handleNewInput(event:React.ChangeEvent<HTMLInputElement>){
        let input = event.target.value
        if (input === line.answer){
            setState({inputValue:input, isCorrectAnswer:true})
            
        } else{
            setState({inputValue:input, isCorrectAnswer:false})
        }
    }

    return (
        <p key={line.question}>
            <label>{line.question} </label>
            <input type="text" value={state.inputValue} onKeyDown={handleKeyDown} onChange={e => handleNewInput(e)}/>
            <label style={{
                color: state.isCorrectAnswer ? "black" : "red",
                visibility: isAnswerVisible ? 'visible' : 'hidden'
                }}>{line.answer}</label>
        </p>
    )
}


