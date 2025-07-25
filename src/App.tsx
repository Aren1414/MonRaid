import { useState } from "react";
import { connectMetaMask, connectWalletConnect } from "./walletConnect";

function App() {
  const [address, setAddress] = useState<string | null>(null);

  const handleMetaMask = async () => {
    try {
      const { address } = await connectMetaMask();
      setAddress(address);
    } catch (err) {
      console.error(err);
    }
  };

  const handleWalletConnect = async () => {
    try {
      const { address } = await connectWalletConnect();
      setAddress(address);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>MonRaid</h1>
      <button onClick={handleMetaMask} style={{ marginRight: "1rem" }}>
        Connect MetaMask
      </button>
      <button onClick={handleWalletConnect}>Connect WalletConnect</button>
      {address && (
        <div style={{ marginTop: "1rem" }}>
          Connected: <code>{address}</code>
        </div>
      )}
    </div>
  );
}

export default App;
