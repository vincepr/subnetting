import Ipv4 from "./ipv4"
import {OutputSubnetInfo, OutputIpInfo} from "./ipv4"

// create a new ip & Subnet combination and only pass on relevant info for the IpGame

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

export type SubnetData = {
    name: string
    questionAnswers: QuestionAndAnswers[] 
}

export type QuestionAndAnswers = {
    question: string
    answer: string
}

/** create new ramdon ipv4 & subnet data -> pass only relevant info along */
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


/** format questions and answers for 1th, 2nd, last subnet*/
function getQuestionsAndAnswers(subnets:OutputSubnetInfo) :SubnetData[] {
    function createRowsArray(subnet:OutputIpInfo) :QuestionAndAnswers[] {
        return [
            {
                question: "NetzID:",
                answer: subnet.netid
            
            },
            {
                question: "Erster Host:",
                answer: subnet.firstHost
            },
            {
                question: "Letzter Host:",
                answer: subnet.lastHost

            },
            {
                question: "Broadcast-Adresse:",
                answer: subnet.broadcast
            },
            {
                question: "Subnetz-Maske:",
                answer: subnet.subnetmask
            },
        ]
    }

    // array 1 entry per subnet:
    let questionsData:SubnetData[] = []
    // add first subnet:
    let subnet = {
        name: "Erstes Subnetz",
        questionAnswers: createRowsArray(subnets.firstSubnet)
    }
    questionsData.push(subnet)
    // only add second subnet if it exists (if only 2 subnets exist -> only first and last exist)
    if (subnets.secondSubnet){
        subnet = {
            name: "Zweites Subnetz",
            questionAnswers: createRowsArray(subnets.secondSubnet)
        }
        questionsData.push(subnet)
    }
    // add third subet:
    subnet = {
        name: "Letztes Subnetz",
        questionAnswers: createRowsArray(subnets.lastSubnet)
    }
    questionsData.push(subnet)

    return questionsData

}