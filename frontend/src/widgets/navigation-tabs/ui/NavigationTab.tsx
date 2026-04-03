import { NavLink } from "react-router-dom";
import type { NavigationData } from "../model/NavigationConfig";
import { useTranslation } from "react-i18next";
import styles from "./NavigationTabs.module.css";

const NavigationTab = ({ label, icon, path }: NavigationData) => {
  const { t } = useTranslation();

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.tab} ${isActive ? styles.active : ""}`
      }
    >
      <span className={styles.icon}>{icon}</span>
      <span>{t(label)}</span>
    </NavLink>
  );
};

export default NavigationTab;
