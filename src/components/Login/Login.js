import { useEffect } from 'react';

import Form from '../Form/Form';
import Input from '../Input/Input';
import useFormWithValidation from '../../hooks/useFormWithValidation';

import './Login.css';

const Login = ({ onLogin }) => {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm])

  return (
    <section className="login" aria-label="Форма для авторизации на сайте">
      <div className="login__container">

        <Form
          title="Рады видеть!"
          name="login"
          showLogo="true"
          buttonText="Войти"
          buttonTipText="Ещё не зарегистрированы?"
          buttonTipLinkURL="/signup"
          buttonTipLinkText="Регистрация"
          isValid={isValid}
          onSubmit={handleSubmitForm}
        >

          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Введите Ваш email"
            value={values.email || ''}
            error={errors.email || ''}
            onChange={handleChange}
            required
          />

          <Input
            type="password"
            name="password"
            label="Пароль"
            placeholder="Введите Ваш пароль"
            value={values.password || ''}
            error={errors.password || ''}
            onChange={handleChange}
            required
          />

        </Form>

      </div>
    </section>
  );
}

export default Login;
