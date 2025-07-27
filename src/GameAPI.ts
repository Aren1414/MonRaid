// src/GameAPI.ts

import { ethers } from "ethers";
import { ABI } from "./contracts/GameABI"; 

const CONTRACT_ADDRESS = "0x51E5D4AeC7F9b3F75B7d9F2689436a1a63aDD2A9";

let provider: ethers.BrowserProvider;
let signer: ethers.Signer;
let contract: ethers.Contract;

async function connectContract() {
  if (!window.ethereum) throw new Error("Wallet provider not found");
  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
}

export async function createMatch() {
  await connectContract();
  const tx = await contract.createMatch();
  return await tx.wait();
}

export async function joinGame(characterId: number, isBot: boolean) {
  await connectContract();
  const tx = await contract.joinGame(characterId, isBot);
  return await tx.wait();
}

export async function startMatch(matchId: number) {
  await connectContract();
  const tx = await contract.startMatch(matchId);
  return await tx.wait();
}

export async function submitDamage(playerAddress: string, damage: number) {
  await connectContract();
  const tx = await contract.submitDamage(playerAddress, damage);
  return await tx.wait();
}

export async function finalizeScores(matchId: number) {
  await connectContract();
  const tx = await contract.finalizeScores(matchId);
  return await tx.wait();
}

export async function getPlayerScore(address: string): Promise<number> {
  await connectContract();
  const score = await contract.getPlayerScore(address);
  return score.toNumber();
}

export async function getAlivePlayers(matchId: number): Promise<string[]> {
  await connectContract();
  return await contract.getAlivePlayers(matchId);
}

export async function getCurrentMatchOf(address: string): Promise<number> {
  await connectContract();
  const matchId = await contract.currentMatchOf(address);
  return matchId.toNumber();
}
