import Form from '../Form/Form';
import Input from '../Input/Input';
import useFormWithValidation from '../../hooks/useFormWithValidation';

import './Register.css';
import { useEffect } from 'react';

const Register = ({ onRegister }) => {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm])

  return (

    <section className="register" aria-label="Форма для регистрации на сайте">
      <div className="register__container">

        <Form
          title="Добро пожаловать!"  
          name="register"
          showLogo="true"
          buttonText="Зарегистрироваться"
          buttonTipText="Уже зарегистрированы?"
          buttonTipLinkURL="/signin"
          buttonTipLinkText="Войти"
          isValid={isValid}
          onSubmit={handleSubmitForm}
        >

          <Input
            type="text"
            name="name"
            label="Имя"
            placeholder="Введите Ваше имя"
            minLength="2"
            value={values.name || ''}
            error={errors.name || ''}
            onChange={handleChange}
            required
          />

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
            placeholder="Придумайте пароль"
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

export default Register;
