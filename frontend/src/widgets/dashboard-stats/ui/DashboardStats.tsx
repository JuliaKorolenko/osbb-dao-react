import { statsConfig } from "../model/statsConfig";
import styles from "./DashboardStats.module.css";
import StatCard from "./StatCard";

type StatKey = (typeof statsConfig)[number]["key"];
type StatsData = Partial<Record<StatKey, number | string>>;
const DashboardStats = () => {
  const statsData: StatsData = {
    balance: "12.0",
    // members: 48,
  };

  return (
    <div className={styles.statsGrid}>
      {statsConfig.map((item) => {
        const { key, ...props } = item;
        return (
          <StatCard
            key={key}
            {...props}
            value={statsData[key] ?? 0}
          />
        );
      })}
    </div>
  );
};

export default DashboardStats;
