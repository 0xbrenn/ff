// src/components/common/Navbar.jsx
import React, { useEffect } from 'react';
import { useWeb3 } from '../../contexts/Web3Context';
import { useApp } from '../../contexts/AppContext';

const Navbar = ({ activeView, setActiveView }) => {
  const { address, balance, chainId, isConnected } = useWeb3();
  const { userKYCStatus, isComplianceOfficer } = useApp();

  // Debug logging
  useEffect(() => {
    console.log('Navbar Debug:', {
      address,
      isConnected,
      chainId,
      isComplianceOfficer,
      userKYCStatus
    });
  }, [address, isConnected, chainId, isComplianceOfficer, userKYCStatus]);

  // Base tabs available to everyone
  const baseTabs = [
     { id: 'property', label: 'Property' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'create', label: 'Create' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  // Only add Compliance tab if user has the role
  const tabs = isComplianceOfficer 
    ? [...baseTabs, { id: 'compliance', label: 'Compliance' }]
    : baseTabs;

  // Get network name
  const getNetworkName = (chainId) => {
    switch (chainId) {
      case 1: return 'Mainnet';
      case 137: return 'Polygon';
      case 42161: return 'Arbitrum';
      case 984: return 'OPN';
      default: return 'Unknown';
    }
  };

  const networkName = chainId ? getNetworkName(chainId) : '';

  // If user is on compliance view but doesn't have role, redirect to marketplace
  useEffect(() => {
    if (activeView === 'compliance' && !isComplianceOfficer && isConnected) {
      setActiveView('marketplace');
    }
  }, [activeView, isComplianceOfficer, isConnected, setActiveView]);

  return (
    <nav className="border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-light tracking-wide text-white">
                OPN
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id)}
                  className={`px-4 py-2 text-sm font-light transition-all duration-200 ${
                    activeView === tab.id 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-neutral-500 hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {isConnected && address && (
              <div className="flex items-center space-x-6">
                {networkName && (
                  <span className="text-xs uppercase tracking-wider text-neutral-600">
                    {networkName}
                  </span>
                )}
                {userKYCStatus && (
                  <span className="text-xs uppercase tracking-wider text-neutral-500">
                    KYC Verified
                  </span>
                )}
                {isComplianceOfficer && (
                  <span className="text-xs uppercase tracking-wider text-green-600">
                    Compliance
                  </span>
                )}
                <span className="text-sm font-light text-neutral-400">
                  {balance} OPN
                </span>
              </div>
            )}
            {/* AppKit Connect Button */}
            <appkit-button balance="hide" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;