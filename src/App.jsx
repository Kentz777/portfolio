import React, { useEffect, useRef } from 'react';
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Designs from "./components/Designs";
import Certs from "./components/Certificates";
import Skills from "./components/Skills";
import music from '../src/assets/mewseek.m4a';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);
  return (
    <div>
        <audio autoPlay loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Sidenav />
      <Main/>
      <Education/>
      <Work/>
      <Skills/>
      <Projects/>
      <Designs/>
      <Certs/>
      <Contact/>
    </div>
  );
}

export default App;
