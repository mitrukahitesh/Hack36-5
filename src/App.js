import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/homepage"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
