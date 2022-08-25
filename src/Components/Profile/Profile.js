import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          <label for="my-drawer" class=" lg:hidden">
            <span className="text-4xl text-primary btn btn-sm btn-outline fixed z-10">
              &gt;
            </span>
          </label>
          {/* <!-- Page content here --> */}
          <ProfileHeader />
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to="/profile/events">events</NavLink>
            </li>
            <li>
              <NavLink to="/profile/update">update Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
