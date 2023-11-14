import React from 'react'
import Image from 'next/image'


const CoreValuesCard = ({card}) => {
  return (
    <div className='flex flex-col rounded-2xl overflow-hidden'>
                {/* Card image */}
                <div className=''>
                    <Image 
                        width={card.width}
                        height={card.height}
                        
                        src={card.src}
                        alt={card.alt}
                    />
                </div>
                {/* Card text */}
                <div>
                    <h3 className='text-center text-2xl bg-white p-2 rounded-b-2xl'>{card.title}</h3>
                </div>
            </div>
  )
}

export default CoreValuesCard