import React from 'react';
import TradeHistoryChart from '../charts/TradeHistoryChart';

const TradeWalkthroughs: React.FC = () => {
  return (
    <div className="reading-column px-4 py-8">
      <h1>Trade Walkthroughs & Historical Context</h1>

      <section className="mb-8">
        <div className="callout-warning">
          <p>
            <strong>Important:</strong> All examples on this page are <strong>hypothetical and for 
            educational purposes only</strong>. They use historical data to illustrate concepts, but 
            they do not represent actual trades or investment recommendations. Past performance does 
            not guarantee future results. These examples are simplified and do not account for all 
            real-world factors such as transaction costs, taxes, early assignment, or market liquidity.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Understanding Historical Examples</h2>
        <p>
          Examining how options strategies might have performed in past market conditions can help 
          illustrate key concepts. However, it's crucial to remember that:
        </p>
        <ul>
          <li>Historical examples are not predictive of future performance</li>
          <li>Market conditions, volatility, and option pricing change over time</li>
          <li>Real trades involve transaction costs, bid-ask spreads, and other factors not shown here</li>
          <li>These examples assume perfect execution, which rarely occurs in practice</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>Example 1: Covered Call on SPY</h2>
        <p className="mb-4">
          This example shows a hypothetical covered call strategy on SPY (S&P 500 ETF) during a 
          period of moderate upward movement. A covered call involves owning the underlying stock 
          and selling a call option against it.
        </p>
        <TradeHistoryChart
          ticker="SPY"
          entryDate="2024-01-15"
          exitDate="2024-02-15"
          strategy="Covered Call"
        />
        
        <div className="card mt-4">
          <h3 className="font-serif-heading mb-3">Strategy Explanation</h3>
          <div className="text-sm space-y-2">
            <p>
              <strong>Setup:</strong> An investor owns 100 shares of SPY purchased at $480. They sell 
              one call option with a strike price of $490, expiring in 30 days, receiving a premium 
              of approximately $3 per share ($300 total).
            </p>
            <p>
              <strong>Outcome:</strong> If SPY rises above $490, the shares may be called away at the 
              strike price. The investor keeps the premium and profits from the stock appreciation up 
              to the strike price. If SPY stays below $490, the investor keeps the shares and the premium, 
              but upside is capped.
            </p>
            <p>
              <strong>Key Takeaway:</strong> Covered calls generate income and provide some downside 
              protection through the premium received, but limit upside potential. This strategy works 
              well in neutral to slightly bullish markets.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>Example 2: Protective Put on SPY</h2>
        <p className="mb-4">
          This example illustrates a protective put strategy, which acts like insurance for a stock 
          position. The investor owns the stock and buys a put option to limit downside risk.
        </p>
        <TradeHistoryChart
          ticker="SPY"
          entryDate="2024-02-01"
          exitDate="2024-03-01"
          strategy="Protective Put"
        />
        
        <div className="card mt-4">
          <h3 className="font-serif-heading mb-3">Strategy Explanation</h3>
          <div className="text-sm space-y-2">
            <p>
              <strong>Setup:</strong> An investor owns 100 shares of SPY at $500. Concerned about 
              potential downside, they buy one put option with a strike price of $480, expiring in 
              30 days, paying a premium of approximately $4 per share ($400 total).
            </p>
            <p>
              <strong>Outcome:</strong> If SPY falls below $480, the put option increases in value, 
              offsetting some or all of the stock losses. If SPY rises, the investor benefits from 
              the stock appreciation, minus the put premium paid. The maximum loss is limited to the 
              difference between the purchase price and strike price, plus the premium.
            </p>
            <p>
              <strong>Key Takeaway:</strong> Protective puts provide downside protection while 
              maintaining unlimited upside potential. However, the put premium reduces overall returns, 
              similar to paying for insurance. This strategy is useful when an investor wants to protect 
              gains or limit risk in a volatile market.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>Example 3: Long Call on AAPL (Conceptual)</h2>
        <div className="card">
          <h3 className="font-serif-heading mb-3">Hypothetical Scenario</h3>
          <div className="text-sm space-y-3">
            <p>
              <strong>Setup:</strong> An investor is bullish on Apple (AAPL) and believes the stock 
              will rise significantly over the next month. Instead of buying 100 shares at $150 (costing 
              $15,000), they buy 10 call options with a strike price of $155, expiring in 30 days, 
              paying $3 per share ($3,000 total).
            </p>
            <p>
              <strong>Outcome Scenarios:</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>
                <strong>Bullish outcome:</strong> If AAPL rises to $170, the calls are worth $15 per 
                share ($15,000 total). The investor profits $12,000 (400% return) compared to $2,000 
                (13% return) from owning the stock.
              </li>
              <li>
                <strong>Moderate outcome:</strong> If AAPL rises to $160, the calls are worth $5 per 
                share ($5,000 total). The investor profits $2,000 (67% return) compared to $1,000 
                (6.7% return) from owning the stock.
              </li>
              <li>
                <strong>Bearish outcome:</strong> If AAPL stays at $150 or falls, the calls expire 
                worthless. The investor loses the entire $3,000 premium, while a stock owner would 
                have a smaller loss or break even.
              </li>
            </ul>
            <p>
              <strong>Key Takeaway:</strong> Long calls provide significant leverage and profit potential, 
              but the risk of total loss is high if the stock doesn't move as expected. This strategy 
              requires the stock to move significantly in the right direction within a limited time frame.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>Lessons from Historical Examples</h2>
        <div className="card">
          <h3 className="font-serif-heading mb-3">Key Insights</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Time is critical:</strong> Options have expiration dates. Even if you're right 
              about direction, you need the move to happen within the option's lifetime.
            </li>
            <li>
              <strong>Volatility matters:</strong> Options are more expensive when volatility is high, 
              which can reduce potential profits. Conversely, low volatility can make options cheaper, 
              but may indicate lower probability of large moves.
            </li>
            <li>
              <strong>Transaction costs add up:</strong> Real trades involve commissions, bid-ask spreads, 
              and potentially early assignment fees. These can significantly impact returns, especially 
              for frequent traders.
            </li>
            <li>
              <strong>Strategy selection matters:</strong> Different strategies work best in different 
              market conditions. A strategy that worked well in one period may not work in another.
            </li>
            <li>
              <strong>Risk management is essential:</strong> Even with historical examples showing 
              profits, real trading involves uncertainty. Always understand your maximum potential loss 
              and have an exit plan.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2>Further Reading</h2>
        <ul>
          <li>
            <a href="https://www.optionseducation.org/en/learn-about-options/options-overview/real-world-examples" target="_blank" rel="noopener noreferrer">
              OIC - Real-World Options Examples
            </a>
          </li>
          <li>
            <a href="https://www.interactivebrokers.com/en/index.php?f=1565&p=options" target="_blank" rel="noopener noreferrer">
              Interactive Brokers - Options Trading Examples
            </a>
          </li>
          <li>
            <a href="https://www.investopedia.com/articles/active-trading/101115/options-trading-strategies-beginners.asp" target="_blank" rel="noopener noreferrer">
              Investopedia - Options Trading Strategies for Beginners
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TradeWalkthroughs;

