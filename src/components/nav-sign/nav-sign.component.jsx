import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/user.context";

import Button from "../button/button.component";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./nav-sign.styles.scss";

const NavSign = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signOut = () => {
    setCurrentUser(null);
    navigate('/');
  };

  const navigateToSignUpPage = () => {
    navigate("/facedetector/signup");
  };

  return (
    <>
      {currentUser ? (
        <>
          <Link to="/facedetector">
            <p>Try Clarifai</p>
          </Link>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.signup}
            onClick={signOut}
          >
            Sign out
          </Button>
        </>
      ) : (
        <>
          <Link to="/facedetector/signin">
            <p>Sign in</p>
          </Link>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.signup}
            onClick={navigateToSignUpPage}
          >
            Sign up
          </Button>
        </>
      )}
    </>
  );
};

export default NavSign;
