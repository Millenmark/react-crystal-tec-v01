import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

// import HomePage from "./pages/HomePage"
// import AboutPage from "./pages/AboutPage"

import ServicesPage from "./pages/ServicesPage"
import ProcessesPage from "./pages/ProcessesPage"
import ContactPage from "./pages/ContactPage"

import ServiceCardPage from "./pages/ServiceCardPage"
import Appointment from "./components/Appointment/Appointment"

import Loader from './components/Loader/Loader'

const LazyHomePage = React.lazy(() => import('./pages/HomePage'))
const LazyAboutPage = React.lazy(() => import('./pages/AboutPage'))


function App() {
  return (
    <div className="App">
      <BrowserRouter scrollRestoration="manual">
      <Navbar/>
        <div className="page-container">
          <Routes>
            <Route path="/" element={
              <React.Suspense fallback={<Loader/>}>
                <LazyHomePage/>
              </React.Suspense>
            }></Route>
            <Route path="/about" element={
              <React.Suspense fallback={<Loader/>}>
                <LazyAboutPage/>
              </React.Suspense>
            }></Route>
            <Route path="/services" element={<ServicesPage/>}></Route>
            <Route path="/processes" element={<ProcessesPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="/services/:id" element={<ServiceCardPage/>}></Route>
          </Routes>
        </div>
        <Appointment/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
