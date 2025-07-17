import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <form>
                  {/* Email */}
                  <div className="relative w-full mb-3 mt-4">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      required
                    />
                    <div className="text-right mt-1">
                      <Link
                        to="/auth/forgot-password"
                        className="text-sm text-blueGray-600 hover:text-blueGray-800 font-semibold"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/login" className="text-blueGray-200 hover:text-white">
                  <small>Login</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200 hover:text-white">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
