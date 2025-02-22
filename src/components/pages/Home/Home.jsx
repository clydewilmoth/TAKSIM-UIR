import css from "./styles.module.css";
import Intro from "../../../assets/intro.mp4";
import { useTranslation } from "react-i18next";
import Dishes from "../../Dishes/Dishes";

function Home() {
  const { t } = useTranslation();

  return (
    <div className={css.home}>
      <video
        className={css.video}
        id={css.baklavaVid}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Intro} type="video/mp4" />
      </video>
      <div className={css.headingContainer}>
        <div className={css.heading}>BÄCKEREI</div>
        <div className={css.heading} id={css.kadayif}>
          KONDITOREI
        </div>
        <div className={css.heading} id={css.havuc}>
          CONFISERIE
        </div>
      </div>
      <Dishes />
    </div>
  );
}

export default Home;
