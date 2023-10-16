import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/svgs/not-found.svg";

function NotFound() {
  return (
    <div className="w-[25rem] h-[20rem] shadow-md mx-auto rounded-md my-10 text-center flex flex-col items-center justify-center">
      <div>
        <img src={notFound} alt="Error page" />
      </div>
      <h2 className="text-xl font-bold ">Page not Found!</h2>
      <p>It seems this page does not exist, sorry for the inconvience.</p>
      <Link to="/" className="text-blue-400 underline">
        Go back
      </Link>
    </div>
  );
}

export default NotFound;
