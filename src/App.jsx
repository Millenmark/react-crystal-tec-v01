import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Messenger from "./components/Messenger/Messenger"
import HomePage from "./pages/HomePage"
import ProcessesPage from "./pages/ProcessesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ServicesPage from "./pages/ServicesPage"
function App() {
  

  return (
    <div className="App">
      <BrowserRouter scrollRestoration="manual">
      <Navbar/>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="about" element={<AboutPage/>}></Route>
            <Route path="services" element={<ServicesPage/>}></Route>
            <Route path="processes" element={<ProcessesPage/>}></Route>
            <Route path="contact" element={<ContactPage/>}></Route>
          </Routes>
        </div>
      <Footer/>
      <Messenger/>
      </BrowserRouter>
    </div>
  )
}

export default App
