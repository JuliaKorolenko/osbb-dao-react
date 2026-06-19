import { useTranslation } from "react-i18next";
import { residentsPageConfig } from "../model/pageConfig";
import { PageLayout } from "@/shared/layouts/PageLayout";
import { useAllResidentsInfo } from "@/entities/resident/model/useAllResidentsInfo";

const ResidentsPage = () => {
  const { t } = useTranslation();
  const {
    "title-key": titleKey,
    icon,
    "subtitle-key": subtitleKey,
  } = residentsPageConfig;

  const { data, isLoading, error } = useAllResidentsInfo();

  console.log(">>> data", data, error);

  return (
    <PageLayout
      title={t(titleKey)}
      icon={icon}
      subtitle={t(subtitleKey)}
    >
      <p>Residents content goes here.</p>
      {isLoading && <p>Loading residents...</p>}
      {error && <p>Error: {(error as Error).message}</p>}
      {data?.map((r) => (
        <div>
          {/* <div key={r.address}>{r.address}</div> */}
          <div key={r.votingPower}>{r.votingPower}</div>
          <div key={r.area}>{r.area}</div>
        </div>
      ))}
    </PageLayout>
  );
};

export default ResidentsPage;
