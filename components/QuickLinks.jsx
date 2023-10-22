import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const QuickLinks = () => {
  return (
    <div className='flex justify-between space-x-6 mb-10'>
    {/* Listen to last messages */}
      <div>
        <Link href=''>
        <div class="msg_logo">
          <Image 
            width={49}
            height={49}
            src="/assets/zondicons_play-outline.png" 
            alt="play icon for last messages" 
          />

          <div class="msg_text">
            <h3>Listen to our last message</h3>
          </div>
        </div>
        </Link>
      </div>


    {/* Live stream */}
      <div>
        <div className="live_stream flex">
          <div className="msg_logo">
            <Image
              width={20}
              height={21}
              src="/assets/zondicons_play-outline_1.png"
              alt="play icon for last messages"
            />
          </div>

          <div className="msg_text">
            <h3>Live Stream</h3>
          </div>
        </div>
      </div>

      {/* Service time */}
        <div class="time">
          <div class="time_container container flex justify-between">
            <div class="church_logo">
              <Image
                width={50}
                height={50}
                src="/assets/bx_church.svg" 
                alt="church icon"
              />

            </div>

            <div class="time_text">
                <div class="time_topic">
                  <h3>SERVICE TIME</h3>
                </div>

                <div class="time_detail">
                  <h4>Join us on Sundays at 9:00am</h4>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default QuickLinks