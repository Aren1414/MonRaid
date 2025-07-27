import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connectMetaMask, connectWalletConnect } from '../walletConnect';

const Home = () => {
  const navigate = useNavigate();

  const handleConnect = async (type: 'metamask' | 'walletconnect') => {
    try {
      const result =
        type === 'metamask'
          ? await connectMetaMask()
          : await connectWalletConnect();

      if (!result || !result.address) throw new Error('No address found');

      navigate('/lobby');
    } catch (error) {
      alert('Wallet connection failed.');
      console.error(error);
    }
  };

  return (
    <div className="home-container" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>⚔️ MonRaid</h1>
      <p style={{ maxWidth: '500px', margin: 'auto' }}>
        Blockchain-based battle game. Choose your character, team up, and fight to survive. 10 players, 1 final boss, only 3 survivors.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => handleConnect('metamask')} style={{ marginRight: '1rem' }}>
          🔗 Connect with MetaMask
        </button>
        <button onClick={() => handleConnect('walletconnect')}>
          🔗 Connect with WalletConnect
        </button>
      </div>
    </div>
  );
};

export default Home;
