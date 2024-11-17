import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Home = () => {
  const [home, setHome] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home/");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">{home.hello}</span>
          <h1 className="home__name">{home.name}</h1>
          <h3 className="home__institution">{home.institusi}</h3>
          <div className="home__buttons">
            <a
              href={home.downloadlink}
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              {home.download_cv}
            </a>
            <a href="#about" className="button">
              {home.about_me}
            </a>
          </div>
        </div>
        <div className="home__handle">
          <img src={home.images} alt="" className="home__img" />
        </div>
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/dion-kobi-b1186b312/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a
            href="https://github.com/Diyoncrz18"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="bx bxl-github" />
          </a>
          <a
            href="https://www.instagram.com/diyoncrz_/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="bx bxl-instagram" />
          </a>
        </div>
        <a href="#about" className="home__scroll">
          <i className="bx bxs-mouse home__scroll-icon" />
          <span className="home__scroll-name">{home.scrol_down}</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
