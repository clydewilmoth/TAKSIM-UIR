import css from "./styles.module.css";
import Intro from "../../../assets/intro.mp4";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FoodMenu from "../../FoodMenu/FoodMenu";
import Decor from "../../../assets/decor2.svg";

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
        <div
          className={css.heading}
          onClick={() => {
            document
              .getElementById("süßwaren")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("SÜßWAREN")}
        </div>

        <div
          className={css.heading}
          onClick={() => {
            document
              .getElementById("torten")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("TORTEN")}
        </div>

        <div
          className={css.heading}
          onClick={() => {
            document
              .getElementById("backwaren")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("BACKWAREN")}
        </div>
      </div>
      <FoodMenu />
      <Link to="/bestellen">
        <div className={css.slider}>
          <div className={css.slideTrack}>
            <div className={css.slide}>BESTELLEN</div>
            <div className={css.slide}>ABHOLEN</div>
            <div className={css.slide} id={css.smallDevice}>
              BESTELLEN
            </div>
            <div className={css.slide} id={css.smallDevice}>
              ABHOLEN
            </div>
          </div>
          <div className={css.slideTrackHidden}>
            <div className={css.slide}>BESTELLEN</div>
            <div className={css.slide}>ABHOLEN</div>
            <div className={css.slide} id={css.smallDevice}>
              BESTELLEN
            </div>
            <div className={css.slide} id={css.smallDevice}>
              ABHOLEN
            </div>
          </div>
        </div>
      </Link>

      <div className={css.location}>
        <a
          href="https://www.google.com/maps/place/Taksim+Baklavaci/@49.4906527,8.4639124,1393m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4797cc24dc58cd8f:0x8477dbef2ed4c00c!8m2!3d49.4906492!4d8.4664873!16s%2Fg%2F11c44pc18b?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className={css.mapsLink}
        >
          <img src={Decor} className={css.decor} />

          <div className={css.textHeading}>H3 1, 68159 Mannheim</div>

          <div className={css.details}></div>
          <img src={Decor} className={css.decor} id={css.flip} />
        </a>
      </div>
    </div>
  );
}

export default Home;
