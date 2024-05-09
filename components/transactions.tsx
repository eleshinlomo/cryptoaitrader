import React from 'react'
import { AlertMessage } from './alert'

const Transactions = () => {
  return (
    <div>
    <div>
        <AlertMessage />
    </div>
    <div>
    <p className="text-center py-6">Transaction history</p>
    <p>No bot trading history found for the selected wallet address.</p>
    
    </div>
    </div>
  )
}

export default Transactions