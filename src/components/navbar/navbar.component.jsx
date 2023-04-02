import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import Links from "../links/links.component";
import NavSign from "../nav-sign/nav-sign.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { LINK_TYPES_CLASSES } from "../links/link.util";

import "./navbar.styles.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => {
    setToggleMenu((prevValue) => !prevValue);
  };

  return (
    <div className="nav">
      <div className="nav__links">
        <div className="nav__links__logo">
          <Logo />
        </div>
        <Links />
      </div>
      <div className="nav__sign">
        <NavSign />
      </div>
      <div className="nav__menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={toggle} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={toggle} />
        )}
        {toggleMenu && (
          <div className="nav__menu__container scale-up">
            <Links linkType={LINK_TYPES_CLASSES.menu} />
            <div className="nav__menu__container__sign">
              <NavSign />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
