import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"

import Home from "./pages/Home"
import Processes from "./pages/Processes"
import Services from "./pages/Services"
function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="services" element={<Services/>}></Route>
            <Route path="processes" element={<Processes/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
