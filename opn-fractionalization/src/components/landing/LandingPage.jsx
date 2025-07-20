// src/components/landing/LandingPage.jsx
import React from 'react';
import { Shield, TrendingUp, Users, CheckCircle, ArrowRight, Zap, Lock, Globe } from 'lucide-react';

const LandingPage = ({ onEnterApp }) => {
  const features = [
    {
      icon: Shield,
      title: "Regulatory Compliant",
      description: "Built-in KYC/AML verification ensures all transactions meet regulatory standards"
    },
    {
      icon: TrendingUp,
      title: "Fractional Ownership",
      description: "Own a piece of high-value assets that were previously inaccessible"
    },
    {
      icon: Lock,
      title: "Secure & Transparent",
      description: "All transactions are recorded on the OPN blockchain for complete transparency"
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Access luxury assets from around the world, 24/7"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect & Verify",
      description: "Connect your wallet and complete KYC verification"
    },
    {
      number: "02",
      title: "Browse Assets",
      description: "Explore verified luxury assets in our marketplace"
    },
    {
      number: "03",
      title: "Purchase Fractions",
      description: "Buy fractional ownership with OPN tokens"
    },
    {
      number: "04",
      title: "Trade & Manage",
      description: "Track your portfolio and trade fractions anytime"
    }
  ];

  const stats = [
    { value: "$12M+", label: "Total Value Locked" },
    { value: "1,000+", label: "Verified Users" },
    { value: "50+", label: "Fractionalized Assets" },
    { value: "2.5%", label: "Platform Fee" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-light tracking-wide">OPN</h1>
            <button
              onClick={onEnterApp}
              className="btn-primary"
            >
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-fadeIn">
              Democratizing Luxury
              <span className="block text-neutral-400">Through Fractionalization</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
              Own a piece of verified luxury assets on the OPN blockchain. 
              From rare watches to fine art, make exclusive investments accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-400">
              <button
                onClick={onEnterApp}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Enter Marketplace</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#how-it-works"
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-light text-white mb-2">{stat.value}</p>
                <p className="text-sm uppercase tracking-wider text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Why Choose OPN Fractionalization
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              The most secure and compliant platform for fractional asset ownership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="p-8 border border-neutral-900 rounded-sm hover:border-neutral-700 
                               transition-all duration-300 h-full">
                  <feature.icon className="w-12 h-12 text-neutral-500 mb-6 
                                         group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-normal mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              How It Works
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Start owning fractional assets in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-neutral-800" />
                )}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-24 h-24 
                                border border-neutral-800 rounded-sm mb-6">
                    <span className="text-2xl font-light text-neutral-600">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-normal mb-3">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Asset Categories
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Discover a curated selection of verified luxury assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-neutral-900 rounded-sm overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80"
                  alt="Luxury Watches"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 
                           group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-normal mb-2">Luxury Watches</h3>
              <p className="text-neutral-400 text-sm">
                Patek Philippe, Rolex, Audemars Piguet
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square bg-neutral-900 rounded-sm overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?w=800&q=80"
                  alt="Fine Art"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 
                           group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-normal mb-2">Fine Art</h3>
              <p className="text-neutral-400 text-sm">
                Contemporary pieces and classic masterworks
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square bg-neutral-900 rounded-sm overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
                  alt="Classic Cars"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 
                           group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-normal mb-2">Collectibles</h3>
              <p className="text-neutral-400 text-sm">
                Rare items and limited edition pieces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Join thousands of users already building their luxury asset portfolio
          </p>
          <button
            onClick={onEnterApp}
            className="btn-primary text-lg px-12 py-4 flex items-center justify-center space-x-3 mx-auto"
          >
            <Zap className="w-5 h-5" />
            <span>Launch App</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-light mb-2">OPN Fractionalization</h3>
              <p className="text-sm text-neutral-500">
                Democratizing luxury through blockchain technology
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
            © 2024 OPN Fractionalization. Built on OPN Network.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;