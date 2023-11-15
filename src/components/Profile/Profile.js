import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/Api/mainApi';
import Input from '../Input/Input';
import useAuth from '../../hooks/useAuth';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import useAppContext from '../../hooks/useAppContext';
import { STATUS_MSG } from '../../utils/constants';

import './Profile.css';

const Profile = ({ onSignOut }) => {

  const { currentUser, setCurrentUser } = useAuth();
  const { values, setValues, handleChange, isValid, setIsValid } = useFormWithValidation();

  const [ profileIsEditing, setProfileIsEditing ] = useState();
  const [ statusMessage, setStatusMessage ] = useState();

  const { setInfoPopup } = useAppContext();

  const isSubmitBtnDisabled =
    !isValid
      ||
    (values.name === currentUser.name
      &&
    values.email === currentUser.email);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    mainApi.updateUserInfo(values)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email,
        });
        handleEditProfileClick();
        setInfoPopup({
          opened: true,
          text: STATUS_MSG.OK_UPD_PROFILE,
          type: 'ok',
        });
      })
      .catch((err) => {
        setStatusMessage(STATUS_MSG[err] || STATUS_MSG.ERR_UPD_PROFILE);
        setIsValid(false);
      })
  }

  const handleEditProfileClick = () => {
    setProfileIsEditing(!profileIsEditing);
  }

  const profileFieldsClassName = (
    `profile__info-fields
      ${profileIsEditing
        ? 'profile__info-fields_active'
        : ''
      }
    `
  );

  const hideStatusMessage = () => {
    setStatusMessage('');
  }

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

          <div className={profileFieldsClassName} onClick={hideStatusMessage}>

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
                  {statusMessage &&
                    <span className="profile__info-submit-error">
                      {statusMessage}
                    </span>
                  }
                  <button className="profile__info-submit-btn" disabled={isSubmitBtnDisabled}>
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
                      onClick={onSignOut}>
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
