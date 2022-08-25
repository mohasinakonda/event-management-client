// import "./App.css";

import { Route, Routes } from "react-router-dom";
import EventRegister from "./Components/Home/EventRegister";
import Home from "./Components/Home/Home";
import LoginRegister from "./Components/Login/Index";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import RequireAuth from "./Components/Login/RequireAuth";
import Events from "./Components/Profile/Events";
import Profile from "./Components/Profile/Profile";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import Navbar from "./Components/Shared/Navbar";
// toastify css
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        >
          <Route index element={<Profile />} />
          <Route path="/profile/events" element={<Events />} />
          <Route path="/profile/update" element={<UpdateProfile />} />
        </Route>
        <Route
          path="register"
          element={
            <RequireAuth>
              <EventRegister />
            </RequireAuth>
          }
        />
        <Route path="login" element={<LoginRegister />}>
          <Route index element={<Login />}></Route>

          <Route path="/login/register" element={<Register />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
