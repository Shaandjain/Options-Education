import React from 'react';
import RiskDisclaimer from '../layout/RiskDisclaimer';

const StartHere: React.FC = () => {
  return (
    <div className="reading-column px-4 py-8">
      <h1>Understanding Stock Options</h1>
      
      <div className="callout-warning mb-8">
        <RiskDisclaimer />
      </div>

      <section className="mb-8">
        <h2>What Are Options?</h2>
        <p>
          Stock options are financial contracts that give the buyer the right, but not the obligation, 
          to buy or sell a specific stock at a predetermined price (called the "strike price") before 
          or on a specific date (called the "expiration date").
        </p>
        <p>
          Think of an option as a ticket that grants you a special privilege. If you own a call option, 
          you have the right to buy shares at a set price. If you own a put option, you have the right 
          to sell shares at a set price. The key word here is "right"—you're not required to exercise 
          this right if it doesn't make financial sense.
        </p>
      </section>

      <section className="mb-8">
        <h2>Calls vs. Puts</h2>
        
        <div className="card mb-4">
          <h3>Call Options</h3>
          <p>
            A <strong>call option</strong> gives you the right to <em>buy</em> a stock at the strike price. 
            Call buyers are typically bullish—they believe the stock price will rise above the strike price 
            before expiration. If the stock price exceeds the strike price plus the premium paid, the call 
            buyer can profit.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Example:</strong> You buy a call option with a strike price of $100 for a premium of $5. 
            If the stock rises to $110, you can exercise your right to buy at $100, immediately sell at $110, 
            and profit $5 per share (after accounting for the $5 premium).
          </p>
        </div>

        <div className="card mb-4">
          <h3>Put Options</h3>
          <p>
            A <strong>put option</strong> gives you the right to <em>sell</em> a stock at the strike price. 
            Put buyers are typically bearish—they believe the stock price will fall below the strike price 
            before expiration. If the stock price drops below the strike price minus the premium paid, the 
            put buyer can profit.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Example:</strong> You buy a put option with a strike price of $100 for a premium of $5. 
            If the stock falls to $90, you can buy shares at $90, exercise your right to sell at $100, and 
            profit $5 per share (after accounting for the $5 premium).
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Key Terms to Know</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <h4>Strike Price</h4>
            <p className="text-sm">
              The predetermined price at which the option can be exercised. This is set when the option 
              contract is created.
            </p>
          </div>

          <div className="card">
            <h4>Expiration Date</h4>
            <p className="text-sm">
              The date by which the option must be exercised or it becomes worthless. Options typically 
              expire on the third Friday of each month.
            </p>
          </div>

          <div className="card">
            <h4>Premium</h4>
            <p className="text-sm">
              The price paid to buy an option contract. This is the maximum loss for an option buyer. 
              Premiums are influenced by factors like stock price, volatility, time to expiration, and 
              interest rates.
            </p>
          </div>

          <div className="card">
            <h4>In the Money (ITM)</h4>
            <p className="text-sm">
              A call option is ITM when the stock price is above the strike price. A put option is ITM 
              when the stock price is below the strike price. ITM options have intrinsic value.
            </p>
          </div>

          <div className="card">
            <h4>Out of the Money (OTM)</h4>
            <p className="text-sm">
              A call option is OTM when the stock price is below the strike price. A put option is OTM 
              when the stock price is above the strike price. OTM options have no intrinsic value, only 
              time value.
            </p>
          </div>

          <div className="card">
            <h4>At the Money (ATM)</h4>
            <p className="text-sm">
              When the stock price equals (or is very close to) the strike price. ATM options are highly 
              sensitive to price movements and time decay.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>Why Trade Options?</h2>
        <p>
          Options can serve several purposes in an investment strategy:
        </p>
        <ul>
          <li>
            <strong>Leverage:</strong> Options allow traders to control a large number of shares with 
            a relatively small investment (the premium).
          </li>
          <li>
            <strong>Hedging:</strong> Options can protect existing stock positions from adverse price 
            movements. For example, buying a put option can act as insurance for a stock portfolio.
          </li>
          <li>
            <strong>Income Generation:</strong> Selling options (covered calls or cash-secured puts) 
            can generate regular income from existing positions.
          </li>
          <li>
            <strong>Speculation:</strong> Options provide a way to profit from price movements in either 
            direction with limited risk (for buyers).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>Understanding Risk</h2>
        <div className="callout-warning">
          <p>
            <strong>Options trading involves significant risk.</strong> While buying options limits your 
            maximum loss to the premium paid, selling options can result in unlimited losses. Many options 
            expire worthless, meaning buyers lose their entire investment. Options are complex instruments 
            that require a thorough understanding of how they work, the underlying securities, and market 
            conditions.
          </p>
          <p className="mt-2">
            Before trading options, ensure you understand:
          </p>
          <ul className="mt-2 ml-4">
            <li>How options pricing works</li>
            <li>The Greeks (Delta, Gamma, Theta, Vega)</li>
            <li>Your maximum potential loss</li>
            <li>How time decay affects your position</li>
            <li>Margin requirements for selling options</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2>Getting Started</h2>
        <p>
          This educational site is designed to help you understand options trading concepts, strategies, 
          and risk management. We recommend proceeding through the sections in order:
        </p>
        <ol>
          <li>Start Here (you are here)</li>
          <li>Getting Started with Options Trading</li>
          <li>Options Pricing & The Greeks</li>
          <li>Core Strategies</li>
          <li>Interactive Payoff Diagrams</li>
          <li>Trade Walkthroughs</li>
          <li>Risk Management & Best Practices</li>
          <li>Glossary & Resources</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2>Further Reading</h2>
        <ul>
          <li>
            <a href="https://www.optionseducation.org/" target="_blank" rel="noopener noreferrer">
              Options Industry Council - Options Education Center
            </a>
          </li>
          <li>
            <a href="https://www.cboe.com/learncenter/" target="_blank" rel="noopener noreferrer">
              Cboe Options Institute - Learning Center
            </a>
          </li>
          <li>
            <a href="https://www.investopedia.com/options-basics-tutorial-4583012" target="_blank" rel="noopener noreferrer">
              Investopedia - Options Basics Tutorial
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default StartHere;

