import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Booking from "./components/Booking";
import Study from "./components/Study";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Booking />
      <Study />
      <Contact />
    </div>
  );
}