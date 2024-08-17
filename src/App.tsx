import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Box } from '@mui/material';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <CssBaseline />
      <Header toggleSidebar={toggleSidebar} />
      <Box display="flex" flexDirection="row" minHeight="100vh">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Box 
          component="main" 
          flexGrow={1} 
          p={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;