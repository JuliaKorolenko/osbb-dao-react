import { useState } from "react";
import { useWalletStore } from "@/store/wallet/walletStore";
import { formatAddress } from "@/shared/lib/formatAddress";
import styles from "./WalletInfo.module.css";

export const WalletInfo = () => {
  const { address, isConnected } = useWalletStore((state) => state);

  const shortAddress = formatAddress(address);
  const zerroAddress = "0x0000...0000";

  const curAddress = isConnected ? shortAddress : zerroAddress;

  const [isCopied, setIsCopied] = useState(false);

  const copyAddress = () => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className={styles.walletInfo}>
      <div className={styles.walletStatus}>
        <div
          className={`${styles.statusDot} ${isConnected ? styles.online : ""}`}
        ></div>
      </div>
      <div
        className={`${styles.walletAddress} ${isConnected ? "" : styles.disabled}`}
      >
        {curAddress}
      </div>
      <div
        className={`${styles.walletCopy} ${isConnected ? "" : styles.disabled}`}
        onClick={copyAddress}
        title="Copy address"
      >
        {isCopied ? (
          <span className={styles.checkIcon}>✓</span>
        ) : (
          <span className={styles.copyIcon}>⧉</span>
        )}
      </div>
    </div>
  );
};
