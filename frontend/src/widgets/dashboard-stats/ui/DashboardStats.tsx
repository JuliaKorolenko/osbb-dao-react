import { statsConfig } from "../model/statsConfig";
import StatCard from "./StatCard";
import { useDAOStats } from "@/entities/dao/model/useDAOStats";
import { useDaoStore } from "@/store/dao/daoStore";
import { useResidentInfo } from "@/entities/wallet";
import { useWalletStore } from "@/store/wallet/walletStore";
import { useTranslation } from "react-i18next";
import styles from "./DashboardStats.module.css";

type StatKey = (typeof statsConfig)[number]["key"];
type StatsData = Partial<Record<StatKey, number | string>>;
const DashboardStats = () => {
  const { t } = useTranslation();
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
        return t(configMap[key].subtitle);
    }
  };

  return (
    <div className={styles.statsGrid}>
      {statsConfig.map((item) => {
        const { key, isBalance, ...props } = item;
        const value = statsData[key] ?? 0;
        const curValue = isBalance ? `${value} ETH` : value;

        const subtitle = getCurrentSubtitle(key);

        console.log(">>> subtitle", t(key));

        return (
          <StatCard
            key={key}
            {...props}
            value={curValue}
            subtitle={subtitle}
          />
        );
      })}
    </div>
  );
};

export default DashboardStats;
