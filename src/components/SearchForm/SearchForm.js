import { useState } from 'react';

import ('./SearchForm.css');

function SearchForm() {

  const handleSubmitForm = (e) => {
    e.preventDefault();
  }

  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <section className="search" aria-label="Форма для поиска фильмов">
      <div className="search__container">
        <form className={`search__form ${focused ? "search__form_active" : ""}`}
          onSubmit={handleSubmitForm} onFocus={onFocus} onBlur={onBlur}
        >

            <div className={`search__form-main ${focused ? "search__form-main_active" : ""}`}>

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
