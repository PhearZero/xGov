import {useQuery} from "@tanstack/react-query";
import {Created} from "./types";


type Option = {
    id: string
    label: string
}

type Metadata = {
    ask: number
    category: string
    focus_area: string
    link: string
    threshold: number
}

type Question = {
    description: string
    id: string
    metadata: Metadata
    options: Option[]
    prompt: string
}
type ProposalSession = {
    created: Created
    description: string
    end: string
    id: string
    informationUrl: string
    questions: Question[]
    start: string
    title: string
    type: number
    voteGatingSnapshotCid: string

}
export default function useProposals(){
    return useQuery<ProposalSession>(['proposals'], async () => {
        return fetch('https://api.voting.algorand.foundation/ipfs/bafkreigjiien52ukmfqd5yrjgonrj6ixpr2rm32szps45ztpehk7z4lhli').then(res => res.json())
    });
}
