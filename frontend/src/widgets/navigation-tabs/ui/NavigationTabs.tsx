import { NavigationConfig } from "../model/NavigationConfig";
import NavigationTab from "./NavigationTab";
import styles from "./NavigationTabs.module.css";

const NavigationTabs = () => {
  return (
    <div className={styles.tabs}>
      {NavigationConfig.map((item) => {
        const { key, ...props } = item;
        return (
          <NavigationTab
            key={key}
            {...props}
          />
        );
      })}
    </div>
  );
};

export default NavigationTabs;
