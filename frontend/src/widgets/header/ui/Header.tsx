import styles from "./Header.module.css";
import { ConnectedWalletButton } from "@/features/connect-wallet";
import { ResidentStatus, WalletInfo } from "@/entities/wallet";
import { SelectLang } from "@/features/select-lang/ui/SelectLang";

const Header = () => {
  const setLanguage = (lang: string) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
    console.log(">>> setLanguage", lang);
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>🏢</div>
        <div className={styles.logoText}>
          <h1>ОСББ DAO</h1>
          <p>Децентралізоване управління будинком</p>
        </div>
      </div>
      <div className={styles.wallet}>
        <WalletInfo />
        <ConnectedWalletButton />
        <ResidentStatus />
        <SelectLang />
      </div>
    </div>
  );
};

export default Header;
