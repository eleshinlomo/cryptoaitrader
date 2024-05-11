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
  
  const AddFund = ()=> {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="font-extrabold bg-green-700 text-white text-xl">
            Add Fund</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Oooops!</AlertDialogTitle>
            <AlertDialogDescription>
              Funding is currently not available.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-black">Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  export default AddFund
  