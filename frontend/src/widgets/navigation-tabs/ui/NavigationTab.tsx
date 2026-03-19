import { NavLink } from "react-router-dom";
import type { NavigationData } from "../model/NavigationConfig";
import styles from "./NavigationTabs.module.css";

const NavigationTab = ({ title, icon, path }: NavigationData) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.tab} ${isActive ? styles.active : ""}`
      }
    >
      <span className={styles.icon}>{icon}</span>
      <span>{title}</span>
    </NavLink>
  );
};

export default NavigationTab;
