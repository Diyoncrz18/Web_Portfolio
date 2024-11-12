import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about/");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">{about.intro}</span>
      <h2 className="section__title">{about.about_me}</h2>
      <div className="about__container container grid">
        <img src={about.images} alt className="about__img" />
        <div className="about__data">
          <p className="about__description">{about.description}</p>
          <a href="#contact" className="button">
            {about.contact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
