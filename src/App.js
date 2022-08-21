// import "./App.css";

import { Route, Routes } from "react-router-dom";
import EventRegister from "./Components/Home/EventRegister";
import Home from "./Components/Home/Home";
import LoginRegister from "./Components/Login/Index";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<EventRegister />} />
        <Route path="login" element={<LoginRegister />}>
          <Route index element={<Login />}></Route>

          <Route path="/login/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
