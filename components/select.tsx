'use client'
import {useState, useEffect} from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import AddTokenContract from "./addtokencontract"

const SelectComponent = ()=>{

    const [cryptocurrencies, setCryptocurrencies] = useState<Array<string | null>>([])
    const [selectedCrypto, setSelectedCrypto] = useState<any | null>(null)

    const items = [
        {   
            id: 1,
            cryptoname: 'BTC',
            price: '60,000'
        },
        {   
            id: 2,
            cryptoname: 'Ethereum',
            price: '2,500'
        }
    ]

    const handleOnChange = (cryptoid: number)=>{
        items.map((crypto)=>{
        if (cryptoid === crypto.id)
        setSelectedCrypto(crypto.cryptoname)
        })
    }
  return (
    <div className="flex flex-col items-center">
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Crypto" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Crypto</SelectLabel>
          { items.map((crypto, index)=>
          
          <SelectItem value={selectedCrypto} key={index}>
           {crypto.cryptoname}
          </SelectItem>
        )}
          
        </SelectGroup>
      </SelectContent>
    </Select>

   

    
    </div>
  )
}

export default SelectComponent
