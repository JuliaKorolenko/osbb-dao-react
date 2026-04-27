import { useTranslation } from "react-i18next";
import { devToolsPageConfig } from "../model/pageConfig";
import { PageLayout } from "@/shared/layouts/PageLayout";
const DevToolsPage = () => {
  const { t } = useTranslation();
  const {
    "title-key": titleKey,
    icon,
    "subtitle-key": subtitleKey,
    "subtitle-icon": subtitleIcon,
  } = devToolsPageConfig;

  return (
    <PageLayout
      title={t(titleKey)}
      icon={icon}
      subtitle={t(subtitleKey)}
      subtitleIcon={subtitleIcon}
    >
      <p>DevTools content goes here.</p>
    </PageLayout>
  );
};

export default DevToolsPage;
