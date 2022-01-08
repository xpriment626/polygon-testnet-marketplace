# Fullstack NFT Marketplace (MATIC)

## Connecting to the MATIC Mumbai Testnet

First navigate to the networks tab in your MetaMask then click on add network. Here you'll be asked for the network name, chain_id, RPC url, and currency symbol. Name and symbol don't matter much here but are good for staying organised.

The most important fields are chain id and RPC url.

### Mumbai Network ID:

-   80001

For the RPC, feel free to use the following public RPCs but keep in mind the network traffic.

-   https://rpc-mumbai.matic.today
-   https://matic-mumbai.chainstacklabs.com
-   https://rpc-mumbai.maticvigil.com
-   https://matic-testnet-archive-rpc.bwarelabs.com

You can also get you own dedicated URL at the following. Personally, I use Alchemy.

-   Alchemy
-   Moralis
-   Infura

### This project demonstrates a functional understanding of the following technologies:

-   MetaMask
-   IPFS
-   ethers.js
-   Hardhat
-   NextJS
-   Tailwind CSS

The networks are configured to both the MATIC Mumbai testnet, as well as mainnet, with Alchemy as the RPC provider. However, as I strongly advocate against art theft in the NFT space, I will not be deploying to mainnet. This is to provent the trade of the free stock images I use for testing purposes.

This is not an attempt at a large scale marketplace the likes of OpenSea and Rarible, so functionality is kept to just the essentials for transactions, minting, and display.
