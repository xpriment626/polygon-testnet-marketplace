const hre = require("hardhat");

async function main() {
    const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
    const market = await NFTMarket.deploy();
    await market.deployed();
    console.log("NFT Market Contract deployed to:", market.address);

    const NFT = await hre.ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(market.address);
    await nft.deployed();
    console.log("NFT COntract deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
