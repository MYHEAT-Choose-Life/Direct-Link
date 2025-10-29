import React from 'react'
import lolo from '../assets/lolo.png'
import { MdEmail, MdCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedin} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-blue-900 text-white px-6 md:px-20 pt-10">
      <h1 className="text-3xl md:text-4xl text-center pb-4">
        Ready To Elevate Your Business
      </h1>
      <p className="text-gray-400 text-base md:text-lg text-center">
        Let Direct Link Communication be your partner in growth
      </p>

      {/* CONTACT CARDS */}
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-12 md:gap-30 pt-16">
        <div className="flex flex-col items-center space-y-7">
          <MdEmail className="bg-blue-200 p-1 rounded size-10 text-blue-900" />
          <div className="flex flex-col items-center text-sm font-light space-y-1">
            <h3 className="font-semibold text-base">Email</h3>
            <p>We will reply promptly</p>
          </div>
          <a href="#" className="text-sm underline">info@directlinkcommunications.co.za</a>
        </div>

        <div className="flex flex-col items-center space-y-7">
          <MdCall className="bg-blue-200 p-1 rounded size-10 text-blue-900" />
          <div className="flex flex-col items-center text-sm font-light space-y-1">
            <h3 className="font-semibold text-base">Call Us</h3>
            <p>Kindly reach to us now</p>
          </div>
          <a href="#" className="text-sm underline">0120230471</a>
        </div>

        <div className="flex flex-col items-center space-y-7">
          <IoLogoWhatsapp className="bg-blue-200 p-1 rounded size-10 text-blue-900" />
          <div className="flex flex-col items-center text-sm font-light space-y-1">
            <h3 className="font-semibold text-base">WhatsApp</h3>
            <p>Reach us with WhatsApp</p>
          </div>
          <a href="#" className="text-sm underline">0670982760</a>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col md:flex-row items-center text-[12px] font-light justify-between gap-6 md:gap-0 text-white pt-20">
        <img src={lolo} className="w-32 md:w-auto" />
        <p className="text-center md:text-left">© 2025 Banque, fiduciaire, privée. All rights reserved.</p>
        <div className="flex items-center space-x-4 text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Contact
