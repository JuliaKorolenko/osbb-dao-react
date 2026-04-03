import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui/select/Select";
import { type LangType, langOptions } from "../model/lang.data";
import styles from "./SelectLang.module.css";

export const SelectLang = () => {
  const { i18n } = useTranslation();

  const curValue = langOptions.find((item) => item.key === i18n.language);

  const setLanguage = (payload: LangType) => {
    i18n.changeLanguage(payload.key);
  };

  return (
    <div className={styles.selectLang}>
      <Select
        data={langOptions}
        value={curValue}
        onClick={(payload) => setLanguage(payload as LangType)}
      />
    </div>
  );
};
