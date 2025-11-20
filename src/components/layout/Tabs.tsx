import React from 'react';

export type TabId = 
  | 'start'
  | 'getting-started'
  | 'pricing'
  | 'strategies'
  | 'payoff'
  | 'walkthroughs'
  | 'risk'
  | 'glossary';

interface Tab {
  id: TabId;
  label: string;
}

interface TabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: Tab[] = [
  { id: 'start', label: 'Start Here' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'pricing', label: 'Pricing & Greeks' },
  { id: 'strategies', label: 'Core Strategies' },
  { id: 'payoff', label: 'Payoff Diagrams' },
  { id: 'walkthroughs', label: 'Trade Walkthroughs' },
  { id: 'risk', label: 'Risk Management' },
  { id: 'glossary', label: 'Glossary & Resources' },
];

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className="flex space-x-1" 
          role="tablist"
          aria-label="Main navigation"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`
                px-4 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200
                border-b-2
                ${activeTab === tab.id
                  ? 'border-accent text-accent font-semibold'
                  : 'border-transparent text-gray-600 hover:text-charcoal hover:border-gray-300'
                }
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;

