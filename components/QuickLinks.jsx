import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const QuickLinks = () => {
  return (
    <div className='flex justify-around items-center space-x-6 my-10 font-bold text-orange text-xl'>
    {/* Listen to last messages */}
      <div>
        <Link href=''>
            <div className="msg_text">
              <h3>Listen to our last message</h3>
            </div>
        </Link>
      </div>


    {/* Live stream */}
      <div>
        <Link href="">
          <div className="live_stream flex items-center gap-2 p-2 border-2 border-orange rounded-md">
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
        </Link>
      </div>

      {/* Service time */}
        <div className="time">
          <div className="time_container gap-4 flex items-end justify-between">
            <div class="church_logo">
              <Image
                width={50}
                height={50}
                src="/assets/bx_church.svg" 
                alt="church icon"
              />

            </div>

            <div className="time_text text-blue">
                <div className="time_topic">
                  <h3>SERVICE TIME</h3>
                </div>

                <div className="time_detail">
                  <h4>Join us on Sundays at 9:00am</h4>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default QuickLinks