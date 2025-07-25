import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

const MONAD_RPC = "https://testnet-rpc.monad.xyz";
const CHAIN_ID = 10143;

export async function connectMetaMask() {
  if (!window.ethereum) throw new Error("MetaMask not found");

  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [{
      chainId: "0x279f",
      chainName: "Monad Testnet",
      rpcUrls: [MONAD_RPC],
      nativeCurrency: {
        name: "MON",
        symbol: "MON",
        decimals: 18
      },
      blockExplorerUrls: ["https://testnet.monadexplorer.com"]
    }]
  });

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}

export async function connectWalletConnect() {
  const wcProvider = new WalletConnectProvider({
    rpc: { [CHAIN_ID]: MONAD_RPC },
    chainId: CHAIN_ID,
  });

  await wcProvider.enable();
  const provider = new ethers.BrowserProvider(wcProvider as any);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}
