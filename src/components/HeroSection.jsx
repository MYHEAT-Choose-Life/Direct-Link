import React from 'react'
import hero from '../assets/hero.png'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <img src={hero} alt="Hero" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-10 gap-2 space-y-6">
        <h1 className="text-white text-6xl font-bold flex items-center gap-2">
          Connect<span className='text-green-500'>.</span><span className='text-green-500 italic'>Grow.</span> Thrive<span className='text-green-500'>.</span>
        </h1>
        <div className='w-180 h-1 bg-white/40' />
        <div className='text-xl text-white text-center'>
          <p>We specialize in Social Media Marketing, Contact Center Services, Sales & Marketing Solutions, and</p>
          <p>Creative Marketing Materials tailored to drive your business growth.</p>
        </div>
        <div className='flex items-center space-x-4 w-100 pt-10'>
          <Button className="bg-blue-900 text-white rounded-full">Get In Touch</Button>
          <Button className="bg-white border-2 border-blue-900 text-blue-900 rounded-full w-full">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
