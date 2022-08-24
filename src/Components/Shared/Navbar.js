import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div class="navbar ">
      <div class="flex-1">
        <Link to="/" class=" text-3xl" alt=""></Link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            {!user ? (
              <Link to="/login">login</Link>
            ) : (
              <button onClick={handleLogOut}>Logout</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
