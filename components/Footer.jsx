import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer p-16 text-blue">
        <div class="newsletter flex items-center justify-center space-x-6 mb-6">
          <div class="question">
            <h4>Want to get updates from us?</h4>
          </div>

          <div class="email">
            <input className= "p-4" type="text" placeholder="Enter your email" />
            <button className="" type="button" id="email-btn">Send</button>
          </div>
        </div>

        <div class="reaching_out flex justify-around py-6">
          <div class="brand">
              <div class="brand_logo">
                  <Image
                    src="/assets/LICC_logo_2.png" 
                    alt="LICC logo"
                    width={132}
                    height={86}
                  >

                  </Image>
              </div>
              <div class="reaching_out_text">
                  <h4 className="text-lightBlue ">Raising Godly people</h4>
              </div>
          </div>

          <div className="about ro_col">
              <h4>About</h4>
              <ul>
                <Link href="">
                  <li className="sub_about">Senior pastor</li>
                </Link>
                <Link href="">
                  <li className="sub_about">Pastors</li>
                </Link>
                <Link href="">
                  <li className="sub_about">Upcoming Events</li>
                </Link>
                <Link href="">
                  <li className="sub_about">Vision and Mission</li>
                </Link>
                <Link href="">
                  <li className="sub_about">Statements of Faith</li>
                </Link>
                <Link href="">
                  <li className="sub_about">Testimonies</li>
                </Link>

              </ul>
          </div>

          <div className="next_step ro_col">
              <h4>Next Step</h4>
              <ul>
                <Link href="">
                  <li className="sub_next_step">Starting point</li>
                </Link>
                <Link href="">
                  <li className="sub_next_step">How to receive Jesus</li>
                </Link>
                <Link href="">
                  <li className="sub_next_step">Sonship</li>
                </Link>
                <Link href="">
                  <li className="sub_next_step">Plan your visit</li>
                </Link>
                <Link href="">
                  <li className="sub_next_step">Discipleship</li>
                </Link>

              </ul>
          </div>

          <div class="connect ro_col">
              <h4>Connect</h4>
              <ul>
                <Link href="">
                  <li className="sub_connect">Visionary men</li>
                </Link>
                <Link href="">
                  <li className="sub_connect">Support groups</li>
                </Link>
                <Link href="">
                  <li className="sub_connect">Kings daughter</li>
                </Link>
                <Link href="">
                  <li className="sub_connect">Singles fellowship</li>
                </Link>
                <Link href="">
                  <li className="sub_connect">Statements of faith</li>
                </Link>
                <Link href="">
                  <li className="sub_connect">Impact rangers</li>
                </Link>
                <Link href="">
                  <li className="sub_connect">Prayer walls</li>
                </Link>
                
              </ul>
          </div>

          <div class="follow_us ro_col">
            <h4>Follow Us</h4>
            <div class="sm_container flex items-center">
              <Link
                href=""
              >
                <div className='instagram'>
                  <Image
                    src="/assets/social_media/instagram.svg"
                    height={30}
                    width={31}
                    alt="instagram icon"
                  >

                  </Image>
                </div>

              </Link>
              <Link
                href=""
              >
                <div className='instagram'>
                  <Image
                    src="/assets/social_media/twitter.svg"
                    height={43}
                    width={40}
                    alt="instagram icon"
                  >

                  </Image>
                </div>

              </Link>
              <Link
                href=""
              >
                <div className='instagram'>
                  <Image
                    src="/assets/social_media/youtube.svg"
                    height={31}
                    width={31}
                    alt="instagram icon"
                  >

                  </Image>
                </div>

              </Link>
              <Link
                href=""
              >
                <div className='instagram'>
                  <Image
                    src="/assets/social_media/tiktok.svg"
                    height={30}
                    width={31}
                    alt="instagram icon"
                  >

                  </Image>
                </div>

              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer