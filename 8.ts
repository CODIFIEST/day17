
import { ModuleDetectionKind } from "typescript"

type NFT = {
    imageURL: string,
    name: string,
    currentOwnerAddress: string,
    openSeaFloorPrice: number,
    description: string
}

const NFT1: NFT = {
    imageURL: "http://yo.com",
    name: "Yo Yo Ma",
    currentOwnerAddress: "0xhad8",
    description: "some oboe",
    openSeaFloorPrice: 999
}
const NFT2: NFT = {
    imageURL: "http://lint.com",
    name: "linty",
    currentOwnerAddress: "0x1k7e",
    description: "nice",
    openSeaFloorPrice: 22

}
const NFT3: NFT = {
    imageURL: "HTTP://LOUD.COM",
    name: "jfc",
    currentOwnerAddress: "0xsdz9",
    description: "super loud",
    openSeaFloorPrice: 69


}
const NFT4: NFT = {
    imageURL: "http://nope.com",
    name: "ralph",
    currentOwnerAddress: "0xfffff",
    description: "no way",
    openSeaFloorPrice: 5555

}
const bArray: NFT[] = [NFT1, NFT2, NFT3, NFT4]

// 8. Create a function that accepts an array of NFTs
// and returns the one with the lowest floor price.
// Not the floor price itself, but it returns the NFT getCheapestNft

console.log(bArray, "firt")

let getCheapestNft: NFT = bArray.reduce((last, current) => {

    if (last.openSeaFloorPrice < current.openSeaFloorPrice) {
        console.log(getCheapestNft)
        return last
    } else {
        console.log(getCheapestNft)
        return current
    }
})
console.log(bArray, "last")
console.log(getCheapestNft);


