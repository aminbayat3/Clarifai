import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import { UserContext } from "../../context/user.context";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./register.styles.scss";

const Register = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const navigateToSignUpPage = () => {
    navigate("/facedetector/signup");
  };

  const navigateToFaceDetector = () => {
    navigate("/facedetector");
  };

  return (
    <div className="register">
      <div className="register__content">
        <p>Get a Head Start by Requesting Early Access</p>
        <h4>Sign Up Today and Discover Limitless Opportunities</h4>
      </div>
      {currentUser ? (
        <Button
          buttonType={BUTTON_TYPE_CLASSES.register}
          onClick={navigateToFaceDetector}
        >
          Try Clarifai
        </Button>
      ) : (
        <Button
          buttonType={BUTTON_TYPE_CLASSES.register}
          onClick={navigateToSignUpPage}
        >
          Register
        </Button>
      )}
    </div>
  );
};

export default Register;
