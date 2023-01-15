  
// 7. Create a type theat represents an NFT, 
// with properties like imageURL name, currentOwnerAddress, openSeaFloorPrice,
// and description.

import { ModuleDetectionKind } from "typescript"

type NFT ={
    imageURL: string,
    name: string,
    currentOwnerAddress: string,
    openSeaFloorPrice: number,
    description:string
}

const NFT1:NFT = {
    imageURL : "http://yo.com",
    name: "Yo Yo Ma",
    currentOwnerAddress: "0xhad8",
    description:"some oboe",
    openSeaFloorPrice: 999
}
const NFT2:NFT = {
    imageURL : "http://lint.com",
    name: "linty",
    currentOwnerAddress:"0x1k7e",
    description :"nice",
    openSeaFloorPrice: 22
    
}
const NFT3: NFT={
    imageURL:"HTTP://LOUD.COM",
    name: "jfc",
    currentOwnerAddress:"0xsdz9",
    description:"super loud",
    openSeaFloorPrice:69


}
const NFT4:NFT={
    imageURL:"http://nope.com",
    name:"ralph",
    currentOwnerAddress:"0xfffff",
    description:"no way",
    openSeaFloorPrice:5555
    
}
const bArray:NFT[] = [NFT1,NFT2,NFT3,NFT4]


// function makeNFTs(array:NFT[], howMany:number){
//     for (let i=0; i < howMany; i++){
//         console.log({i})
//         const NFT : NFT = {
//             imageURL : "http://yo.com",
//             name: "Yo Yo Ma",
//             currentOwnerAddress: "0xhad8",
//             description:"some oboe",
//             openSeaFloorPrice: 999
//         }
        
//     }
// }

// 8. Create a function that accepts an array of NFTs
// and returns the one with the lowest floor price.
// Not the floor price itself, but it returns the NFT getCheapestNft
//function using .reduce method per horsey
console.log(bArray, "firt")

let getCheeeepestNft: NFT = bArray.reduce((last, current) => {
 
    if (last.openSeaFloorPrice < current.openSeaFloorPrice) {
        return last
    } else {
        return current
    }
})
console.log(bArray, "last")
console.log(getCheeeepestNft);

// bArray.reduce(gCN, bArray)

// function gCN(bArray:NFT[]):NFT {
//     let gCNFT = bArray[0];
//     if (gCNFT.openSeaFloorPrice > this.openSeaFloorPrice){
//         gCNFT = this;
//     }
//     return gCNFT;
// }

function getCheapestNft(qArry:NFT[]):NFT{
    const lowestPriceNFT:NFT = qArry[0]
     
    for(let i=1; i<qArry.length; i++) {
        if(lowestPriceNFT.openSeaFloorPrice > qArry[i].openSeaFloorPrice ){
            console.log(lowestPriceNFT)
           lowestPriceNFT.openSeaFloorPrice = qArry[i].openSeaFloorPrice
        }
    }
    console.log(`${lowestPriceNFT} wins`)
    return lowestPriceNFT
}
 
// const aNFT1 :NFT = {
//     imageURL :
// }

