import {useState, useEffect} from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import Image from 'next/image'
  import { useRouter } from 'next/navigation'

  // Checking if token contract address exists
  export const contractAddressExists = (setIsTokenContract: any, )=>{
    const getIsTokenContract = localStorage.getItem('istokencontract')
    if(getIsTokenContract === 'true'){
    setIsTokenContract(true)
    }
}

  export const newContractState = ()=>{
    localStorage.setItem('tokencontract', 'None')
  }
  const AddTokenContract = (ContractAddress: any)=> {
    const [tokenContractAddress, setTokenContractAddress] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isTokenContract, setIsTokenContract] = useState<boolean>(false)

    const router = useRouter()
    
    
    useEffect(()=>{
        contractAddressExists(setIsTokenContract)  
    }, [isTokenContract, setIsTokenContract])
   
    // Save contract address
    const addTokenContract = (e: any)=>{
        e.preventDefault()
        if (tokenContractAddress === ''){
            setErrorMessage('Token Contract Address cannot be blank')
        }else{
            localStorage.setItem('tokencontract', tokenContractAddress)
            localStorage.setItem('istokencontract', 'true')
            setTokenContractAddress('')
            setIsTokenContract(true) 
        }
      }

       // Change contract address
    const changeTokenContract = (e: any)=>{
        const contract: any = localStorage.getItem('tokencontract')
        setIsTokenContract(contract)
        e.preventDefault()
        if (tokenContractAddress === ''){
            setErrorMessage('Token Contract Address cannot be blank')
        }else{
           addTokenContract(e)
        }
            
        }
      

   
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {localStorage.getItem('istokencontract') === 'true' ?<Button variant="outline" 
          className="bg-red-700 rounded-2xl text-white">
            Change Token Contract</Button>:
            <Button variant="outline" className="bg-green-700 rounded-3xl text-white">
            Add Token Contract</Button>
             }
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
                <p className='text-gray-700'>Image shows example of a 
                token contract address on <a href='https://etherscan.io' className='text-blue-700'>Etherscan.io</a></p>
                <div className='relative h-24 w-full'>
                <Image src='/ether_contract.png' alt='crypto contract address example' fill />
                </div>
                {errorMessage? <p className='text-red-500'>{errorMessage}</p> : 'Paste Token Contract Address here'}</AlertDialogTitle>
            <AlertDialogDescription>
              <Input value={tokenContractAddress} onChange={(e)=>setTokenContractAddress(e.target.value)} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
            {isTokenContract === true? <Button
            onClick={(e)=>changeTokenContract(e)}
            >Submit</Button> : <Button
            onClick={(e)=>addTokenContract(e)}
            >Submit</Button> }

            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  export default AddTokenContract
  