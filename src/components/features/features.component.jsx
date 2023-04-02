import Feature from "../feature/feature.component";
import RotatingPlanets from "../rotating-planets/rotating-planets.component";

import { FEATURE_CLASS_TYPES } from "../feature/feature.util";
import { FEATURES_DATA } from "./features.util";

import "./features.styles.scss";

const Features = () => {
  return (
    <div className="features" id="features">
      <div className="features__heading">
        <RotatingPlanets />
        <h2 className="features__heading__gradient-text">
          Explore the Universe with Clarifai:Empowering Space Discovery through
          AI! Embrace the future today
        </h2>
        <p>Get a Head Start - Request Early Access to Our Platform</p>
      </div>
      <div className="features__list">
        {FEATURES_DATA.map(({ title, text }, index) => (
          <Feature
            title={title}
            text={text}
            key={title + index}
            featureType={FEATURE_CLASS_TYPES.list}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
