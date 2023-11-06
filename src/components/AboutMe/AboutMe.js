import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/student-photo.jpg';
import ('./AboutMe.css');

const AboutMe = () => {
  return (
    <>
      <section className="about-me" aria-label="Информация о студенте" id="about-me">
        <div className="about-me__container">

          <h2 className="about-me__title">Студент</h2>

          <div className="about-me__content">

            <div className="about-me__main">
              <div className="about-me__info">
                <div className="about-me__text">
                  <h3 className="about-me__name">Валентина</h3>
                  <h4 className="about-me__description">Фронтенд-разработчик, 30 лет</h4>
                  <p className="about-me__details">Я родилась и живу в Сочи, закончила ФТМИ НИУ ИТМО. Люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить. С 2016 года занимаюсь предпринимательством в сфере бухгалтерских услуг. После того, как закончу курс по веб-разработке, планирую сменить род деятельности.</p>
                </div>
                <a href="https://github.com/vkrasnova" className="about-me__link" target="_blank" rel="noopener noreferrer">Github</a>
              </div>

              <img src={photo} alt="Фото студента" className="about-me__image" />

            </div>

            <Portfolio />

          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
