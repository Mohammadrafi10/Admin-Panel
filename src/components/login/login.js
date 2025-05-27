import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

function Login() {
  const [formData, setFormData] = useState({
    userId: "",
    primaryPassword: "",
    secondaryPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-6 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl top-0 -left-20 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl bottom-0 -right-20 animate-pulse delay-700"></div>
      </div>

      {/* Glass container */}
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden flex flex-col lg:flex-row relative z-10">
        {/* Left Section - Form */}
        <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-between backdrop-blur-sm relative">
          {/* Header */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-10 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <img src={logo} alt="Logo" className="w-14 h-14 relative" />
              </div>
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <h2
                  className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                  dir="rtl"
                >
                  د ملي دفاع وزارت
                </h2>
                <p className="text-gray-600" dir="rtl">
                  د کارتو سیستم
                </p>
              </div>
            </div>
            <div className="mb-12">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                Welcome Back
              </h1>
              <p className="text-gray-600 text-lg">
                Please enter your credentials to access your account
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col space-y-8"
          >
            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  User ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.userId}
                    onChange={(e) =>
                      setFormData({ ...formData, userId: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                    placeholder="Enter your user ID"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></div>
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Primary Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={formData.primaryPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        primaryPassword: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                    placeholder="Enter your primary password"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></div>
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Secondary Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={formData.secondaryPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        secondaryPassword: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                    placeholder="Enter your secondary password"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <button
                type="submit"
                className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Protected by Ministry of Defense Security Protocol
            </p>
          </div>
        </div>

        {/* Right Section - Image/Design */}
        <div className="w-full lg:w-[55%] bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-800 p-12 flex items-center justify-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative text-center">
            <div className="mb-12 transform hover:scale-105 transition-transform duration-500">
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <img
                  src={logo}
                  alt="Ministry of Defense Logo"
                  className="w-56 h-56 mx-auto filter drop-shadow-2xl relative"
                />
              </div>
            </div>
            <div className="space-y-6 text-white transform hover:translate-y-[-4px] transition-transform duration-300">
              <p className="text-3xl font-light tracking-wide" dir="rtl">
                د بشري کارکونکي تجربي ترلاسه کولو
              </p>
              <p className="text-2xl font-light opacity-90" dir="rtl">
                لپاره خپل حساب ته ننوځئ
              </p>
            </div>
          </div>

          {/* Floating Shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 backdrop-blur-lg"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 backdrop-blur-lg"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
