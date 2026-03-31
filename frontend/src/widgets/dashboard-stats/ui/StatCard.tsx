import type { StatCardProps } from "../model/statsConfig";
import styles from "./DashboardStats.module.css";

const StatCard = ({
  title,
  icon,
  iconColor,
  subtitle,
  isBalance = false,
  value,
}: StatCardProps) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statCardHeader}>
        <div className={`${styles.statIcon} ${styles[iconColor]}`}>{icon}</div>
      </div>
      <div className={styles.statLabel}>{title}</div>
      <div className={styles.statValue}>
        {isBalance ? `${value} ETH` : value}
      </div>
      <div className={styles.statSubtitle}>{subtitle}</div>
    </div>
  );
};

export default StatCard;
