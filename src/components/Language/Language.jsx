import language from "../../assets/language.svg";
import css from "./styles.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Language() {
  const [hidden, setHidden] = useState(true);
  languageHidden = hidden;
  languageSetHidden = setHidden;

  const { t, i18n } = useTranslation();

  return (
    <>
      <img
        src={language}
        className={css.button}
        onClick={() => setHidden(hidden ? false : true)}
      />
      <div
        className={css.language}
        style={{
          visibility: hidden ? "hidden" : "visible",
          height: hidden ? "1.5em" : "100vh",
        }}
      >
        <div
          className={css.item}
          style={{ opacity: hidden ? 0.0 : 1.0 }}
          onClick={() => {
            setHidden(true);
            i18n.changeLanguage("de");
          }}
        >
          <div className={i18n.language === "de" ? css.current : css.not}>
            <span className={css.un}>{t("deutsch")}</span>
          </div>
        </div>
        <div
          className={css.item}
          style={{ opacity: hidden ? 0.0 : 1.0 }}
          onClick={() => {
            setHidden(true);
            i18n.changeLanguage("tr");
          }}
        >
          <div className={i18n.language === "tr" ? css.current : css.not}>
            <span className={css.un}>{t("türkisch")}</span>
          </div>
        </div>

        <div
          className={css.item}
          style={{ opacity: hidden ? 0.0 : 1.0 }}
          onClick={() => {
            setHidden(true);
            i18n.changeLanguage("en");
          }}
        >
          <div className={i18n.language === "en" ? css.current : css.not}>
            <span className={css.un}>{t("englisch")}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export let languageHidden, languageSetHidden;
export default Language;
