import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about/");
    const unsubscribe = onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAbout(data);
      }
    });

    return () => unsubscribe(); // Cleanup listener saat komponen unmount
  }, []);

  return (
    <section className="about section" id="about">
      <span className="section__subtitle">{about.intro || "Introduction"}</span>
      <h2 className="section__title">{about.about_me || "About Me"}</h2>
      <div className="about__container container grid">
        {about.images && <img src={about.images} alt="About" className="about__img" />}
        <div className="about__data">
          <p className="about__description">{about.description || "Description goes here..."}</p>
          {about.contact && (
            <a href="#contact" className="button">
              {about.contact}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
