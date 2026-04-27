import { Route, Routes } from "react-router-dom";
import ProposalsPage from "@/pages/proposals";
import CreateProposalsPage from "@/pages/create-proposal";
import ResidentsPage from "@/pages/residents";
import RegisterResidentPage from "@/pages/register-resident";
import DevToolsPage from "@/pages/dev-tools";
import NotFoundPage from "@/pages/not-found";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={<NotFoundPage />}
      />
      <Route
        path="/"
        element={<ProposalsPage />}
      />
      <Route
        path="/create"
        element={<CreateProposalsPage />}
      />
      <Route
        path="/residents"
        element={<ResidentsPage />}
      />
      <Route
        path="/registration"
        element={<RegisterResidentPage />}
      />
      <Route
        path="/dev-tools"
        element={<DevToolsPage />}
      />
      {/* <Route path="/" element={<ProposalsPage />} />
    <Route path="/create" element={<CreateProposalPage />} />
    <Route path="/residents" element={<ResidentsPage />} />
    <Route path="/registration" element={<RegistrationPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
