import { useTranslation } from "react-i18next";
import { PageLayout } from "@/shared/layouts/PageLayout";
const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>404 - {t("pages.not-found.title")}</h1>
        <p>{t("pages.not-found.subtitle")}</p>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
