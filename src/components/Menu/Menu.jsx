import menu from "../../assets/menu.svg";
import css from "./styles.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";

function Menu() {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <img src={menu} className={css.button} onClick={() => setHidden(false)} />
      {hidden
        ? ""
        : createPortal(
            <div className={css.menu}>PENIS</div>,
            document.querySelector("#layout")
          )}
    </>
  );
}

export default Menu;
