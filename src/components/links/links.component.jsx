
import { LINK_TYPES_CLASSES } from "./link.util";
import { LINKS } from "./link.util";

import "./links.styles.scss";

const Links = ({ linkType }) => {
    return (
        <div className={`links ${linkType ? LINK_TYPES_CLASSES[linkType] : ''}`}>
            {
                LINKS.map(({ text, ref }) => (
                    <p key={ref}><a href={ref}>{text}</a></p>
                ))
            }
        </div>
    )
}

export default Links;