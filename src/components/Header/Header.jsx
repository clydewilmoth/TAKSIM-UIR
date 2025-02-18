import css from "./styles.module.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import language from "../../assets/language.svg";
import { useEffect, useState } from "react";

function Header() {
  const [seeThrough, setSeeThrough] = useState(false);
  const [big, setBig] = useState("18vmax");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSeeThrough(window.scrollY > 1 ? true : false);
      setBig(window.scrollY > 1 ? "0vmax" : "18vmax");
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setSeeThrough(window.scrollY > 1 ? true : false);
        setBig(window.scrollY > 1 ? "0vmax" : "18vmax");
      });
  }, []);

  return (
    <div
      className={css.header}
      style={seeThrough === false ? { opacity: 1.0 } : { opacity: 0.85 }}
    >
      <div className={css.logoWrapper}>
        <img
          src={logo}
          className={css.logo}
          style={big === "18vmax" ? { height: "12vmax" } : { height: "5vmax" }}
        />
      </div>
      <div className={css.nav}>
        <img src={menu} className={css.menu} />
        <img src={language} className={css.language} />
      </div>
    </div>
  );
}

export default Header;
