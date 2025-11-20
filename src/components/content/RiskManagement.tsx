import React from 'react';
import RiskSimulator from '../charts/RiskSimulator';

const RiskManagement: React.FC = () => {
  return (
    <div className="reading-column px-4 py-8">
      <h1>Risk Management & Best Practices</h1>

      <section className="mb-8">
        <p>
          Risk management is perhaps the most critical aspect of options trading. Many traders lose 
          money not because they don't understand options, but because they fail to properly manage 
          risk. This section covers essential risk management principles and practices.
        </p>
      </section>

      <section className="mb-8">
        <h2>Position Sizing</h2>
        <p>
          Position sizing determines how much capital you risk on each trade. Proper position sizing 
          is fundamental to long-term trading success.
        </p>

        <div className="card mb-4">
          <h3>The 1-2% Rule</h3>
          <p>
            Many professional traders risk no more than 1-2% of their total trading capital on any 
            single trade. This means if you have $10,000 in your account, you should risk no more 
            than $100-$200 per trade.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Example:</strong> If you're buying a call option for $5 per share ($500 per contract), 
            and you're willing to risk 2% of a $10,000 account ($200), you could buy one contract. 
            If the option expires worthless, you've lost 2% of your capital, not 5%.
          </p>
        </div>

        <div className="card mb-4">
          <h3>Calculating Position Size</h3>
          <p className="text-sm mb-2">To calculate appropriate position size:</p>
          <ol className="text-sm space-y-2 ml-6">
            <li>Determine your maximum risk per trade (e.g., 2% of capital)</li>
            <li>Calculate the maximum loss for your strategy</li>
            <li>Divide your risk amount by the maximum loss per contract</li>
            <li>This gives you the number of contracts you can safely trade</li>
          </ol>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Example:</strong> $10,000 account, 2% risk = $200. Buying calls at $5 premium 
            (max loss = $500 per contract). $200 ÷ $500 = 0.4 contracts. Round down to 0 contracts, 
            or consider a cheaper option or smaller position.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Diversification</h2>
        <p>
          Diversification helps reduce risk by not putting all your capital into a single trade or 
          strategy. However, diversification in options trading requires careful consideration.
        </p>

        <div className="card mb-4">
          <h3>Diversification Strategies</h3>
          <ul className="text-sm space-y-2">
            <li>
              <strong>Multiple underlying securities:</strong> Don't concentrate all your options 
              trades on a single stock. Spread risk across different sectors and market caps.
            </li>
            <li>
              <strong>Different expiration dates:</strong> Avoid having all your options expire on 
              the same date, which can create timing risk.
            </li>
            <li>
              <strong>Mix of strategies:</strong> Combine different strategies (some bullish, some 
              bearish, some neutral) to reduce directional risk.
            </li>
            <li>
              <strong>Correlation awareness:</strong> Understand that many stocks move together 
              (especially in the same sector). True diversification requires uncorrelated positions.
            </li>
          </ul>
        </div>

        <div className="callout-warning">
          <p className="text-sm">
            <strong>Note:</strong> Over-diversification can also be problematic. Too many small positions 
            can make it difficult to monitor and manage your portfolio effectively. Find a balance that 
            works for your account size and time availability.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Volatility and Event Risk</h2>
        <p>
          Options prices are highly sensitive to volatility and unexpected events. Understanding and 
          managing these risks is crucial.
        </p>

        <div className="card mb-4">
          <h3>Implied Volatility Risk</h3>
          <p className="text-sm">
            When you buy options, you're essentially buying volatility. If implied volatility 
            decreases after you buy (even if the stock moves in your favor), the option price may 
            decline. This is measured by Vega. Options buyers should be aware of volatility risk, 
            while sellers can benefit from volatility contraction.
          </p>
        </div>

        <div className="card mb-4">
          <h3>Event Risk</h3>
          <p className="text-sm mb-2">Major events can cause sudden, large price movements:</p>
          <ul className="text-sm space-y-1 ml-6">
            <li><strong>Earnings announcements:</strong> Can cause large gaps up or down</li>
            <li><strong>FDA approvals/rejections:</strong> For biotech and pharmaceutical stocks</li>
            <li><strong>Regulatory news:</strong> Government actions affecting specific industries</li>
            <li><strong>Merger/acquisition announcements:</strong> Can cause sudden price jumps</li>
            <li><strong>Market-wide events:</strong> Economic data releases, Fed announcements, etc.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Best practice:</strong> Consider closing or adjusting positions before major events, 
            or use strategies that benefit from volatility (like straddles) if you expect large moves 
            but are uncertain of direction.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Why Many Traders Lose Money</h2>
        <p>
          Understanding common mistakes helps you avoid them. Research shows that a significant 
          percentage of options traders lose money. Here's why:
        </p>

        <div className="card mb-4">
          <h3>Common Pitfalls</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>Ignoring time decay:</strong> Many traders buy options and hold them too long, 
              watching time value erode even when the stock moves in their favor. Options lose value 
              every day, accelerating as expiration approaches.
            </li>
            <li>
              <strong>Over-leveraging:</strong> The leverage in options can be seductive, leading 
              traders to risk too much capital. A few losing trades can wipe out an account.
            </li>
            <li>
              <strong>Lack of exit strategy:</strong> Traders often don't have clear rules for when 
              to take profits or cut losses. Emotional decisions lead to holding losers too long and 
              selling winners too early.
            </li>
            <li>
              <strong>Trading too frequently:</strong> High-frequency trading increases transaction 
              costs and can lead to overtrading. Not every market move requires a trade.
            </li>
            <li>
              <strong>Ignoring transaction costs:</strong> Commissions and bid-ask spreads can 
              significantly eat into profits, especially for small accounts or frequent traders.
            </li>
            <li>
              <strong>Chasing hot stocks:</strong> Buying options on stocks that have already moved 
              significantly often means paying high premiums with low probability of further profit.
            </li>
            <li>
              <strong>Not understanding the strategy:</strong> Complex strategies can have unexpected 
              risks. Always understand your maximum loss before entering a trade.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2>Risk Management Best Practices</h2>
        <div className="card">
          <h3 className="font-serif-heading mb-4">Essential Rules</h3>
          <ol className="space-y-3 text-sm">
            <li>
              <strong>Always know your maximum loss:</strong> Before entering any trade, calculate 
              the worst-case scenario. Can you afford to lose that amount?
            </li>
            <li>
              <strong>Use stop-losses or mental stops:</strong> Decide in advance when you'll exit 
              a losing position. Stick to your plan, even when emotions suggest otherwise.
            </li>
            <li>
              <strong>Take profits systematically:</strong> Have a profit target. Consider taking 
              partial profits as positions move in your favor, locking in gains while letting winners run.
            </li>
            <li>
              <strong>Never risk money you can't afford to lose:</strong> Options trading should 
              only use capital that, if lost, won't affect your essential financial needs.
            </li>
            <li>
              <strong>Keep a trading journal:</strong> Record your trades, reasoning, and outcomes. 
              Review regularly to identify patterns and improve your decision-making.
            </li>
            <li>
              <strong>Continuously educate yourself:</strong> Markets evolve, and so should your 
              knowledge. Stay current with market conditions, new strategies, and risk management techniques.
            </li>
            <li>
              <strong>Practice with paper trading:</strong> Before risking real money, practice with 
              simulated trades to understand how options behave and test your strategies.
            </li>
            <li>
              <strong>Manage your emotions:</strong> Fear and greed are the enemies of good trading. 
              Develop discipline and stick to your trading plan.
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2>Risk Simulator</h2>
        <p className="mb-4">
          Use the simulator below to explore how different risk management parameters affect account 
          performance over a series of trades. Adjust position sizing, win rate, and risk/reward 
          ratios to see their impact on long-term results.
        </p>
        <div className="callout text-sm mb-4">
          <p>
            <strong>Note:</strong> This simulator uses simplified assumptions and randomization. 
            Real trading involves many more variables. Use this tool to understand concepts, not 
            to predict actual results.
          </p>
        </div>
        <RiskSimulator />
      </section>

      <section className="mb-8">
        <h2>Further Reading</h2>
        <ul>
          <li>
            <a href="https://www.optionseducation.org/en/learn-about-options/options-overview/risk-management" target="_blank" rel="noopener noreferrer">
              OIC - Risk Management for Options Traders
            </a>
          </li>
          <li>
            <a href="https://www.cboe.com/learncenter/courses/risk-management/" target="_blank" rel="noopener noreferrer">
              Cboe - Risk Management Course
            </a>
          </li>
          <li>
            <a href="https://www.investopedia.com/articles/trading/09/risk-management.asp" target="_blank" rel="noopener noreferrer">
              Investopedia - Risk Management in Trading
            </a>
          </li>
          <li>
            <a href="https://www.interactivebrokers.com/en/index.php?f=1565&p=risk" target="_blank" rel="noopener noreferrer">
              Interactive Brokers - Options Risk Management
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RiskManagement;

