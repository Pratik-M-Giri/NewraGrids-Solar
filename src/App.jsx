import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import SolarMap from "./pages/SolarMap";
import ScrollToTop from "./pages/ScrollToTop";
import PrivateRoute from "./pages/PrivteRoute";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/solarmap" element={<SolarMap />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <AdminDashboard />
    </PrivateRoute>
  }
/>

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
