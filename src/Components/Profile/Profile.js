import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          {/* <!-- Page content here --> */}
          <ProfileHeader />
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {/* <li>
              <NavLink to="/profile">Profile</NavLink>
            </li> */}
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
