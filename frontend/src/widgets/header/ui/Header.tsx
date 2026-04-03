import { useTranslation } from "react-i18next";
import { HeaderPanel } from "./HeaderPanel";
import { SelectLang } from "@/features/select-lang/ui/SelectLang";
import styles from "./Header.module.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const subtitle = i18n.language === "en" ? t("header.hoa-subtitle") : null;
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>🏢</div>
        <div className={styles.logoText}>
          <h1>{t("header.hoa-title")}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <p className={styles.description}>{t("header.description")}</p>
        </div>
      </div>
      <div className={styles.wallet}>
        <HeaderPanel />
      </div>
      <SelectLang />
    </div>
  );
};

export default Header;
