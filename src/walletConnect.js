import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

const MONAD_TESTNET_RPC = "https://testnet-rpc.monad.xyz";
const MONAD_CHAIN_ID = 10143;

export async function connectMetaMask() {
  if (!window.ethereum) return;

  await window.ethereum.request({ method: "wallet_addEthereumChain", params: [{
    chainId: "0x279f",
    chainName: "Monad Testnet",
    nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
    rpcUrls: [MONAD_TESTNET_RPC],
    blockExplorerUrls: ["https://testnet.monadexplorer.com"]
  }] });

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}

export async function connectWalletConnect() {
  const wcProvider = new WalletConnectProvider({
    rpc: { [MONAD_CHAIN_ID]: MONAD_TESTNET_RPC },
    chainId: MONAD_CHAIN_ID
  });

  await wcProvider.enable();
  const provider = new ethers.BrowserProvider(wcProvider);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}
