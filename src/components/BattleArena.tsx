import React, { useEffect, useState } from 'react';
import { getAlivePlayers } from '../GameAPI';

interface BattleArenaProps {
  walletAddress: string;
  matchId: string;
}

const BattleArena: React.FC<BattleArenaProps> = ({ walletAddress, matchId }) => {
  const [players, setPlayers] = useState<string[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const aliveList = await getAlivePlayers(matchId);
        const filledList = [...aliveList];

        while (filledList.length < 10) {
          filledList.push(`BOT_${filledList.length}`);
        }

        setPlayers(filledList);
      } catch (error) {
        console.error('Failed to fetch alive players:', error);
      }
    };

    fetchPlayers();

    const interval = setInterval(fetchPlayers, 5000);
    return () => clearInterval(interval);
  }, [matchId]);

  return (
    <div className="battle-arena">
      <h2>🧨 Battle Arena</h2>

      <div className="character-grid">
        {players.map((player, index) => (
          <div key={index} className="character-card">
            {player === walletAddress && <div className="green-arrow">⬆️</div>}
            <img
              src="/assets/warrior.gif"
              alt="Warrior"
              style={{ width: '80px', height: '80px' }}
            />
            <p>{player.startsWith('BOT_') ? '🤖 BOT' : player === walletAddress ? '🧍 You' : '🧍 Player'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattleArena;
