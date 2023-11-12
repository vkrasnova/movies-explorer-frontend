import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

import './Form.css';

const Form = ({

  title,
  name,
  showLogo,
  buttonText,
  buttonTipText,
  buttonTipLinkURL,
  buttonTipLinkText,
  isValid,
  children,
  ...props

}) => {

  return (
  
  <div className="form">

      <div className="form__header">
        {showLogo &&
          <div className="form__logo">
            <Logo />
          </div>
        }
        <h1 className="form__title">{title}</h1>
      </div>

      <form
        className="form__form"
        name={`${name}-form`}
        noValidate
        {...props}
      >

        <div className="form__inputs">

          {children}

        </div>
          
        <div className="form__submit-container">

          <button
            type="submit"
            className="form__submit-btn"
            disabled={!isValid}
          >
              {buttonText}
          </button>

            <p className="form__submit-text">
              {buttonTipText} {buttonTipLinkText && 
              (
                <Link
                  className="form__submit-text-link"
                  to={buttonTipLinkURL}>
                    {buttonTipLinkText}
                </Link>
              )} 
            </p>
        </div>

      </form>

    </div>

  );
}

export default Form;