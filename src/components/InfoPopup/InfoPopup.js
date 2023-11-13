import { useEffect } from 'react';

import './InfoPopup.css';

const InfoPopup = ({ isOpened, onClose, text }) => {

  useEffect(() => {

    if (!isOpened) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);

  }, [isOpened, onClose])

  const handleOverlay = (e) => {
    if (e.target.classList.contains('popup_opened')) {
      onClose();
    }
  }

  return (

    <section
      className={`popup ${isOpened ? "popup_opened" : ""}`}
      aria-label="Окно с информационным сообщением"
      onClick={handleOverlay}
    >

      <div className="popup__container">

        <p className="popup__text">{text}</p>

      <button
        type="button"
        className="popup__close-btn"
        aria-label="Закрыть окно с информационным сообщением"
        onClick={onClose}
      />

      </div>

    </section>

  );

};

export default InfoPopup;

