import React from 'react';

export interface SolarState {
  name: string;
  abbreviation: string;
  avgSunHours: number;
  costPerKwh: number; // In dollars
}

export interface CalculationResult {
  estimatedSavings25Years: number;
  numberOfPanels: number;
  roiYears: number;
  systemSizeKw: number;
  co2OffsetTons: number;
  monthlyBill: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}