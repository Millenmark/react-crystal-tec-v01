import {AiOutlineCheckCircle} from 'react-icons/ai'

import './SecretComponent.css'
import WithArrowButton from '../WithArrowButton/WithArrowButton'

const SecretComponent = () => {
  return (
    <>
      <div className="secret-wrapper container">
        <div className="secret-highlight">
          <h2>Our technology allows you to offer the <span>latest software</span> to your possible customers!</h2>
          <WithArrowButton 
          pathTo={"about"} 
          titleBtn={"More About Us"}/>
        </div>
        <div className="secret-highlight">
          <p>improve efficiency, leverage tech, and provide better customer experiences with the modern technology services available allover the world. Our skilled personnel, utilizing the latest processing software, combined with decades of experience</p>
          <div className="secret-checklist">
            <div className="secret-checklist-item">
              <h4><AiOutlineCheckCircle className="secret-checklist-icon"/>Eliminate Repetitive Entry</h4>
              <h4><AiOutlineCheckCircle className="secret-checklist-icon"/>Drive Business Process</h4>
              <h4><AiOutlineCheckCircle className="secret-checklist-icon"/>Structure Data & Docs</h4>
            </div>
            <div className="secret-checklist-item">
              <h4><AiOutlineCheckCircle className="secret-checklist-icon"/>Simplify Communication</h4>
              <h4><AiOutlineCheckCircle className="secret-checklist-icon"/>Speed Up Transactions</h4>
              <h4><AiOutlineCheckCircle className="secret-checklist-icon"/>Automate Workflow</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecretComponent