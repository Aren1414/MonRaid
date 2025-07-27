import React, { useState } from 'react';
import { connectWallet, createMatch, joinMatch } from '../GameAPI';

const Lobby = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [matchLink, setMatchLink] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('warrior');

  const handleConnectWallet = async () => {
    const address = await connectWallet();
    setWalletAddress(address);
  };

  const handleStartGame = async () => {
    const matchId = await createMatch(selectedCharacter);
    const link = `${window.location.origin}/match/${matchId}`;
    setMatchLink(link);
  };

  const handleJoinGame = async () => {
    const matchId = prompt("Enter Match ID to Join:");
    await joinMatch(matchId, selectedCharacter);
  };

  return (
    <div className="lobby-container">
      <h2>🔥 Welcome to Meta Battle!</h2>

      <button onClick={handleConnectWallet}>
        {walletAddress ? `Connected: ${walletAddress}` : '🔗 Connect Wallet'}
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
