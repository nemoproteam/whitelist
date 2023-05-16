import React, { useEffect, useState } from "react";
import { useWeb3Context } from "./context/Web3Context";
import useContract from "./hooks/useContract";

function App() {
  const contract: any = useContract();

  const [quantity, setQuantity] = useState<number>(0);
  const [listWhiteList, setListWhiteList] = useState<string[]>([]);

  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address, currentChain, provider },
  } = useWeb3Context();

  const handleWhitelist = async () => {
    try {
      const transaction = await contract.handleWhiteList();
      await transaction.wait();
      console.log(transaction, "transaction");
    } catch (error) {
      console.log(error);
    }
  };

  const getNumberWhiteList = async () => {
    try {
      const transaction = await contract.getNumberWhiteList();
      console.log(transaction, "num");
      setQuantity(transaction.toString().replace("n", ""));
    } catch (error) {
      console.log(error);
    }
  };

  const getListWhiteList = async () => {
    try {
      const transaction = await contract.listWhiteList();
      setListWhiteList(transaction);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNumberWhiteList();
    getListWhiteList();
  }, [contract]);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <button onClick={connectWallet} className="">
        {address ? address : "Connect Metamask"}
      </button>
      <div className="">
        <div className="">
          {address && <button onClick={handleWhitelist}>Add Whitelist</button>}
        </div>
        <div className="">
          {address && (
            <button onClick={handleWhitelist}>
              {quantity} Number Whitelist
            </button>
          )}
        </div>
        <div className="">
          {address && (
            <ul className="">
              {listWhiteList.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
