import { useTranslation } from "react-i18next";
import { useWalletStore } from "@/store/wallet/walletStore";
import styles from "./ResidentStatus.module.css";

export const ResidentStatus = () => {
  const { t } = useTranslation();
  const { isConnected, residentInfo } = useWalletStore((state) => state);

  if (!isConnected) return null;

  const bageValue = residentInfo?.isActive
    ? t("common.resident")
    : t("common.guest");
  const bageClass = `${styles.bageResident} ${residentInfo?.isActive ? "" : styles.guest}`;

  const adminBadge = residentInfo?.isAdmin ? (
    <span className={`${styles.bageResident} ${styles.admin}`}>
      {t("common.admin")}
    </span>
  ) : null;

  return (
    <div className={styles.residentStatus}>
      {adminBadge}
      <span className={bageClass}>{bageValue}</span>
    </div>
  );
};
