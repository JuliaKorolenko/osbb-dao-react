import styles from "./Header.module.css";
import { HeaderPanel } from "./HeaderPanel";
import { SelectLang } from "@/features/select-lang/ui/SelectLang";

const Header = () => {
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
        <HeaderPanel />
      </div>
      <SelectLang />
    </div>
  );
};

export default Header;
