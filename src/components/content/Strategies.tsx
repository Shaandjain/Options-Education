import React, { useState } from 'react';
import PayoffChart, { StrategyType } from '../charts/PayoffChart';

interface Strategy {
  id: StrategyType;
  name: string;
  outlook: 'bullish' | 'bearish' | 'neutral' | 'neutral-to-bullish' | 'bullish-with-protection';
  description: string;
  maxGain: string;
  maxLoss: string;
  breakeven: string;
  risks: string[];
}

const strategies: Strategy[] = [
  {
    id: 'long-call',
    name: 'Long Call',
    outlook: 'bullish',
    description: 'Buying a call option gives you the right to buy the underlying stock at the strike price. This strategy profits when the stock price rises above the strike price plus the premium paid.',
    maxGain: 'Unlimited (stock can rise indefinitely)',
    maxLoss: 'Premium paid',
    breakeven: 'Strike price + premium paid',
    risks: ['Time decay works against you', 'Stock must move significantly to profit', 'Can lose entire premium if stock doesn\'t rise'],
  },
  {
    id: 'long-put',
    name: 'Long Put',
    outlook: 'bearish',
    description: 'Buying a put option gives you the right to sell the underlying stock at the strike price. This strategy profits when the stock price falls below the strike price minus the premium paid.',
    maxGain: 'Strike price - premium paid (if stock goes to zero)',
    maxLoss: 'Premium paid',
    breakeven: 'Strike price - premium paid',
    risks: ['Time decay works against you', 'Stock must move significantly to profit', 'Can lose entire premium if stock doesn\'t fall'],
  },
  {
    id: 'covered-call',
    name: 'Covered Call',
    outlook: 'neutral-to-bullish',
    description: 'Selling a call option against stock you already own. You collect premium income but cap your upside potential. If the stock rises above the strike, your shares may be called away.',
    maxGain: 'Premium received + (strike price - stock purchase price)',
    maxLoss: 'Stock purchase price - premium received (if stock goes to zero)',
    breakeven: 'Stock purchase price - premium received',
    risks: ['Upside potential is capped', 'Must own the underlying stock', 'Stock may be called away if it rises above strike'],
  },
  {
    id: 'cash-secured-put',
    name: 'Cash-Secured Put',
    outlook: 'neutral-to-bullish',
    description: 'Selling a put option while maintaining enough cash to buy the stock if assigned. You collect premium income and may acquire the stock at a discount if assigned.',
    maxGain: 'Premium received',
    maxLoss: 'Strike price - premium received (if stock goes to zero)',
    breakeven: 'Strike price - premium received',
    risks: ['Must have cash to buy stock if assigned', 'Stock may be assigned at unfavorable price', 'Limited to premium received as maximum gain'],
  },
  {
    id: 'bull-call-spread',
    name: 'Bull Call Spread',
    outlook: 'bullish',
    description: 'Buying a call option at one strike price and selling another call option at a higher strike price. This limits both potential profit and loss compared to a simple long call.',
    maxGain: '(Higher strike - lower strike) - net premium paid',
    maxLoss: 'Net premium paid',
    breakeven: 'Lower strike + net premium paid',
    risks: ['Upside potential is capped', 'Requires two transactions (higher commissions)', 'Both legs must be managed'],
  },
  {
    id: 'bear-put-spread',
    name: 'Bear Put Spread',
    outlook: 'bearish',
    description: 'Buying a put option at one strike price and selling another put option at a lower strike price. This limits both potential profit and loss compared to a simple long put.',
    maxGain: '(Higher strike - lower strike) - net premium paid',
    maxLoss: 'Net premium paid',
    breakeven: 'Higher strike - net premium paid',
    risks: ['Downside potential is capped', 'Requires two transactions (higher commissions)', 'Both legs must be managed'],
  },
  {
    id: 'protective-put',
    name: 'Protective Put (Married Put)',
    outlook: 'bullish-with-protection',
    description: 'Buying a put option to protect an existing long stock position. This acts like insurance, limiting downside risk while maintaining unlimited upside potential.',
    maxGain: 'Unlimited (stock can rise indefinitely)',
    maxLoss: 'Stock purchase price - strike price + premium paid',
    breakeven: 'Stock purchase price + premium paid',
    risks: ['Put premium reduces overall return', 'Protection expires if not renewed', 'Stock must rise enough to offset put cost'],
  },
];

