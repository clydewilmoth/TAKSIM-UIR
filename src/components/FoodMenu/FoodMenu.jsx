import css from "./styles.module.css";
import Decor from "../../assets/decor.svg";
import DecorHr from "../../assets/decor_hr.svg";
import Bread from "../../assets/bread.png";
import { useState } from "react";

function FoodMenu() {
  return (
    <div className={css.menu}>
      <a id="süßwaren">
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
      <a id="backwaren">
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
        style={{ scale: infoHidden ? "0" : "1" }}
        onClick={() => setInfoHidden(true)}
      >
        <span>{info}</span>
      </div>
      <img
        src={image}
        className={css.image}
        onClick={() => setInfoHidden(infoHidden ? false : true)}
        style={{ scale: infoHidden ? "1" : "0" }}
      />
    </div>
  );
}

export default FoodMenu;
