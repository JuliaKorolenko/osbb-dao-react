import Providers from "./providers";
import DashboardPage from "@/pages/dashboard";
import "./styles";

function App() {
  return (
    <Providers>
      <DashboardPage />
    </Providers>
  );
}

export default App;
