import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Expericence";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects /> 
      <Experience />
      <Contact /> 
      <Footer />
      </div>
  )
}
export default App ;
