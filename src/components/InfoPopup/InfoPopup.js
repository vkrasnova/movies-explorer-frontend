import { useCallback, useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';

import './InfoPopup.css';

const InfoPopup = () => {

  const {
    isInfoPopupOpened, setIsInfoPopupOpened,
    infoPopupText, setInfoPopupText,
    infoPopupType, setInfoPopupType,
  } = useAppContext();

  const handleCloseInfoPopup = useCallback(() => {
    setIsInfoPopupOpened(false);
    setInfoPopupText('');
    setInfoPopupType('');
  }, [setIsInfoPopupOpened, setInfoPopupText, setInfoPopupType])

  useEffect(() => {

    if (!isInfoPopupOpened) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseInfoPopup();
      }
    }

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);

  }, [isInfoPopupOpened, handleCloseInfoPopup])

  const handleOverlay = (e) => {
    if (e.target.classList.contains('popup_opened')) {
      handleCloseInfoPopup();
    }
  }

  return (

    <section
      className={`popup ${isInfoPopupOpened ? "popup_opened" : ""}`}
      aria-label="Окно с информационным сообщением"
      onClick={handleOverlay}
    >

      <div className="popup__container">

        {infoPopupType && <span className={`popup__icon popup__icon_type_${infoPopupType}`} />}

        <p className="popup__text">{infoPopupText}</p>

        <button
          type="button"
          className="popup__close-btn"
          aria-label="Закрыть окно с информационным сообщением"
          onClick={handleCloseInfoPopup}
        />

      </div>

    </section>

  );

};

export default InfoPopup;

