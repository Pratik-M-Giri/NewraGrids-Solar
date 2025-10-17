import React, { useState, useEffect } from "react";
import { useSendContactMutation } from "../Redux/Features/contactApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sendContact, { isLoading }] = useSendContactMutation();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContact(form).unwrap();
      toast.success("🌞 Message sent successfully! We'll contact you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("⚠️ Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <section className="min-h-screen w-full bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content Info */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full border border-green-400/30">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
                  <span className="text-sm font-medium text-green-200">Get Your Solar Quote</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Start Your <span className="text-green-400">Solar Journey</span> Today
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join thousands of homeowners who have switched to clean, affordable solar energy. 
                  Get your personalized quote and start saving up to 90% on electricity bills.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Save Up to 90%</h3>
                  <p className="text-gray-400 text-sm">Drastically reduce your electricity bills with solar power</p>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">25-Year Warranty</h3>
                  <p className="text-gray-400 text-sm">Comprehensive performance guarantee for peace of mind</p>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Quick Installation</h3>
                  <p className="text-gray-400 text-sm">Professional setup completed in just 1-2 business days</p>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Eco-Friendly</h3>
                  <p className="text-gray-400 text-sm">Reduce your carbon footprint with clean renewable energy</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 lg:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">Get Free Quote</h2>
                <p className="text-gray-300">Fill out the form and our solar experts will contact you</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your energy needs, roof type, or any specific requirements... *"
                    required
                    rows="4"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Your Request...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Get Your Free Solar Quote</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </button>

                <p className="text-center text-sm text-gray-400">
                  🔒 We respect your privacy. No spam, guaranteed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;