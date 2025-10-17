import React, { useState } from 'react';
import { FaCalculator, FaSun, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Calculator = () => {
  const [formData, setFormData] = useState({
    electricityUsage: '',
    tariffRate: '',
    sunlightHours: '',
    efficiencyFactor: ''
  });

  const [results, setResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    monthlyBill: 0,
    monthlySolarBill: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateSavings = () => {
    const usage = parseFloat(formData.electricityUsage) || 0;
    const tariff = parseFloat(formData.tariffRate) || 0;
    const sunlight = parseFloat(formData.sunlightHours) || 0;
    const efficiency = parseFloat(formData.efficiencyFactor) || 0;

    // Basic calculations
    const monthlyBill = usage * tariff;
    const solarProduction = (sunlight * efficiency * 30) / 100; // Monthly production in kWh
    const solarCoverage = Math.min(solarProduction / usage, 1); // Max 100% coverage
    const monthlySolarBill = monthlyBill * (1 - solarCoverage);
    const monthlySavings = monthlyBill - monthlySolarBill;
    const annualSavings = monthlySavings * 12;

    setResults({
      monthlySavings,
      annualSavings,
      monthlyBill,
      monthlySolarBill
    });
  };

  const resetCalculator = () => {
    setFormData({
      electricityUsage: '',
      tariffRate: '',
      sunlightHours: '',
      efficiencyFactor: ''
    });
    setResults({
      monthlySavings: 0,
      annualSavings: 0,
      monthlyBill: 0,
      monthlySolarBill: 0
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <FaCalculator className="text-3xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Solar Bill Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate your potential savings when switching to solar energy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Input Form */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaSun className="text-yellow-500" />
              Enter Your Details
            </h2>

            <div className="space-y-6">
              {/* Electricity Usage */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Monthly Electricity Usage (kWh)
                </label>
                <input
                  type="number"
                  name="electricityUsage"
                  value={formData.electricityUsage}
                  onChange={handleInputChange}
                  placeholder="e.g., 500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <p className="text-sm text-gray-500 mt-1">Average Indian household: 200-600 kWh/month</p>
              </div>

              {/* Tariff Rate */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Electricity Tariff Rate (₹/kWh)
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="tariffRate"
                  value={formData.tariffRate}
                  onChange={handleInputChange}
                  placeholder="e.g., 6.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <p className="text-sm text-gray-500 mt-1">Typical range: ₹4 - ₹8 per kWh</p>
              </div>

              {/* Sunlight Hours */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Daily Sunlight Hours
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="sunlightHours"
                  value={formData.sunlightHours}
                  onChange={handleInputChange}
                  placeholder="e.g., 5.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <p className="text-sm text-gray-500 mt-1">India average: 4-7 hours per day</p>
              </div>

              {/* Efficiency Factor */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  System Efficiency Factor (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="efficiencyFactor"
                  value={formData.efficiencyFactor}
                  onChange={handleInputChange}
                  placeholder="e.g., 18.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <p className="text-sm text-gray-500 mt-1">Typical solar panel efficiency: 15-22%</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={calculateSavings}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Calculate Savings
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Reset
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaChartLine className="text-green-500" />
              Your Savings Estimate
            </h2>

            {results.monthlySavings > 0 ? (
              <div className="space-y-6">
                {/* Monthly Savings */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-700">Monthly Savings</span>
                    <FaMoneyBillWave className="text-green-500 text-xl" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-green-600">
                    ₹{results.monthlySavings.toFixed(2)}
                  </div>
                  <p className="text-green-700 text-sm mt-2">
                    You could save this much every month!
                  </p>
                </div>

                {/* Annual Savings */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-700">Annual Savings</span>
                    <FaChartLine className="text-blue-500 text-xl" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600">
                    ₹{results.annualSavings.toFixed(2)}
                  </div>
                  <p className="text-blue-700 text-sm mt-2">
                    Total yearly savings with solar power
                  </p>
                </div>

                {/* Bill Comparison */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Current Bill</div>
                    <div className="text-xl font-bold text-red-600">₹{results.monthlyBill.toFixed(2)}</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center">
                    <div className="text-sm font-semibold text-gray-700 mb-1">With Solar</div>
                    <div className="text-xl font-bold text-green-600">₹{results.monthlySolarBill.toFixed(2)}</div>
                  </div>
                </div>

                {/* Savings Percentage */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center">
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    You Save Approximately
                  </div>
                  <div className="text-4xl font-bold text-yellow-600">
                    {((results.monthlySavings / results.monthlyBill) * 100).toFixed(1)}%
                  </div>
                  <p className="text-yellow-700 text-sm mt-2">
                    on your electricity bills every month
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <FaCalculator className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Enter Your Details
                </h3>
                <p className="text-gray-500">
                  Fill in the form to see your potential solar savings
                </p>
              </div>
            )}

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">💡 Important Notes</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Calculations are estimates based on provided inputs</li>
                <li>• Actual savings may vary based on location and system quality</li>
                <li>• Government subsidies and incentives not included</li>
                <li>• Maintenance costs are excluded from calculations</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Saving?
          </h3>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Get a personalized solar consultation and exact quote for your home or business.
          </p>
          <button className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Calculator;