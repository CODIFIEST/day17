// 7. Create a type theat represents an NFT, 
// with properties like imageURL name, currentOwnerAddress, openSeaFloorPrice,
// and description.

type NFT ={
    imageURL: string,
    name: string,
    currentOwnerAddress: string,
    openSeaFloorPrice: string,
    description:string
}

// 8. Create a function that accepts an array of NFTs
// and returns the one with the lowest floor price.
// Not the floor price itself, but it returns the NFT getCheapestNft
function getCheapestNFT(qArry:NFT[]):NFT{
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

