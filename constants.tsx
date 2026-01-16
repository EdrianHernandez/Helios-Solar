import { SolarState } from './types';
import React from 'react';

// Simplified data set for demonstration purposes
export const US_STATES: SolarState[] = [
  { name: 'Alabama', abbreviation: 'AL', avgSunHours: 4.5, costPerKwh: 0.14 },
  { name: 'Alaska', abbreviation: 'AK', avgSunHours: 2.5, costPerKwh: 0.24 },
  { name: 'Arizona', abbreviation: 'AZ', avgSunHours: 6.0, costPerKwh: 0.13 },
  { name: 'Arkansas', abbreviation: 'AR', avgSunHours: 4.8, costPerKwh: 0.12 },
  { name: 'California', abbreviation: 'CA', avgSunHours: 5.8, costPerKwh: 0.28 },
  { name: 'Colorado', abbreviation: 'CO', avgSunHours: 5.5, costPerKwh: 0.15 },
  { name: 'Connecticut', abbreviation: 'CT', avgSunHours: 4.0, costPerKwh: 0.26 },
  { name: 'Delaware', abbreviation: 'DE', avgSunHours: 4.2, costPerKwh: 0.16 },
  { name: 'Florida', abbreviation: 'FL', avgSunHours: 5.5, costPerKwh: 0.15 },
  { name: 'Georgia', abbreviation: 'GA', avgSunHours: 4.8, costPerKwh: 0.14 },
  { name: 'Hawaii', abbreviation: 'HI', avgSunHours: 6.0, costPerKwh: 0.42 },
  { name: 'Idaho', abbreviation: 'ID', avgSunHours: 4.5, costPerKwh: 0.11 },
  { name: 'Illinois', abbreviation: 'IL', avgSunHours: 3.8, costPerKwh: 0.16 },
  { name: 'Indiana', abbreviation: 'IN', avgSunHours: 4.0, costPerKwh: 0.15 },
  { name: 'Iowa', abbreviation: 'IA', avgSunHours: 4.2, costPerKwh: 0.14 },
  { name: 'Kansas', abbreviation: 'KS', avgSunHours: 5.0, costPerKwh: 0.14 },
  { name: 'Kentucky', abbreviation: 'KY', avgSunHours: 4.2, costPerKwh: 0.12 },
  { name: 'Louisiana', abbreviation: 'LA', avgSunHours: 4.8, costPerKwh: 0.12 },
  { name: 'Maine', abbreviation: 'ME', avgSunHours: 3.8, costPerKwh: 0.24 },
  { name: 'Maryland', abbreviation: 'MD', avgSunHours: 4.2, costPerKwh: 0.17 },
  { name: 'Massachusetts', abbreviation: 'MA', avgSunHours: 4.0, costPerKwh: 0.28 },
  { name: 'Michigan', abbreviation: 'MI', avgSunHours: 3.5, costPerKwh: 0.18 },
  { name: 'Minnesota', abbreviation: 'MN', avgSunHours: 4.0, costPerKwh: 0.15 },
  { name: 'Mississippi', abbreviation: 'MS', avgSunHours: 4.8, costPerKwh: 0.13 },
  { name: 'Missouri', abbreviation: 'MO', avgSunHours: 4.5, costPerKwh: 0.13 },
  { name: 'Montana', abbreviation: 'MT', avgSunHours: 4.0, costPerKwh: 0.13 },
  { name: 'Nebraska', abbreviation: 'NE', avgSunHours: 4.8, costPerKwh: 0.12 },
  { name: 'Nevada', abbreviation: 'NV', avgSunHours: 6.2, costPerKwh: 0.17 },
  { name: 'New Hampshire', abbreviation: 'NH', avgSunHours: 3.8, costPerKwh: 0.23 },
  { name: 'New Jersey', abbreviation: 'NJ', avgSunHours: 4.2, costPerKwh: 0.18 },
  { name: 'New Mexico', abbreviation: 'NM', avgSunHours: 6.5, costPerKwh: 0.14 },
  { name: 'New York', abbreviation: 'NY', avgSunHours: 3.8, costPerKwh: 0.23 },
  { name: 'North Carolina', abbreviation: 'NC', avgSunHours: 5.0, costPerKwh: 0.14 },
  { name: 'North Dakota', abbreviation: 'ND', avgSunHours: 4.2, costPerKwh: 0.12 },
  { name: 'Ohio', abbreviation: 'OH', avgSunHours: 3.8, costPerKwh: 0.15 },
  { name: 'Oklahoma', abbreviation: 'OK', avgSunHours: 5.2, costPerKwh: 0.13 },
  { name: 'Oregon', abbreviation: 'OR', avgSunHours: 3.8, costPerKwh: 0.13 },
  { name: 'Pennsylvania', abbreviation: 'PA', avgSunHours: 3.8, costPerKwh: 0.17 },
  { name: 'Rhode Island', abbreviation: 'RI', avgSunHours: 4.0, costPerKwh: 0.24 },
  { name: 'South Carolina', abbreviation: 'SC', avgSunHours: 5.0, costPerKwh: 0.14 },
  { name: 'South Dakota', abbreviation: 'SD', avgSunHours: 4.5, costPerKwh: 0.13 },
  { name: 'Tennessee', abbreviation: 'TN', avgSunHours: 4.5, costPerKwh: 0.13 },
  { name: 'Texas', abbreviation: 'TX', avgSunHours: 5.5, costPerKwh: 0.14 },
  { name: 'Utah', abbreviation: 'UT', avgSunHours: 5.5, costPerKwh: 0.11 },
  { name: 'Vermont', abbreviation: 'VT', avgSunHours: 3.5, costPerKwh: 0.21 },
  { name: 'Virginia', abbreviation: 'VA', avgSunHours: 4.5, costPerKwh: 0.14 },
  { name: 'Washington', abbreviation: 'WA', avgSunHours: 3.2, costPerKwh: 0.11 },
  { name: 'West Virginia', abbreviation: 'WV', avgSunHours: 3.8, costPerKwh: 0.14 },
  { name: 'Wisconsin', abbreviation: 'WI', avgSunHours: 3.8, costPerKwh: 0.16 },
  { name: 'Wyoming', abbreviation: 'WY', avgSunHours: 5.0, costPerKwh: 0.12 }
];

// Constants for calculation logic
export const PANEL_WATTAGE = 400;
export const COST_PER_WATT = 3.20; // Avg residential install cost
export const FEDERAL_TAX_CREDIT = 0.30;
export const INFLATION_RATE = 0.025; // 2.5% annual energy inflation