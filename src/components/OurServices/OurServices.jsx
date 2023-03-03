import React from 'react'
import './OurServices.css'
import ServiceCard from '../ServiceCard/ServiceCard'

const OurServices = () => {
  return (
    <div className="service-section container">
      <img className="service-background" src="../../../assets/images/bg_services_section.jpg" alt="Background Image" />
      <h2>We Offer</h2>
      <div className="service-cards">
        <ServiceCard 
        imageName={"it_outsourcing.svg"} 
        serviceName={"IT Outsourcing Support & Services"}
        serviceBody={"With IT Outsourcing Support, businesses can focus on their core operations while leaving the technology-related tasks to the experts."}
        />

        <ServiceCard 
        imageName={"cyber_security.svg"} 
        serviceName={"Cyber Security Solutions & Services"}
        serviceBody={"Crystal Tec offers Cyber Security Solutions & Services to businesses looking to protect their digital assets from cyber threats."}
        />

        <ServiceCard 
        imageName={"cloud_services.svg"} 
        serviceName={"Cloud Solutions & Services"}
        serviceBody={"Cloud Solutions & Services provided by our company offer businesses the flexibility, scalability, and cost-efficiency they need to succeed in today's rapidly changing technology landscape. "}
        />

        <ServiceCard 
        imageName={"it_infrastructure.svg"} 
        serviceName={"IT Infrastructure Solutions & Services"}
        serviceBody={"Crystal Tec offers IT Infrastructure Solutions & Services to businesses seeking to enhance the efficiency and reliability of their technology infrastructure."}
        />

        <ServiceCard 
        imageName={"software_development.svg"} 
        serviceName={"Software & Web Development Services"}
        serviceBody={"Our team of expert developers works closely with each client to understand their requirements, goals, and vision, and then creates customized solutions using the latest technologies and best practices."}
        />

        <ServiceCard 
        imageName={"project_management.svg"} 
        serviceName={"Project Management Services"}
        serviceBody={"Crystal Tec provides Project Management Services to businesses seeking to streamline their projects, optimize resources, and achieve their goals on time and within budget."}
        />
      </div>
    </div>
  )
}

export default OurServices