import ('./NavTab.css');

const NavTab = () => {
  return (
    <section className="navtab" aria-label="Панель навигации по Главной странице">
      <div className="navtab__container">
        <ul className="navtab__list">
          <li><a href="#about-project" className="navtab__item">О проекте</a></li>
          <li><a href="#techs" className="navtab__item">Технологии</a></li>
          <li><a href="#about-me" className="navtab__item">Студент</a></li>
        </ul>
      </div>
    </section>
  );
}

export default NavTab;
