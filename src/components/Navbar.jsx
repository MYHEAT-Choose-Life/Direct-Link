import React from 'react'
import Button from './Button'
import logo from '../assets/image.png'

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 space-y-4 sm:space-y-0">

      <div className="flex items-center font-bold text-xl sm:text-2xl">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
        <h2>
          Direct <span className="text-green-400 italic">Link</span> Connect
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="
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
            "
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="w-full sm:w-auto">
        <Button className="bg-blue-900 rounded-full text-white text-sm font-light w-full sm:w-auto">
          Get In Touch
        </Button>
      </div>
    </div>
  )
}

export default Navbar
