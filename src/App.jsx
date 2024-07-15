import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Education, Hero, Navbar, Skills, Works, StarsCanvas } from "./components";

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Works />
        <Experience />
        <Skills />
        <Education />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
