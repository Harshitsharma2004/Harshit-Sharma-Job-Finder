import "./index.css";
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/Header/header";
import Search from "./Components/Search/searchbar";
import Jobs from "./Components/JobCard/jobcard";
import jobData from "./jobDummyData";
import Login from "./Components/Navbar/login";
import RegisterForm from "./Components/Navbar/Register";
import PassChangeForm from "./Components/Navbar/forgetpass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplyForm from "./Components/Apply/Apply";

function App() {
  return (
    // main div
    <div className="w-screen h-screen p-2">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Search />
                {jobData.map((job) => (
                  <Jobs key={job.id} {...job} />
                ))}
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forget" element={<PassChangeForm />} />
          <Route path="/apply" element={<ApplyForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
