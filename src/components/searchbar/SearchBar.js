import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import searchBtn from "../../assets/svgs/search-btn.svg";

function SearchBar() {
  return (
    <div className="z-[40] shadow-lg mx-auto w-[800px] h-[54px] rounded-3xl absolute left-0 right-0 top-5 overflow-hidden max-[799px]:w-[650px] max-[699px]:w-[450px] max-[499px]:w-[350px] max-[299px]:w-[250px] flex items-center justify-between px-4 bg-white">
      <div className="flex items-center">
        <label className="pr-5">
          <span className="font-extralight text-[#A8A8A8]">
            <HiOutlineSearch fontSize={25} />
          </span>
        </label>
        <input
          type="text"
          className="w-[650px] h-full  py-3 text-lg outline-none relative max-[799px]:w-[528px] max-[499px]:w-[220px] max-[299px]:w-[135px]"
          placeholder="search"
        />
      </div>
      <button className="cursor-pointer btn btn-ghost btn-circle">
        <img src={searchBtn} alt="Search button" className="" />
      </button>
    </div>
  );
}

export default SearchBar;
