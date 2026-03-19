import Header from "@/widgets/header";
import DashboardStats from "@/widgets/dashboard-stats";
import NavigationTabs from "@/widgets/navigation-tabs";
import AppRouter from "@/app/router/AppRouter";

const DashboardPage = () => {
  return (
    <div className="container">
      <Header />
      <DashboardStats />
      <NavigationTabs />
      <AppRouter />
    </div>
  );
};

export default DashboardPage;
