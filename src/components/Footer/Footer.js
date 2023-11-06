import ('./Footer.css');

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__main">
          Учебный проект Яндекс.Практикум х BeatFilm
        </p>
        <span className="footer__hr" />
        <div className="footer__info">
          <span className="footer__copyright">
            © 2023
          </span>
          <ul className="footer__links">
            <li>
              <a href="https://practicum.yandex.ru/web" className="footer__link" target="_blank" rel="noopener noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href="https://github.com" className="footer__link" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
