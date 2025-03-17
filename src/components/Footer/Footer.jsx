import css from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";
import Instagram from "../../assets/instagram.svg";
import Logo from "../../assets/logo.svg";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.dataPolicy}>
          <div className={css.heading}>{t("Datenrichtlinien")}</div>
          <div className={css.privacyPolicy}>{t("Datenschutz")}</div>
          <div className={css.legalNotice}>{t("Impressum")}</div>
        </div>
        <div className={css.contact}>
          <div className={css.heading}>{t("Kontaktiere uns")}</div>
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
          <Link to="/">
            <img src={Logo} className={css.logo} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
