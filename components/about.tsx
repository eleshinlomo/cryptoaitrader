import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

export const About = () => {
  return (
    <div>

<div className='mt-12  flex flex-col flex-wrap 
                        flex-1 w-auto gap-4 px-6'>

<div className=' md:flex flex-1 gap-2 pb-4'>
<div className="p-6">
  <div className='flex gap-3'>
  <h1 className="text-3xl font-bold mb-4">About page</h1>
  <a href='/'>
  <Button>Home</Button>
  </a>
  </div>
  <p className="text-lg mb-4">
  The Crypto AI Trader project represents an innovative experiment focused 
  on leveraging historical training data to forecast future market prices. 
  Positioned as one of the key initiatives within MyAfros, 
  this endeavor remains in its nascent stages, undergoing continuous 
  development and refinement.


  </p>
  <p className="text-lg mb-4">
  With a core objective of harnessing machine learning techniques 
  to analyze market trends, the Crypto AI Trader project exemplifies my 
  commitment to pushing the boundaries of technological exploration and 
  pioneering new avenues in predictive analytics.
  </p>
</div>
                            
    <div className='relative w-full  h-72'>
    <Image src='/images/boxes.png' alt='a man&apos;s picture' fill />
    </div>
    </div>

                        </div>
    </div>
  )
}

