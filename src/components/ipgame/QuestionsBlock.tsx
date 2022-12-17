import { SubnetQuestionsAndAnswers } from "./Subnet"
import { useState } from "react";

type SubnetsDataProps = {data:
    {
    name: string
    questionAnswers: {
        question: string
        answer: string
    }[] 
    }[]
}


export const QuestionBlock = (props: SubnetsDataProps ) =>{
    const [isShowResultsVisible, setState] = useState(false)
    return (
        <div>
            <button onClick={()=>{setState(true)}}>Check Answers</button>
            {props.data.map((subnet, index)=>{return <SubnetQuestionsAndAnswers key ={index} data={subnet} isAnswerVisible={isShowResultsVisible}/>})}
        </div>
    )
    
}
