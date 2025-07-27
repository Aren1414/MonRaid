export const ABI = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "matchId", "type": "uint256" }
    ],
    "name": "BossSpawned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "matchId", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "creator", "type": "address" }
    ],
    "name": "MatchCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "matchId", "type": "uint256" }
    ],
    "name": "MatchEnded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "matchId", "type": "uint256" }
    ],
    "name": "MatchStarted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "matchId", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "player", "type": "address" }
    ],
    "name": "PlayerEliminated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "matchId", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "player", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "characterId", "type": "uint256" }
    ],
    "name": "PlayerJoined",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "matchId", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "player", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "finalScore", "type": "uint256" }
    ],
    "name": "ScoreCalculated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "createMatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "name": "currentMatchOf",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "player", "type": "address" }
    ],
    "name": "eliminate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "matchId", "type": "uint256" }
    ],
    "name": "finalizeScores",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "matchId", "type": "uint256" }
    ],
    "name": "getAlivePlayers",
    "outputs": [
      { "internalType": "address[]", "name": "result", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "player", "type": "address" }
    ],
    "name": "getPlayerScore",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "characterId", "type": "uint256" },
      { "internalType": "bool", "name": "isBot", "type": "bool" }
    ],
    "name": "joinGame",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "matchCount",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "matches",
    "outputs": [
      { "internalType": "uint256", "name": "matchId", "type": "uint256" },
      { "internalType": "address", "name": "creator", "type": "address" },
      { "internalType": "enum BattleRoyaleGame.Phase", "name": "phase", "type": "uint8" },
      { "internalType": "uint256", "name": "startTime", "type": "uint256" },
      { "internalType": "uint256", "name": "playerCount", "type": "uint256" },
      { "internalType": "uint256", "name": "bossDamage", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "matchId", "type": "uint256" }
    ],
    "name": "startMatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "player", "type": "address" },
      { "internalType": "uint256", "name": "damageToBoss", "type": "uint256" }
    ],
    "name": "submitDamage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
