import React from 'react'
import hero from '../assets/hero.png'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <img
        src={hero}
        alt="Hero"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-10 gap-2 space-y-6 text-center">

        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold flex items-center gap-2">
          Connect<span className='text-green-500'>.</span>
          <span className='text-green-500 italic'>Grow.</span>
          Thrive<span className='text-green-500'>.</span>
        </h1>

        <div className="w-32 sm:w-56 md:w-72 h-1 bg-white/40" />

        <div className="text-sm sm:text-lg md:text-xl text-white leading-relaxed">
          <p>We specialize in Social Media Marketing, Contact Center Services, Sales & Marketing Solutions, and</p>
          <p>Creative Marketing Materials tailored to drive your business growth.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 w-full sm:w-auto pt-10 space-y-4 sm:space-y-0">
          <Button className="bg-blue-900 text-white rounded-full px-6 py-2 w-full sm:w-auto">
            Get In Touch
          </Button>
          <Button className="bg-white border-2 border-blue-900 text-blue-900 rounded-full px-6 py-2 w-full sm:w-auto">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
