import React from 'react';
import RiskDisclaimer from './RiskDisclaimer';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RiskDisclaimer />
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Options Trading Education. Educational content only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

