import React from 'react'
import Image from 'next/image'

const MissionVission = () => {
  return (
    <div>
        <div className="mv_case mx-auto container flex space-x-9 mt-8 p-6 max-w-2xl">
            <div className="vision_card ">
                <div className="heading vision">
                    <h2>Vision</h2>
                </div>
                <div className="text max-w-xl">
                    <p>Raising Godly people to impact their world, through the living word</p>
                </div>
            </div>

            <div className="mission_card ">
                <div className="heading mission">
                    <h2>Mission</h2>
                </div>
                <div className="text max-w-xl">
                    <p>Discover, inspire, equip, and send you forth to impact your world</p>
                </div>
            </div>
        </div>

        {/* Tertiary button */}
        <div className='text-orange font-bold text-center mb-6'>Read More</div>

        {/* Engagement section */}
        <div className='flex space-x-6 max-w-lg justify-center mx-auto mt-10 mb-10'>
            {/* Prayer request */}
            <div>
                <Image 
                    width={150}
                    height={100}
                    src="/images/img-1.jpg"
                    alt="Prayer request image"
                />
                <h3>Do you have a prayer request?</h3>
                <p>Let's pray</p>
            </div>

            {/* Blog */}
            <div>
                <Image 
                    width={150}
                    height={100}
                    src="/images/img-1.jpg"
                    alt="Blog post image"
                />
                <h3>Blog post</h3>
                <p>Visit our blog</p>
            </div>
        </div>
    </div>
  )
}

export default MissionVission