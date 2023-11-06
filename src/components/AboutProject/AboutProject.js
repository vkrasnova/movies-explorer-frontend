import ('./AboutProject.css');

const AboutProject = () => {
  return (
    <>
      <section className="about-project" aria-label="О проекте" id="about-project">
        <div className="about-project__container">

          <h2 className="about-project__title">О проекте</h2>

          <div className="about-project__content">
            <div className="about-project__info">
              <h3 className="about-project__info-title">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="about-project__info-text">
                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки
              </p>
            </div>
            <div className="about-project__info">
              <h3 className="about-project__info-title">
              На выполнение диплома ушло 5 недель
              </h3>
              <p className="about-project__info-text">
              У каждого этапа были мягкий и жёсткий дедлайны, которые нужно было соблюдать, чтобы успешно защититься
              </p>
            </div>
          </div>

          <div className="about-project__horizontal-bar">

            <div className="about-project__horizontal-bar-part about-project__horizontal-bar-part_width_20">
              <span className="about-project__horizontal-bar-fill about-project__horizontal-bar-fill_color_blue">
                1 неделя
              </span>
              <span className="about-project__horizontal-bar-description">
                Back-end
              </span>
            </div>

            <div className="about-project__horizontal-bar-part about-project__horizontal-bar-part_width_80">
              <span className="about-project__horizontal-bar-fill about-project__horizontal-bar-fill_color_gray">
                4 недели
              </span>
              <span className="about-project__horizontal-bar-description">
                Front-end
              </span>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default AboutProject;
