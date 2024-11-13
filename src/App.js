// src/App.js
import React, { useState, useEffect } from "react";
import "./assets/css/style.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Skill from "./components/skill";
import Certificate from "./components/certificate";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Loading from "./components/loading"; // Import komponen loading

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set delay untuk simulasi loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Loading selama 3 detik, bisa sesuaikan waktunya

    return () => clearTimeout(timer); // Bersihkan timeout saat komponen di-unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Menampilkan komponen loading jika masih loading
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skill />
          <Certificate />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
