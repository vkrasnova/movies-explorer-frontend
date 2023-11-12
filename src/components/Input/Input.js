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
  disabled,
  required

}) => {

  return (
    <div className={`input input_style_${styleCSS}`}>
      <label
        for={name}
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
        disabled={disabled}
        required={required}
      />
      {error &&
        <span className={`input__error input__field_style_${styleCSS}`}>
          {error}
        </span>}
    </div>
  )
}

export default Input;