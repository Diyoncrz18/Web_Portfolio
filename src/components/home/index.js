const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Dion Kobi</h1>
          <h3 className="home__institution">Student of Universitas Klabat</h3>
          <div className="home__buttons">
            <a href="#" target="_blank" className="button button--ghost">
              DOWNLOAD CV
            </a>
            <a href="#about" className="button">
              About me
            </a>
          </div>
        </div>
        <div className="home__handle">
          <img
            src="images/dion-img-removebg-preview.png"
            alt
            className="home__img"
          />
        </div>
        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/dion-kobi-b1186b312/"
            target="_blank"
            className="home__social-link"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a
            href="https://github.com/Diyoncrz18"
            target="_blank"
            className="home__social-link"
          >
            <i className="bx bxl-github" />
          </a>
          <a
            href="https://www.instagram.com/diyoncrz_/"
            target="_blank"
            className="home__social-link"
          >
            <i className="bx bxl-instagram" />
          </a>
        </div>
        <a href="#about" className="home__scroll">
          <i className="bx bxs-mouse home__scroll-icon" />
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
