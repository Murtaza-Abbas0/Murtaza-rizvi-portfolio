import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import WhoAmI from "./components/WhoAmI";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <WhoAmI />
      <TechStack />
      {/* <Projects /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
