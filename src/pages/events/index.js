import React from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { EVENTS } from "./data";

const Event = () => {
  return (
    <div className="absolute left-0 right-0 z-[50] mx-auto card w-[589px] h-[533px] max-[799px]:w-[550px] max-[500px]:h-fit flex-shrink-0 shadow-xl rounded-xl bg-base-100  pt-8 mt-5 max-[799px]:pt-0 max-[299px]:p-0 max-[799px]:p-0 max-[499px]:p-0 max-[499px]:w-[350px] max-[399px]:w-[300px] max-[499px]:h-[400px] max-[399px]:h-[300px] max-[299px]:w-[200px] max-[299px]:[h-200px] overflow-hidden px-7">
      <div className="flex items-center justify-around">
        <NavLink
          to="/locations"
          className="text-[26px] text-[#560E26] font-bold max-[499px]:text-base border-b-2 pb-2 pl-3 w-[350px] border-b-neutral-800"
        >
          Upcoming Events
        </NavLink>
        <details className="dropdown dropdown-end">
          <summary className="btn btn-circle btn-ghost text-[#560E26]">
            <HiEllipsisVertical fontSize={28} />
          </summary>
          <ul className="menu shadow z-[1] bg-base-100 rounded-md  dropdown-content w-[144px] h-[71px]  mt-2 text-[17px] py-2 flex flex-col">
            <p to="edit" className="pb-1">
              Edit
            </p>
            <p to="add" className="pb-1 pt-1 px">
              Add Location
            </p>
          </ul>
        </details>
      </div>
      <div className="pt-8">
        {EVENTS.map((event) => {
          return (
            <main className="flex items-center justify-between">
              <div key={event.id}>
                <h1 className="capitalize font-medium text-2xl">
                  {event.title}
                </h1>
                <p className="capitalize text-sm">{event.eventName}</p>
                <p className="text-sm pb-3">{event.date}</p>
                <h2 className="text-xl font-medium ">Program Lineup : </h2>
                <ul className="list-disc">
                  {event.programs.map((program) => {
                    return (
                      <li className="ml-8" key={program.id}>
                        {program.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <figure>
                <img src={event.picture} alt="Event" />
              </figure>
            </main>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
