import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormFieldsUpdate } from "../../hooks/useFormFieldsUpdate";
import { useToggle } from "../../hooks/useToggle";
import { useCancellableFetch } from "../../hooks/useCancellableFetch";

import AuthenticationHeader from "../../components/authentication-header/authentication-header.component";
import FormInput from "../../components/form-input/form-input.component";
import Checkbox from "../../components/checkbox/checkbox.component";
import Button from "../../components/button/button.component";
import Spinner from "../../components/spinner/spinner.component";

import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import { fetchOption } from "../../utils/fetch-utility-functions";
import passwordLabel from "../../assets/password-label.png";
import emailLabel from "../../assets/email-label.png";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const defaultCheckboxValues = {
  rememberMeChecked: false,
};

const SignIn = () => {
  const [onHandleChange, formFields, onHandleSubmit, body] =
    useFormFieldsUpdate(defaultFormFields);
  const [toggleValue, value] = useToggle(defaultCheckboxValues);
  const [isLoading, authenticate, abort] = useCancellableFetch();

  const { email, password } = formFields;
  const { rememberMeChecked } = value;

  useEffect(() => {
    const option = fetchOption("post", body);
    authenticate("http://localhost:3000/signin", option, body);

    return () => {
      abort();
    };
  }, [body]);

  return (
    <div className="signin">
      {isLoading ? (
        <Spinner />
      ) : (
        <form className="signin__form" onSubmit={onHandleSubmit}>
          <AuthenticationHeader title="Log In" />
          <FormInput
            placeholder="Email"
            label={emailLabel}
            name="email"
            value={email}
            onChange={onHandleChange}
            type="email"
          />
          <FormInput
            placeholder="Password"
            label={passwordLabel}
            name="password"
            value={password}
            onChange={onHandleChange}
            type="password"
          />
          <Checkbox
            type="checkbox"
            label="Remember Me"
            name="rememberMeChecked"
            checked={rememberMeChecked}
            onChange={toggleValue}
          />
          <div className="signin__form__footer">
            <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.signup}>
              Log In
            </Button>
            <Link to="/facedetector/signup" className="signin__form__footer__register">
              Register
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignIn;
