import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={<div>404 Page not found</div>}
      />
      <Route
        path="/"
        element={<div>Proposals Page</div>}
      />
      <Route
        path="/create"
        element={<div>Proposal Create Page</div>}
      />
      <Route
        path="/residents"
        element={<div>Residents Page</div>}
      />
      <Route
        path="/registration"
        element={<div>Registration Page</div>}
      />
      <Route
        path="/dev-tools"
        element={<div>DevTools Page</div>}
      />
      {/* <Route path="/" element={<ProposalsPage />} />
    <Route path="/create" element={<CreateProposalPage />} />
    <Route path="/residents" element={<ResidentsPage />} />
    <Route path="/registration" element={<RegistrationPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
