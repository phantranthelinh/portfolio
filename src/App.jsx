import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { About } from "./components/About/About";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
