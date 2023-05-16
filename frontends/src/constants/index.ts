export const CONTRACT_ADDRESS = "0x5cE116929c52aaFeC948f7CCE13E6A8e21208aa8";
export const ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numMaxWhitelist",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "handleWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numMaxWhitelist",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
