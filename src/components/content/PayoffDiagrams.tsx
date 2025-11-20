import React, { useState } from 'react';
import PayoffChart, { StrategyType } from '../charts/PayoffChart';

const PayoffDiagrams: React.FC = () => {
  const [strategyType, setStrategyType] = useState<StrategyType>('long-call');
  const [strike1, setStrike1] = useState(100);
  const [strike2, setStrike2] = useState(105);
  const [premium1, setPremium1] = useState(5);
  const [premium2, setPremium2] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const [underlyingMin, setUnderlyingMin] = useState(80);
  const [underlyingMax, setUnderlyingMax] = useState(120);
  const [compareMode, setCompareMode] = useState(false);
  const [compareStrategy, setCompareStrategy] = useState<StrategyType>('long-put');
  const [compareStrike1, setCompareStrike1] = useState(100);
  const [compareStrike2, setCompareStrike2] = useState(105);
  const [comparePremium1, setComparePremium1] = useState(5);
  const [comparePremium2, setComparePremium2] = useState(2);
  const [compareQuantity, setCompareQuantity] = useState(1);

  const needsTwoStrikes = strategyType === 'bull-call-spread' || strategyType === 'bear-put-spread';
  const compareNeedsTwoStrikes = compareStrategy === 'bull-call-spread' || compareStrategy === 'bear-put-spread';

  return (
    <div className="reading-column px-4 py-8">
      <h1>Interactive Payoff Diagrams</h1>

      <section className="mb-8">
        <p>
          Payoff diagrams visualize how an options strategy performs at expiration based on different 
          underlying stock prices. These diagrams help traders understand the profit and loss 
          characteristics of a strategy before entering a trade.
        </p>
      </section>

      <section className="mb-8">
        <div className="card">
          <h2 className="font-serif-heading mb-4">Strategy Configuration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Strategy Type</label>
              <select
                value={strategyType}
                onChange={(e) => setStrategyType(e.target.value as StrategyType)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="long-call">Long Call</option>
                <option value="long-put">Long Put</option>
                <option value="covered-call">Covered Call</option>
                <option value="cash-secured-put">Cash-Secured Put</option>
                <option value="bull-call-spread">Bull Call Spread</option>
                <option value="bear-put-spread">Bear Put Spread</option>
                <option value="protective-put">Protective Put</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Number of Contracts</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Strike Price 1: ${strike1}
              </label>
              <input
                type="range"
                min={underlyingMin}
                max={underlyingMax}
                step="1"
                value={strike1}
                onChange={(e) => setStrike1(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {needsTwoStrikes && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Strike Price 2: ${strike2}
                </label>
                <input
                  type="range"
                  min={strike1}
                  max={underlyingMax}
                  step="1"
                  value={strike2}
                  onChange={(e) => setStrike2(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">
                Premium 1: ${premium1}
              </label>
              <input
                type="range"
                min="0"
                max="20"
                step="0.5"
                value={premium1}
                onChange={(e) => setPremium1(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {needsTwoStrikes && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Premium 2: ${premium2}
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.5"
                  value={premium2}
                  onChange={(e) => setPremium2(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">
                Underlying Price Range: ${underlyingMin} - ${underlyingMax}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="range"
                  min="50"
                  max="150"
                  step="5"
                  value={underlyingMin}
                  onChange={(e) => setUnderlyingMin(Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="range"
                  min="50"
                  max="150"
                  step="5"
                  value={underlyingMax}
                  onChange={(e) => setUnderlyingMax(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={compareMode}
                onChange={(e) => setCompareMode(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm font-medium">Compare Two Strategies</span>
            </label>
          </div>

          {compareMode && (
            <div className="border-t pt-6 mt-6">
              <h3 className="font-semibold mb-4">Comparison Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Strategy Type</label>
                  <select
                    value={compareStrategy}
                    onChange={(e) => setCompareStrategy(e.target.value as StrategyType)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="long-call">Long Call</option>
                    <option value="long-put">Long Put</option>
                    <option value="covered-call">Covered Call</option>
                    <option value="cash-secured-put">Cash-Secured Put</option>
                    <option value="bull-call-spread">Bull Call Spread</option>
                    <option value="bear-put-spread">Bear Put Spread</option>
                    <option value="protective-put">Protective Put</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Number of Contracts</label>
                  <input
                    type="number"
                    min="1"
                    value={compareQuantity}
                    onChange={(e) => setCompareQuantity(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Strike Price 1: ${compareStrike1}
                  </label>
                  <input
                    type="range"
                    min={underlyingMin}
                    max={underlyingMax}
                    step="1"
                    value={compareStrike1}
                    onChange={(e) => setCompareStrike1(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {compareNeedsTwoStrikes && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Strike Price 2: ${compareStrike2}
                    </label>
                    <input
                      type="range"
                      min={compareStrike1}
                      max={underlyingMax}
                      step="1"
                      value={compareStrike2}
                      onChange={(e) => setCompareStrike2(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Premium 1: ${comparePremium1}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="0.5"
                    value={comparePremium1}
                    onChange={(e) => setComparePremium1(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {compareNeedsTwoStrikes && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Premium 2: ${comparePremium2}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="0.5"
                      value={comparePremium2}
                      onChange={(e) => setComparePremium2(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mb-8">
        <PayoffChart
          strategyType={strategyType}
          strikes={needsTwoStrikes ? [strike1, strike2] : [strike1]}
          premiums={needsTwoStrikes ? [premium1, premium2] : [premium1]}
          quantity={quantity}
          underlyingRange={[underlyingMin, underlyingMax]}
          compareStrategy={compareMode ? {
            strategyType: compareStrategy,
            strikes: compareNeedsTwoStrikes ? [compareStrike1, compareStrike2] : [compareStrike1],
            premiums: compareNeedsTwoStrikes ? [comparePremium1, comparePremium2] : [comparePremium1],
            quantity: compareQuantity,
          } : undefined}
        />
      </section>

      <section className="mb-8">
        <h2>Understanding Payoff Diagrams</h2>
        <div className="card">
          <h3 className="font-serif-heading mb-4">Key Elements</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>X-Axis (Underlying Price):</strong> Shows the stock price at expiration. This is 
              the variable that determines your profit or loss.
            </li>
            <li>
              <strong>Y-Axis (Profit/Loss):</strong> Shows the profit or loss in dollars at expiration 
              for each underlying price level.
            </li>
            <li>
              <strong>Breakeven Point:</strong> Where the payoff line crosses zero. This is the stock 
              price at expiration where you neither profit nor lose (excluding transaction costs).
            </li>
            <li>
              <strong>Maximum Profit:</strong> The highest point on the payoff curve. Some strategies 
              have unlimited profit potential (like long calls), while others are capped.
            </li>
            <li>
              <strong>Maximum Loss:</strong> The lowest point on the payoff curve. For option buyers, 
              this is typically limited to the premium paid. For sellers, losses can be much larger.
            </li>
          </ul>
        </div>

        <div className="card mt-4">
          <h3 className="font-serif-heading mb-4">Important Notes</h3>
          <div className="callout text-sm">
            <ul className="space-y-2">
              <li>
                <strong>At Expiration Only:</strong> These diagrams show profit/loss at expiration. 
                Before expiration, option prices include time value, which can make the actual P&L 
                different from what's shown.
              </li>
              <li>
                <strong>Transaction Costs:</strong> Real-world trading includes commissions and bid-ask 
                spreads, which reduce profits and increase losses.
              </li>
              <li>
                <strong>Early Exercise:</strong> American-style options can be exercised early, which 
                may affect the actual payoff, especially for in-the-money options before ex-dividend dates.
              </li>
              <li>
                <strong>Assumptions:</strong> These diagrams assume options are held to expiration and 
                exercised if profitable. In practice, many traders close positions before expiration.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>Further Reading</h2>
        <ul>
          <li>
            <a href="https://www.optionseducation.org/en/learn-about-options/options-overview/payoff-diagrams" target="_blank" rel="noopener noreferrer">
              OIC - Understanding Payoff Diagrams
            </a>
          </li>
          <li>
            <a href="https://www.investopedia.com/articles/optioninvestor/10/payoff-diagrams.asp" target="_blank" rel="noopener noreferrer">
              Investopedia - Options Payoff Diagrams
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PayoffDiagrams;