const Strategies: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<StrategyType | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'payoff' | 'example' | 'risks'>('overview');

  const selectedStrategyData = selectedStrategy 
    ? strategies.find(s => s.id === selectedStrategy)
    : null;

  return (
    <div className="reading-column px-4 py-8">
      <h1>Core Options Strategies</h1>

      <section className="mb-8">
        <p>
          Options strategies can be combined in various ways to create different risk/reward profiles. 
          Below are some of the most common strategies used by options traders, from simple to more 
          complex. Each strategy has specific market conditions where it works best.
        </p>
      </section>

      <section className="mb-12">
        <h2>Strategy Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((strategy) => (
            <div
              key={strategy.id}
              className={`card cursor-pointer transition-all hover:shadow-lg ${
                selectedStrategy === strategy.id ? 'ring-2 ring-accent ring-offset-2' : ''
              }`}
              onClick={() => {
                setSelectedStrategy(strategy.id);
                setActiveTab('overview');
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-serif-heading text-xl font-semibold flex-1">{strategy.name}</h3>
                <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                  strategy.outlook === 'bullish' || strategy.outlook === 'bullish-with-protection' ? 'bg-green-100 text-green-800' :
                  strategy.outlook === 'bearish' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {strategy.outlook.replace('-', ' ')}
                </span>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">{strategy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedStrategyData && (
        <section className="mb-12">
          <h2 className="mb-6">{selectedStrategyData.name} - Detailed Analysis</h2>
          
          <div className="mb-6">
            <div className="flex space-x-1 border-b border-gray-200">
              {(['overview', 'payoff', 'example', 'risks'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-accent text-accent font-semibold'
                      : 'border-transparent text-gray-600 hover:text-charcoal hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            {activeTab === 'overview' && (
              <div>
                <h3 className="font-serif-heading mb-6 text-2xl">Strategy Overview</h3>
                <p className="mb-6 text-base leading-relaxed">{selectedStrategyData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2 font-medium">Maximum Gain</div>
                    <div className="font-semibold text-green-600 text-base leading-relaxed">{selectedStrategyData.maxGain}</div>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2 font-medium">Maximum Loss</div>
                    <div className="font-semibold text-red-600 text-base leading-relaxed">{selectedStrategyData.maxLoss}</div>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2 font-medium">Breakeven</div>
                    <div className="font-semibold text-charcoal text-base leading-relaxed">{selectedStrategyData.breakeven}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-lg">Market Outlook</h4>
                  <p className="text-base leading-relaxed">
                    This strategy works best in a <strong className="text-charcoal">{selectedStrategyData.outlook.replace('-', ' ')}</strong> market environment.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'payoff' && (
              <div>
                <h3 className="font-serif-heading mb-6 text-2xl">Payoff Diagram</h3>
                <PayoffChart
                  strategyType={selectedStrategyData.id}
                  strikes={selectedStrategyData.id.includes('spread') ? [95, 105] : [100]}
                  premiums={selectedStrategyData.id.includes('spread') ? [5, 2] : [5]}
                  quantity={1}
                  underlyingRange={[80, 120]}
                />
              </div>
            )}

            {activeTab === 'example' && (
              <div>
                <h3 className="font-serif-heading mb-6 text-2xl">Example Trade</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Scenario</h4>
                    <p className="text-base leading-relaxed">
                      Stock XYZ is trading at $100. You believe it will {selectedStrategyData.outlook === 'bullish' || selectedStrategyData.outlook === 'bullish-with-protection' ? 'rise' : selectedStrategyData.outlook === 'bearish' ? 'fall' : 'remain relatively stable'} 
                      {' '}over the next month.
                    </p>
                  </div>
                  
                  {selectedStrategyData.id === 'long-call' && (
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Trade Setup</h4>
                      <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
                        <li>Buy 1 call option with strike price of $100</li>
                        <li>Premium paid: $5 per share ($500 per contract)</li>
                        <li>Expiration: 30 days</li>
                      </ul>
                      <h4 className="font-semibold mb-3 mt-6 text-lg">Outcomes at Expiration</h4>
                      <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
                        <li>Stock at $110: Profit = ($110 - $100 - $5) × 100 = $500</li>
                        <li>Stock at $105: Profit = ($105 - $100 - $5) × 100 = $0 (breakeven)</li>
                        <li>Stock at $100: Loss = $500 (entire premium)</li>
                      </ul>
                    </div>
                  )}

                  {selectedStrategyData.id === 'covered-call' && (
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Trade Setup</h4>
                      <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
                        <li>Own 100 shares of XYZ purchased at $95</li>
                        <li>Sell 1 call option with strike price of $105</li>
                        <li>Premium received: $3 per share ($300 per contract)</li>
                        <li>Expiration: 30 days</li>
                      </ul>
                      <h4 className="font-semibold mb-3 mt-6 text-lg">Outcomes at Expiration</h4>
                      <ul className="list-disc ml-6 space-y-2 text-base leading-relaxed">
                        <li>Stock at $110: Shares called away at $105. Total profit = ($105 - $95 + $3) × 100 = $1,300</li>
                        <li>Stock at $100: Keep shares and premium. Total profit = ($100 - $95 + $3) × 100 = $800</li>
                        <li>Stock at $90: Keep shares but stock declined. Total = ($90 - $95 + $3) × 100 = -$200</li>
                      </ul>
                    </div>
                  )}

                  <div className="callout text-sm mt-6">
                    <strong>Note:</strong> These examples are simplified and do not account for transaction 
                    costs, taxes, or early assignment. Actual results may vary.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'risks' && (
              <div>
                <h3 className="font-serif-heading mb-6 text-2xl">Risks and Considerations</h3>
                <ul className="space-y-3 mb-6">
                  {selectedStrategyData.risks.map((risk, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-red-600 text-lg flex-shrink-0">⚠</span>
                      <span className="text-base leading-relaxed">{risk}</span>
                    </li>
                  ))}
                </ul>
                <div className="callout-warning mt-6 text-base">
                  <p className="leading-relaxed">
                    <strong>Important:</strong> All options strategies involve risk. Before implementing 
                    any strategy, ensure you understand the maximum potential loss, margin requirements 
                    (if applicable), and how the strategy performs under various market conditions. 
                    Consider paper trading or using a simulator before risking real capital.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2>Further Reading</h2>
        <ul>
          <li>
            <a href="https://www.optionseducation.org/en/strategies" target="_blank" rel="noopener noreferrer">
              OIC - Options Strategies
            </a>
          </li>
          <li>
            <a href="https://www.cboe.com/learncenter/courses/options-strategies/" target="_blank" rel="noopener noreferrer">
              Cboe - Options Strategies Course
            </a>
          </li>
          <li>
            <a href="https://www.investopedia.com/options/strategy/" target="_blank" rel="noopener noreferrer">
              Investopedia - Options Strategies Guide
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Strategies;

