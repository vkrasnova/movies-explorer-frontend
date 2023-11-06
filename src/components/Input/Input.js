import './Input.css';

const Input = ({

  type,
  name,
  label,
  placeholder,
  value,
  minLength,
  maxLength,
  error,
  onChange,
  required

}) => {
  return (
    <div className="input">
      <label
        className="input__label">
          {label}
      </label>
      <input
        className="input__field"
        type={type || 'text'}
        name={name}
        placeholder= {placeholder || ''}
        value={value}
        minLength={minLength || 5}
        maxLength={maxLength || 64}
        onChange={onChange}
        required={required}
      />
      {error &&
        <span className="input__error">
          {error}
        </span>}
    </div>
  )
}

export default Input;