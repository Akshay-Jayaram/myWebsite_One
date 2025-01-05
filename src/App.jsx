import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Education, Hero, Navbar, Skills, Works, StarsCanvas, Badges } from "./components";

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

function App() {
  const webGLAvailable = isWebGLAvailable();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Hero />
            {webGLAvailable && <StarsCanvas />}
          </div>
        </div>
        <About />
        <Works />
        <Badges />
        <Experience />
        <Skills />
        <Education />
        <div className="relative z-0">
          <Contact />
          {webGLAvailable && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
