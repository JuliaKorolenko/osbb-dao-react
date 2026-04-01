import { useWalletStore } from "@/store/wallet/walletStore";
import styles from "./ResidentStatus.module.css";

export const ResidentStatus = () => {
  const { isConnected, residentInfo } = useWalletStore((state) => state);

  if (!isConnected) return null;

  const bageValue = residentInfo?.isActive ? "Резидент" : "Гість";
  const bageClass = `${styles.bageResident} ${residentInfo?.isActive ? "" : styles.guest}`;

  const adminBadge = residentInfo?.isAdmin ? (
    <span className={`${styles.bageResident} ${styles.admin}`}>Адмін</span>
  ) : null;

  return (
    <div className={styles.residentStatus}>
      {adminBadge}
      <span className={bageClass}>{bageValue}</span>
    </div>
  );
};
