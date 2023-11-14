import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <div className='flex justify-center items-center gap-10 text-blue mb-24'>
        <div className="church_logo_holder">
            <Image
                className="church_founder"
                width={536}
                height={507}
                src="/images/pastor_and_wife.png" 
                alt="founders image"
            />

        </div>

        <div className="speech_side w-96">
            <h1 className='text-4xl font-extrabold pb-5'>
                Welcome to Church
            </h1>
            <p className='text-lg'>
            &quot;Welcome to the digital embrace of <span class="yellow">Living Impact Christian Centre!</span> 
                Here, we&apos;re delighted to have you. As you explore, our heartfelt hope is that your journey
                with God finds new inspiration. Your presence enriches us.&quot;
            </p>
        </div>
    </div>
  )
}

export default Welcome