import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Designs from "./components/Designs";
import Certs from "./components/Certificates";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
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
