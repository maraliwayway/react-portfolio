import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection: bg-white-900 selection: text-white-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-dark-blue-gray">
        </div>
      </div>      
      
      
      <div className="container mx-auto px-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
      </div>
    </div>
  )
}

export default App