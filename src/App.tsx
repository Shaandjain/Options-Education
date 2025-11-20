import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Tabs, { TabId } from './components/layout/Tabs';
import StartHere from './components/content/StartHere';
import GettingStarted from './components/content/GettingStarted';
import PricingGreeks from './components/content/PricingGreeks';
import Strategies from './components/content/Strategies';
import PayoffDiagrams from './components/content/PayoffDiagrams';
import TradeWalkthroughs from './components/content/TradeWalkthroughs';
import RiskManagement from './components/content/RiskManagement';
import GlossaryResources from './components/content/GlossaryResources';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('start');

  const renderContent = () => {
    switch (activeTab) {
      case 'start':
        return <StartHere />;
      case 'getting-started':
        return <GettingStarted />;
      case 'pricing':
        return <PricingGreeks />;
      case 'strategies':
        return <Strategies />;
      case 'payoff':
        return <PayoffDiagrams />;
      case 'walkthroughs':
        return <TradeWalkthroughs />;
      case 'risk':
        return <RiskManagement />;
      case 'glossary':
        return <GlossaryResources />;
      default:
        return <StartHere />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <Header />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

