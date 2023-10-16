import React from "react";
import { FILTERS } from "./data";

function Filters() {
  return (
    // This is just for dev purposes as it'll be with NavLinks instead, for now there will no selected states
    <div className="absolute left-0 right-0 z-[40] top-[90px] flex items-center justify-center gap-[15px] max-[799px]:flex-wrap max-[599px]:flex-wrap">
      {FILTERS.map((filter) => {
        return (
          <div
            className="w-[164px] h-[44px] shadow-lg flex items-center gap-4 justify-center rounded-lg cursor-pointer"
            key={filter.id}
          >
            <h3 className="capitalize text-lg font-medium">{filter.title}</h3>
            <span>{filter.icon}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Filters;
