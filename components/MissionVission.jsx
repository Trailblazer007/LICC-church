import React from 'react'
import Image from 'next/image'

const MissionVission = () => {
  return (
    <div>
        <div className="mv_case text-blue mx-auto flex justify-center gap-10 mt-8 p-6 max-w-2xl">
            <div className="vision_card ">
                <div className="heading vision font-bold text-4xl mb-6 ">
                    <h2>Vision</h2>
                </div>
                <div className="text-lg max-w-xl">
                    <p>Raising Godly people to impact their world, through the living word</p>
                </div>
            </div>

            <div className="mission_card ">
                <div className="heading mission font-bold text-4xl mb-6">
                    <h2>Mission</h2>
                </div>
                <div className="text-lg max-w-xl">
                    <p>Discover, inspire, equip, and send you forth to impact your world</p>
                </div>
            </div>
        </div>

        {/* Tertiary button */}
        <div className='text-orange font-bold text-xl text-center mt-6 mb-6'>Read More</div>

        {/* Engagement section */}
        <div className='flex gap-10 max-w-4xl justify-center mx-auto mt-10 mb-10'>
            {/* Prayer request */}
            <div className='rounded-2xl shadow-xl'>
                <Image 
                    className='rounded-t-2xl'
                    width={5090}
                    height={3393}
                    src="/images/img-1.jpg"
                    alt="Prayer request image"
                />
                <div className='p-3 text-center '>
                    <h3 className='text-blue text-2xl mb-6'>Do you have a prayer request?</h3>
                    <p className='text-sm text-orange '>Let's pray</p>
                </div>
            </div>

            {/* Blog */}
            <div className='rounded-2xl shadow-xl'>
                <Image 
                    className='rounded-t-2xl'
                    width={5090}
                    height={3393}
                    src="/images/img-1.jpg"
                    alt="Blog post image"
                />
                <div className='p-3 text-center'>
                    <h3 className='text-blue text-2xl mb-6'>Blog post</h3>
                    <p className='text-sm text-orange '>Visit our blog</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MissionVission