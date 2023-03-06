import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

// import HomePage from "./pages/HomePage"
// import AboutPage from "./pages/AboutPage"
// import ServicesPage from "./pages/ServicesPage"
// import ProcessesPage from "./pages/ProcessesPage"
// import ContactPage from "./pages/ContactPage"
// import ServiceCardPage from "./pages/ServiceCardPage"
import Appointment from "./components/Appointment/Appointment"
import Loader from './components/Loader/Loader'

const LazyHomePage = React.lazy(() => import('./pages/HomePage'))
const LazyAboutPage = React.lazy(() => import('./pages/AboutPage'))
const LazyServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const LazyProcessesPage = React.lazy(() => import('./pages/ProcessesPage'))
const LazyContactPage = React.lazy(() => import('./pages/ContactPage'))
const LazyServiceCardPage = React.lazy(() => import('./pages/ServiceCardPage'))

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 5000); // set the duration of the loader to 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <BrowserRouter scrollRestoration="manual">
      <Navbar/>
        <div className="page-container">
          <Routes>
            <Route path="/" element={
              <React.Suspense fallback={showLoader && <Loader/>}>
                <LazyHomePage/>
              </React.Suspense>
              }>
            </Route>

            <Route path="/about" element={
              <React.Suspense fallback={showLoader && <Loader/>}>
                <LazyAboutPage/>
              </React.Suspense>
              }>
            </Route>

            <Route path="/services" element={
              <React.Suspense fallback={showLoader && <Loader/>}>
                <LazyServicesPage/>
              </React.Suspense>
              }>
            </Route>

            <Route path="/processes" element={
              <React.Suspense fallback={showLoader && <Loader/>}>
                <LazyProcessesPage/>
              </React.Suspense>
              }>
            </Route>

            <Route path="/contact" element={
              <React.Suspense fallback={showLoader && <Loader/>}>
                <LazyContactPage/>
              </React.Suspense>
              }>
            </Route>

            <Route path="/services/:id" element={
              <React.Suspense fallback={showLoader && <Loader/>}>
                <LazyServiceCardPage/>
              </React.Suspense>
            }>
            </Route>
          </Routes>
        </div>
        <Appointment/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
