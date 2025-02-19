import css from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";
import Instagram from "../../assets/instagram.svg";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.dataPolicy}>
          <div className={css.heading}>{t("datenrichtlinien")}</div>
          <div className={css.privacyPolicy}>{t("datenschutz")}</div>
          <div className={css.legalNotice}>{t("impressum")}</div>
        </div>
        <div className={css.contact}>
          <div className={css.heading}>{t("kontakt")}</div>
          <div className={css.phoneWrapper}>
            <a href="tel:+4962127939">
              <img src={Phone} className={css.phone} />
            </a>
            +49 621 27939
          </div>
          <div className={css.mailWrapper}>
            <a href="mailto:info@taksim-backwaren.de">
              <img src={Mail} className={css.mail} />
            </a>
            info@taksim-
            <br />
            backwaren.de
          </div>
          <div className={css.instagramWrapper}>
            <a
              href="https://www.instagram.com/taksimbaklavalari/"
              target="_blank"
            >
              <img src={Instagram} className={css.instagram} />
            </a>
            taksimbaklavalari
          </div>
        </div>
        <div className={css.brand}>
          <div className={css.name}>Taksim </div>Baklavacı{" "}
          <div className={css.since}>
            {i18n.language === "tr" ? "1979" + t("seit") : t("seit") + " 1979"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
