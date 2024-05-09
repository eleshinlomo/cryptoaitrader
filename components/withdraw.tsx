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

  interface WithdrawProps {
    setErrorMessage: any,
    isWalletConnected: any
  }
  let errorMessage = ''
  export const Withdraw = ({setErrorMessage, isWalletConnected}: WithdrawProps)=> {
    const handleWidthdraw = ()=>{
      if(isWalletConnected === false){
        errorMessage = 'You need to connect your wallet before trading'
        setErrorMessage = errorMessage
      }

      setErrorMessage = 'AI trading is currently not available'
    }
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" 
          className="font-extrabold bg-green-700 text-white text-xl"
          onClick={handleWidthdraw}
          >
            Withdraw</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Oooops!</AlertDialogTitle>
            <AlertDialogDescription>
            Withdrawal is currently not available.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
  