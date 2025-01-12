import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_5" className="modal  sm:modal-middle modal-middle">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-lg ">Login</h3>
              <div className="mt-4 space-y-2">
                <label>
                  Email <br />
                  <input
                    type="email"
                    placeholder="Enter Email Id"
                    className=" w-80 py-1 px-2 mt-2 border rounded-md outline-none"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </label>
              </div>
              <div className="mt-1 space-y-2">
                <label>
                  Password <br />
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className=" w-80 py-1 px-2 mt-2 border rounded-md outline-none"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span>This field is required</span>}
                </label>
              </div>
              <div className="flex justify-around mt-10">
                <button>Login</button>
                <p>
                  Don't have acount{" "}
                  <Link to={"/signup"} className="text-blue-500">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
