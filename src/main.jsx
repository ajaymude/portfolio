import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Certification from "./components/Certificate/Certification.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import styles from "./App.module.css";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<div className={styles.App}>
  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/portfolio" element={<App/>}/>
      <Route path="/portfolio/about" element={<About/>}/>
      <Route path="/portfolio/experience" element={<Experience/>}/>
      <Route path="/portfolio/projects" element={<Projects/>}/>
      <Route path="/portfolio/certificate" element={<Certification/>}/>
    </Routes>

    <Contact/>
  </BrowserRouter>
    
  </React.StrictMode>



  </div>
);
