import React from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { NavLink, Outlet } from "react-router-dom";

const SavedLocations = () => {
  return (
    <div>
      <main>
        <div className="flex items-center justify-between py-1 border-b border-b-black w-[450px] mx-auto max-[499px]:w-[250px] max-[299px]:w-[180px]">
          <NavLink
            to="/locations"
            className="text-[26px] text-[#560E26] font-bold max-[499px]:text-base"
          >
            My Saved Locations
          </NavLink>
          <details className="dropdown dropdown-end">
            <summary className="btn btn-circle btn-ghost text-[#560E26]">
              <HiEllipsisVertical fontSize={28} />
            </summary>
            <ul className="menu shadow z-[1] bg-base-100 rounded-md  dropdown-content w-[144px] h-[71px]  mt-2 text-[17px] py-2 flex flex-col">
              <NavLink to="edit" className="pb-1">
                Edit
              </NavLink>
              <NavLink to="add" className="pb-1 pt-1 px">
                Add Location
              </NavLink>
            </ul>
          </details>
        </div>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SavedLocations;
