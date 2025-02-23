import css from "./styles.module.css";
import Decor from "../../assets/decor.svg";
import DecorHr from "../../assets/decor_hr.svg";
import Bread from "../../assets/bread.png";
import { useState } from "react";

function Dishes() {
  return (
    <div className={css.dishes}>
      <a id="süßware">
        <img src={Decor} className={css.decor} />
      </a>
      <div className={css.category}>
        <Card image={Bread} info={"Yummy"} />
        <Card image={Bread} info={"Yummy"} />
        <Card image={Bread} info={"Yummy"} />
      </div>
      <a id="torten">
        <img src={DecorHr} className={css.decor} />
      </a>
      <div className={css.category}>
        <Card image={Bread} info={"Yummy"} />
        <Card image={Bread} info={"Yummy"} />
        <Card image={Bread} info={"Yummy"} />
      </div>
      <a id="backware">
        <img src={DecorHr} className={css.decor} id={css.flip} />
      </a>
      <div className={css.category}>
        <Card image={Bread} info={"Yummy"} />
        <Card image={Bread} info={"Yummy"} />
        <Card image={Bread} info={"Yummy"} />
      </div>
      <img src={Decor} className={css.decor} id={css.flip} />
    </div>
  );
}

function Card({ image, info }) {
  const [infoHidden, setInfoHidden] = useState(true);

  return (
    <div className={css.card}>
      <div
        className={css.info}
        style={{
          visibility: infoHidden ? "hidden" : "visible",
          backgroundColor: infoHidden ? "transparent" : "#FFF6F3",
        }}
        onClick={() => setInfoHidden(true)}
      >
        <span style={{ opacity: infoHidden ? 0.0 : 1.0 }}>{info}</span>
      </div>
      <img
        src={image}
        className={css.image}
        onClick={() => setInfoHidden(infoHidden ? false : true)}
      />
    </div>
  );
}

export default Dishes;
