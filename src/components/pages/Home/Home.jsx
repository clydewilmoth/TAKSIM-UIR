import css from "./styles.module.css";
import Intro from "../../../assets/intro.mp4";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Dishes from "../../Dishes/Dishes";
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
        <a className={css.headingLink} href="#süßwaren">
          <div className={css.heading}>{t("SÜßWAREN")}</div>
        </a>
        <a className={css.headingLink} href="#torten">
          <div className={css.heading} id={css.kadayif}>
            {t("TORTEN")}
          </div>
        </a>
        <a className={css.headingLink} href="#backwaren">
          <div className={css.heading} id={css.havuc}>
            {t("BACKWAREN")}
          </div>
        </a>
      </div>
      <Dishes />
      <div className={css.order}>
        <Link className={css.link} to="/bestellen">
          <div className={css.textHeading}>{t("bestellen")}</div>
        </Link>
        <div className={css.details}>
          {t(
            "Stellen Sie sich jetzt ganz einfach Ihre eigene Bestellung aus allen aufgeführten Produkten zusammen. Wenn Ihre Bestellung abholbereit ist, werden Sie dann per Telefonat oder Email benachrichtigt und können direkt beim Abholen bar bezahlen."
          )}
        </div>
      </div>
      <div className={css.location}>
        <img src={Decor} className={css.decor} />
        <a
          href="https://www.google.com/maps/place/Taksim+Baklavaci/@49.4906527,8.4639124,1393m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4797cc24dc58cd8f:0x8477dbef2ed4c00c!8m2!3d49.4906492!4d8.4664873!16s%2Fg%2F11c44pc18b?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className={css.mapsLink}
        >
          <div className={css.textHeading}>{t("Standort")}</div>
          <div className={css.details}>
            <span className={css.increaseFontSize}>H3 1, 68159 Mannheim</span>
          </div>
        </a>
        <div className={css.details}>
          {t(
            "Kommen Sie vorbei und überzeugen Sie sich selbst von unserer türkischen Meisterbackkunst."
          )}
        </div>
        <img src={Decor} className={css.decor} id={css.flip} />
      </div>
    </div>
  );
}

export default Home;
