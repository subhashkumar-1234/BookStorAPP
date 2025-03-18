import React from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Course/Courses";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
