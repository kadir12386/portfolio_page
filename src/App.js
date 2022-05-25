import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills";
import Works from "./Components/work/Works";

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
