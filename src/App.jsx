import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/pages/frontend/Header";
import { StoreProvider } from "./components/store/storeContext";
import MainPage from "./components/pages/frontend/MainPage";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<MainPage />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
