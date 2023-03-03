import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const navRef = useRef()
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header className={navbar ? 'active' : null}>
      <div className="logo-div">
        <Link to="/"><img src="/public/assets/images/ct_nav_logo.png" alt="" /></Link>
      </div>
      <nav ref={navRef}>
        <Link onClick={showNavbar} className="nav-link" to="/">Home</Link>
        <Link onClick={showNavbar} className="nav-link" to="about">About Us</Link>
        <Link onClick={showNavbar} className="nav-link" to="services">Our Service</Link>
        <Link onClick={showNavbar} className="nav-link" to="processes">Our Processes</Link>
        <Link onClick={showNavbar} className="nav-link" to="contact">Contact Us</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}

export default Navbar