import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='flex justify-between px-14 my-4  '>
      {/* w-10 md:w-16 lg:w-32 xl:w-44 2xl:w-52 */}
        {/* Logo Image */}
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
        <div className="flex justify-center align-middle">
            <p className='text-blue 
                        font-bold bg-orange p-4 rounded-md'>Donate
            </p>
            
        </div>

        

        

    </div>
  )
}

export default Header