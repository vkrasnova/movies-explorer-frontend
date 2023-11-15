import { useCallback, useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';

import './InfoPopup.css';

const InfoPopup = () => {

  const {
    infoPopup, setInfoPopup
  } = useAppContext();

  const handleCloseInfoPopup = useCallback(() => {
    setInfoPopup({
      opened: false,
      text: '',
      type: '',
    });
  }, [setInfoPopup])

  useEffect(() => {

    if (!infoPopup.opened) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseInfoPopup();
      }
    }

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);

  }, [infoPopup.opened, handleCloseInfoPopup])

  const handleOverlay = (e) => {
    if (e.target.classList.contains('popup_opened')) {
      handleCloseInfoPopup();
    }
  }

  return (

    <section
      className={`popup ${infoPopup.opened ? "popup_opened" : ""}`}
      aria-label="Окно с информационным сообщением"
      onClick={handleOverlay}
    >

      <div className="popup__container">

        {infoPopup.type && <span className={`popup__icon popup__icon_type_${infoPopup.type}`} />}

        <p className="popup__text">{infoPopup.text}</p>

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

