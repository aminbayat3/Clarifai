import Tilt from "react-parallax-tilt";
import aiRobot from '../../assets/ai-robot.png';
// import robot from '../../assets/robot.png'

import "./home-logo.styles.scss";

const HomeLogo = () => {
  return (
      <Tilt className="home-logo" tiltMaxAngleX={50} tiltMaxAngleY={50} >
          <img src={aiRobot} alt="robot" />
      </Tilt>
  );
};

export default HomeLogo;
