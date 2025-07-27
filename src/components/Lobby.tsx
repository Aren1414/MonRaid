import React, { useState } from 'react';
import { connectWallet, createMatch, joinMatch } from '../GameAPI';

const Lobby = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [matchLink, setMatchLink] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('warrior');

  const handleConnectWallet = async () => {
    try {
      const address = await connectWallet();
      setWalletAddress(address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("⚠️ Wallet connection failed. Please try again.");
    }
  };

  const handleStartGame = async () => {
    if (!walletAddress) {
      alert("🔗 Please connect your wallet first.");
      return;
    }
    try {
      const matchId = await createMatch(selectedCharacter);
      const link = `${window.location.origin}/match/${matchId}`;
      setMatchLink(link);
    } catch (error) {
      console.error("Error starting game:", error);
      alert("⚠️ Failed to start game. Try again later.");
    }
  };

  const handleJoinGame = async () => {
    if (!walletAddress) {
      alert("🔗 Please connect your wallet first.");
      return;
    }
    const matchId = prompt("🔢 Enter Match ID to Join:");
    if (!matchId) return;

    try {
      await joinMatch(matchId, selectedCharacter);
    } catch (error) {
      console.error("Error joining match:", error);
      alert("⚠️ Could not join the match. Check the ID and try again.");
    }
  };

  return (
    <div className="lobby-container">
      <h2>🔥 Welcome to Meta Battle!</h2>

      <button onClick={handleConnectWallet}>
        {walletAddress ? `✅ Connected: ${walletAddress}` : '🔗 Connect Wallet'}
      </button>

      <div className="character-select">
        <label>Select Character:</label>
        <select
          value={selectedCharacter}
          onChange={(e) => setSelectedCharacter(e.target.value)}
        >
          <option value="warrior">⚔️ Warrior</option>
          <option value="mage" disabled>🧙 Mage (Soon)</option>
          <option value="rogue" disabled>🗡️ Rogue (Soon)</option>
        </select>
      </div>

      <button onClick={handleStartGame}>🚀 Start Game</button>
      <button onClick={handleJoinGame}>🎮 Join Game</button>

      {matchLink && (
        <div className="match-link">
          <p>🔗 Share this match link with friends:</p>
          <code>{matchLink}</code>
        </div>
      )}
    </div>
  );
};

export default Lobby;
