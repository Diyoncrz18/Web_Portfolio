import "./assets/css/style.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skill from "./components/skill";
import Certificate from "./components/certificate";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
