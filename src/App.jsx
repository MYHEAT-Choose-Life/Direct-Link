import React from 'react'
import Navbar from './components/Navbar'
import WhyChooseUs from './components/WhyChooseUs'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='font-poppins scroll-smooth'>
      <Navbar />
      <section id="home"><HeroSection /></section>
      <section id="why-us"><WhyChooseUs /></section>
      <section id="about"><AboutUs /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default App
