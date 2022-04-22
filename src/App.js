import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import Register from "./Pages/Register"
import Login from "./Pages/Login"


function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
