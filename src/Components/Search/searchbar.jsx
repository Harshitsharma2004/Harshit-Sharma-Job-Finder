// import React from "react";
import React, { useState } from "react";


function Search() {
    const [jobCriteria,setJobCriteria]=useState({
        title:"",
        location:"",
        experience:"",
        type:""
    })

    const handleChange=(e)=>{
        setJobCriteria((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    console.log(jobCriteria)
  return (
    <div className="flex flex-col md:flex-row gap-4 my-10 justify-center items-center flex-wrap text-white">
      {/* Job Role Dropdown */}
      <select onChange={handleChange} name="title" value={jobCriteria.title} className="w-full md:w-64 py-3 pl-4 bg-zinc-800 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="ios Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>

      {/* Job Type Dropdown */}
      <select onChange={handleChange} name="type" value={jobCriteria.type} className="w-full md:w-64 py-3 pl-4 bg-zinc-800 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      {/* Location Dropdown */}
      <select onChange={handleChange} name="location" value={jobCriteria.location} className="w-full md:w-64 py-3 pl-4 bg-zinc-800 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      {/* Experience Dropdown */}
      <select onChange={handleChange} name="experience" value={jobCriteria.experience} className="w-full md:w-64 py-3 pl-4 bg-zinc-800 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior-Level">Junior-Level</option>
        <option value="Mid-Level">Mid-Level</option>
        <option value="Senior-Level">Senior-Level</option>
      </select>

      {/* Search Button */}
      <button className="w-full md:w-64 bg-blue-500 text-white font-bold py-3 rounded-md">
        Search
      </button>
    </div>
  );
}

export default Search;
