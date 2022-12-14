

type SubnetDataProps = {data:{
    name: string
    questionAnswers: {
        question: string
        answer: string
    }[] 
}}


/** draw Subnetname and its questions -> inputbox-> answers */
export function SubnetQuestionsAndAnswers(props:SubnetDataProps){
    console.log()
    return (
        <div>
            <h3>{props.data.name}:</h3>
            {props.data.questionAnswers.map((line)=>{
                return questionAnswerLine(line)})}
        </div>
    )
}

/** one Row/Line of the Question an Input and the Correct Answer */
function questionAnswerLine(line: {question: string, answer:string}){
    return (
        <p key={line.question}>
            <label>{line.question} </label>
            <Input/>
            <label >{line.answer}</label>
            {/* <label style={{visibility: "hidden"}}>{line.answer}</label> */}
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