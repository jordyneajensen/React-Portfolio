import Topbar from "./Topbar/Topbar";
import Intro from "./Intro/Intro";
import Portfolio from "./Portfolio/Portfolio";
import Works from "./Works/Works";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import Menu from "./Menu/Menu";
import './app.scss'
// import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
