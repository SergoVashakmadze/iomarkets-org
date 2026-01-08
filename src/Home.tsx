import React from 'react';
import { Helmet } from 'react-helmet';
import { Users, TrendingUp, Brain, Briefcase, Wallet, Coins, Star, Tv, ArrowRight, Monitor, Newspaper } from 'lucide-react';

interface IoMarketsOrgProps {
  onDomainChange?: (domain: string) => void;
}

const IoMarketsOrg: React.FC<IoMarketsOrgProps> = ({ onDomainChange: _onDomainChange }) => {
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
      <section className="py-24 relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-up">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium">
                AI-First Financial Technology
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IoMarkets<sup className="text-lg md:text-xl">®</sup> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Organization</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-bold relative overflow-hidden">
              <span className="relative inline-block bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                Where Ambition meets Innovation and Strategy meets Execution
              </span>
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              The most holistic AI-first financial technology ecosystem powering the future of financial services by combining the latest innovation in <span className="text-cyan-400 font-medium">Artificial Intelligence</span>, <span className="text-blue-400 font-medium">Data Analytics</span>, and <span className="text-indigo-400 font-medium">Digital Assets</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
                Explore Ecosystem <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:scale-105">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
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

      {/* Featured Insights */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 inline-block">
              Industry Insights
            </span>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Featured Reading</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore thought leadership on the intersection of AI, data analytics, blockchain, and the future of financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 - The Atlantic */}
            <a
              href="https://www.theatlantic.com/technology/archive/2022/02/future-internet-blockchain-investment-banking/621480/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 flex items-center justify-center">
                <Coins className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">Technology & Financial Services</span>
                  <span className="text-gray-400 text-xs">The Atlantic</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                  The Internet Is Just Investment Banking Now
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A thought-provoking analysis on how blockchain is reshaping the future of internet and finance.
                </p>
                <span className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Article 2 - Medium */}
            <a
              href="https://medium.datadriveninvestor.com/ai-blockchain-and-data-analytics-in-private-markets-a91be174dc2f"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center">
                <Brain className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">AI, Blockchain & Data Analytics</span>
                  <span className="text-gray-400 text-xs">Medium</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI, Blockchain, and Data Analytics in Private Markets
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  How emerging technologies are transforming private market investments and data-driven decision making.
                </p>
                <span className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Article 3 - Chainlink */}
            <a
              href="https://blog.chain.link/blockchain-ai-use-cases/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center">
                <TrendingUp className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">AI & Blockchain</span>
                  <span className="text-gray-400 text-xs">Chainlink</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Use Cases of AI in Blockchain
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Exploring the powerful synergies between artificial intelligence and blockchain technology.
                </p>
                <span className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
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