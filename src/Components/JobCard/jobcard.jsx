import React from "react";
import { Link } from "react-router-dom";

function Jobs(props) {
//   const skills = ["JavaScript", "React", "NodeJS"];
  
  return (
    <div className="mx-4 md:mx-10 lg:mx-40 mb-4 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-4 bg-zinc-800 rounded-md border border-black shadow-lg hover:border-gray-900 hover:border-4 hover:translate-y-1 hover:scale-105 flex-wrap">
        {/* Job Details */}
        <div className="flex flex-col items-start gap-3 w-full md:w-auto">
          <h1 className="text-md md:text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p className="text-sm">
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          
          {/* Skills */}
          <div className="flex gap-2 items-center flex-wrap">
            {props.skills.map((skill, index) => (
              <p key={index} className="text-gray-200 text-xs md:text-sm py-1 px-2 rounded-md border border-gray-200">
                {skill}
              </p>
            ))}
          </div>
        </div>
        
        {/* Apply Button */}
        <div className="mt-4 md:mt-0">
          <button className="border border-blue-600 text-blue-600 font-bold p-2 md:p-3 rounded-lg hover:scale-90">
            <Link to="/apply">Apply</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
