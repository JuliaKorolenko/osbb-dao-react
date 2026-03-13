import type { AccountInfo } from "@/shared/types/common";
import styles from "./Header.module.css";
import SelectAddress from "@/widgets/account-select";

const Header = () => {
  const accounts: AccountInfo[] = [
    { address: "0xf39F...2266", name: "Admin", role: "admin" },
    { address: "0x7099...79C8", name: "Member 1", role: "member" },
    { address: "0x3C44...93BC", name: "Member 2", role: "member" },
    { address: "0x90F7...b906", name: "Member 3", role: "member" },
    { address: "0x9965...A4dc", name: "", role: "guest" },
    { address: "0x976E...0aa9", name: "", role: "guest" },
    { address: "0x14dC...9955", name: "", role: "guest" },
    { address: "0x2361...1E8f", name: "", role: "guest" },
    { address: "0xa0Ee...9720", name: "", role: "guest" },
    // "0xBcd4...4096",
    // "0x71bE...5788",
    // "0xFABB...694a",
    // "0x1CBd...C9Ec",
    // "0xdF3e...7097",
    // "0xcd3B...ce71",
    // "0x2546...Ec30",
    // "0xbDA5...197E",
    // "0xdD2F...44C0",
    // "0x8626...1199",
  ];
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>🏢</div>
        <div className={styles.logoText}>
          <h1>ОСББ DAO</h1>
          <p>Децентралізоване управління будинком</p>
        </div>
      </div>
      <div className={styles.walletInfo}>
        <SelectAddress data={accounts} />
        <div className={styles.statusDot}></div>
      </div>
    </div>
  );
};

export default Header;
