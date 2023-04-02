import Feature from "../feature/feature.component";

import { FEATURE_CLASS_TYPES } from "../feature/feature.util";
import { CLARIFAI_FEATURES } from "./aboutClarifai.util";

import "./about-clarifai.styles.scss";

const AboutClarifai = () => {
  return (
    <div className="about-clarifai" id="aclarifai">
      <div className="about-clarifai__feature">
        <Feature
          title={CLARIFAI_FEATURES.about.title}
          text={CLARIFAI_FEATURES.about.text}
          featureType={FEATURE_CLASS_TYPES.about}
        />
      </div>
      <div className="about-clarifai__heading">
        <h2 className="about-clarifai__heading__gradient-text">
          Harnessing the Power of Image Recognition with Clarifai API
        </h2>
        <p><a href="https://www.clarifai.com/">Explore Clarifai Website</a></p>
      </div>
      <div className="about-clarifai__usecases">
        {
            CLARIFAI_FEATURES.useCases.map(({title, text}, index) => (
                <Feature key={title + index} title={title} text={text} />
            ))
        }
      </div>
    </div>
  );
};

export default AboutClarifai;