import { useState } from "react";
import { connectMetaMask, connectWalletConnect } from "./walletConnect";
import Lobby from "./components/Lobby";

function App() {
  const [address, setAddress] = useState<string | null>(null);

  const handleMetaMask = async () => {
    try {
      const { address } = await connectMetaMask();
      setAddress(address);
    } catch (err) {
      console.error("MetaMask error:", err);
    }
  };

  const handleWalletConnect = async () => {
    try {
      const { address } = await connectWalletConnect();
      setAddress(address);
    } catch (err) {
      console.error("WalletConnect error:", err);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1>🛡️ MonRaid</h1>
        {!address ? (
          <>
            <button onClick={handleMetaMask} style={{ marginRight: "1rem" }}>
              🔗 Connect MetaMask
            </button>
            <button onClick={handleWalletConnect}>🔗 Connect WalletConnect</button>
          </>
        ) : (
          <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
            Connected: <code>{address}</code>
          </div>
        )}
      </header>

      {address ? (
        <Lobby walletAddress={address} />
      ) : (
        <p>⚠️ Please connect your wallet to enter the game lobby.</p>
      )}
    </div>
  );
}

export default App;
