import { SubnetQuestionsAndAnswers } from "./QA_OneSubnet"
import { useState } from "react";

// input
type SubnetsDataProps = {data:
    {
    name: string
    questionAnswers: {
        question: string
        answer: string
    }[] 
    }[]
}

/** draw Ip game, handles Submitting of Answers-State */
export const QuestionBlock = (props: SubnetsDataProps ) =>{
    const [isShowResultsVisible, setState] = useState(false)        // set default state false, flip it if "submitted the answers"
    function submitAnswers(){
        setState(true)
    }
    return (
        <div>
            {props.data.map((subnet, index)=>{return <SubnetQuestionsAndAnswers key ={index} data={subnet} isAnswerVisible={isShowResultsVisible}/>})}
            <button onClick={()=>{submitAnswers()}}>Check Answers</button>
        </div>
    )
    
}
