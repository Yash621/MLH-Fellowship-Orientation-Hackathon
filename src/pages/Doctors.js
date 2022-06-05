/* eslint-disable no-unused-vars */
import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react'
import AliyahImg from "../assets/aliyah.jpg"
import MiaImg from "../assets/mia.jpg"
import RobertImg from "../assets/robert.jpg"
import { Link } from "react-router-dom"
import {Program, Provider, web3, BN} from '@project-serum/anchor';
import idl from "../idl.json";
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
    LedgerWalletAdapter,
    SolletWalletAdapter,
    SolletExtensionWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useAnchorWallet } from '@solana/wallet-adapter-react';
import { EnterChatContext } from "../utils/createContext";
require('@solana/wallet-adapter-react-ui/styles.css');

const Context = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
            new SolletWalletAdapter({ network }),
            new SolletExtensionWalletAdapter({ network }),
        ],
        [network]
    );
      
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default function Doctors() {
    const [setEnterChat, enterChat] = useState([false, false, false]);
    return (
        <div>
            <div className=" grid place-items-center py-5">
                <h1 className="text-5xl font-bold text-white">Doctors</h1>
                <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
                <Context> <WalletMultiButton/></Context>
            </div>

            <div className="flex flex-wrap flex-col-3 justify-around w-full px-16 py-8 gap-4">

                <div className=" bg-gray-200 w-80 h-[32rem] rounded-xl p-6 space-y-4">
                    <div>
                        <img className="w-full h-64 rounded-md transition hover:bg-cyan-300" src={AliyahImg} alt="" />
                    </div>
                    <div id="description" className="space-y-4">
                        <h2 className="font-semibold text-xl">
                            Aliyah
                        </h2>
                        <p className="text-slate-500 text-sm select-none">  </p>
                        <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                            <span id="price" className="flex justify-between items-center space-x-2">
                                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/solana-colored.svg" width="25" height="25" alt="Solana" />
                                0.041 SOL
                            </span>
                            <span className="text-slate-500 flex justify-between items-center select-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd" />
                                </svg>
                                Mon-Fri
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            {/* <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white' onClick={() => {
                                bookAppointment()
                            }}>Book Appointment</button> */}
                            <EnterChatContext.Provider value={[setEnterChat, enterChat]}>
                            <Context>
                           <Content />
                            </Context>
                            </EnterChatContext.Provider>
                            {(<Link to="/chat/robert">
                                <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white'>Enter chatroom</button>
                            </Link>)}
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-200 w-80 h-[32rem] rounded-xl p-6 space-y-4">
                    <div>
                        <img className="w-full h-64 rounded-md transition hover:bg-cyan-300" src={MiaImg} alt="" />
                    </div>
                    <div id="description" className="space-y-4">
                        <h2 className="font-semibold text-xl">
                            Mia
                        </h2>
                        <p className="text-slate-500 text-sm select-none">  </p>
                        <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                            <span id="price" className="flex justify-between items-center space-x-2">
                                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/solana-colored.svg" width="25" height="30" alt="Solana" />
                                0.056 SOL
                            </span>
                            <span className="text-slate-500 flex justify-between items-center select-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd" />
                                </svg>
                                Wed-Fri
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                        <Context>
                           <Content />
                            </Context>
                            {(<Link to="/chat/robert">
                                <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white'>Enter chatroom</button>
                            </Link>)}
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-200 w-80 h-[32rem] rounded-xl p-6 space-y-4">
                    <div>
                        <img className="w-full h-64 rounded-md transition hover:bg-cyan-300" src={RobertImg} alt="" />
                    </div>
                    <div id="description" className="space-y-4">
                        <h2 className="font-semibold text-xl">
                            Robert
                        </h2>
                        <p className="text-slate-500 text-sm select-none">  </p>
                        <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                            <span id="price" className="flex justify-between items-center space-x-2">
                                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/solana-colored.svg" width="25" height="25" alt="Solana" />
                                0.06 SOL
                            </span>
                            <span className="text-slate-500 flex justify-between items-center select-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                        clip-rule="evenodd" />
                                </svg>
                                Wed-Fri
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                        <Context>
                           <Content />
                            </Context>
                            {(<Link to="/chat/robert">
                                <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white'>Enter chatroom</button>
                            </Link>)}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Content = ({index}) => {
    const wallet = useAnchorWallet();
    const {setEnterChat} = useContext(EnterChatContext);
    const getProvider = () => {
        if (!wallet) {
            console.log(wallet)
            return null;
        }
        const network = "http://127.0.0.1:8899"
        const connection = new Connection(network, "processed");
        const provider = new Provider(connection, wallet, { "preflightCommitment": "processed" });
        return provider;
    } 
    async function createCounter() {
        console.log("Creating Counter");
        const provider = getProvider();
        const baseAccount = web3.Keypair.generate();
        if (!provider) {
            console.log("No Provider")
            return;
        }
        const a = JSON.stringify(idl);
        const b = JSON.parse(a);
        const program = new Program(b, idl.metadata.address, provider);
        console.log(provider);
        try {
            await program.rpc.initialize(new BN(100),{
                accounts: {
                    myAccount: baseAccount.publicKey,
                    user: provider.wallet.publicKey,
                    systemProgram: web3.SystemProgram.programId,
                },
                signers: [baseAccount]
            });
            const account = await program.account.myAccount.fetch(baseAccount.publicKey);
            setEnterChat([true,false,false]);
            console.log(account,account);
        } catch (err) {
            console.error(err);
            setEnterChat([true,false,false]);
        }
    }
    return (
        <div >
        <button className='bg-purple-900 py-2 px-8 rounded-md text-md font-semibold text-white' onClick={createCounter}>Book Appointment</button>
        {/* <div className='flex justify-center py-2'><WalletMultiButton /></div> */}
            {/* <button className='bg-secondary py-2 px-8 rounded-md text-md font-semibold text-white'>Enter chatroom</button> */}
        </div>
      )
}