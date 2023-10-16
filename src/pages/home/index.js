import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import { Outlet } from "react-router";
import Filters from "../../components/filters/Filters";

const Home = () => {
  return (
    <div className="relative ">
      <SearchBar />
      <Filters />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
