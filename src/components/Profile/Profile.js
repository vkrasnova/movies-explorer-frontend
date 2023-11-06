import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
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
          Привет, {currentUser.name}!
        </h1>

        <form className="profile__info" onSubmit={handleSubmitForm} isValid={isValid}>

          <div className={profileFieldsClassName}>

            <Input
              styleCSS="profile"
              type="text"
              name="name"
              label="Имя"
              placeholder="Введите Ваше имя"
              value={values.name || ''}
              minLength="2"
              maxLength="64"
              onChange={handleChange}
              disabled={!profileIsEditing}
              required
            />
            
            <Input
              styleCSS="profile"
              type="email"
              name="email"
              label="E-mail"
              placeholder="Введите Ваш email"
              value={values.email || ''}
              minLength="5"
              maxLength="64"
              onChange={handleChange}
              disabled={!profileIsEditing}
              required
            />

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
                  <li>
                    <button className="profile__options-item"
                      onClick={handleEditProfileClick}>
                        Редактировать
                    </button>
                  </li>

                  <li>
                    <button className="profile__options-item profile__options-item_color_red"
                      onClick={handleSignOutClick}>
                        Выйти из аккаунта
                    </button>
                    
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
