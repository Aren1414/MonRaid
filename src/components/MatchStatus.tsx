import React, { useEffect, useState } from 'react';
import { getMatchStatus, startMatch } from '../GameAPI';

interface Player {
  address: string;
  isBot: boolean;
}

interface MatchStatusProps {
  matchId: string;
  walletAddress: string;
}

const MatchStatus: React.FC<MatchStatusProps> = ({ matchId, walletAddress }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatchStatus = async () => {
      try {
        const matchData = await getMatchStatus(matchId);
        setPlayers(matchData.players);
        setIsOwner(matchData.owner === walletAddress);
        setLoading(false);
      } catch (error) {
        console.error('❌ Failed to fetch match status:', error);
        alert('⚠️ Could not load match status.');
      }
    };

    fetchMatchStatus();

    const interval = setInterval(fetchMatchStatus, 3000); // Refresh every 3 sec
    return () => clearInterval(interval);
  }, [matchId, walletAddress]);

  const handleStartGame = async () => {
    try {
      await startMatch(matchId);
    } catch (error) {
      console.error('❌ Failed to start match:', error);
      alert('⚠️ Could not start match.');
    }
  };

  return (
    <div className="match-status-container">
      <h2>🎯 Match Status</h2>
      <p>Match ID: <code>{matchId}</code></p>

      {loading ? (
        <p>⏳ Loading players...</p>
      ) : (
        <ul className="player-list">
          {players.map((player, index) => (
            <li key={index}>
              {player.isBot ? '🤖 BOT' : `🧍 ${player.address}`}
              {player.address === walletAddress && ' ⬅️ You'}
            </li>
          ))}
        </ul>
      )}

      <p>👥 Players: {players.length}/2</p>

      {isOwner && players.length === 2 && (
        <button onClick={handleStartGame}>🔥 Start Battle</button>
      )}
    </div>
  );
};

export default MatchStatus;
