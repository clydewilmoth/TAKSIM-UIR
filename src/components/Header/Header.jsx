import css from "./styles.module.css";
import Menu from "../Menu/Menu";
import Language from "../Language/Language";
import Logo from "../../assets/logo.svg";
import SmallLogo from "../../assets/logo_s.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuHidden, menuSetHidden } from "../Menu/Menu";
import { languageHidden, languageSetHidden } from "../Language/Language";

function Header() {
  const [big, setBig] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setBig(
      window.scrollY < 1 &&
        menuHidden &&
        languageHidden &&
        location.pathname === "/"
        ? true
        : false
    );
    window.addEventListener("scroll", () =>
      setBig(
        window.scrollY < 1 &&
          menuHidden &&
          languageHidden &&
          location.pathname === "/"
          ? true
          : false
      )
    );
    window.addEventListener("click", () =>
      setBig(
        window.scrollY < 1 &&
          menuHidden &&
          languageHidden &&
          location.pathname === "/"
          ? true
          : false
      )
    );
    return () => {
      window.removeEventListener("scroll", () =>
        setBig(
          window.scrollY < 1 &&
            menuHidden &&
            languageHidden &&
            location.pathname === "/"
            ? true
            : false
        )
      );
      window.addEventListener("click", () =>
        setBig(
          window.scrollY < 1 &&
            menuHidden &&
            languageHidden &&
            location.pathname === "/"
            ? true
            : false
        )
      );
    };
  }, [big, location, menuHidden, languageHidden]);

  return (
    <div className={css.header}>
      <div
        className={css.logoWrapper}
        style={{
          padding:
            big && location.pathname === "/"
              ? "0.5em min(1em, 2vw) min(0.5em, 0.5vw) min(1em, 2vw)"
              : "0.5em 0 0 0",
        }}
      >
        <Link to="/">
          <img
            src={location.pathname === "/" ? Logo : SmallLogo}
            className={css.logo}
            style={{
              height: big && location.pathname === "/" ? "25vw" : "2.5em",
            }}
            onClick={() => {
              menuSetHidden(true);
              languageSetHidden(true);
            }}
          />
        </Link>
      </div>
      <div
        className={css.nav}
        style={{ maxWidth: big && location.pathname === "/" ? "30em" : "15em" }}
      >
        <Menu />
        <Language />
      </div>
    </div>
  );
}

export default Header;
