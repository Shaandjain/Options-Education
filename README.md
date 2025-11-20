# Options Trading Education Site

A comprehensive, educational React + TypeScript website about stock options trading. Built with modern web technologies and designed with an editorial, magazine-like aesthetic.

## Features

- **8 Main Learning Sections:**
  - Start Here - Introduction to options basics
  - Getting Started - Account setup and first trades
  - Pricing & Greeks - Options pricing and the Greeks
  - Core Strategies - Detailed strategy guides
  - Payoff Diagrams - Interactive payoff visualizations
  - Trade Walkthroughs - Historical examples
  - Risk Management - Best practices and simulators
  - Glossary & Resources - Searchable glossary and external links

- **Interactive Components:**
  - Payoff Chart - Visualize strategy profit/loss at expiration
  - Options Pricing Simulator - Explore how factors affect option prices
  - Trade History Chart - See hypothetical strategy performance
  - Risk Simulator - Understand position sizing and risk management

- **Design:**
  - Editorial, magazine-style typography
  - Clean, modern UI with Tailwind CSS
  - Fully responsive (desktop, tablet, mobile)
  - Accessible navigation and keyboard support

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Recharts** for interactive charts
- **Google Fonts** (Playfair Display, Source Serif Pro, Inter)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd options-trading-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
options-trading-site/
├── src/
│   ├── components/
│   │   ├── charts/          # Interactive chart components
│   │   │   ├── PayoffChart.tsx
│   │   │   ├── OptionsScenarioSimulator.tsx
│   │   │   ├── TradeHistoryChart.tsx
│   │   │   └── RiskSimulator.tsx
│   │   ├── content/         # Content page components
│   │   │   ├── StartHere.tsx
│   │   │   ├── GettingStarted.tsx
│   │   │   ├── PricingGreeks.tsx
│   │   │   ├── Strategies.tsx
│   │   │   ├── PayoffDiagrams.tsx
│   │   │   ├── TradeWalkthroughs.tsx
│   │   │   ├── RiskManagement.tsx
│   │   │   └── GlossaryResources.tsx
│   │   └── layout/           # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── Tabs.tsx
│   │       └── RiskDisclaimer.tsx
│   ├── data/                 # Sample data files
│   │   ├── samplePriceHistory.json
│   │   └── optionsChainSample.json
│   ├── styles/               # Global styles
│   │   └── index.css
│   ├── App.tsx               # Main app component
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Key Components

### PayoffChart
Visualizes profit/loss at expiration for various options strategies. Supports single strategies and comparison mode.

### OptionsScenarioSimulator
Interactive tool to explore how underlying price, volatility, time to expiration, and strike price affect option pricing and the Greeks.

### TradeHistoryChart
Displays historical price data with hypothetical trade entry/exit points and strategy performance.

### RiskSimulator
Monte Carlo-style simulator showing how position sizing, win rate, and risk/reward ratios affect account performance over time.

## Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color palette:
- `charcoal` - Main text color
- `off-white` - Background color
- `accent` - Primary accent color

### Modifying Typography
Fonts are loaded from Google Fonts in `index.html`. To change fonts:
1. Update the Google Fonts link in `index.html`
2. Update font families in `tailwind.config.js`

### Adding New Strategies
1. Add the strategy to the `strategies` array in `src/components/content/Strategies.tsx`
2. Implement the payoff calculation in `src/components/charts/PayoffChart.tsx`
3. Add any strategy-specific content

## Data Sources

The sample data files (`src/data/`) contain mock/hypothetical data for educational purposes. In a production environment, you would:

1. Replace with real market data from an API (e.g., broker API, market data provider)
2. Add proper data fetching and caching
3. Include real-time updates if needed
4. Handle authentication and rate limiting

Example APIs that could be integrated:
- Interactive Brokers API
- Alpha Vantage
- Polygon.io
- Yahoo Finance API (unofficial)

## Important Disclaimers

**This site is for educational purposes only and does not constitute financial, investment, tax, or legal advice.**

- All examples are hypothetical and for illustration only
- Past performance does not guarantee future results
- Options trading involves significant risk
- Always consult qualified financial professionals before trading
- Review the Characteristics and Risks of Standardized Options (ODD) document

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Notes

- The pricing models in `OptionsScenarioSimulator` are simplified for educational purposes. Real options pricing uses more complex models (Black-Scholes, binomial trees, etc.).
- The payoff calculations assume options are held to expiration. Early exercise and time value are not fully modeled.
- All performance examples are clearly marked as hypothetical.

## License

This project is for educational purposes. Please ensure compliance with any applicable regulations when using or modifying this code.

## Contributing

This is an educational project. If you find errors or have suggestions for improvements, please ensure all content remains educational and includes appropriate disclaimers.

## Support

For questions about options trading concepts, refer to the resources listed in the Glossary & Resources section of the site.

---

**Remember: Options trading involves significant risk. This site is educational only and not investment advice.**

