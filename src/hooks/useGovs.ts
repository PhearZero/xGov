import {useQuery} from "@tanstack/react-query";
import type {Created} from "./types";

type Governor = {
    address: string
    signature: string
    weight: number
}
type GovernorsIPFS = {
    title: string
    created: Created
    publicKey: string
    snapshot: Governor[]

}
export default function useGovs(){
    return useQuery<GovernorsIPFS>(['govs'], async () => {
        return fetch('https://api.voting.algorand.foundation/ipfs/bafkreieh77pgmvfexyxbnbexwu4n5x54kgdfop7lzfo26peyrjcwhn6uii').then(res => res.json())
    });
}
