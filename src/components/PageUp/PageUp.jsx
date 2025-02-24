import css from "./styles.module.css";
import ArrowUp from "../../assets/arrow_up.svg";
import { useEffect, useState } from "react";

function PageUp() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHidden(window.scrollY > 400 ? false : true);
    });
  }, []);

  return (
    <div
      className={css.pageUp}
      style={{ transform: hidden ? "translateY(500%)" : "translateY(0)" }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={ArrowUp} className={css.arrowUp} />
    </div>
  );
}

export default PageUp;
