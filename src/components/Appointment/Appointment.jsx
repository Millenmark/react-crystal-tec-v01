import WithArrowButton from '../WithArrowButton/WithArrowButton'
import { BsCalendar3} from 'react-icons/bs'
import './Appointment.css'

const Appointment = () => {

  const onClick = function() {
    window.open("https://calendly.com/jenadarayan/sales-call?api_key=5ZYSUZ6RY5YGDYY74T5CL4SLQBUVT4G6")
  }

  return (
    <div className="appointment-section">
      <div className="appointment-wrapper container">
        {/* <div className="appointment-image-div">
          <img src="../../../public/assets/images/calendar_image.jpg" alt="" />
        </div> */}
        <div className="appointment-text">
          <BsCalendar3 className="appointment-icon"/>
          <h2>Get Expert Advice for Free</h2>
          <p>Our company is offering a valuable opportunity to schedule a free consultation with one of our experts. Whether you have questions about our products or services, need advice on a particular issue, or simply want to learn more about what we can offer you, our knowledgeable team members are available to provide personalized guidance and support.</p>
          <div className="appointment-btn-div">
          <WithArrowButton pathTo={"#"} titleBtn={"Schedule a Meeting"} onClick={onClick}/>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Appointment