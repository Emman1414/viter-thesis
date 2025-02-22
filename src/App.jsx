import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/pages/frontend/Header";
import { StoreProvider } from "./components/store/storeContext";
import MainPage from "./components/pages/frontend/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<MainPage />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
