import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  signup: "signup",
  getStarted: "getStarted",
  register: "register"
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
