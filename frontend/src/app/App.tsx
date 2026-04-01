import Providers from "./providers";
import DashboardPage from "@/pages/dashboard";
import "@/shared/config/i18n";
import "./styles";

function App() {
  return (
    <Providers>
      <DashboardPage />
    </Providers>
  );
}

export default App;
