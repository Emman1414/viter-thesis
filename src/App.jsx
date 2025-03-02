import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/pages/frontend/Header";
import { StoreProvider } from "./components/store/storeContext";
import MainPage from "./components/pages/frontend/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AvailBlood from "./components/pages/frontend/AvailBlood";
import BloodDrive from "./components/pages/frontend/BloodDrive";

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
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
