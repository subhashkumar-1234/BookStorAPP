import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Course/Courses";
import SignUp from "./component/SignUp";
import Login from "./component/Login";

function App() {
  return (
    <>
      <div className="dark:bg-gray-300 dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
