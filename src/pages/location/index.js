import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import { locationValidator } from "./locationValidator";
import { useGeolocated } from "react-geolocated";
import SavedLocationsHeader from "../../components/header/locationHeader";
import LocationList from "./LocationList";
import LocationForm from "./LocationForm";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: locationValidator,
    onSubmit: (values, { resetForm }) => {
      const body = {
        id: uuidv4(),
        name: values.name,
        description: values.description,
        longitude: coords.longitude,
        latitude: coords.latitude,
      };
      setLocations([...locations, body]);
      console.log(body);
      setShowLocations(true);
      resetForm(values);
    },
  });

  const handleEdit = (data) => {
    const location = locations.find((place) => place === data);
    setShowLocations(false);
  };

  const handleDelete = (id) => {
    const newLocation = locations.filter((place) => place.id !== id);
    setLocations(newLocation);
  };

  return (
    <div className="absolute left-0 right-0 z-[49] mx-auto card w-[589px] h-[533px] max-[799px]:w-[550px] max-[500px]:h-fit flex-shrink-0 shadow-xl rounded-xl bg-base-100  pt-8 mt-5 max-[799px]:pt-0 max-[299px]:p-0 max-[799px]:p-0 max-[499px]:p-0 max-[499px]:w-[350px] max-[399px]:w-[300px] max-[499px]:h-[400px] max-[399px]:h-[300px] max-[299px]:w-[200px] max-[299px]:[h-200px] overflow-hidden">
      <SavedLocationsHeader
        setShowLocations={setShowLocations}
        showLocations={showLocations}
      />
      <div className="">
        {showLocations ? (
          <LocationList
            data={locations}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ) : (
          <LocationForm formik={formik} />
        )}
      </div>
    </div>
  );
}

export default Locations;
