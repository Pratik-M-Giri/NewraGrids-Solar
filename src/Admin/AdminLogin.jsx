import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/Features/adminApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // react-icons ka use


const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
const res = await login(form).unwrap();
console.log(res.token); // Token yahin dikhega
      localStorage.setItem("adminToken", res.token); // ✅ save token
      toast.success("🔐 Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      toast.error(err.data?.message || "❌ Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="min-h-screen w-full bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Solar Admin Info */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full border border-green-400/30">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-medium text-green-200">Solar Energy Admin Portal</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Solar <span className="text-green-400">Admin</span> Portal
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Manage your solar energy operations, track installations, and monitor system performance from one secure dashboard.
              </p>
            </div>

            {/* Admin Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Secure Access</h3>
                  <p className="text-gray-400">Enterprise-grade security for your solar operations</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Real-time Monitoring</h3>
                  <p className="text-gray-400">Track solar performance and energy production</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Customer Management</h3>
                  <p className="text-gray-400">Manage installations and customer relationships</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 lg:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Admin Login</h2>
              <p className="text-gray-300">Access your solar management dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="admin@solarenergy.com"
                  onChange={handleChange}
                  value={form.email}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                  required
                />
              </div>

        <div className="space-y-2 relative">
  <label className="text-white text-sm font-medium">Password</label>
  <input
    name="password"
    type={showPassword ? "text" : "password"}
    placeholder="••••••••"
    onChange={handleChange}
    value={form.password}
    className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 pr-14"
    required
  />
  {/* Eye icon */}
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/3 cursor-pointer text-black text-3xl" // changed -translate-y-1/2 to -translate-y-1/3 and text-xl
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </div>
</div>


              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>Access Dashboard</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </button>

              {isError && (
                <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-2xl">
                  <p className="text-red-300 text-center font-medium">
                    {error.data?.message || "❌ Error logging in. Please check your credentials."}
                  </p>
                </div>
              )}
              

              <p className="text-center text-sm text-gray-400">
                🔒 Secure admin access only. Unauthorized access prohibited.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;