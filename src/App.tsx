import { useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import Intro from "./pages/Intro";
import Project from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="top"
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Intro />
      <Project />
      <Skills />
      <About />
      <Contact />

      {showTopButton && (
        <a
          href="#top"
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          ↑ Top
        </a>
      )}
    </div>
  );
}

export default App;
