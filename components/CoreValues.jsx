import React from 'react'
import Image from 'next/image'
import CoreValuesCard from './CoreValuesCard'

const array = [
    {
        width: "376",
        height:"222",
        src: "/images/img-1.jpg",
        alt:"Love image",
        title: "Love"
    },
    {
        width: "376",
        height:"222",
        src: "/images/img-1.jpg",
        alt:"Love image",
        title: "Excellence"
    },
    {
        width: "376",
        height:"222",
        src: "/images/img-1.jpg",
        alt:"Love image",
        title: "Accountability"
    },{
        width: "376",
        height:"222",
        src: "/images/img-1.jpg",
        alt:"Love image",
        title: "Discipleship"
    }
]

const CoreValues = () => {
  return (
    <div 
        id="core-values"
        className='py-10 p-12 justify-center flex gap-20 text-blue'>
        <div className="w-80 my-auto">
            <h2 className="text-4xl font-bold mb-8">Core Values</h2>

            <p className="text-lg">Our core values are embedded in the acronym called LEAD</p>
        </div>

        <div className="grid gap-10 grid-cols-2 grid-rows-2">
            {
                array.map((card)=> {
                    return <CoreValuesCard
                        card={card}
                        key=''
                    />
                })
            }

        </div>
    </div>
  )
}

export default CoreValues