import React from 'react';
import { CalculationResult } from '../types';

interface ResultsDisplayProps {
  results: CalculationResult | null;
}

const ResultCard: React.FC<{ title: string; value: string; subtext: string; icon: React.ReactNode; delay: string }> = ({ title, value, subtext, icon, delay }) => (
  <div className={`savings-card group relative bg-white p-6 rounded-2xl shadow-lg border border-slate-100 overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl animate-fade-in-up ${delay}`}>
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {icon}
    </div>
    <div className="relative z-10">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">{title}</p>
        <h3 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">{value}</h3>
        <p className="text-sm text-emerald-600 font-medium bg-emerald-50 inline-block px-2 py-1 rounded-md">{subtext}</p>
    </div>
    <div className="absolute bottom-0 left-0 h-1 w-full bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
  </div>
);

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  if (!results) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-12 text-center p-12 bg-white rounded-2xl border-2 border-dashed border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
             <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <p className="text-slate-500 text-lg">Enter your details above to see your solar potential.</p>
      </div>
    );
  }

  // Format currency
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      <ResultCard
        title="25-Year Savings"
        value={formatMoney(results.estimatedSavings25Years)}
        subtext="Tax incentives included"
        delay="delay-100"
        icon={<svg className="w-24 h-24 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
      />
      <ResultCard
        title="Panels Required"
        value={results.numberOfPanels.toString()}
        subtext={`${results.systemSizeKw.toFixed(1)} kW System Size`}
        delay="delay-200"
        icon={<svg className="w-24 h-24 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>}
      />
      <ResultCard
        title="Break-even Point"
        value={`${results.roiYears.toFixed(1)} Years`}
        subtext={`Offsetting ${results.co2OffsetTons.toFixed(1)} tons CO₂`}
        delay="delay-300"
        icon={<svg className="w-24 h-24 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
      />
    </div>
  );
};

export default ResultsDisplay;