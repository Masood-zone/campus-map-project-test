import React, { useState } from "react";
import mainLogo from "../../assets/svgs/main-logo.svg";
import nofiticationLogo from "../../assets/svgs/notification.svg";
import { NOTIFICATION_DATA, NAV_LINKS, USER_LINKS } from "./data";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import moment from "moment/moment";
import NavItem from "./NavItem";

const Navbar = () => {
  const [headers, setHeaders] = useState([
    { name: "Activity", key: 1 },
    { name: "Hightlights", key: 2 },
  ]);

  return (
    <nav className="w-full flex items-center justify-around max-[299px]:justify-between z-[50]">
      <div className="w-[67px] h-[68px] max-[299px]:w-[37px] ">
        <img src={mainLogo} alt="Logo" className="w-full" />
      </div>
      <div className="">
        <ul className="flex gap-7">
          {NAV_LINKS.map((links) => {
            return <NavItem item={links} key={links.key} />;
          })}
        </ul>
      </div>
      <div className="flex items-center gap-5 max-[299px]:gap-0">
        <div className="w-[35px] h-[37px] dropdown dropdown-end z-[1]">
          <img
            tabIndex={0}
            src={nofiticationLogo}
            alt="notification_icon"
            className="w-full cursor-pointer max-[299px]:w-[27px]"
          />
          <section
            tabIndex={0}
            className="dropdown-content w-80 h-64 rounded-lg bg-base-100 shadow-xl mt-8 z-[1] max-md:w-64 max-[399px]:w-56 max-[299px]:dropdown-end max-[499px]:dropdown-end"
          >
            <Tab.Group>
              <Tab.List className="flex space-x-1 p-0 items-center">
                {headers.map((header) => {
                  return (
                    <Tab
                      key={header.key}
                      className={({ selected }) =>
                        classNames(
                          "w-1/2 text-lg py-2.5 leading-5",
                          selected ? "border-b-2 border-b-[#560E26]" : ""
                        )
                      }
                    >
                      {header.name}
                    </Tab>
                  );
                })}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(NOTIFICATION_DATA).map((activities, idx) => {
                  return (
                    <Tab.Panel key={idx} className={classNames("p-3")}>
                      <ul>
                        {activities.map((activity) => {
                          return (
                            <li key={activity.id} className="mb-4">
                              <h3 className="text-[16px] ">
                                {activity.message}
                              </h3>
                              <p className="text-[10px] text-[#656565]">
                                {activity.timeStamp
                                  ? moment(`${activity.timeStamp}`)
                                      .startOf("hour")
                                      .fromNow()
                                  : ""}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </Tab.Panel>
                  );
                })}
              </Tab.Panels>
            </Tab.Group>
          </section>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-14 h-14 rounded-full flex-shrink-0 bg-slate-300 max-[299px]:h-[37px] max-[299px]:w-[37px]">
              <img
                src="https://source.unsplash.com/80x80?face"
                alt="Profile"
                className="w-full "
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content px-0 mt-5 z-[1] shadow-xl bg-base-100 rounded-lg w-[220px] h-[160px] max-[299px]:w-[190px] "
          >
            {USER_LINKS.map((user) => {
              return (
                <Link
                  key={user.key}
                  to={user.path}
                  className={`${
                    user.borderTop
                      ? "text-[#F00] border-top border-t-2 border-t-neutral-800 pt-3 hover:text-red-600 transition duration-200 text-[16px] rounded-md rounded-t-none mt-3 px-3 w-full"
                      : "px-3 py-2 my-1 text-[16px] hover:text-neutral-900 transition duration-200 rounded-md text-neutral-700 "
                  }`}
                >
                  {user.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
