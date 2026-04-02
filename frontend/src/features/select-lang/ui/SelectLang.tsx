import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui/select/Select";

export const SelectLang = () => {
  const { i18n } = useTranslation();
  const langData = [
    { key: "en", name: "Eng" },
    { key: "ua", name: "Ukr" },
  ];

  const setLanguage = (payload) => {
    localStorage.setItem("lang", payload.key);
    // window.location.reload();
    console.log(">>> setLanguage", payload.key);
  };

  return (
    <Select
      data={langData}
      onClick={(payload) => setLanguage(payload)}
    />
  );
};
