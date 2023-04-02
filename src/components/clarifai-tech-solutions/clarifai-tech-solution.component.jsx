import techSolutionImage from "../../assets/robot.png";

import "./clarifai-tech-solution.styles.scss";

const ClarifaiTechSolution = () => {
  return (
    <div className="tech-solution" id="techSolution">
      <div className="tech-solution__image">
        <img src={techSolutionImage} alt="tech-solutions" />
      </div>
      <div className="tech-solution__content">
        <h2 className="tech-solution__content__gradient-text">
          Empowering Your Robots with Visual AI: How Clarifai is Advancing
          Robotics in the Digital Age
        </h2>
        <p>Clarifai's contributions to the advancement of robotics technology through visual AI are transforming the way robots operate and interact with the world around them, opening up new possibilities for automation and innovation in various industries.</p>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default ClarifaiTechSolution;
