import type { AccountInfo } from "@/shared/types/common";
import styles from "./AccountSelect.module.css";

type AccountViewProps = Omit<AccountInfo, "role">;

const AccountView = ({ name, address }: AccountViewProps) => {
  return (
    <>
      <div className={styles.selectValueName}>{name}</div>
      <div className={styles.selectedValueAddress}>{address}</div>
    </>
  );
};

export default AccountView;
