import { statsConfig } from "../model/statsConfig";
import StatCard from "./StatCard";
import { useDAOStats } from "@/entities/dao/useDAOStats";
import { useDaoStore } from "@/store/dao/daoStore";
import { useResidentInfo } from "@/entities/wallet/useResidentInfo";
import { useWalletStore } from "@/store/wallet/walletStore";
import styles from "./DashboardStats.module.css";

type StatKey = (typeof statsConfig)[number]["key"];
type StatsData = Partial<Record<StatKey, number | string>>;
const DashboardStats = () => {
  useDAOStats();
  useResidentInfo();

  const { residentInfo } = useWalletStore((state) => state);
  const { balance, residents, totalArea, proposals } = useDaoStore();

  const statsData: StatsData = {
    balance,
    residents,
    proposals,
    votes: residentInfo?.votingPower ?? 0,
  };

  const configMap = Object.fromEntries(
    statsConfig.map((item) => [item.key, item]),
  ) as Record<StatKey, (typeof statsConfig)[number]>;

  const getCurrentSubtitle = (key: StatKey) => {
    switch (key) {
      case "residents":
        return `${totalArea} м² загальна площа`;
      case "votes": {
        const areaValue = `${residentInfo?.area ?? "0"}`;
        return `${areaValue} ${configMap[key].subtitle}`;
      }
      default:
        return configMap[key].subtitle;
    }
  };

  return (
    <div className={styles.statsGrid}>
      {statsConfig.map((item) => {
        const { key, ...props } = item;
        const value = statsData[key] ?? 0;

        const subtitle = getCurrentSubtitle(key);

        return (
          <StatCard
            key={key}
            {...props}
            value={value}
            subtitle={subtitle}
          />
        );
      })}
    </div>
  );
};

export default DashboardStats;
