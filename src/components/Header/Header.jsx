import css from "./styles.module.css";
import logo from "../../assets/logo.svg";
import Menu from "../Menu/Menu";
import Language from "../Language/Language";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <Menu />
        <Language />
      </div>
    </div>
  );
}

export default Header;
