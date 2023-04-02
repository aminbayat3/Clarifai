import "./rotating-planets.styles.scss";

const RotatingPlanets = () => {
  
  return (
    <div className="planets">
      <div className="sun"></div>

      <div  className="planet-index planet-index--first">
        <div className="route">
          <div className="planet-container planet-container--first">
            <div className="planet planet--first"></div>
          </div>
        </div>
      </div>

      <div  className="planet-index planet-index--second">
        <div className="route">
          <div className="planet-container planet-container--second">
            <div className="planet planet--second"></div>
          </div>
        </div>
      </div>

      <div className="planet-index planet-index--third">
        <div className="route">
          <div className="planet-container planet-container--third">
            <div className="planet planet--third"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingPlanets;
