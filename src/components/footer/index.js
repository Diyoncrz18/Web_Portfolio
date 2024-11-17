import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer/");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{footer.name}</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {footer.about}
            </a>
          </li>
        </ul>
        <ul className="footer__social">
          <a
            href="https://www.linkedin.com/in/dion-kobi-b1186b312/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a
            href="https://www.instagram.com/diyoncrz_/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram" />
          </a>
          <a
            href="https://github.com/Diyoncrz18"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-github" />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
