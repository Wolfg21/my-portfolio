import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
<<<<<<< HEAD
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
=======
>>>>>>> cd0ce92db37b9ae13cb41a80b23671ba4d3ae374

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="px-[var(--mx)]">
        <Header />
        <Hero />
      </div>
      <div className="mt-20 overflow-hidden rounded-t-[36px] bg-darker-accent text-cream md:mt-24">
        <div className="px-[var(--mx)]">
<<<<<<< HEAD
          <div className="flex flex-col gap-20 md:gap-24">
            <Services />
            <Projects />
            <About />
            <Contact />
          </div>
=======
          <Services />
>>>>>>> cd0ce92db37b9ae13cb41a80b23671ba4d3ae374
        </div>
      </div>
    </div>
  );
}

export default App;
