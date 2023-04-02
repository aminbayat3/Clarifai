
import { FEATURE_CLASS_TYPES } from "./feature.util";

import "./feature.styles.scss";

const Feature = ({ title, text, featureType }) => {
    return (
        <div className={`feature ${FEATURE_CLASS_TYPES[featureType]}`}>
            <div className="feature__title">
                <div />
                <h3>{title}</h3>
            </div>
            <div className={`feature__text ${FEATURE_CLASS_TYPES[featureType] === "about" ? 'large' : ''}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature;