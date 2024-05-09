'use client'
declare var window: any

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Web3 from "web3";
import SelectComponent from "@/components/select";
import AddTokenContract from "@/components/addtokencontract";
import Transactions from "@/components/transactions";
import { newContractState } from "@/components/addtokencontract";
import AddFund from "@/components/addfund";
import {Withdraw} from "@/components/withdraw";
import Disclaimer from "@/components/disclaimer";
import { Separator } from "@/components/ui/separator";
import { contractAddressExists } from "@/components/addtokencontract";
import Footer from "@/components/footer";



export default function Home() {


  const [web3, setWeb3] = useState<any>()
  const [walletAddress, setWalletAddress] = useState<string | null>()
  const [contractAddress, setContractAddress] = useState<any>()
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false)
  const [isTokenContract, setIsTokenContract] = useState<boolean | any>(false)
  const [isDisclaimer, setIsDisclaimer] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState('')

  const connectWallet = async ()=>{
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
    await window.ethereum.request({method: 'eth_requestAccounts'})
    const web3 = new Web3(window.ethereum)
    setWeb3(web3)
    const accounts = await web3.eth.getAccounts()
    setIsWalletConnected(true)
    localStorage.setItem('isconnected', 'true')
    const activeWalletAddress = accounts[0]
    localStorage.setItem('walletaddress', activeWalletAddress)
    setWalletAddress(activeWalletAddress)
      
    }else{
      console.log('Metamask not detected')
      setErrorMessage('Metamask not detected')
    }

  }

  useEffect(()=>{
    const connectionStatus = localStorage.getItem('isconnected')
    if (connectionStatus === 'true'){
      setIsWalletConnected(true)
      if (typeof window !== 'undefined'){
      setWalletAddress(localStorage.getItem('walletaddress'))
      }
    }
  }, [])

  useEffect(()=>{
    contractAddressExists(setIsTokenContract)
    if (typeof window !== 'undefined'){
    const contractpresent: any = setContractAddress(localStorage.getItem('tokencontract'))
    if(contractpresent !== 'undefined' && contractpresent !== null){
      setIsTokenContract(true)
    }
    }
  }, [isTokenContract, setIsTokenContract])

  // Disconnect Function
  const disconnect = async ()=>{
    if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
      setWeb3(null)
      setWalletAddress(null)
      setIsWalletConnected(false)
      localStorage.removeItem('walletaddress')
      localStorage.removeItem('isconnected')
    }
  }
  
  // Remove Contract Function
  const removeContract = ()=>{
    if (typeof window !== 'undefined'){
    localStorage.removeItem('tokencontract')
    localStorage.removeItem('istokencontract')
    setContractAddress(null)
    setIsTokenContract(false)
    }

  }

  

  return (
  <div className="overflow-hidden">
    {/* Header */}
    <div className="flex justify-between py-4 px-2 
    bg-gradient-to-bl from-gray-500 via-gray-800 to-black/80 text-white shadow-2xl">
      <p className="text-2xl font-extrabold">Crypto AI Trading Bot</p>
      <p>{errorMessage}</p>
      {isWalletConnected ?
      <Button onClick={disconnect} className="text-red-500">
        Disconnect Wallet
      </Button>:
      <Button className="bg-green-800 rounded-2xl text-white hover:bg-blue-500"
      onClick={connectWallet}
      >
        Connect Wallet
        
        </Button>
     }
    </div>
    
    
    <div className="grid grid-row-flow md:grid-cols-3 gap-3 pt-3 px-2 ">
      {/* Left side */}
      <div className="flex flex-col gap-8   px-2 py-2 shadow-2xl">
      <div>
      <p className="font-extrabold text-lg mb-4">Fund Trading Account by sending 0.01 Ether</p>
      <div className="flex gap-3">
      <AddFund />
      <Withdraw setErrorMessage={setErrorMessage} isWalletConnected={isWalletConnected} />
      </div>
      <p className="mt-6 text-xl font-extrabold">Available Funds for Bot Trading</p>
       <p className="text-2xl">${0}</p>
      </div>

      <div>
      <p className="font-extrabold text-lg mb-4">BOT TRADING CONTROLLER</p>
      <div className="flex gap-2">
      <Button className="rounded-2xl bg-green-700 text-lg">Start trading</Button>
      <Button className="rounded-2xl bg-red-700 text-lg">Stop trading</Button>
      </div>
      </div>
      </div>

     

      {/* Center */}
      <div className="flex flex-col items-center justif-center shadow-2xl px-2">
      <AddTokenContract contractAddress = {contractAddress} />
      <Transactions />
      </div>
      
      {/* Right Side */}
      <div className="flex flex-col gap-6    px-2 py-2 shadow-2xl">
      <div>
      <p className="font-extrabold text-2xl mb-3">DETAILS </p>
      <p className="font-extrabold">Token Contract Address for bot trading</p>
      <div className="mb-4">
      {/* Remove Contract */}
      {contractAddress?
      <div>
      <p className="text-sm bg-black text-white rounded-2xl px-2">{contractAddress}</p>
      <button className="text-sm bg-red-700 px-2 text-white rounded-2xl"
      onClick={removeContract}
      >
        Remove contract</button></div> : <p className="text-md text-red-500 font-extrabold">No contract address added</p>
       }
      
      
      </div>
      <p className="font-extrabold">Your wallet address</p>
      {walletAddress ?
      <p className="text-sm bg-black rounded-2xl text-white px-2">{walletAddress}</p> : 
      <p className="text-md text-red-500 font-extrabold">{'No wallet connected'}</p>
      }
      </div>
      <div>
      <p className="font-extrabold text-xl">Total gas cost</p>
      <p>0 Ether</p>

      <p className="font-extrabold text-xl">Total Gain</p>
      <p>0 Ether</p>

      <p className="font-extrabold text-xl">Total Loss</p>
      <p>0 Ether</p>
      </div>

      </div>

    </div>

     <Footer />
  </div>
  );
}
