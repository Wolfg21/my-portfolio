import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="px-[var(--mx)]">
        <Header />
        <Hero />
      </div>
      <div className="mt-20 overflow-hidden rounded-t-[36px] bg-darker-accent text-cream md:mt-24">
        <div className="px-[var(--mx)]">
          <div className="flex flex-col gap-20 md:gap-24">
            <Services />
            <Projects />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
