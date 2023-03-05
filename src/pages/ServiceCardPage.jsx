import React from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../ServiceList'

const ServiceCardPage = () => {
  const {id} = useParams()
  const service = services.find(service => service.serviceId === Number(id))
  // const [cardData, setCardData] = useState(null);

  return (
    <div>
      <div className="service-page-heading">
        <h1>{service.serviceName}</h1>
      </div>
      <div className="service-page-body">
        <div className="container">
          <div className="service-img-div">
            <img src={service.serviceImage} alt="" />
          </div>
          <div className="service-page-text">
            {service.serviceDescription}
            <div className="service-benefits">
              <h3>Benefits:</h3>
              <dl>
                {
                  service.serviceBenefits.map(benefit => (
                    <div className="benefit-item">
                      <dt>{benefit.benefitTitle}</dt>
                      <dd>{benefit.benefitDescription}</dd>
                    </div>
                  ))
                }
              </dl>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServiceCardPage