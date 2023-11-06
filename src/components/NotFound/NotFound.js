import { Link, useNavigate } from "react-router-dom";

import './NotFound.css';

const NotFound = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="not-found" aria-label="Запрашиваемая страница не найдена">
      <div className="not-found__container">

        <div className="not-found__main">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__description">Страница не найдена</p>
        </div>

        <Link
          className="not-found__link"
          onClick={goBack}>
            Назад
        </Link>

      </div>

    </section>
  );
}

export default NotFound;
