import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LoginRegister = () => {
  let activeClassName = "border-b-4 border-b-yellow-500 py-2";
  return (
    <div class="">
      <div class="">
        {/* <!-- Navbar --> */}

        <ul class=" flex  justify-center">
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
