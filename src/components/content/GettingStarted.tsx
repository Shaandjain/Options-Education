import React from 'react';

const GettingStarted: React.FC = () => {
  return (
    <div className="reading-column px-4 py-8">
      <h1>Getting Started with Options Trading</h1>

      <section className="mb-8">
        <h2>How Options Fit Into a Portfolio</h2>
        <p>
          Options can play various roles in an investment portfolio, depending on an investor's goals, 
          risk tolerance, and market outlook. Understanding these roles helps determine whether and 
          how options might fit into your investment strategy.
        </p>

        <div className="card mb-4">
          <h3>Hedging</h3>
          <p>
            One of the primary uses of options is <strong>hedging</strong>—protecting existing positions 
            from adverse price movements. For example, an investor who owns 100 shares of a stock might 
            buy a put option to limit potential losses if the stock price declines. This is similar to 
            buying insurance for your portfolio.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Example:</strong> You own shares worth $10,000. Buying a put option might cost $200, 
            but it protects you from losses below a certain price level. If the stock drops significantly, 
            the put option increases in value, offsetting some or all of the stock losses.
          </p>
        </div>

        <div className="card mb-4">
          <h3>Speculation</h3>
          <p>
            Options can also be used for <strong>speculation</strong>—attempting to profit from anticipated 
            price movements. Speculators might buy call options if they expect a stock to rise, or put 
            options if they expect it to fall. The leverage provided by options means that small price 
            movements can result in significant percentage gains (or losses).
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Important:</strong> Speculation with options is high-risk. Many options expire worthless, 
            and speculators can lose their entire premium investment.
          </p>
        </div>

        <div className="card mb-4">
          <h3>Income Generation</h3>
          <p>
            Some investors use options to generate <strong>income</strong> from their existing stock positions. 
            Writing covered calls involves selling call options against stock you already own. If the options 
            expire worthless or are bought back at a lower price, you keep the premium as income. Similarly, 
            selling cash-secured puts can generate income while potentially acquiring stock at a desired price.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Account Requirements</h2>
        <p>
          Before you can trade options, your brokerage account must be approved for options trading. 
          Brokerages typically offer different levels of options approval based on your experience, 
          financial resources, and investment objectives.
        </p>

        <div className="card mb-4">
          <h3>Options Approval Levels</h3>
          <p className="text-sm mb-2">
            Most brokerages use a tiered approval system:
          </p>
          <ul className="text-sm space-y-2">
            <li>
              <strong>Level 1:</strong> Covered calls and cash-secured puts (most conservative)
            </li>
            <li>
              <strong>Level 2:</strong> Long calls and puts (buying options)
            </li>
            <li>
              <strong>Level 3:</strong> Spreads (combining multiple options)
            </li>
            <li>
              <strong>Level 4:</strong> Naked options (selling options without owning the underlying, highest risk)
            </li>
          </ul>
        </div>

        <div className="card mb-4">
          <h3>Margin Requirements</h3>
          <p className="text-sm">
            <strong>Buying options</strong> typically requires only the premium payment—no margin is needed. 
            However, <strong>selling options</strong> (especially uncovered or "naked" options) requires margin 
            accounts with sufficient buying power. The margin requirement depends on the strategy, underlying 
            security, and market conditions. Your brokerage will calculate and display margin requirements 
            before you place a trade.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Placing an Options Trade</h2>
        <p>
          While the exact process varies by brokerage platform, here are the typical steps involved in 
          placing an options trade:
        </p>

        <div className="card mb-4">
          <h3>Step-by-Step Process</h3>
          <ol className="space-y-3 text-sm">
            <li>
              <strong>Select the underlying security:</strong> Choose the stock or ETF you want to trade 
              options on. Research the company, its recent price movements, and any upcoming events 
              (earnings, FDA approvals, etc.) that might affect the stock price.
            </li>
            <li>
              <strong>Choose your strategy:</strong> Decide whether you want to buy or sell options, 
              and whether you're using calls or puts. Consider your market outlook (bullish, bearish, 
              or neutral) and risk tolerance.
            </li>
            <li>
              <strong>Select expiration date:</strong> Options typically expire monthly (third Friday), 
              though weekly options are available for many securities. Shorter-term options are cheaper 
              but decay faster. Longer-term options cost more but give the trade more time to work out.
            </li>
            <li>
              <strong>Choose strike price:</strong> Select the strike price based on where you expect 
              the stock to be at expiration. In-the-money options cost more but have higher probability 
              of profit. Out-of-the-money options are cheaper but require larger price movements.
            </li>
            <li>
              <strong>Review the options chain:</strong> Check the bid-ask spread, volume, and open 
              interest. Look for options with tight spreads and good liquidity to ensure you can enter 
              and exit positions efficiently.
            </li>
            <li>
              <strong>Place your order:</strong> Enter the number of contracts, order type (market, 
              limit, etc.), and review the estimated cost or margin requirement. Double-check all 
              parameters before submitting.
            </li>
            <li>
              <strong>Monitor your position:</strong> After placing the trade, monitor how the option 
              price changes with the underlying stock price, time decay, and volatility. Decide in 
              advance when you'll take profits or cut losses.
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2>Pre-Trade Checklist</h2>
        <div className="card">
          <p className="font-semibold mb-4">Before placing your first options trade, ensure you understand:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>How options pricing works (intrinsic vs. time value)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>The Greeks and how they affect your position</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Your maximum potential profit and loss</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Breakeven points for your strategy</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>How time decay (theta) affects your position</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Margin requirements (if selling options)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>When and how to exit the position</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Transaction costs and their impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>Common Mistakes to Avoid</h2>
        <div className="callout-warning">
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Trading without understanding:</strong> Don't trade options strategies you don't 
              fully understand. Start with simple strategies and gradually learn more complex ones.
            </li>
            <li>
              <strong>Ignoring time decay:</strong> Options lose value as expiration approaches, especially 
              in the final weeks. This can erode profits even if the stock moves in your favor.
            </li>
            <li>
              <strong>Over-leveraging:</strong> The leverage in options can amplify both gains and losses. 
              Never risk more than you can afford to lose.
            </li>
            <li>
              <strong>Holding to expiration:</strong> Many traders let options expire worthless when they 
              could have sold them earlier to recoup some value. Consider closing positions before expiration.
            </li>
            <li>
              <strong>Not having an exit plan:</strong> Before entering a trade, know when you'll take 
              profits and when you'll cut losses. Stick to your plan.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2>Further Reading</h2>
        <ul>
          <li>
            <a href="https://www.optionseducation.org/en/learn-about-options/getting-started" target="_blank" rel="noopener noreferrer">
              OIC - Getting Started with Options
            </a>
          </li>
          <li>
            <a href="https://www.interactivebrokers.com/en/index.php?f=1565" target="_blank" rel="noopener noreferrer">
              Interactive Brokers - Options Trading Basics
            </a>
          </li>
          <li>
            <a href="https://www.investopedia.com/articles/active-trading/040915/options-trading-beginners-guide.asp" target="_blank" rel="noopener noreferrer">
              Investopedia - Options Trading Guide for Beginners
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GettingStarted;

