import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import priceHistoryData from '../../data/samplePriceHistory.json';

interface TradeHistoryChartProps {
  ticker?: string;
  entryDate?: string;
  exitDate?: string;
  strategy?: string;
}

const TradeHistoryChart: React.FC<TradeHistoryChartProps> = ({
  ticker = 'SPY',
  entryDate,
  exitDate,
  strategy = 'Covered Call',
}) => {
  // Use sample data - in production, this would come from an API
  const data = priceHistoryData;

  // Find entry and exit points if provided
  const entryPoint = entryDate 
    ? data.find(d => d.date === entryDate)
    : data[Math.floor(data.length * 0.2)]; // Default to 20% through data
  
  const exitPoint = exitDate
    ? data.find(d => d.date === exitDate)
    : data[Math.floor(data.length * 0.8)]; // Default to 80% through data

  // Calculate hypothetical performance
  const performance = useMemo(() => {
    if (!entryPoint || !exitPoint) return null;

    const entryPrice = entryPoint.close;
    const exitPrice = exitPoint.close;
    const priceChange = exitPrice - entryPrice;
    const priceChangePercent = (priceChange / entryPrice) * 100;

    // Simplified strategy performance
    let strategyReturn = 0;
    if (strategy === 'Covered Call') {
      // Assume premium received was 2% of stock price
      const premium = entryPrice * 0.02;
      // If stock was called away at strike (assume strike = entry price)
      const calledAway = exitPrice >= entryPrice;
      strategyReturn = calledAway 
        ? premium // Stock called away, keep premium
        : premium + priceChange; // Stock not called, keep premium + price change
    } else if (strategy === 'Protective Put') {
      // Assume put premium was 2% of stock price
      const putPremium = entryPrice * 0.02;
      // Put protects if price falls below strike (assume strike = entry price * 0.95)
      const strike = entryPrice * 0.95;
      const putValue = exitPrice < strike ? strike - exitPrice : 0;
      strategyReturn = priceChange - putPremium + putValue;
    } else {
      strategyReturn = priceChange;
    }

    return {
      entryPrice,
      exitPrice,
      priceChange,
      priceChangePercent,
      strategyReturn,
      strategyReturnPercent: (strategyReturn / entryPrice) * 100,
    };
  }, [entryPoint, exitPoint, strategy]);

  return (
    <div className="card">
      <h3 className="font-serif-heading mb-4">
        Historical Trade Example: {ticker} - {strategy}
      </h3>
      
      <div className="mb-4 text-sm text-gray-600">
        <p className="mb-2">
          <strong>Note:</strong> This is a hypothetical example using historical data for educational purposes only. 
          Past performance does not guarantee future results.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            angle={-45}
            textAnchor="end"
            height={80}
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
          />
          <YAxis 
            label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }}
            stroke="#6b7280"
          />
          <Tooltip 
            formatter={(value: number) => `$${value.toFixed(2)}`}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="close" 
            stroke="#4a90e2" 
            strokeWidth={2}
            dot={false}
            name="Closing Price"
          />
          {entryPoint && (
            <ReferenceLine 
              x={entryPoint.date} 
              stroke="#10b981" 
              strokeDasharray="5 5"
              label={{ value: "Entry", position: "top" }}
            />
          )}
          {exitPoint && (
            <ReferenceLine 
              x={exitPoint.date} 
              stroke="#ef4444" 
              strokeDasharray="5 5"
              label={{ value: "Exit", position: "top" }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>

      {performance && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Stock Performance</h4>
            <div className="space-y-1 text-sm">
              <div>Entry: ${performance.entryPrice.toFixed(2)}</div>
              <div>Exit: ${performance.exitPrice.toFixed(2)}</div>
              <div className={`font-semibold ${performance.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                Change: {performance.priceChange >= 0 ? '+' : ''}
                {performance.priceChangePercent.toFixed(2)}%
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Strategy Performance</h4>
            <div className="space-y-1 text-sm">
              <div>Strategy: {strategy}</div>
              <div className={`font-semibold text-lg ${performance.strategyReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                Return: {performance.strategyReturn >= 0 ? '+' : ''}
                {performance.strategyReturnPercent.toFixed(2)}%
              </div>
              <div className="text-xs text-gray-500 mt-2">
                *Hypothetical calculation for illustration only
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeHistoryChart;

