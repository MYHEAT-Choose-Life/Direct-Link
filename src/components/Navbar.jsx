import React from 'react'
import Button from './Button'
import logo from '../assets/image.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-6'>
            <div className='flex items-center font-bold text-2xl'>
                <img src={logo} className='' />
                <h2>Direct <span className='text-green-400 italic'>Link</span> Connect</h2>
            </div>
            <div className='space-x-8 text-sm'>
                <a href='#' className="
    relative
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:h-0.5
    after:w-0
    after:bg-green-500
    after:transition-all
    after:duration-300
    hover:after:w-full
  ">Home</a>
                <a href='#' className="
    relative
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:h-0.5
    after:w-0
    after:bg-green-500
    after:transition-all
    after:duration-300
    hover:after:w-full
  ">Why Choose Us</a>
                <a href='#' className="
    relative
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:h-0.5
    after:w-0
    after:bg-green-500
    after:transition-all
    after:duration-300
    hover:after:w-full
  ">Services</a>
                <a href='#' className="
    relative
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:h-0.5
    after:w-0
    after:bg-green-500
    after:transition-all
    after:duration-300
    hover:after:w-full
  ">About Us</a>
                <a href='#' className="
    relative
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:h-0.5
    after:w-0
    after:bg-green-500
    after:transition-all
    after:duration-300
    hover:after:w-full
  ">Contact Us</a>
            </div>
            <div className='w-45'>
                <Button className="bg-blue-900 rounded-full text-white text-sm font-light">Get In Touch</Button>
            </div>
        </div>
    )
}

export default Navbar
