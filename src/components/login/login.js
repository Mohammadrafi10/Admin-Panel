import React from "react";
import logo from "../../assets/images/logo.png";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left side with logo */}
        <div className="bg-indigo-950 rounded-l-lg p-8 flex flex-col items-center justify-center text-white w-full md:w-1/2">
          <div className="mb-4">
            <img
              src={logo}
              alt="Ministry of Defense Logo"
              className="w-48 h-48"
            />
          </div>
          <p className="text-center text-lg mt-4" dir="rtl">
            د بشري کارکونکي تجربي ترلاسه کولو
          </p>
          <p className="text-center text-lg" dir="rtl">
            لپاره خپل حساب ته ننوځئ
          </p>
        </div>

        {/* Right side with login form */}
        <div className="p-8 w-full md:w-1/2">
          <div className="text-right mb-8">
            <h1 className="text-3xl font-bold text-indigo-900" dir="rtl">
              د ملي دفاع وزارت
            </h1>
            <h2 className="text-2xl text-indigo-800" dir="rtl">
              د کارتو سیستم
            </h2>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="User ID"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Primary Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Secondary Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
