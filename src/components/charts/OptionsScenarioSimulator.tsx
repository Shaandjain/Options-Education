import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface OptionsScenarioSimulatorProps {
  initialUnderlying?: number;
  initialVolatility?: number;
  initialDaysToExpiration?: number;
}

// Simplified Black-Scholes approximation for educational purposes
// This is a simplified model - real pricing uses more complex formulas
const estimateOptionPrice = (
  underlying: number,
  strike: number,
  daysToExpiration: number,
  volatility: number,
  isCall: boolean
): number => {
  const timeToExpiration = daysToExpiration / 365;
  const intrinsic = isCall 
    ? Math.max(0, underlying - strike)
    : Math.max(0, strike - underlying);
  
  // Simplified time value estimation
  const timeValue = Math.max(0, underlying * volatility * Math.sqrt(timeToExpiration) * 0.4);
  
  return intrinsic + timeValue;
};

// Simplified Greeks calculation
const calculateGreeks = (
  underlying: number,
  strike: number,
  daysToExpiration: number,
  volatility: number,
  isCall: boolean
) => {
  const timeToExpiration = daysToExpiration / 365;
  const inTheMoney = isCall ? underlying > strike : underlying < strike;
  
  // Simplified Delta (probability of finishing in the money)
  const delta = isCall
    ? Math.max(0, Math.min(1, (underlying - strike * 0.9) / (strike * 0.2)))
    : Math.max(0, Math.min(1, (strike * 1.1 - underlying) / (strike * 0.2)));
  
  // Simplified Gamma (rate of change of delta)
  const gamma = inTheMoney ? 0.02 : 0.01;
  
  // Simplified Theta (time decay per day)
  const theta = -(underlying * volatility * 0.01) / Math.max(1, daysToExpiration);
  
  // Simplified Vega (sensitivity to volatility)
  const vega = underlying * Math.sqrt(timeToExpiration) * 0.01;
  
  return { delta, gamma, theta, vega };
};

const OptionsScenarioSimulator: React.FC<OptionsScenarioSimulatorProps> = ({
  initialUnderlying = 100,
  initialVolatility = 0.2,
  initialDaysToExpiration = 30,
}) => {
  const [underlying, setUnderlying] = useState(initialUnderlying);
  const [volatility, setVolatility] = useState(initialVolatility);
  const [daysToExpiration, setDaysToExpiration] = useState(initialDaysToExpiration);
  const [strike, setStrike] = useState(100);
  const [optionType, setOptionType] = useState<'call' | 'put'>('call');

  const optionPrice = useMemo(() => {
    return estimateOptionPrice(underlying, strike, daysToExpiration, volatility, optionType === 'call');
  }, [underlying, strike, daysToExpiration, volatility, optionType]);

  const greeks = useMemo(() => {
    return calculateGreeks(underlying, strike, daysToExpiration, volatility, optionType === 'call');
  }, [underlying, strike, daysToExpiration, volatility, optionType]);

  // Generate data for price sensitivity chart
  const priceSensitivityData = useMemo(() => {
    const data = [];
    for (let price = underlying * 0.7; price <= underlying * 1.3; price += underlying * 0.02) {
      const priceAtPrice = estimateOptionPrice(price, strike, daysToExpiration, volatility, optionType === 'call');
      data.push({ underlyingPrice: Math.round(price * 100) / 100, optionPrice: Math.round(priceAtPrice * 100) / 100 });
    }
    return data;
  }, [underlying, strike, daysToExpiration, volatility, optionType]);

  return (
    <div className="card">
      <h3 className="font-serif-heading mb-6">Options Pricing Simulator</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Option Type</label>
          <div className="flex space-x-4">
            <button
              onClick={() => setOptionType('call')}
              className={`btn ${optionType === 'call' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Call
            </button>
            <button
              onClick={() => setOptionType('put')}
              className={`btn ${optionType === 'put' ? 'btn-primary' : 'btn-secondary'}`}
            >
              Put
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Strike Price: ${strike.toFixed(2)}</label>
          <input
            type="range"
            min={underlying * 0.8}
            max={underlying * 1.2}
            step={1}
            value={strike}
            onChange={(e) => setStrike(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Underlying Price: ${underlying.toFixed(2)}
          </label>
          <input
            type="range"
            min={50}
            max={150}
            step={1}
            value={underlying}
            onChange={(e) => setUnderlying(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Implied Volatility: {(volatility * 100).toFixed(1)}%
          </label>
          <input
            type="range"
            min={0.1}
            max={0.5}
            step={0.01}
            value={volatility}
            onChange={(e) => setVolatility(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Days to Expiration: {daysToExpiration}
          </label>
          <input
            type="range"
            min={1}
            max={90}
            step={1}
            value={daysToExpiration}
            onChange={(e) => setDaysToExpiration(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold mb-4">Estimated Option Price</h4>
        <div className="text-3xl font-bold text-accent mb-4">
          ${optionPrice.toFixed(2)}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div>
            <div className="text-sm text-gray-600">Delta</div>
            <div className="text-lg font-semibold">{greeks.delta.toFixed(3)}</div>
            <div className="text-xs text-gray-500">Price sensitivity</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Gamma</div>
            <div className="text-lg font-semibold">{greeks.gamma.toFixed(3)}</div>
            <div className="text-xs text-gray-500">Delta sensitivity</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Theta</div>
            <div className="text-lg font-semibold">${greeks.theta.toFixed(2)}</div>
            <div className="text-xs text-gray-500">Time decay/day</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Vega</div>
            <div className="text-lg font-semibold">${greeks.vega.toFixed(2)}</div>
            <div className="text-xs text-gray-500">Vol sensitivity</div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Price Sensitivity</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={priceSensitivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="underlyingPrice" 
              label={{ value: 'Underlying Price ($)', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              label={{ value: 'Option Price ($)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value: number) => `$${value.toFixed(2)}`}
              labelFormatter={(label) => `Price: $${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="optionPrice" 
              stroke="#4a90e2" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="callout text-sm">
        <strong>Note:</strong> This simulator uses simplified pricing models for educational purposes. 
        Real options pricing involves more complex calculations including the Black-Scholes model, 
        binomial trees, and market maker adjustments. Actual market prices may differ significantly.
      </div>
    </div>
  );
};

export default OptionsScenarioSimulator;

