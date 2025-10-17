import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetContactsQuery } from "../Redux/Features/adminApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch, FaSortAmountDown, FaAngleDown } from "react-icons/fa";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetContactsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // ✅ check token
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.info("👋 Logged out successfully");
    setTimeout(() => navigate("/admin"), 1000);
  };

  // Filter and sort data
  const filteredData = data?.data?.filter(contact =>
    contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone?.includes(searchTerm) ||
    contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      case "oldest":
        return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      case "name_asc":
        return (a.name || "").localeCompare(b.name || "");
      case "name_desc":
        return (b.name || "").localeCompare(a.name || "");
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-800 text-xl font-bold">Loading contacts...</p>
          <p className="text-gray-600">Getting your solar inquiries ready</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="min-h-screen bg-white p-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-gray-200 p-6 mb-6 shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7H9V5.5L3 7V9L9 10.5V12L3 13.5V15.5L9 14V16L3 17.5V19.5L9 18V22H15V18L21 19.5V17.5L15 16V14L21 15.5V13.5L15 12V10.5L21 9Z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-1">Solar Inquiries</h1>
                <p className="text-gray-600 font-medium">Manage customer solar quote requests</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl border border-red-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 font-bold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Controls */}
       <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-6 shadow-lg">
  <div className="grid md:grid-cols-4 gap-4">
    {/* Search */}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-green-600">
        <FaSearch className="w-5 md:-mt-8 h-5" />
      </div>
      <input
        type="text"
        placeholder="Search inquiries..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-green-200 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 font-medium"
      />
    </div>

    {/* Sort */}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-600">
        <FaSortAmountDown className="w-5 md:-mt-8 h-5" />
      </div>
      <select
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-blue-200 bg-white text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 font-medium appearance-none"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="name_asc">Name A → Z</option>
        <option value="name_desc">Name Z → A</option>
      </select>
    </div>

    {/* Items Per Page */}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-600">
        <FaAngleDown className="w-5 md:-mt-8 h-5" />
      </div>
      <select
        value={itemsPerPage}
        onChange={(e) => {
          setItemsPerPage(Number(e.target.value));
          setCurrentPage(1);
        }}
        className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-purple-200 bg-white text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 font-medium appearance-none"
      >
        <option value="5">5 per page</option>
        <option value="8">8 per page</option>
        <option value="12">12 per page</option>
        <option value="20">20 per page</option>
      </select>
    </div>

    {/* Stats */}
    <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 border border-green-200 shadow-sm">
      <p className="text-green-800 text-sm font-medium">Total Inquiries</p>
      <p className="text-gray-800 text-2xl font-bold">{filteredData.length}</p>
    </div>
  </div>
</div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
          {error ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-200">
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
              <p className="text-red-600 text-xl font-bold mb-2">Oops! Error loading data</p>
              <p className="text-red-500">Please try refreshing the page</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-200">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <p className="text-gray-800 text-2xl font-bold mb-2">No inquiries found</p>
              <p className="text-gray-600">
                {searchTerm ? "Try different search terms" : "No customer inquiries yet"}
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-left text-gray-800 font-bold">Name</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-bold">Email</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-bold">Phone</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-bold">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((contact, index) => (
                      <tr 
                        key={contact._id || index} 
                        className="border-b border-gray-100 hover:bg-gray-50 transition-all duration-200"
                      >
                        <td className="px-6 py-4 text-gray-800 font-semibold">
                          {contact.name}
                        </td>
                        <td className="px-6 py-4 text-gray-700">{contact.email}</td>
                        <td className="px-6 py-4 text-gray-700">{contact.phone}</td>
                        <td className="px-6 py-4 text-gray-600 max-w-md truncate" title={contact.message}>
                          {contact.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-gray-700 font-medium">
                    Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedData.length)} of {sortedData.length} inquiries
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-5 py-2 rounded-xl border-2 border-green-200 bg-white text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-green-50 hover:border-green-300 transition-all duration-300 font-medium flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                      </svg>
                      Prev
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const page = currentPage <= 3 ? i + 1 : 
                                   currentPage >= totalPages - 2 ? totalPages - 4 + i : 
                                   currentPage - 2 + i;
                        if (page < 1 || page > totalPages) return null;
                        
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-xl border-2 font-medium transition-all duration-300 ${
                              currentPage === page
                                ? 'bg-gradient-to-r from-green-500 to-blue-500 border-green-500 text-white shadow-md'
                                : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-5 py-2 rounded-xl border-2 border-blue-200 bg-white text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 font-medium flex items-center gap-2"
                    >
                      Next
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;