import { Fragment } from "react";

import formLogo from "../../assets/form-logo.png";
import "./authentication-header.styles.scss";

const AuthenticationHeader = ({ title }) => {
  return (
    <Fragment>
      <div className="login-logo">
        <img src={formLogo} alt="logo" />
      </div>
      <div className="login-title">{title}</div>
    </Fragment>
  );
};

export default AuthenticationHeader;
