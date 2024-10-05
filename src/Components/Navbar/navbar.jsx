import React from "react";
// import LoginForm from "./login";
import Jobs from "../JobCard/jobcard";
// import RegisterForm from "./Register";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* navbar  */}
      <div className="flex flex-wrap sm:flex-row flex-col justify-between w-full p-5">
        <div className="">
          <h2 className="text-left text-3xl hover:border-2 hover:border-black hover:p-3 hover:rounded-lg hover:bg-gray-200 font-serif font-bold text-black tracking-wider ">
            <u>Job Finder</u>
          </h2>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col justify-between items-center">
          <div>
            <h2 className="text-xl mx-2 text-black font-bold hover:underline"><Link to="/">Home</Link></h2>
          </div>
          <div>
            <button className="bg-red-500 text-white p-2 hover:font-bold rounded-xl">
              <Link to="/login">Login</Link>/
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
