import './Input.css';

const Input = ({

  styleCSS = 'default',
  type,
  name,
  label,
  placeholder,
  value,
  minLength,
  maxLength,
  error,
  onChange,
  pattern,
  disabled,
  required,
}) => {

  return (
    <div className={`input input_style_${styleCSS}`}>
      <label
        htmlFor={name}
        className={`input__label input__label_style_${styleCSS}`}>
          {label}
      </label>
      <input
        className={`input__field input__field_style_${styleCSS}`}
        type={type || 'text'}
        id={name}
        name={name}
        placeholder= {placeholder}
        value={value}
        minLength={minLength || 5}
        maxLength={maxLength || 64}
        onChange={onChange}
        pattern={pattern}
        disabled={disabled}
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