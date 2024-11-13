import "./assets/css/style.css";
import Link from "./components/link";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skill from "./components/skill";
import Certificate from "./components/certificate";

const App = () => {
  return (
    <>
      <Link />
      <Header />
      <Home />
      <About />
      <Skill />
      <Certificate />
    </>
  );
};

export default App;
