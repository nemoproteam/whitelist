import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWeb3Context } from "./context/Web3Context";
import useContract from "./hooks/useContract";

function App() {
  const contract: any = useContract();

  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain, provider },
  } = useWeb3Context();

  console.log(isAuthenticated, address, currentChain, "info");

  const handleWhitelist = async () => {
    const transaction = await contract.handleWhiteList();
    await transaction.wait();
    console.log(transaction, "transaction");
  };

  return (
    <div className="App">
      <button onClick={connectWallet} className="">
        connect web3
      </button>
      <div className="">
        {address && <button onClick={handleWhitelist}>add whitelist</button>}
      </div>
    </div>
  );
}

export default App;
