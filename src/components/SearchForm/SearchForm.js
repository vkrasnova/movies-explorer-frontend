import ('./SearchForm.css');

function SearchForm() {

  const handleSubmitForm = (e) => {
    e.preventDefault();
  }

  return (
    <section className="search" aria-label="Форма для поиска фильмов">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmitForm}>

            <div className="search__form-main">

              <div className="search__form-input-container">
                  <input
                    className="search__form-input"
                    type="text"
                    placeholder="Фильм"
                  />
                </div>

              <button type="submit" className="search__form-button" />

            </div>

            <label className="search__form-toggle">
              <input className="search__form-toggle-checkbox" type="checkbox" />
              <span className="search__form-toggle-switch"></span>
              <span className="search__form-toggle-label">Короткометражки</span>
            </label>

        </form>
      </div>
    </section>
  );
}

export default SearchForm;
