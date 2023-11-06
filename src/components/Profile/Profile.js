import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFormWithValidation from '../../hooks/useFormWithValidation';

import './Profile.css';

const Profile = () => {

  const { currentUser, setCurrentUser, setIsLoggedIn } = useAuth();

  const { values, setValues, handleChange, isValid } = useFormWithValidation();

  const [ profileIsEditing, setpProfileIsEditing ] = useState();

  const navigate = useNavigate();

  const handleSignOutClick = () => {
    setIsLoggedIn(false);
    navigate('/')
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setCurrentUser({
      name: values.name,
      email: values.email,
    });
    handleEditProfileClick();
  }

  const handleEditProfileClick = () => {
    setpProfileIsEditing(!profileIsEditing);
  }

  const profileFieldsClassName = (
    `profile__info-fields
      ${profileIsEditing
        ? 'profile__info-fields_active'
        : ''
      }
    `
  );

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    });
  }, [setValues, currentUser]);

  return (
    <section className="profile" aria-label="Профиль пользователя">
      <div className="profile__container">
        <h1 className="profile__greeting">
          Привет, Виталий!
        </h1>
        <form className="profile__info" onSubmit={handleSubmitForm} isValid={isValid}>
          <div className={profileFieldsClassName}>
            <div className="profile__info-field">
              <label
                for="name"
                className="profile__input-label"
              >
                Имя
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="profile__input"
                value={values.name || ''}
                placeholder="Введите Ваше имя"
                minLength="2"
                maxLength="64"
                onChange={handleChange}
                disabled={!profileIsEditing}
                required
              />
            </div>
            <div className="profile__info-field">
              <label
                for="email"
                className="profile__input-label"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="profile__input"
                value={values.email || ''}
                placeholder="Введите Ваш email"
                minLength="5"
                maxLength="64"
                onChange={handleChange}
                disabled={!profileIsEditing}
                required
              />

            </div>
          </div>
          <div className="profile__info-btns">
            {profileIsEditing
              ?
                <div className="profile__info-submit">
                  <span className="profile__info-submit-error">
                    При обновлении профиля произошла ошибка.
                  </span>
                  <button className="profile__info-submit-btn" disabled={!isValid}>
                    Сохранить
                  </button>
                </div>
              :
                <ul className="profile__options">
                  <li
                    className="profile__options-item"
                    onClick={handleEditProfileClick}
                  >
                    Редактировать
                  </li>
                  <li
                    className="profile__options-item profile__options-item_color_red"
                    onClick={handleSignOutClick}
                  >
                    Выйти из аккаунта
                  </li>
              </ul>
            }
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
