import React from 'react'
import Navbar from './components/Navbar'
import WhyChooseUs from './components/WhyChooseUs'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='font-poppins'>
      <Navbar/>
      <HeroSection/>
      <WhyChooseUs/>
      <AboutUs/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App
