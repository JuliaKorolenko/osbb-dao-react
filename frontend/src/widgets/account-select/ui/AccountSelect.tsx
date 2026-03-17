import { useRef, useState } from "react";
import type { AccountInfo } from "@/shared/types/common";
import { roleConfig } from "../model/roleConfig";
import { useClickOutsideEsc } from "@/shared/hooks/useClickOutsideEsc";
import AccountView from "./AccountView";
import styles from "./AccountSelect.module.css";

interface SelectProps {
  data: AccountInfo[];
}

const AccountSelect = ({ data }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedAccount, setSelectedAccount] = useState<AccountInfo>(data[0]);

  const selectedClassName = roleConfig[selectedAccount.role]?.className || "";

  const selectRef = useRef<HTMLDivElement | null>(null);

  const toggleListHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const selectAccount = (account: AccountInfo) => {
    setSelectedAccount(account);
    setIsOpen(false);
  };

  const closeSelectHandler = () => setIsOpen(false);

  useClickOutsideEsc(selectRef, closeSelectHandler);

  return (
    <div
      ref={selectRef}
      className={styles.selectContainer}
    >
      <div
        className={styles.selectHeader}
        onClick={toggleListHandler}
      >
        <div
          className={`
            ${styles.selectValue}
            ${styles[selectedClassName]}
          `}
        >
          <AccountView
            name={selectedAccount.name}
            address={selectedAccount.address}
          />
        </div>
        <div className={`${styles.selectArrow} ${isOpen ? styles.open : ""}`} />
      </div>

      <ul className={`${styles.selectList} ${isOpen ? styles.open : ""}`}>
        {data.map(({ name, address, role }) => {
          const itemClassName = roleConfig[role]?.className || "";

          return (
            <li
              key={address}
              className={`${styles.selectItem} ${styles[itemClassName || ""]}`}
              onClick={() => selectAccount({ name, address, role })}
            >
              <AccountView
                name={name}
                address={address}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccountSelect;
