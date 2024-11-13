import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact/");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">{contact.get}</span>
      <h3 className="section__title">{contact.contactme}</h3>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{contact.talk}</h3>
          <div className="contact__info">
            {/* Gmail */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />
              <h3 className="contact__card-title">{contact.email}</h3>
              <span className="contact__card-data">
                {contact.student}
              </span>
              <a
                href="mailto:s22310160@student.unklab.ac.id"
                target="_blank"
                className="contact__button"
              >
                {contact.write}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
            {/* Whatsapp */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon" />
              <h3 className="contact__card-title">{contact.whatsapp}</h3>
              <span className="contact__card-data">{contact.telp}</span>
              <a
                href="https://wa.me/6281344155598"
                target="_blank"
                className="contact__button"
              >
                {contact.write}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
            {/* Instagram */}
            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon" />
              <h3 className="contact__card-title">{contact.instagram}</h3>
              <span className="contact__card-data">{contact.nama}</span>
              <a
                href="https://instagram.com/diyoncrz_"
                target="_blank"
                className="contact__button"
              >
                {contact.write}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">{contact.projectenter}</h3>
          <form action className="contact__form" id="contact-form">
            <div className="contact__form-div">
              <label htmlFor className="contact__form-tag">
                {contact.name}
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Insert Your Name!"
                className="contact__form-input"
                id="contact-name"
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor className="contact__form-tag">
                {contact.email}
              </label>
              <input
                type="text"
                name="user_email"
                placeholder="Insert Your Email!"
                className="contact__form-input"
                id="contact-email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor className="contact__form-tag">
                {contact.project}
              </label>
              <textarea
                cols={30}
                rows={10}
                name="user_project"
                placeholder="Insert Your Project!"
                className="contact__form-input"
                id="contact-project"
                defaultValue={""}
              />
            </div>
            <p className="contact__message" id="contact-message" />
            <button className="button">{contact.send}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
