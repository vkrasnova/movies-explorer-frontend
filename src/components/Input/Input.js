import './Input.css';

const Input = (props) => {
  return (
    <div className="input">
      <label
        className="input__label">
          {props.label}
      </label>
      <input
        className="input__field"
        type={props.type || 'text'}
        minLength={props.minLength || 5}
        maxLength={props.maxLength || 64}
        {...props}
      />
      {props.error &&
        <span className="input__error">
          {props.error}
        </span>}
    </div>
  )
}

export default Input;