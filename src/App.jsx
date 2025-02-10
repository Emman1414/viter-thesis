import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/pages/frontend/Header";
import { StoreProvider } from "./components/store/storeContext";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Header />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
