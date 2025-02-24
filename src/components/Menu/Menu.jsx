import menu from "../../assets/menu.svg";
import css from "./styles.module.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu() {
  const [hidden, setHidden] = useState(true);
  const location = useLocation();
  menuHidden = hidden;
  menuSetHidden = setHidden;
  const { t } = useTranslation();

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
          transform: hidden ? "scale(0)" : "scale(1)",
        }}
      >
        <Link
          to="/"
          className={location.pathname === "/" ? css.current : css.not}
        >
          <div className={css.item} onClick={() => setHidden(true)}>
            <span className={css.un}>{t("startseite")}</span>
          </div>
        </Link>
        <Link
          to="/bestellen"
          className={location.pathname === "/bestellen" ? css.current : css.not}
        >
          <div className={css.item} onClick={() => setHidden(true)}>
            <span className={css.un}>{t("bestellen")}</span>
          </div>
        </Link>
        <Link
          to="/überuns"
          className={
            location.pathname === "/%C3%BCberuns" ? css.current : css.not
          }
        >
          <div className={css.item} onClick={() => setHidden(true)}>
            <span className={css.un}>{t("über uns")}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export let menuHidden, menuSetHidden;
export default Menu;
