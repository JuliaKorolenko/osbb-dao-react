import { useTranslation } from "react-i18next";
import { createProposalPageConfig } from "../model/pageConfig";
import { PageLayout } from "@/shared/layouts/PageLayout";
const CreateProposalsPage = () => {
  const { t } = useTranslation();
  const {
    "title-key": titleKey,
    icon,
    "subtitle-key": subtitleKey,
  } = createProposalPageConfig;

  return (
    <PageLayout
      title={t(titleKey)}
      icon={icon}
      subtitle={t(subtitleKey)}
    >
      <p>Create Proposal content goes here.</p>
    </PageLayout>
  );
};

export default CreateProposalsPage;
