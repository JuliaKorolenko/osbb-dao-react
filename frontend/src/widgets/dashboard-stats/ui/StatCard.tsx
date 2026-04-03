import type { StatCardProps } from "../model/statsConfig";
import { useTranslation } from "react-i18next";
import styles from "./DashboardStats.module.css";

const StatCard = ({
  label,
  icon,
  iconColor,
  sublabel,
  value,
}: StatCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.statCard}>
      <div className={styles.statCardHeader}>
        <div className={`${styles.statIcon} ${styles[iconColor]}`}>{icon}</div>
      </div>
      <div className={styles.statLabel}>{t(label)}</div>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statSubtitle}>{t(sublabel)}</div>
    </div>
  );
};

export default StatCard;
