import React from 'react'
import ServiceCard from './ServiceCards'

const Services = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-20 py-10">
      <h1 className="text-4xl font-semibold text-center pb-4">Our Services</h1>
      <p className="text-gray-400 text-lg text-center">Comprehensive marketing and communication services to help business thrive.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-5 pt-10 w-full">
        <ServiceCard
        title="Social Media Management"
        items={[
          "Scheduling & Calendar",
          "Content Creation",
          "Analytics & Engagement",
        ]}
      />
      <ServiceCard
        title="Contact Center Solution"
        items={[
          "Appointment Scheduling",
          "Customer Engagement",
          "Lead Generation",
        ]}
      />
      <ServiceCard
        title="Property Marketing"
        items={[
          "Property Campaigns",
          "Listing & Advertising",
        ]}
      />
      </div>
       <div className='grid grid-cols-2 pt-10 gap-20'>
        <ServiceCard
        title="Marketing Material"
        items={[
          "Brochures & Fliers",
          "Logos & Branding",
          "News Letter",
        ]}
      />
      <ServiceCard
        title="Sales & Marketing"
        items={[
          "Sales Strategy",
          "Lead Generation",
          "Marketing Campaign",
        ]}
      />
        </div>
    </div>
  )
}

export default Services
