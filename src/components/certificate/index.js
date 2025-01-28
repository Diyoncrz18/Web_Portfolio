import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Certificate = () => {
  const [certificate, setCertificate] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const certificateRef = ref(db, "certificate/");
    onValue(certificateRef, (snapshot) => {
      const data = snapshot.val();
      setCertificate(data);
    });
  }, []);
  return (
    <section className="work section" id="certificate">
      <h2 className="section__title">{certificate.text}</h2>
      <div className="certificate__container bd-grid">
        <a href={certificate.img1} className="certificate__img">
          <img src={certificate.img1} alt="" />
        </a>
        <a href={certificate.img2} className="certificate__img">
          <img src={certificate.img2} alt="" />
        </a>
        <a href={certificate.img5} className="certificate__img">
          <img src={certificate.img5} alt="" />
        </a>
        <a href={certificate.img4} className="certificate__img">
          <img src={certificate.img4} alt="" />
        </a>
        <a href={certificate.img3} className="certificate__img">
          <img src={certificate.img3} alt="" />
        </a>
        <a href={certificate.img6} className="certificate__img">
          <img src={certificate.img6} alt="" />
        </a>
      </div>
    </section>
  );
};

export default Certificate;
