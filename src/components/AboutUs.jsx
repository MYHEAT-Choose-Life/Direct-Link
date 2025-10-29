import React from 'react'
import about from '../assets/about.png'
import Button from './Button'

const AboutUs = () => {
  return (
    <div className="relative w-full">
      <img
        src={about}
        alt="About Us"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-900/80 px-4 sm:px-6 md:px-20 text-center space-y-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-4xl">
          About Us
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed">
          Direct Link Communications is a dynamic marketing and communications agency passionate about
          seeing our clients succeed in South Africa. We blend creativity with strategic expertise to
          amplify our clients’ presence.
        </p>
        <div className="pt-8 w-50 max-w-xs sm:max-w-sm md:max-w-xs">
          <Button className="bg-white border-2 border-blue-900 text-blue-900 rounded-full w-full">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
