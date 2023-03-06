import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const navRef = useRef()
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
    // navigate(e.target.pathname);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const changeBackground = () => {
    if(window.scrollY >= 10){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

 

  return (
    <header className={navbar ? 'active' : null}>
      <div className="logo-div">
        <Link to="/"><img src="/assets/images/min_ct_nav_logo.png" alt="logo" /></Link>
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