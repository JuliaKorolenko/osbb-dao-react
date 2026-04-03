import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useConnectWallet } from "../../model/useConnectWallet";
import styles from "./ConnectWalletButton.module.css";

const ConnectWalletButtonComponent = () => {
  const { t } = useTranslation();
  const { connect, disconnect, isConnected } = useConnectWallet();

  if (isConnected) {
    return (
      <div>
        <button
          className={styles.connectButton}
          onClick={disconnect}
        >
          {t("buttons.disconnect-wallet")}
        </button>
      </div>
    );
  } else {
    return (
      <button
        className={styles.connectButton}
        onClick={connect}
      >
        {t("buttons.connect-wallet")}
      </button>
    );
  }
};

export const ConnectedWalletButton = memo(ConnectWalletButtonComponent);
