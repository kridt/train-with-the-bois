import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MinInfo from "./pages/MinInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/dashboard/:id/minInfo" element={<MinInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
