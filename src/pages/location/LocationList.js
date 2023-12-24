import React from "react";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";

function LocationList({ data, onDelete, onEdit }) {
  return (
    <section>
      <div>
        {data.length > 0 ? (
          data.map((location) => (
            <div
              key={location.id}
              className="border-2 border-gray-100 my-3 mx-4 p-2 flex items-start rounded-md justify-between gap-8"
            >
              <div>
                <h1 className="font-medium">{location.name}</h1>
                <p>{location.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="btn btn-circle"
                  onClick={() => onDelete(location.id)}
                >
                  <TiDelete fontSize={20} />
                </button>
                <button
                  className="btn btn-circle"
                  onClick={() => onEdit(location)}
                >
                  <FaEdit fontSize={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-left my-4 mx-4">
            <p>It seems you donot have any location saved.</p>
            <p>Be sure to add some.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default LocationList;
