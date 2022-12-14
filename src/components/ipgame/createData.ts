import Ipv4 from "./ipv4"
import {OutputSubnetInfo, OutputIpInfo} from "./ipv4"

// output
type gameData = {
    assignment: {
        ip: string
        cidr: number
        rngHostsPerSubnet: number
        rngSubnetCount: number
    },
    subnets: SubnetData[]
}

type SubnetData = {
    name: string
    questionAnswers: QuestionAndAnswers[] 
}

type QuestionAndAnswers = {
    question: string
    answer: string
}

export function createData():gameData{
    let ip = new Ipv4
    let subnets:OutputSubnetInfo = ip.getRandomSubnet()
    // console.log(ip)
    // console.log(subnets)
    let assignmentData= {
        ip: ip.info.ip,
        cidr: ip.info.cidr,
        rngHostsPerSubnet: subnets.rngHostsPerSubnet,
        rngSubnetCount: subnets.rngSubnetCount,
    }
    let subnetsData =getQuestionsAndAnswers(subnets)
    return {
        assignment: assignmentData,
        subnets: subnetsData
    }
}


function getQuestionsAndAnswers(subnets:OutputSubnetInfo) :SubnetData[] {
    function createRowsArray(subnet:OutputIpInfo) :QuestionAndAnswers[] {
        return [
            {
                question: "NetzID:",
                answer: subnet.netid
            
            },
            {
                question: "erster Host:",
                answer: subnet.firstHost
            },
            {
                question: "letzter Host:",
                answer: subnet.lastHost

            },
            {
                question: "Broadcastadresse:",
                answer: subnet.broadcast
            },
            {
                question: "Subnetzmaske:",
                answer: subnet.subnetmask
            },
        ]
    }
    let questionsData:SubnetData[] = []
    // add first subnet
    let subnet = {
        name: "Erstes Subnetz",
        questionAnswers: createRowsArray(subnets.firstSubnet)
    }
    questionsData.push(subnet)
  

    if (subnets.secondSubnet){
        subnet = {
            name: "Zweites Subnetz",
            questionAnswers: createRowsArray(subnets.lastSubnet)
        }
        questionsData.push(subnet)
    }
    subnet = {
        name: "Letztes Subnetz",
        questionAnswers: createRowsArray(subnets.lastSubnet)
    }
    questionsData.push(subnet)

    return questionsData

}