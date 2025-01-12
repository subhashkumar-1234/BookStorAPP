import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function SignUp() {
  return (
    <>
      <div>
        <div
          id="my_modal_6"
          className="flex h-screen justify-center items-center  "
        >
          <div className="border p-7 bg-slate-200 text-black">
            <h3 className="font-bold text-lg ">Ragistration</h3>
            <div className="mt-4 space-y-2  ">
              <label>
                Email <br />
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className=" bg-slate-200 w-80 py-1 px-2 mt-2 border border-gray-400 rounded-md outline-none font-normal "
                />
              </label>
            </div>
            <div className="mt-1 space-y-2 ">
              <label>
                Password <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className=" bg-slate-200 w-80 py-1 px-2 mt-2 border border-gray-400  rounded-md outline-none font-normal "
                />
              </label>
            </div>
            <div className="flex justify-around mt-10">
              <button className="w-20 bg-slate-900 text-white p-1 border rounded ">
                Sign Up
              </button>
              <p>
                Have a acount{" "}
                {/* <Link
                  to={""}
                  className="text-blue-950 font-bold"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Login
                </Link> */}
                <a
                  className="text-blue-950 font-bold cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </p>
            </div>
            <div className="modal-action">
              <Link to={"/"} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
