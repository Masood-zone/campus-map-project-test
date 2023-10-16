import React from "react";
import SavedLocations from "./location";
import Rate from "../../components/rating/Rating";
import { useLoaderData, Link } from "react-router-dom";

function Locations() {
  // Use json-server --p [PORT-NUMBER] --w ./[LOCATION-OF-THE-DATABASE] to request the information from the server.
  const location = useLoaderData();

  return (
    <div className="absolute left-0 right-0 z-[50] mx-auto card w-[589px] h-[533px] max-[799px]:w-[550px] max-[500px]:h-fit flex-shrink-0 shadow-xl rounded-xl bg-base-100  pt-8 mt-5 max-[799px]:pt-0 max-[299px]:p-0 max-[799px]:p-0 max-[499px]:p-0 max-[499px]:w-[350px] max-[399px]:w-[300px] max-[499px]:h-[400px] max-[399px]:h-[300px] max-[299px]:w-[200px] max-[299px]:[h-200px] overflow-hidden">
      <SavedLocations />
      <div className="overflow-y-scroll">
        {/* Loader applied here */}
        {location.map((location) => {
          return (
            <div
              className="flex items-center justify-between my-5 mx-10 max-[499px]:flex-col-reverse max-[499px]:justify-start max-[499px]:"
              key={location.id}
            >
              <section>
                <h1 className="text-2xl font-medium max-[499px]:text-lg">
                  {location.title}
                </h1>
                <div className="text-sm">
                  <span>{location.category}</span>.
                  <span>{location.position}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Rate />
                </div>
                <p className="text-sm">Opens from {location.periods}</p>
              </section>
              <figure className="max-w-[117px]">
                <img src={location.picture} alt={location.title} />
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Locations;

export const locationsLoader = async () => {
  const res = await fetch("http://localhost:8000/savedLocations");
  return res.json();
};
