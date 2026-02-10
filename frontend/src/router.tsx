import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/home";
import LoginPage from "./pages/auth/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
