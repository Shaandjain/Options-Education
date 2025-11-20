import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-serif-heading font-bold text-charcoal">
            Options Trading Education
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#start" className="text-sm font-medium text-charcoal hover:text-accent transition-colors">
              Start Here
            </a>
            <a href="#resources" className="text-sm font-medium text-charcoal hover:text-accent transition-colors">
              Resources
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

