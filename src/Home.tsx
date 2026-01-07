import React from 'react';
import { Helmet } from 'react-helmet';
import { Building2, Users, Globe, TrendingUp, Brain, Briefcase, Wallet, Coins, Star, Tv, ArrowRight, Monitor, Newspaper } from 'lucide-react';

interface IoMarketsOrgProps {
  onDomainChange?: (domain: string) => void;
}

const IoMarketsOrg: React.FC<IoMarketsOrgProps> = ({ onDomainChange }) => {
  const handleServiceClick = (domain: string, isExternal: boolean = false) => {
    if (isExternal) {
      // Open external link in a new tab
      window.open(domain, '_blank');
    } else {
      // Perform a full page redirect to the new domain
      window.location.href = `https://${domain}`;
    }
  };

  const ecosystemServices = [
    {
      icon: TrendingUp,
      name: <>IoMarkets<sup className="text-xs">®</sup>.io</>,
      description: 'AI-Powered Web3 Capital Markets',
      color: 'bg-blue-600',
      domain: 'iomarkets.io',
      isExternal: false
    },
    {
      icon: Coins,
      name: <>IoMarkets<sup className="text-xs">®</sup>.money</>,
      description: 'Digital Money, Stablecoins & Payments',
      color: 'bg-emerald-600',
      domain: 'iomarkets.money',
      isExternal: false
    },
    {
      icon: Star,
      name: <>IoMarkets<sup className="text-xs">®</sup>.xyz</>,
      description: 'Digital Collectibles & NFT Platform',
      color: 'bg-pink-600',
      domain: 'iomarkets.xyz',
      isExternal: false
    },
    {
      icon: TrendingUp,
      name: <>IoMarkets<sup className="text-xs">®</sup>.com</>,
      description: 'Advanced Cryptocurrency Trading Exchange',
      color: 'bg-blue-500',
      domain: 'iomarkets.com',
      isExternal: false
    },
    {
      icon: Brain,
      name: <>IoMarkets<sup className="text-xs">®</sup>.ai</>,
      description: 'AI-Powered Markets Intelligence',
      color: 'bg-purple-600',
      domain: 'iomarkets.ai',
      isExternal: false
    },
    {
      icon: Briefcase,
      name: <>IoMarkets<sup className="text-xs">®</sup>.co</>,
      description: 'Corporate Finance & Investor Relations',
      color: 'bg-green-600',
      domain: 'iomarkets.co',
      isExternal: false
    },
    {
      icon: Wallet,
      name: <>IoMarkets<sup className="text-xs">®</sup>.vc</>,
      description: 'Venture Capital Investment Fund',
      color: 'bg-indigo-600',
      domain: 'iomarkets.vc',
      isExternal: false
    },
    {
      icon: Coins,
      name: <>IoMarkets<sup className="text-xs">®</sup>.fund</>,
      description: 'Asset Management',
      color: 'bg-yellow-600',
      domain: 'iomarkets.fund',
      isExternal: false
    },
    {
      icon: Tv,
      name: <>IoMarkets<sup className="text-xs">®</sup>.tv</>,
      description: 'Global Financial News Television',
      color: 'bg-red-600',
      domain: 'iomarkets.tv',
      isExternal: false
    },
    {
      icon: Newspaper,
      name: <>IoMarkets<sup className="text-xs">®</sup>.news</>,
      description: 'Global Online Financial News',
      color: 'bg-orange-600',
      domain: 'iomarkets.news',
      isExternal: false
    },
    {
      icon: Monitor,
      name: <>IoMarkets<sup className="text-xs">®</sup>.tech</>,
      description: 'Financial Technology Solutions',
      color: 'bg-slate-600',
      domain: 'iomarkets.tech',
      isExternal: false
    },
    {
      icon: Brain,
      name: 'DipBuyer.ai',
      description: 'AI Agent for Value Investing',
      color: 'bg-cyan-600',
      domain: 'https://dipbuyer.ai',
      isExternal: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-blue-50 parallax-bg">
      <Helmet>
        <title>IoMarkets® Organization</title>
        <meta name="title" content="IoMarkets® Organization" />
        <meta name="description" content="IoMarkets® - The most holistic AI-powered Web3 financial ecosystem. Email: info@iomarkets.org. IoMarkets® LLC. 30 N Gould St Ste R, Sheridan, Wyoming 82801." />
        <meta property="og:title" content="IoMarkets® Organization" />
        <meta property="og:description" content="IoMarkets® - The most holistic AI-powered Web3 financial ecosystem. Email: info@iomarkets.org. IoMarkets® LLC. 30 N Gould St Ste R, Sheridan, Wyoming 82801." />
        <meta property="og:site_name" content="IoMarkets®" />
        <meta property="twitter:title" content="IoMarkets® Organization" />
        <meta property="twitter:description" content="IoMarkets® - The most holistic AI-powered Web3 financial ecosystem. Email: info@iomarkets.org. IoMarkets® LLC. 30 N Gould St Ste R, Sheridan, Wyoming 82801." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50/80 to-blue-50/80"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-up relative z-10">
            <h1 className="text-5xl font-bold text-navy-900 mb-6">
              IoMarkets<sup className="text-xs">®</sup> Ecosystem
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The most holistic financial technology ecosystem powering the future of capital markets by combining the latest innovation in Digital Assets and Artificial Intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center shadow-md">
                Explore Ecosystem <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border-2 border-navy-900 text-navy-900 bg-white px-8 py-3 rounded-lg font-medium hover:bg-navy-900 hover:text-white transition-colors shadow-md">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-12 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Financial Ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrated financial services spanning Public and Private Capital Markets, Asset Management, Artificial Intelligence, Digital Assets, Digital Money, Financial News and related products & services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.domain, service.isExternal)}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer hover:border-blue-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Mission, Vision & Values Section */}
      <section className="py-12 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Mission, Vision & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving the future of capital markets through innovation, integrity, and intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Mission</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Increase liquidity, visibility, transparency & diversification in public and private markets
              </p>
              <div className="space-y-3">
                {[
                  'Democratize further access to public and private market investments',
                  'Reduce information asymmetry with artificial intelligence and decentralized ledger technologies',
                  'Create efficient price discovery mechanisms',
                  'Enable fractional ownership of high-value assets'
                ].map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-navy-900 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-3xl">👁️</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Vision</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Become the global digital finance powerhouse and the financial ecosystem of choice
              </p>
              <div className="space-y-3">
                {[
                  'Create a unified global marketplace for all asset classes',
                  'Bridge traditional finance with artificial intelligence and decentralized ledger technologies',
                  'Establish new standards for market transparency and efficiency',
                  'Empower investors and issuers with cutting-edge tools'
                ].map((goal, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-navy-900 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-3xl">💎</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Values</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Core principles guiding our approach to financial innovation and market transformation
              </p>
              <div className="space-y-3">
                {[
                  { title: "Integrity", description: "Operate with the highest ethical standards and transparency", icon: "🎯" },
                  { title: "Intelligence", description: "Leverage data, AI, and human expertise", icon: "🧠" },
                  { title: "Innovation", description: "Continuously push boundaries in capital markets", icon: "💡" },
                  { title: "Energy", description: "Bring passion and dynamism to financial transformation", icon: "⚡" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 flex-shrink-0">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1 text-gray-700">{value.title}</h4>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced leaders from traditional finance, technology, and regulatory backgrounds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Executive Leadership',
                role: 'Strategic Vision & Operations',
                description: 'Seasoned executives with extensive experience in traditional finance and fintech innovation.',
                bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700'
              },
              {
                name: 'Technology Team',
                role: 'AI & Blockchain Innovation',
                description: 'Experienced engineers and researchers specializing in AI, blockchain, and financial technology.',
                bgColor: 'bg-gradient-to-br from-fuchsia-500 to-fuchsia-700'
              },
              {
                name: 'Regulatory Affairs',
                role: 'Compliance & Legal',
                description: 'Professionals with deep expertise in financial regulation and compliance frameworks.',
                bgColor: 'bg-gradient-to-br from-emerald-500 to-emerald-700'
              }
            ].map((team, index) => (
              <div key={index} className="text-center">
                <div className={`w-24 h-24 ${team.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{team.name}</h3>
                <p className="text-gray-700 font-medium mb-3">{team.role}</p>
                <p className="text-gray-600 text-sm">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-navy-900 text-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Ecosystem</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to build the future of financial services and capital markets.
            </p>
            <div className="flex justify-center">
              <button className="bg-gold-500 text-navy-900 px-8 py-3 rounded-lg font-medium hover:bg-gold-400 transition-colors">
                Partnership Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoMarketsOrg;