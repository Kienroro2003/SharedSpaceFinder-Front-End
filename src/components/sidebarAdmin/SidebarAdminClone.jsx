import {
  faBars,
  faBell,
  faSquareCheck,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SidebarAdminClone = () => {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [show, setShow] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
      <div className="flex flex-col items-center w-full gap-8 px-0 mx-auto md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
        <button
          className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
          type="button"
          onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* Brand */}
        <Link
          className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase text-blueGray-600 whitespace-nowrap md:block md:pb-2"
          to="/"
        >
          <img
            src="/logoTransparent.png"
            alt=""
            className="h-[38px] w-[107px] object-cover"
          />
        </Link>
        <ul className="flex flex-col w-full">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl bg-transparent px-4 py-3  ${
                  isActive
                    ? "bg-[#0C0B1A] text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon icon={faBars} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/user"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl bg-transparent px-4 py-3  ${
                  isActive
                    ? "bg-[#0C0B1A] text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon icon={faUser} />
              User
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/owner"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl bg-transparent px-4 py-3  ${
                  isActive
                    ? "bg-[#0C0B1A] text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon icon={faUserTie} />
              Owner
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/posts-space/3"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl bg-transparent px-4 py-3  ${
                  isActive
                    ? "bg-[#0C0B1A] text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon icon={faBell} />
              Pending Spaces
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/posts-space/0"
              className={({ isActive }) =>
                `flex w-full items-center gap-2 rounded-xl bg-transparent px-4 py-3  ${
                  isActive
                    ? "bg-[#0C0B1A] text-white"
                    : "bg-transparent text-[#5F666F]"
                }`
              }
            >
              <FontAwesomeIcon icon={faSquareCheck} />
              Accepted Spaces
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarAdminClone;
