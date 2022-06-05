import { Provider } from '@project-serum/anchor';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';

const getProvider = () => {
    const wallet = useAnchorWallet();
    if (!wallet) {
        return null;
    }
    const network = "http://127.0.0.1:8899"
    const connection = new Connection(network, "processed");
    const provider = new Provider(connection, wallet, { preflightCommitment: "processed" });
        
    return provider;
} 