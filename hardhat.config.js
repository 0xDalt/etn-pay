require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    etnnet: {
      url: "https://rpc.ankr.com/electroneum_testnet/a2587d0f94d9ff18fba5fdfa19f8351f26bfc8febc8c7bec09450a9613502709",
      accounts: [
        "be5c5cf7cc51db2bbf32ed4043df0d8e567c59bf037d7bb67b7f3eecded865f4",
      ],
      chainId: 5201420,
    },
  },
};
