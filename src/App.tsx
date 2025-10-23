import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="px-[var(--mx)]">
        <Header />
        <Hero />
      </div>
      <div className="mt-20 overflow-hidden rounded-t-[36px] bg-darker-accent text-cream md:mt-24">
        <div className="px-[var(--mx)]">
          <Services />
        </div>
      </div>
    </div>
  );
}

export default App;
