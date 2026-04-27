import { useTranslation } from "react-i18next";
import { residentsPageConfig } from "../model/pageConfig";
import { PageLayout } from "@/shared/layouts/PageLayout";
const ResidentsPage = () => {
  const { t } = useTranslation();
  const {
    "title-key": titleKey,
    icon,
    "subtitle-key": subtitleKey,
  } = residentsPageConfig;

  return (
    <PageLayout
      title={t(titleKey)}
      icon={icon}
      subtitle={t(subtitleKey)}
    >
      <p>Residents content goes here.</p>
    </PageLayout>
  );
};

export default ResidentsPage;
