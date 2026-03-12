import { useState } from "react";
import type { AccountInfo } from "@/shared/types/common";
import styles from "./Select.module.css";

interface SelectProps {
  data: AccountInfo[];
}
const Select = (props: SelectProps) => {
  const { data } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [selectedAccount, setSelectedAccount] = useState<AccountInfo>(data[0]);

  const toggleListHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.selectContainer}>
      <div
        className={styles.selectHeader}
        onClick={toggleListHandler}
      >
        <div className={styles.selectValue}>
          <div
            className={` ${styles.selectValueName} ${styles.selectValueAdmin}`}
          >
            {selectedAccount.name || "N/A"}
          </div>
          <div className={styles.selectValueAddress}>
            {selectedAccount.address}
          </div>
        </div>
        <div className={`${styles.selectArrow} ${isOpen ? styles.open : ""}`} />
      </div>

      <ul className={`${styles.selectList} ${isOpen ? styles.open : ""}`}>
        {data.map((account, index) => (
          <li
            key={index}
            className={styles.selectItem}
            data-value={account}
            onClick={() => {
              setSelectedAccount(account);
              setIsOpen(false);
            }}
          >
            <div className={styles.selectValueName}>
              {account.name || "N/A"}
            </div>
            <div className={styles.selectValueAddress}>{account.address}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
