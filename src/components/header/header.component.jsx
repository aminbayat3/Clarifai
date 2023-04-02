import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import { UserContext } from "../../context/user.context";

import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ReactComponent as PeopleLogo } from "../../assets/people.svg";
import aiImage from "../../assets/AI.png";
import "./header.styles.scss";

gsap.registerPlugin(TextPlugin);

const Header = () => {
  const title = useRef();
  const animationRefs = useRef([]);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const navigateToSignUpPage = () => {
    navigate("/facedetector/signup");
  };

  const navigateToFaceDetector = () => {
    navigate("/facedetector");
  };

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(title.current, { duration: 2, opacity: 0 }, { opacity: 1 });
    timeline.to(title.current, {
      duration: 4,
      text: `${title.current.innerText} Clarifai's Face Detection`,
    });

    const activeAnimations = [...animationRefs.current, timeline];

    return () => {
      activeAnimations.forEach((animation) => {
        animation.kill();
      });
    };
  }, []);

  return (
    <div className="header" id="header">
      <div className="header__content">
        <h1 ref={title} className="header__content__gradient-text">
          Let's Build Something amazing with
        </h1>
        <div className="header__content__input">
          <input
            type="email"
            placeholder="Try clarifai face recognition now!"
          />
          {currentUser ? (
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.getStarted}
              onClick={navigateToFaceDetector}
            >
              Try Clarifai
            </Button>
          ) : (
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.getStarted}
              onClick={navigateToSignUpPage}
            >
              Get Started
            </Button>
          )}
        </div>
        <div className="header__content__people">
          <PeopleLogo className="people-image" />
          <p>Over the past week, there have been 1k+ requests for a visit.</p>
        </div>
      </div>
      <div className="header__image">
        <img src={aiImage} alt="aiImage" />
      </div>
    </div>
  );
};

export default Header;

//Over the past week, there have been 1k+ requests for a visit.
