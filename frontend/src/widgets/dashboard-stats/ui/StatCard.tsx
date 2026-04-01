import type { StatCardProps } from "../model/statsConfig";
import { useTranslation } from "react-i18next";
import styles from "./DashboardStats.module.css";

const StatCard = ({
  title,
  icon,
  iconColor,
  subtitle,
  value,
}: StatCardProps) => {
  const { t, i18n } = useTranslation();

  // console.log(">>> lang", title);

  return (
    <div className={styles.statCard}>
      <div className={styles.statCardHeader}>
        <div className={`${styles.statIcon} ${styles[iconColor]}`}>{icon}</div>
      </div>
      <div className={styles.statLabel}>{t(title)}</div>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statSubtitle}>{subtitle}</div>
    </div>
  );
};

export default StatCard;
