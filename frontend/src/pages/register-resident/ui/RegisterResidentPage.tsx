import { useTranslation } from "react-i18next";
import { registrationPageConfig } from "../model/pageConfig";
import { PageLayout } from "@/shared/layouts/PageLayout";
const RegisterResidentPage = () => {
  const { t } = useTranslation();
  const {
    "title-key": titleKey,
    icon,
    "subtitle-key": subtitleKey,
  } = registrationPageConfig;

  return (
    <PageLayout
      title={t(titleKey)}
      icon={icon}
      subtitle={t(subtitleKey)}
    >
      <p>Registration content goes here.</p>
    </PageLayout>
  );
};

export default RegisterResidentPage;
