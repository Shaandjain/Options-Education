import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RiskSimulatorProps {
  initialCapital?: number;
  initialPercentPerTrade?: number;
  initialWinRate?: number;
  initialRiskReward?: number;
  initialNumTrades?: number;
}

const RiskSimulator: React.FC<RiskSimulatorProps> = ({
  initialCapital = 10000,
  initialPercentPerTrade = 2,
  initialWinRate = 0.55,
  initialRiskReward = 1.5,
  initialNumTrades = 50,
}) => {
  const [capital, setCapital] = useState(initialCapital);
  const [percentPerTrade, setPercentPerTrade] = useState(initialPercentPerTrade);
  const [winRate, setWinRate] = useState(initialWinRate);
  const [riskReward, setRiskReward] = useState(initialRiskReward);
  const [numTrades, setNumTrades] = useState(initialNumTrades);

  // Simulate a series of trades
  const simulationData = useMemo(() => {
    const data = [{ trade: 0, balance: capital, cumulativeReturn: 0 }];
    let currentBalance = capital;

    for (let i = 1; i <= numTrades; i++) {
      const tradeSize = currentBalance * (percentPerTrade / 100);
      const isWin = Math.random() < winRate;
      
      let tradeResult: number;
      if (isWin) {
        // Win: gain based on risk/reward ratio
        tradeResult = tradeSize * riskReward;
      } else {
        // Loss: lose the trade size
        tradeResult = -tradeSize;
      }

      currentBalance += tradeResult;
      const cumulativeReturn = ((currentBalance - capital) / capital) * 100;

      data.push({
        trade: i,
        balance: Math.max(0, currentBalance), // Can't go negative
        cumulativeReturn: Math.round(cumulativeReturn * 100) / 100,
      });
    }

    return data;
  }, [capital, percentPerTrade, winRate, riskReward, numTrades]);

  const summary = useMemo(() => {
    const balances = simulationData.map(d => d.balance);
    const maxBalance = Math.max(...balances);
    const minBalance = Math.min(...balances);
    const finalBalance = balances[balances.length - 1];
    const maxDrawdown = ((maxBalance - minBalance) / maxBalance) * 100;
    const totalReturn = ((finalBalance - capital) / capital) * 100;

    return {
      finalBalance,
      totalReturn,
      maxDrawdown,
      maxBalance,
      minBalance,
    };
  }, [simulationData, capital]);

  return (
    <div className="card">
      <h3 className="font-serif-heading mb-6">Risk Management Simulator</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Starting Capital: ${capital.toLocaleString()}
          </label>
          <input
            type="range"
            min={1000}
            max={100000}
            step={1000}
            value={capital}
            onChange={(e) => setCapital(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            % of Capital per Trade: {percentPerTrade}%
          </label>
          <input
            type="range"
            min={0.5}
            max={10}
            step={0.5}
            value={percentPerTrade}
            onChange={(e) => setPercentPerTrade(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Assumed Win Rate: {(winRate * 100).toFixed(1)}%
          </label>
          <input
            type="range"
            min={0.3}
            max={0.8}
            step={0.01}
            value={winRate}
            onChange={(e) => setWinRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Risk/Reward Ratio: {riskReward.toFixed(2)}:1
          </label>
          <input
            type="range"
            min={0.5}
            max={3}
            step={0.1}
            value={riskReward}
            onChange={(e) => setRiskReward(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Number of Trades: {numTrades}
          </label>
          <input
            type="range"
            min={10}
            max={200}
            step={10}
            value={numTrades}
            onChange={(e) => setNumTrades(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold mb-2">Account Balance Over Time</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={simulationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="trade" 
              label={{ value: 'Trade Number', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              label={{ value: 'Account Balance ($)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value: number) => `$${value.toLocaleString()}`}
              labelFormatter={(label) => `Trade: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="balance" 
              stroke="#4a90e2" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600 mb-1">Final Balance</div>
          <div className={`text-xl font-semibold ${summary.totalReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${summary.finalBalance.toLocaleString()}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600 mb-1">Total Return</div>
          <div className={`text-xl font-semibold ${summary.totalReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {summary.totalReturn >= 0 ? '+' : ''}{summary.totalReturn.toFixed(2)}%
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600 mb-1">Max Drawdown</div>
          <div className="text-xl font-semibold text-red-600">
            {summary.maxDrawdown.toFixed(2)}%
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <div className="text-sm text-gray-600 mb-1">Peak Balance</div>
          <div className="text-xl font-semibold text-green-600">
            ${summary.maxBalance.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="callout-warning text-sm">
        <strong>Important:</strong> This simulator is for illustrative purposes only. It uses simplified 
        assumptions and randomization. Real trading involves many more variables including transaction costs, 
        slippage, market conditions, and psychological factors. Past or simulated performance does not 
        guarantee future results. Always practice proper risk management and never risk more than you can 
        afford to lose.
      </div>
    </div>
  );
};

export default RiskSimulator;

