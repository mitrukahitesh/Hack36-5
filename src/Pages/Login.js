import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const clientID = "581333574404-hhq1vv0d54d4qb3s602asavr3h7aikd8.apps.googleusercontent.com";

const Login = () => {

    const onSuccess = (res) => {
      console.log("LOGIN SUCCESS! Current user:", res.profileObj);
    }

    const onFailure= (res) => {
      console.log("LOGIN FAILED! res:", res);
    }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-blue">
      <div className="flex flex-col py-5 my-4 bg-opacity-50 rounded-lg shadow bg-white sm:px-6 md:px-8 lg:px-10">
        <div className="inline-flex text-4xl font-bold text-center sm:text-3xl">
          <Link to="/" className="flex">
            <img
              src="/logo.png"
              alt="Kalakriti Logo"
              className="w-20 h-20"
            />
          </Link>
          <span className="self-center mx-auto text-white">Log In</span>
        </div>
        <div className="p-6">
          <form>
            <div className="flex flex-col gap-4 mb-2">
              <div className="flex flex-col gap-4 mb-1">
                <div className="relative">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="relative ">
                  <input
                    type="password"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:border-transparent"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex w-full mb-3">
                <input
                  type="submit"
                  className="w-full px-4 py-2 text-center text-white transition duration-200 ease-in rounded-lg shadow-md cursor-pointer bg-custom-blue hover:bg-transparent hover:ring-white focus:outline-none hover:ring-2"
                  id="create-account-email"
                  value="Login"
                  onClick={(e) => submitForm(e)}
                />
              </div>
            </div>
          </form>
          <span className="justify-center pb-5 text-sm text-center text-white flex-items-center">
            Don't have an account ?&nbsp;
            <Link
              to="/Register"
              className="px-1 text-sm text-custom-blue"
            >
              Register
            </Link>
          </span>
        </div>
        <h1 className="self-center mx-auto text-xl text-white">OR</h1>
        <div className="flex justify-center mt-4">
          <GoogleLogin 
          clientId={clientID}
          buttonText = "Sign In With Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}/>
        </div>
      </div>
    </div>
  );
};

export default Login;