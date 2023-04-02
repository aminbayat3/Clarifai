import "./form-input.styles.scss";

const FormInput = ({ label, ...inputOptions }) => {
  return (
    <div className={`form-input ${inputOptions.name === 'password' ? 'margin' : ''}`}>
      <input className="form-input__input" {...inputOptions} />
      <label className="form-input__label">
        <img className={inputOptions.name} src={label} alt="label" />
      </label>
    </div>
  );
};

export default FormInput;
