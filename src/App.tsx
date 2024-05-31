import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect, useState } from "react";
import { config } from "./constants/config";
import Loader from "./components/loader/loader";

const App = () => {
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3.566666 * 1000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, [])
  return (
    <BrowserRouter>
      {
        loading ? <Loader /> : <div className="bg-primary relative z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat" style={{ backgroundPosition: 'center 85%' }}>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      }
    </BrowserRouter>
  );
};

export default App;
