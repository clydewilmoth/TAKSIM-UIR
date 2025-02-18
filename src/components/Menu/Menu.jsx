import menu from "../../assets/menu.svg";
import css from "./styles.module.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const [hidden, setHidden] = useState(true);
  const location = useLocation();
  menuHidden = hidden;
  menuSetHidden = setHidden;
  return (
    <>
      <img
        src={menu}
        className={css.button}
        onClick={() => setHidden(hidden ? false : true)}
      />

      <div
        className={css.menu}
        style={{
          visibility: hidden ? "hidden" : "visible",
          height: hidden ? "1.5em" : "100vh",
        }}
      >
        <Link
          to="/"
          className={location.pathname === "/" ? css.current : css.not}
        >
          <div className={css.item} style={{ opacity: hidden ? 0.0 : 1.0 }}>
            <span className={css.un} onClick={() => setHidden(true)}>
              Startseite
            </span>
          </div>
        </Link>
        <Link
          to="/bestellen"
          className={location.pathname === "/bestellen" ? css.current : css.not}
        >
          <div className={css.item} style={{ opacity: hidden ? 0.0 : 1.0 }}>
            <span className={css.un} onClick={() => setHidden(true)}>
              Bestellen
            </span>
          </div>
        </Link>
        <Link
          to="/info"
          className={location.pathname === "/info" ? css.current : css.not}
        >
          <div className={css.item} style={{ opacity: hidden ? 0.0 : 1.0 }}>
            <span className={css.un} onClick={() => setHidden(true)}>
              Über Uns
            </span>
          </div>
        </Link>
        <Link
          to="/kontakt"
          className={location.pathname === "/kontakt" ? css.current : css.not}
        >
          <div className={css.item} style={{ opacity: hidden ? 0.0 : 1.0 }}>
            <span className={css.un} onClick={() => setHidden(true)}>
              Kontakt
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export let menuHidden, menuSetHidden;
export default Menu;
