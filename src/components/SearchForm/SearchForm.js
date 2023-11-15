import { useState } from 'react';
import useAppContext from '../../hooks/useAppContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';

import ('./SearchForm.css');

function SearchForm({ onSearch, shortMovies, onChangeCheckbox }) {

  const { values, handleChange } = useFormWithValidation();

  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const { setInfoPopup } = useAppContext();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!values.searchQuery) {
      setInfoPopup({
        opened: true,
        text: 'Нужно ввести ключевое слово.',
        type: 'info',
      });
      return;
    }
    onSearch(values);
  }


  return (
    <section className="search" aria-label="Форма для поиска фильмов">
      <div className="search__container">
        <form className={`search__form ${focused ? "search__form_active" : ""}`}
          onSubmit={handleSubmitForm} onFocus={onFocus} onBlur={onBlur} noValidate
        >

            <div className={`search__form-main ${focused ? "search__form-main_active" : ""}`}>

              <div className="search__form-input-container">
                  <input
                    className="search__form-input"
                    type="text"
                    name="searchQuery"
                    placeholder="Фильм"
                    value={values.searchQuery || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

              <button type="submit" className="search__form-btn" />

            </div>

            <label className="search__form-toggle">
              <input
                className="search__form-toggle-checkbox"
                type="checkbox"
                checked={!shortMovies}
                onChange={onChangeCheckbox}
              />
              <span className="search__form-toggle-switch"></span>
              <span className="search__form-toggle-label">Короткометражки</span>
            </label>

        </form>
      </div>
    </section>
  );
}

export default SearchForm;
