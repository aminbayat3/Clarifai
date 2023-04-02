import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormFieldsUpdate } from "../../hooks/useFormFieldsUpdate.js";
import { useCancellableFetch } from "../../hooks/useCancellableFetch.js";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import AuthenticationHeader from "../../components/authentication-header/authentication-header.component";
import Spinner from "../../components/spinner/spinner.component";

import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import { fetchOption } from "../../utils/fetch-utility-functions.js";
import passwordLabel from "../../assets/password-label.png";
import emailLabel from "../../assets/email-label.png";
import nameLabel from "../../assets/name-label.png";

import "./sign-up.styles.scss";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [onHandleChange, formFields, onHandleSubmit, body] =
    useFormFieldsUpdate(defaultFormFields);
  const [isLoading, authenticate, abort] = useCancellableFetch();
  const { name, email, password } = formFields;

  useEffect(() => {
    const option = fetchOption("post", body);
    authenticate("http://localhost:3000/signup", option, body);

    return () => abort();
  }, [body]);

  return (
    <div className="signup">
      {isLoading ? (
        <Spinner />
      ) : (
        <form className="signup__form" onSubmit={onHandleSubmit}>
          <AuthenticationHeader title="Sign Up" />
          <FormInput
            placeholder="Name"
            label={nameLabel}
            name="name"
            value={name}
            onChange={onHandleChange}
            type="text"
          />
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
          <div className="signup__form__footer">
            <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.signup}>
              Sign Up
            </Button>
            <Link to="/facedetector/signin" className="signup__form__footer__login">
              Sign In
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUp;
