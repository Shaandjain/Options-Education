import React from 'react';

const RiskDisclaimer: React.FC = () => {
  return (
    <div className="callout-warning max-w-4xl mx-auto">
      <h3 className="font-serif-heading font-semibold text-lg mb-2">Important Disclaimer</h3>
      <p className="text-sm leading-relaxed">
        This site is for <strong>educational purposes only</strong> and does not constitute financial, 
        investment, tax, or legal advice. Options involve significant risk and are not suitable for every 
        investor. Before trading options, review the Characteristics and Risks of Standardized Options 
        (ODD) and consult a qualified financial professional.
      </p>
    </div>
  );
};

export default RiskDisclaimer;

