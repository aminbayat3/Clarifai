

import { bloom, zillow, buffer, trivago, volvo } from "./brand.imports";
import "./brand.styles.scss";

const Brand = () => {
    return (
        <div className="brand">
            <div>
                <img src={zillow} alt="zillow" />
            </div>
            <div>
                <img src={trivago} alt="trivago" />
            </div>
            <div>
                <img src={bloom} alt="bloom" />
            </div>
            <div>
                <img src={volvo} alt="volvo" />
            </div>
            <div>
                <img src={buffer} alt="buffer" />
            </div>
        </div>
    )
}

export default Brand;