import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio" aria-label="Портфолио студента">

      <h3 className="portfolio__title">Портфолио</h3>

      <ul className="portfolio__list">

        <li className="portfolio__list-item">
          <Link to="https://github.com/vkrasnova/how-to-learn" className="portfolio__link" target="_blank" rel="noopener noreferrer">Статичный сайт</Link>
        </li>

        <li className="portfolio__list-item">
          <Link to="https://github.com/vkrasnova/russian-travel" className="portfolio__link" target="_blank" rel="noopener noreferrer">Адаптивный сайт</Link>
        </li>

        <li className="portfolio__list-item">
          <Link to="https://github.com/vkrasnova/react-mesto-api-full-gha" className="portfolio__link" target="_blank" rel="noopener noreferrer">Одностраничное приложение</Link>
        </li>

      </ul>

    </section>
  );
}

export default Portfolio;
