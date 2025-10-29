import React from 'react'
import about from '../assets/about.png'
import Button from './Button'


const AboutUs = () => {
  return (
    <div className="relative w-full">
      <img src={about} alt="About Us" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-900/80 px-6 text-center space-y-6">
        <h1 className="text-white text-4xl md:text-4xl">About Us</h1>
        <p className="text-white text-lg md:text-xl max-w-4xl">
          Direct Link Communications is a dynamic marketing and communications agency passionate about
          seeing our clients succeed in South Africa. We blend creativity with strategic expertise to
          amplify our clients’ presence.
        </p>
        <div className='pt-10 w-50'>
        <Button className="bg-white border-2 border-blue-900 text-blue-900 rounded-full w-full">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
