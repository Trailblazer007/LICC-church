import React from 'react'
import Image from 'next/image'

const CoreValues = () => {
  return (
    <div 
        id="core-values"
        className='py-10 p-12 mx-auto flex gap-20'>
        <div>
            <h2>Core Values</h2>

            <p>Our core values are embedded in the acronym called LEAD</p>
        </div>

        <div className="grid gap-4 grid-cols-2 grid-rows-2">
            {/* Card 1 */}
            <div className='flex flex-col'>
                {/* Card image */}
                <div className=''>
                    <Image 
                        width={376}
                        height={222}
                        
                        src="/images/img-1.jpg"
                        alt="Love image"
                    />
                </div>
                {/* Card text */}
                <div>
                    <h3 className='text-center bg-white p-2'>Love</h3>
                </div>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col'>
                {/* Card image */}
                <div className=''>
                    <Image 
                        width={376}
                        height={222}
                        
                        src="/images/img-2.jpg"
                        alt="Love image"
                    />
                </div>
                {/* Card text */}
                <div>
                    <h3 className='text-center bg-white p-2'>Love</h3>
                </div>
            </div>


            {/* Card 3 */}
            <div className='flex flex-col'>
                {/* Card image */}
                <div className=''>
                    <Image 
                        width={376}
                        height={222}
                        
                        src="/images/img-4.jpg"
                        alt="Love image"
                    />
                </div>
                {/* Card text */}
                <div>
                    <h3 className='text-center bg-white p-2'>Love</h3>
                </div>
            </div>

            {/* Card 4 */}
            <div className='flex flex-col'>
                {/* Card image */}
                <div className=''>
                    <Image 
                        width={376}
                        height={222}
                        
                        src="/images/img-4.jpg"
                        alt="Love image"
                    />
                </div>
                {/* Card text */}
                <div>
                    <h3 className='text-center bg-white p-2'>Love</h3>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CoreValues