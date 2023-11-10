import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className="flex space-x-6 pt-3" >
        <li><Link className="" href="#">Home</Link></li>
        <li><Link className="" href="./about-us.html">About Us</Link></li>
        <li><Link className="" href="./contact.html">Contact</Link></li>
        <li><Link className="" href="./branch-network.html">Branch Network</Link></li>
      </ul>
    </div>
  )
}

export default Navbar