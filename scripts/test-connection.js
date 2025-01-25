// scripts/test-connection.js
const { ethers } = require("hardhat");

async function main() {
  const network = await ethers.provider.getNetwork();
  console.log("Network:", {
    chainId: network.chainId,
    name: network.name,
  });
}

main().catch(console.error);
const ethers = require("ethers");
async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://rpc.ankr.com/electroneum_testnet/a2587d0f94d9ff18fba5fdfa19f8351f26bfc8febc8c7bec09450a9613502709"
  );
  const network = await provider.getNetwork();
  const blockNumber = await provider.getBlockNumber();
  console.log("Network ID:", network.chainId);
  console.log("Block Number:", blockNumber);
}
main().catch(console.error);
