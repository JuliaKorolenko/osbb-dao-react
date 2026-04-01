import { memo } from "react";
import { useConnectWallet } from "../../model/useConnectWallet";
import styles from "./ConnectWalletButton.module.css";

const ConnectWalletButtonComponent = () => {
  const { connect, disconnect, isConnected } = useConnectWallet();

  if (isConnected) {
    return (
      <div>
        <button
          className={styles.connectButton}
          onClick={disconnect}
        >
          Disconnect
        </button>
      </div>
    );
  } else {
    return (
      <button
        className={styles.connectButton}
        onClick={connect}
      >
        Connect Wallet
      </button>
    );
  }
};

export const ConnectedWalletButton = memo(ConnectWalletButtonComponent);
