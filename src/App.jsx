import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AvailBlood from "./components/pages/frontend/AvailBlood";
import BloodDrive from "./components/pages/frontend/BloodDrive";
import MainPage from "./components/pages/frontend/MainPage";
import RegisterPage from "./components/pages/frontend/RegisterPage";
import { StoreProvider } from "./components/store/storeContext";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/avail" element={<AvailBlood />} />
            <Route path="/drive" element={<BloodDrive />} />
            <Route path="/donate" element={<RegisterPage />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
