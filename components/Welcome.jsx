import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <div className='flex'>
        <div class="church_logo">
            <Image
            width={536}
            height={507}
            src="/images/pastor_and_wife.png" 
            alt="founders' image"
            />

        </div>

        <div class="speech_side">
            <h1>
                Welcome to Church
            </h1>
            <p>
                "Welcome to the digital embrace of <span class="yellow">Living Impact Christian Centre!</span>
                Here, we're delighted to have you. As you explore, our heartfelt hope is that your journey
                with God finds new inspiration. Your presence enriches us."
            </p>
        </div>
    </div>
  )
}

export default Welcome