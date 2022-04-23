import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import OptionPage from "./Pages/OptionPage";
import TnC from "./Pages/TnC";
import Privacy from "./Pages/Privacy";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminProducts from "./Pages/AdminProducts";

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/OptionPage" element={<OptionPage />} />
          <Route path="/TnC" element={<TnC />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
          <Route path="/Admin/Products" element={<AdminProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
