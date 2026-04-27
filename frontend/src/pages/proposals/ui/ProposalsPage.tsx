import { useTranslation } from "react-i18next";
import { proposalPageConfig } from "../model/pageConfig";
import { PageLayout } from "@/shared/layouts/PageLayout";
const ProposalsPage = () => {
  const { t } = useTranslation();
  const {
    "title-key": titleKey,
    icon,
    "subtitle-key": subtitleKey,
  } = proposalPageConfig;

  return (
    <PageLayout
      title={t(titleKey)}
      icon={icon}
      subtitle={t(subtitleKey)}
    >
      <p>Proposals content goes here.</p>
    </PageLayout>
  );
};

export default ProposalsPage;
