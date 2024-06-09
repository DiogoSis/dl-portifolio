import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './index.css'

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Certificates from "./pages/Certificates"
import Contact from "./pages/Contact"

const App: React.FC = () => {

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/certificates" element={<Certificates/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>

  )
}

export default App
