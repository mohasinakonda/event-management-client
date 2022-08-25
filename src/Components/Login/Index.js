import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LoginRegister = () => {
  let activeClassName = "border-b-4 border-b-yellow-500 py-2";
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/x3HJ8Ct/login.jpg')`,

        backgroundSize: "cover",
        backgroundPosition: "0",
      }}
      className="bg-indigo-100 w-full h-screen "
    >
      <div class="">
        {/* <!-- Navbar --> */}

        <ul class=" flex  justify-center static z-10">
          <li className=" p-2 text-2xl">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to="/login"
              end
            >
              Login
            </NavLink>
          </li>
          <li className="p-2 text-2xl">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to="register"
            >
              Register
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>

      <Outlet />
    </div>
  );
};

export default LoginRegister;
