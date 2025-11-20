import React from 'react';
import OptionsScenarioSimulator from '../charts/OptionsScenarioSimulator';

const PricingGreeks: React.FC = () => {
  return (
    <div className="reading-column px-4 py-8">
      <h1>Options Pricing & The Greeks</h1>

      <section className="mb-8">
        <h2>Understanding Option Prices</h2>
        <p>
          An option's price, or premium, consists of two main components: intrinsic value and time value. 
          Understanding these components helps traders evaluate whether an option is fairly priced and 
          make informed trading decisions.
        </p>

        <div className="card mb-4">
          <h3>Intrinsic Value</h3>
          <p>
            <strong>Intrinsic value</strong> is the amount by which an option is in-the-money. For a call 
            option, intrinsic value equals the stock price minus the strike price (if positive). For a put 
            option, intrinsic value equals the strike price minus the stock price (if positive). Out-of-the-money 
            options have zero intrinsic value.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Example:</strong> If a stock is trading at $105 and you own a call option with a strike 
            price of $100, the intrinsic value is $5. If the stock is at $95, the same call option has 
            zero intrinsic value.
          </p>
        </div>

        <div className="card mb-4">
          <h3>Time Value</h3>
          <p>
            <strong>Time value</strong> (also called extrinsic value) is the portion of an option's premium 
            that exceeds its intrinsic value. Time value represents the probability that the option will 
            become profitable before expiration. As expiration approaches, time value decays, eventually 
            reaching zero at expiration.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Example:</strong> If a call option with a $100 strike is trading for $8 when the stock 
            is at $105, the intrinsic value is $5 and the time value is $3. This $3 represents the 
            premium you're paying for the possibility that the stock might rise further before expiration.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Factors Affecting Option Prices</h2>
        <p>
          Several factors influence option premiums. Understanding these factors helps traders anticipate 
          how option prices might change:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="card">
            <h4>Underlying Stock Price</h4>
            <p className="text-sm">
              For call options, higher stock prices increase premiums. For put options, lower stock prices 
              increase premiums. This relationship is measured by Delta.
            </p>
          </div>

          <div className="card">
            <h4>Strike Price</h4>
            <p className="text-sm">
              Options with strike prices closer to the current stock price (at-the-money) typically have 
              higher time value than deep in-the-money or out-of-the-money options.
            </p>
          </div>

          <div className="card">
            <h4>Time to Expiration</h4>
            <p className="text-sm">
              More time until expiration means more opportunity for the option to become profitable, so 
              longer-term options cost more. Time decay accelerates as expiration approaches.
            </p>
          </div>

          <div className="card">
            <h4>Implied Volatility</h4>
            <p className="text-sm">
              Higher volatility increases the probability of large price swings, making options more 
              valuable. Volatility is often the most significant factor in option pricing after the 
              stock price itself.
            </p>
          </div>

          <div className="card">
            <h4>Interest Rates</h4>
            <p className="text-sm">
              Higher interest rates generally increase call option prices and decrease put option prices, 
              though the effect is usually small for short-term options.
            </p>
          </div>

          <div className="card">
            <h4>Dividends</h4>
            <p className="text-sm">
              Expected dividends can affect option prices. Call options typically decrease in value when 
              a dividend is expected, while put options may increase slightly.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>The Greeks</h2>
        <p>
          "The Greeks" are measures of how sensitive an option's price is to various factors. They help 
          traders understand and manage risk in their options positions. Each Greek measures a different 
          type of risk or sensitivity.
        </p>

        <div className="card mb-4">
          <h3>Delta (Δ)</h3>
          <p>
            <strong>Delta</strong> measures how much an option's price changes when the underlying stock 
            price changes by $1. Delta ranges from 0 to 1 for calls (or 0 to -1 for puts). A delta of 
            0.50 means the option price will move approximately $0.50 for every $1 move in the stock.
          </p>
          <ul className="text-sm mt-2 space-y-1">
            <li>• At-the-money options typically have deltas around 0.50 (calls) or -0.50 (puts)</li>
            <li>• Deep in-the-money options approach delta of 1.0 (calls) or -1.0 (puts)</li>
            <li>• Deep out-of-the-money options approach delta of 0</li>
            <li>• Delta can also be interpreted as the approximate probability of finishing in-the-money</li>
          </ul>
        </div>

        <div className="card mb-4">
          <h3>Gamma (Γ)</h3>
          <p>
            <strong>Gamma</strong> measures how much Delta changes when the stock price changes by $1. 
            Gamma is highest for at-the-money options and decreases as options move further in or out 
            of the money. High gamma means Delta is very sensitive to stock price movements.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Practical impact:</strong> Options with high gamma can experience rapid price changes 
            as the stock moves, which can be beneficial for buyers but risky for sellers.
          </p>
        </div>

        <div className="card mb-4">
          <h3>Theta (Θ)</h3>
          <p>
            <strong>Theta</strong> measures how much an option's price decreases as time passes (time decay). 
            Theta is typically expressed as a negative number representing the daily loss in option value. 
            Time decay accelerates as expiration approaches, especially in the final weeks.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Example:</strong> An option with theta of -0.05 will lose approximately $0.05 per day 
            due to time decay, all else being equal. This works against option buyers but benefits option sellers.
          </p>
        </div>

        <div className="card mb-4">
          <h3>Vega (ν)</h3>
          <p>
            <strong>Vega</strong> measures how much an option's price changes when implied volatility changes 
            by 1 percentage point. Higher volatility generally increases option prices, so vega is typically 
            positive for both calls and puts. Vega is highest for at-the-money options with longer time to expiration.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Practical impact:</strong> Options traders need to monitor volatility changes, as they 
            can significantly affect option prices even when the stock price doesn't move.
          </p>
        </div>

        <div className="card mb-4">
          <h3>Rho (ρ)</h3>
          <p>
            <strong>Rho</strong> measures how much an option's price changes when interest rates change by 
            1 percentage point. Rho is typically positive for calls and negative for puts, but the effect 
            is usually small for short-term options. Rho becomes more significant for long-term options.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Note:</strong> For most retail options traders, Rho is the least important Greek, as 
            interest rate changes are infrequent and the impact is minimal for typical holding periods.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2>Using the Greeks in Practice</h2>
        <p>
          Successful options traders monitor the Greeks to understand their position's risk profile:
        </p>
        <ul>
          <li>
            <strong>Delta hedging:</strong> Traders might adjust their positions to maintain a desired 
            delta (market exposure). For example, if a portfolio has positive delta and the trader wants 
            to be market-neutral, they might add negative delta positions.
          </li>
          <li>
            <strong>Managing time decay:</strong> Understanding theta helps traders decide when to close 
            positions. Options with high theta might need to be closed earlier to avoid excessive time decay.
          </li>
          <li>
            <strong>Volatility trading:</strong> Traders who believe volatility is mispriced might take 
            positions with high vega exposure to profit from volatility changes.
          </li>
          <li>
            <strong>Risk assessment:</strong> The Greeks help traders understand how their positions will 
            react to various market conditions, allowing for better risk management.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>Interactive Pricing Simulator</h2>
        <p className="mb-4">
          Use the simulator below to see how changes in underlying price, volatility, time to expiration, 
          and strike price affect option pricing and the Greeks. Adjust the sliders to observe how each 
          factor influences the estimated option price.
        </p>
        <OptionsScenarioSimulator />
      </section>

      <section className="mb-8">
        <h2>Further Reading</h2>
        <ul>
          <li>
            <a href="https://www.optionseducation.org/en/learn-about-options/options-overview/options-pricing" target="_blank" rel="noopener noreferrer">
              OIC - Options Pricing
            </a>
          </li>
          <li>
            <a href="https://www.cboe.com/learncenter/courses/introduction-to-options/the-greeks/" target="_blank" rel="noopener noreferrer">
              Cboe - Understanding the Greeks
            </a>
          </li>
          <li>
            <a href="https://www.investopedia.com/trading/options-greeks/" target="_blank" rel="noopener noreferrer">
              Investopedia - Options Greeks Guide
            </a>
          </li>
          <li>
            <a href="https://www.investopedia.com/articles/optioninvestor/09/black-scholes-model.asp" target="_blank" rel="noopener noreferrer">
              Investopedia - Black-Scholes Model Explained
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PricingGreeks;

