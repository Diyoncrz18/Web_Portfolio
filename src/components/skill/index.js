import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Skill = () => {
  const [skill, setSkill] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const skillRef = ref(db, "skill_img/");
    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      setSkill(data);
    });
  }, []);
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">{skill.abilities}</span>
      <h2 className="section__title">{skill.skills}</h2>
      <div className="skills__container container grid">
        {/* Programing Language */}
        <div className="skills__content">
          <h3 className="skills__title">{skill.programing}</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img src={skill.html} alt className="skills__name" />
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img src={skill.css} alt className="skills__name" />
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img
                    src={skill.js}
                    className="skills__name"
                  />
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img
                    src={skill.python}
                    alt
                    className="skills__name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Framework */}
        <div className="skills__content">
          <h3 className="skills__title">{skill.fremwork}</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img
                    src={skill.bootstrap}
                    alt
                    className="skills__name"
                  />
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img
                    src={skill.react}
                    alt
                    className="skills__name"
                  />
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img
                    src={skill.mysql}
                    alt
                    className="skills__name"
                  />
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img
                    src={skill.tailwind}
                    alt
                    className="skills__name"
                  />
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img
                    src={skill.nodejs}
                    alt
                    className="skills__name"
                  />
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <img
                    src={skill.postman}
                    alt
                    className="skills__name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
