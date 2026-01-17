import React, { useState, useEffect, useMemo } from 'react';
import SavingsCalculator from './components/SavingsCalculator.jsx';
import ResultsDisplay from './components/ResultsDisplay.jsx';
import SolarFeatures from './components/SolarFeatures.jsx';
import ConsultationCTA from './components/ConsultationCTA.jsx';
import { US_STATES, PANEL_WATTAGE, COST_PER_WATT, FEDERAL_TAX_CREDIT, INFLATION_RATE } from './constants.js';

const App = () => {
  const [billAmount, setBillAmount] = useState(150); // Default $150
  const [selectedState, setSelectedState] = useState('');
  const [results, setResults] = useState(null);

  // Calculation Logic
  const calculateSolarData = useMemo(() => {
    if (!selectedState || billAmount <= 0) return null;

    const stateData = US_STATES.find(s => s.abbreviation === selectedState);
    if (!stateData) return null;

    // 1. Determine Energy Usage
    const monthlyKwh = billAmount / stateData.costPerKwh;
    const dailyKwh = monthlyKwh / 30.4; // Avg days in month

    // 2. Determine System Size (kW)
    // Formula: (Daily kWh / Avg Sun Hours) * Efficiency Factor (1.25 for loss/buffer)
    const requiredSystemSizeKw = (dailyKwh / stateData.avgSunHours) * 1.25;
    
    // 3. Number of Panels
    const numPanels = Math.ceil((requiredSystemSizeKw * 1000) / PANEL_WATTAGE);
    const actualSystemSizeKw = (numPanels * PANEL_WATTAGE) / 1000;

    // 4. Financials
    const grossCost = actualSystemSizeKw * 1000 * COST_PER_WATT;
    const netCost = grossCost * (1 - FEDERAL_TAX_CREDIT);

    // 5. Savings Calculation (25 Years)
    // Simple projection: Current Annual Bill * 25 years (factoring in rate increases vs solar degradation)
    // Simplified: Sum of (AnnualBill * (1+Inflation)^n) for n=1 to 25
    let totalProjectedBill25Years = 0;
    let currentAnnualBill = billAmount * 12;

    for (let i = 0; i < 25; i++) {
        totalProjectedBill25Years += currentAnnualBill;
        currentAnnualBill *= (1 + INFLATION_RATE);
    }
    
    const estimatedSavings = totalProjectedBill25Years - netCost;

    // 6. ROI
    const firstYearSavings = (billAmount * 12);
    const roi = netCost / firstYearSavings;

    // 7. Environmental
    const co2Offset = (monthlyKwh * 12 * 25 * 0.85) / 2000; // 0.85 lbs CO2 per kWh, converted to tons

    return {
      estimatedSavings25Years: Math.max(0, estimatedSavings),
      numberOfPanels: numPanels,
      roiYears: roi,
      systemSizeKw: actualSystemSizeKw,
      co2OffsetTons: co2Offset,
      monthlyBill: billAmount
    };
  }, [billAmount, selectedState]);

  useEffect(() => {
    setResults(calculateSolarData);
  }, [calculateSolarData]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.633 1.24l-1.745.558a1 1 0 01-1.251-1.25l.558-1.745 1.24-.633A4.005 4.005 0 019.5 15c-1.263 0-2.396-.576-3.165-1.479a1 1 0 01-1.05-.285l-1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
            </svg>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Helios<span className="text-emerald-500">Solar</span></span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#calculator" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Calculator</a>
            <a href="#features" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Benefits</a>
            <a href="#consultation" className="bg-emerald-600 text-white px-4 py-2 rounded-full font-medium hover:bg-emerald-500 transition-colors shadow-sm">Get Quote</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Power Your Home <br/><span className="text-emerald-400">Pure Sunshine.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10">
              Calculate your potential savings instantly. See how much you can save by switching to clean, renewable solar energy today.
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <section id="calculator" className="relative -mt-20 px-4 pb-20">
          <SavingsCalculator 
            billAmount={billAmount}
            selectedState={selectedState}
            onBillChange={setBillAmount}
            onStateChange={setSelectedState}
          />
          <ResultsDisplay results={results} />
        </section>

        {/* Features Section */}
        <div id="features">
           <SolarFeatures />
        </div>

        {/* CTA Section */}
        <div id="consultation">
          <ConsultationCTA />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Helios Solar Technologies. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
