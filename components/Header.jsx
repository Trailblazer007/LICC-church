import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='flex justify-between items-center px-14 mb-4 text-blue font-bold'>
        <div>
            <Image
            src="/assets/LICC_logo_1.png"
            width={96}
            height={68}
            alt="LICC Logo"

            />
        </div>

        <Navbar/>

        {/* Donate button */}
        <div className="flex justify-center items-center">
            <p className='text-blue 
                        font-bold bg-orange p-3 px-8 rounded-xl hover:cursor-pointer'>Donate
            </p>
            
        </div>

        

        

    </div>
  )
}

export default Header