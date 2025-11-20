import React, { useState } from 'react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Call Option',
    definition: 'A contract that gives the buyer the right, but not the obligation, to buy a specific stock at a predetermined price (strike price) before or on the expiration date.',
    category: 'Basics',
  },
  {
    term: 'Put Option',
    definition: 'A contract that gives the buyer the right, but not the obligation, to sell a specific stock at a predetermined price (strike price) before or on the expiration date.',
    category: 'Basics',
  },
  {
    term: 'Strike Price',
    definition: 'The predetermined price at which an option can be exercised. Also called the exercise price.',
    category: 'Basics',
  },
  {
    term: 'Expiration Date',
    definition: 'The date by which an option must be exercised or it becomes worthless. Most options expire on the third Friday of each month.',
    category: 'Basics',
  },
  {
    term: 'Premium',
    definition: 'The price paid to buy an option contract. This is the maximum loss for an option buyer.',
    category: 'Basics',
  },
  {
    term: 'In the Money (ITM)',
    definition: 'A call option is ITM when the stock price is above the strike price. A put option is ITM when the stock price is below the strike price.',
    category: 'Basics',
  },
  {
    term: 'Out of the Money (OTM)',
    definition: 'A call option is OTM when the stock price is below the strike price. A put option is OTM when the stock price is above the strike price.',
    category: 'Basics',
  },
  {
    term: 'At the Money (ATM)',
    definition: 'When the stock price equals (or is very close to) the strike price.',
    category: 'Basics',
  },
  {
    term: 'Intrinsic Value',
    definition: 'The amount by which an option is in-the-money. For calls: max(0, stock price - strike price). For puts: max(0, strike price - stock price).',
    category: 'Pricing',
  },
  {
    term: 'Time Value',
    definition: 'The portion of an option premium that exceeds its intrinsic value. Time value decays as expiration approaches.',
    category: 'Pricing',
  },
  {
    term: 'Delta',
    definition: 'A measure of how much an option price changes when the underlying stock price changes by $1. Delta ranges from 0 to 1 for calls and 0 to -1 for puts.',
    category: 'Greeks',
  },
  {
    term: 'Gamma',
    definition: 'A measure of how much Delta changes when the stock price changes by $1. Gamma is highest for at-the-money options.',
    category: 'Greeks',
  },
  {
    term: 'Theta',
    definition: 'A measure of how much an option price decreases as time passes (time decay). Typically expressed as a negative number.',
    category: 'Greeks',
  },
  {
    term: 'Vega',
    definition: 'A measure of how much an option price changes when implied volatility changes by 1 percentage point. Higher volatility increases option prices.',
    category: 'Greeks',
  },
  {
    term: 'Rho',
    definition: 'A measure of how much an option price changes when interest rates change by 1 percentage point. Usually the least significant Greek for short-term options.',
    category: 'Greeks',
  },
  {
    term: 'Implied Volatility (IV)',
    definition: 'The market\'s expectation of future price volatility, as reflected in option prices. High IV means options are expensive; low IV means options are cheap.',
    category: 'Pricing',
  },
  {
    term: 'Covered Call',
    definition: 'A strategy where an investor owns the underlying stock and sells a call option against it. Generates income but caps upside potential.',
    category: 'Strategies',
  },
  {
    term: 'Cash-Secured Put',
    definition: 'A strategy where an investor sells a put option while maintaining enough cash to buy the stock if assigned. Generates income and may result in stock acquisition.',
    category: 'Strategies',
  },
  {
    term: 'Protective Put',
    definition: 'A strategy where an investor owns stock and buys a put option to limit downside risk. Also called a "married put."',
    category: 'Strategies',
  },
  {
    term: 'Bull Call Spread',
    definition: 'A strategy involving buying a call at one strike and selling another call at a higher strike. Limits both profit and loss.',
    category: 'Strategies',
  },
  {
    term: 'Bear Put Spread',
    definition: 'A strategy involving buying a put at one strike and selling another put at a lower strike. Limits both profit and loss.',
    category: 'Strategies',
  },
  {
    term: 'Assignment',
    definition: 'When an option seller is required to fulfill the obligation of the option contract (buy stock for call sellers, sell stock for put sellers).',
    category: 'Trading',
  },
  {
    term: 'Exercise',
    definition: 'The act of using an option to buy (call) or sell (put) the underlying stock at the strike price.',
    category: 'Trading',
  },
  {
    term: 'Bid-Ask Spread',
    definition: 'The difference between the highest price a buyer is willing to pay (bid) and the lowest price a seller is willing to accept (ask).',
    category: 'Trading',
  },
  {
    term: 'Open Interest',
    definition: 'The total number of outstanding option contracts that have not been closed or exercised. High open interest indicates good liquidity.',
    category: 'Trading',
  },
  {
    term: 'Volume',
    definition: 'The number of option contracts traded in a given period. High volume indicates active trading and better liquidity.',
    category: 'Trading',
  },
  {
    term: 'Options Chain',
    definition: 'A listing of all available option contracts for a given underlying security, showing strikes, expirations, and prices.',
    category: 'Trading',
  },
];

const GlossaryResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(glossaryTerms.map(t => t.category)))];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="reading-column px-4 py-8">
      <h1>Glossary & Resources</h1>

      <section className="mb-8">
        <h2>Glossary of Key Terms</h2>
        <p className="mb-4">
          Use the search and filter below to find definitions of options trading terms.
        </p>

        <div className="card mb-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    selectedCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-gray-200 text-charcoal hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((term, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-lg">{term.term}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                      {term.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{term.definition}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No terms found matching your search.</p>
            )}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2>Resources & Further Reading</h2>
        <p>
          The following resources provide authoritative, in-depth information about options trading. 
          These sources are widely recognized in the financial industry for their educational content.
        </p>

        <div className="card mb-4">
          <h3 className="font-serif-heading mb-3">Official Options Industry Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.optionseducation.org/" target="_blank" rel="noopener noreferrer" className="font-medium">
                Options Industry Council (OIC) - Options Education Center
              </a>
              <p className="text-gray-600 ml-4">
                Comprehensive educational resources, webinars, and strategy guides from the options industry.
              </p>
            </li>
            <li>
              <a href="https://www.cboe.com/learncenter/" target="_blank" rel="noopener noreferrer" className="font-medium">
                Cboe Options Institute - Learning Center
              </a>
              <p className="text-gray-600 ml-4">
                Educational courses, strategy guides, and market insights from the Chicago Board Options Exchange.
              </p>
            </li>
            <li>
              <a href="https://www.theocc.com/" target="_blank" rel="noopener noreferrer" className="font-medium">
                The Options Clearing Corporation (OCC)
              </a>
              <p className="text-gray-600 ml-4">
                Information about options clearing, risk disclosures, and educational materials.
              </p>
            </li>
          </ul>
        </div>

        <div className="card mb-4">
          <h3 className="font-serif-heading mb-3">Educational Websites</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.investopedia.com/options-basics-tutorial-4583012" target="_blank" rel="noopener noreferrer" className="font-medium">
                Investopedia - Options Basics Tutorial
              </a>
              <p className="text-gray-600 ml-4">
                Comprehensive tutorial covering options fundamentals, strategies, and advanced concepts.
              </p>
            </li>
            <li>
              <a href="https://www.investopedia.com/trading/options-greeks/" target="_blank" rel="noopener noreferrer" className="font-medium">
                Investopedia - Options Greeks Guide
              </a>
              <p className="text-gray-600 ml-4">
                Detailed explanation of Delta, Gamma, Theta, Vega, and Rho with examples.
              </p>
            </li>
            <li>
              <a href="https://www.interactivebrokers.com/en/index.php?f=1565" target="_blank" rel="noopener noreferrer" className="font-medium">
                Interactive Brokers - Traders' Academy
              </a>
              <p className="text-gray-600 ml-4">
                Free educational courses on options trading, risk management, and market analysis.
              </p>
            </li>
          </ul>
        </div>

        <div className="card mb-4">
          <h3 className="font-serif-heading mb-3">Academic & Professional Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.cfainstitute.org/" target="_blank" rel="noopener noreferrer" className="font-medium">
                CFA Institute
              </a>
              <p className="text-gray-600 ml-4">
                Professional resources on derivatives and options from the Chartered Financial Analyst Institute. 
                Look for Level I curriculum materials on options and derivatives.
              </p>
            </li>
            <li>
              <a href="https://www.finra.org/investors/learn-to-invest/types-investments/options" target="_blank" rel="noopener noreferrer" className="font-medium">
                FINRA - Options Trading Information
              </a>
              <p className="text-gray-600 ml-4">
                Regulatory information and investor education from the Financial Industry Regulatory Authority.
              </p>
            </li>
          </ul>
        </div>

        <div className="card mb-4">
          <h3 className="font-serif-heading mb-3">Important Documents</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.theocc.com/Company-Information/Documents-and-Archives/Options-Disclosure-Document" target="_blank" rel="noopener noreferrer" className="font-medium">
                Characteristics and Risks of Standardized Options (ODD)
              </a>
              <p className="text-gray-600 ml-4">
                Required reading document that explains the risks and characteristics of standardized options. 
                All options traders should review this document.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2>Disclaimer</h2>
        <div className="callout-warning">
          <p className="text-sm">
            The resources listed above are provided for educational purposes only. This site does not 
            endorse any specific brokerage, service, or product. Always verify information from multiple 
            sources and consult with qualified financial professionals before making investment decisions. 
            Links to external sites are provided for convenience only; we are not responsible for their 
            content or accuracy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GlossaryResources;

