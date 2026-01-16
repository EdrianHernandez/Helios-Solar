import React, { useCallback } from 'react';
import { US_STATES } from '../constants';

interface SavingsCalculatorProps {
  billAmount: number;
  selectedState: string;
  onBillChange: (value: number) => void;
  onStateChange: (value: string) => void;
}

const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  billAmount,
  selectedState,
  onBillChange,
  onStateChange,
}) => {
  
  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onBillChange(Number(e.target.value));
  }, [onBillChange]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val) && val >= 0) {
      onBillChange(val);
    }
  }, [onBillChange]);

  const handleStateSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onStateChange(e.target.value);
  }, [onStateChange]);

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
      
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Calculate Your Savings</h2>
      
      {/* State Selection */}
      <div className="mb-8 group">
        <label htmlFor="state-select" className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
          Location
        </label>
        <div className="relative">
            <select
            id="state-select"
            value={selectedState}
            onChange={handleStateSelect}
            className="calculator-input block w-full pl-4 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-lg bg-slate-50 transition-all shadow-sm cursor-pointer hover:bg-slate-100"
            >
            <option value="" disabled>Select your state</option>
            {US_STATES.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
                </option>
            ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
        </div>
      </div>

      {/* Bill Amount Input */}
      <div className="mb-6">
        <label htmlFor="bill-input" className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
          Monthly Electric Bill
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-slate-500 sm:text-lg font-medium">$</span>
          </div>
          <input
            type="number"
            name="bill-input"
            id="bill-input"
            className="calculator-input block w-full rounded-lg border-gray-300 pl-8 pr-12 py-3 focus:border-emerald-500 focus:ring-emerald-500 text-2xl font-bold text-slate-900 bg-slate-50"
            placeholder="0.00"
            value={billAmount}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Slider */}
        <div className="mt-6">
           <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={billAmount}
            onChange={handleSliderChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-500 transition-all"
          />
           <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
            <span>$0</span>
            <span>$500</span>
            <span>$1000+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;