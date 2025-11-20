import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export type StrategyType = 
  | 'long-call'
  | 'long-put'
  | 'covered-call'
  | 'cash-secured-put'
  | 'bull-call-spread'
  | 'bear-put-spread'
  | 'protective-put';

interface PayoffChartProps {
  strategyType: StrategyType;
  strikes: number[];
  premiums: number[];
  quantity: number;
  underlyingRange: [number, number];
  compareStrategy?: {
    strategyType: StrategyType;
    strikes: number[];
    premiums: number[];
    quantity: number;
  };
}

// Calculate payoff at expiration for a given strategy
const calculatePayoff = (
  strategyType: StrategyType,
  underlyingPrice: number,
  strikes: number[],
  premiums: number[],
  quantity: number
): number => {
  switch (strategyType) {
    case 'long-call': {
      const strike = strikes[0];
      const premium = premiums[0];
      const intrinsic = Math.max(0, underlyingPrice - strike);
      return (intrinsic - premium) * quantity;
    }
    case 'long-put': {
      const strike = strikes[0];
      const premium = premiums[0];
      const intrinsic = Math.max(0, strike - underlyingPrice);
      return (intrinsic - premium) * quantity;
    }
    case 'covered-call': {
      const strike = strikes[0];
      const premium = premiums[0];
      const stockProfit = underlyingPrice - (underlyingPrice * 0.9); // Assume bought at 90% of range
      const optionLoss = Math.max(0, underlyingPrice - strike);
      return (stockProfit + premium - optionLoss) * quantity;
    }
    case 'cash-secured-put': {
      const strike = strikes[0];
      const premium = premiums[0];
      const optionLoss = Math.max(0, strike - underlyingPrice);
      return (premium - optionLoss) * quantity;
    }
    case 'bull-call-spread': {
      const longStrike = strikes[0];
      const shortStrike = strikes[1];
      const netPremium = premiums[0] - premiums[1];
      const longIntrinsic = Math.max(0, underlyingPrice - longStrike);
      const shortIntrinsic = Math.max(0, underlyingPrice - shortStrike);
      return (longIntrinsic - shortIntrinsic - netPremium) * quantity;
    }
    case 'bear-put-spread': {
      const longStrike = strikes[0];
      const shortStrike = strikes[1];
      const netPremium = premiums[0] - premiums[1];
      const longIntrinsic = Math.max(0, longStrike - underlyingPrice);
      const shortIntrinsic = Math.max(0, shortStrike - underlyingPrice);
      return (longIntrinsic - shortIntrinsic - netPremium) * quantity;
    }
    case 'protective-put': {
      const strike = strikes[0];
      const premium = premiums[0];
      const stockProfit = underlyingPrice - (underlyingPrice * 0.9);
      const putIntrinsic = Math.max(0, strike - underlyingPrice);
      return (stockProfit - premium + putIntrinsic) * quantity;
    }
    default:
      return 0;
  }
};

const PayoffChart: React.FC<PayoffChartProps> = ({
  strategyType,
  strikes,
  premiums,
  quantity,
  underlyingRange,
  compareStrategy,
}) => {
  const data = useMemo(() => {
    const [min, max] = underlyingRange;
    const step = (max - min) / 100;
    const points: Array<{ price: number; payoff: number; comparePayoff?: number }> = [];

    for (let price = min; price <= max; price += step) {
      const payoff = calculatePayoff(strategyType, price, strikes, premiums, quantity);
      let comparePayoff: number | undefined;
      
      if (compareStrategy) {
        comparePayoff = calculatePayoff(
          compareStrategy.strategyType,
          price,
          compareStrategy.strikes,
          compareStrategy.premiums,
          compareStrategy.quantity
        );
      }

      points.push({
        price: Math.round(price * 100) / 100,
        payoff: Math.round(payoff * 100) / 100,
        comparePayoff: comparePayoff !== undefined ? Math.round(comparePayoff * 100) / 100 : undefined,
      });
    }

    return points;
  }, [strategyType, strikes, premiums, quantity, underlyingRange, compareStrategy]);

  // Calculate summary statistics
  const summary = useMemo(() => {
    const payoffs = data.map(d => d.payoff);
    const maxProfit = Math.max(...payoffs);
    const maxLoss = Math.min(...payoffs);
    const breakeven = data.find(d => Math.abs(d.payoff) < 0.01)?.price;

    return { maxProfit, maxLoss, breakeven };
  }, [data]);

  return (
    <div className="card">
      <h3 className="font-serif-heading mb-4">Payoff at Expiration</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="price" 
            label={{ value: 'Underlying Price ($)', position: 'insideBottom', offset: -5 }}
            stroke="#6b7280"
          />
          <YAxis 
            label={{ value: 'Profit/Loss ($)', angle: -90, position: 'insideLeft' }}
            stroke="#6b7280"
          />
          <Tooltip 
            formatter={(value: number) => `$${value.toFixed(2)}`}
            labelFormatter={(label) => `Price: $${label}`}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="payoff" 
            stroke="#4a90e2" 
            strokeWidth={2}
            name="Strategy 1"
            dot={false}
          />
          {compareStrategy && (
            <Line 
              type="monotone" 
              dataKey="comparePayoff" 
              stroke="#e24a4a" 
              strokeWidth={2}
              name="Strategy 2"
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600 mb-1">Max Profit</div>
          <div className="text-xl font-semibold text-green-600">
            ${summary.maxProfit.toFixed(2)}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600 mb-1">Max Loss</div>
          <div className="text-xl font-semibold text-red-600">
            ${summary.maxLoss.toFixed(2)}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600 mb-1">Breakeven</div>
          <div className="text-xl font-semibold text-charcoal">
            {summary.breakeven ? `$${summary.breakeven.toFixed(2)}` : 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoffChart;

