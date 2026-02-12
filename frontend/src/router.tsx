import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/home";
import AuthPage from "./pages/auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
