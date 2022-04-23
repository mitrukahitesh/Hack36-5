import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import OptionPage from "./Pages/OptionPage";
<<<<<<< HEAD
import TnC from "./Pages/TnC";
import Privacy from "./Pages/Privacy";
=======
import AdminDashboard from "./Pages/AdminDashboard";
import AdminProducts from "./Pages/AdminProducts";
>>>>>>> 83e992b7ce7dc95023cc1e42120f5deb8e147e52

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/OptionPage" element={<OptionPage />} />
<<<<<<< HEAD
          <Route path="/TnC" element={<TnC />} />
          <Route path="/Privacy" element={<Privacy />} />
=======
          <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
          <Route path="/Admin/Products" element={<AdminProducts />} />
>>>>>>> 83e992b7ce7dc95023cc1e42120f5deb8e147e52
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
