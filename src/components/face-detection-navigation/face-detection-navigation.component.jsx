import { useState, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { UserContext } from "../../context/user.context";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./face-detection-navigation.styles.scss";
import NavSign from "../nav-sign/nav-sign.component";

const FaceDetectionNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signOut = () => {
    setCurrentUser(null);
    navigate("/");
  };

  const toggle = () => {
    setToggleMenu((prevValue) => !prevValue);
  };

  return (
    <>
      <nav className="face-detection-nav">
        <Link to="/">
          <Logo />
        </Link>

        {currentUser ? (
          <div className="face-detection-nav__option" onClick={signOut}>
            Sign Out
          </div>
        ) : (
          <Link
            className="face-detection-nav__option"
            to="/facedetector/signup"
          >
            Sign up
          </Link>
        )}

        <div className="face-detection-nav__menu">
          {toggleMenu ? (
            <RiCloseLine color="#fff" size={27} onClick={toggle} />
          ) : (
            <RiMenu3Line color="#fff" size={27} onClick={toggle} />
          )}
          {toggleMenu && (
            <div className="face-detection-nav__menu__container scale-up">
              {currentUser ? (
                <div className="face-detection-nav__menu__container__option" onClick={signOut}>
                  Sign Out
                </div>
              ) : (
                <Link
                  className="face-detection-nav__menu__container__option"
                  to="/facedetector/signup"
                >
                  Sign up
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default FaceDetectionNavigation;
