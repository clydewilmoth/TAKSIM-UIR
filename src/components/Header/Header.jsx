import css from "./styles.module.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import language from "../../assets/language.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [big, setBig] = useState("18vmax");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBig(window.scrollY > 1 ? "0vmax" : "18vmax");
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setBig(window.scrollY > 1 ? "0vmax" : "18vmax");
      });
  }, []);

  return (
    <div className={css.header}>
      <div className={css.logoWrapper}>
        <Link to="/">
          <img
            src={logo}
            className={css.logo}
            style={
              big === "18vmax" ? { height: "12vmax" } : { height: "5vmax" }
            }
          />
        </Link>
      </div>
      <div className={css.nav}>
        <img src={menu} className={css.menu} />
        <img src={language} className={css.language} />
      </div>
    </div>
  );
}

export default Header;
