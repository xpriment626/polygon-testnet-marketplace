require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const ALCHEMY_POLYGON_MUMBAI =
    "https://polygon-mumbai.g.alchemy.com/v2/nRdeaI8zC4A6mMHjOlvdAI-at3kZ6tfb";
const ALCHEMY_POLYGON_MAINNET =
    "https://polygon-mainnet.g.alchemy.com/v2/nRdeaI8zC4A6mMHjOlvdAI-at3kZ6tfb";
const PRIVATE_KEY = fs.readFileSync(".secrets").toString();

module.exports = {
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545/",
        },
        hardhat: {
            chainId: 1337,
        },
        mumbai: {
            url: ALCHEMY_POLYGON_MUMBAI,
            accounts: [PRIVATE_KEY],
        },
        mainnet: {
            url: ALCHEMY_POLYGON_MAINNET,
            accounts: [PRIVATE_KEY],
        },
    },
    solidity: "0.8.4",
};
