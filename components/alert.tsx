import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export const AlertMessage =()=> {
  return (
    <Alert className="bg-black text-white mt-3">
      <Terminal className="h-4 w-4" />
      <AlertTitle className="text-red-500 font-extrabold">IMPORTANT!</AlertTitle>
      <AlertDescription>
        This is an experimental project. Automated trading is extremely dangerous. 
        You may lose all your money.
      </AlertDescription>
    </Alert>
  )
}
