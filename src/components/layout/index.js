import React from "react";
import Navbar from "../navbar";
import { Outlet } from "react-router";
import { HiMenuAlt1 } from "react-icons/hi";
import { NAV_LINKS } from "../navbar/data";
import MobileNav from "../navbar/MobileNav";

const Layout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full">
            <div className="navbar shadow-xl flex items-center flex-row-reverse w-full">
              {/* Menu */}
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost min-[799px]:hidden"
              >
                <HiMenuAlt1 fontSize={24} />
              </label>
              <Navbar />
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 max-[299px]:w-[190px] min-h-full bg-base-200">
            <h1 className="text-2xl font-medium mb-4">Campus Map</h1>
            {NAV_LINKS.map((links) => {
              return <MobileNav item={links} key={links.key} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
