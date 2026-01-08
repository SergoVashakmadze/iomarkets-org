import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Users, TrendingUp, Brain, Briefcase, Wallet, Coins, Star, Tv, ArrowRight, Monitor, Newspaper, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface IoMarketsOrgProps {
  onDomainChange?: (domain: string) => void;
}

// Floating gold diamonds and rings - distinct from .xyz cubes
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating diamond */}
      <div className="absolute top-20 left-[10%] w-20 h-20 float-elegant">
        <div className="w-full h-full border border-[#C9A962]/30 bg-[#C9A962]/5 transform rotate-45 backdrop-blur-sm" />
      </div>

      {/* Medium diamond */}
      <div className="absolute top-40 right-[15%] w-14 h-14 float-medium" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full border border-[#E8D5A3]/25 bg-[#E8D5A3]/5 transform rotate-45 backdrop-blur-sm" />
      </div>

      {/* Small diamonds */}
      <div className="absolute bottom-32 left-[20%] w-10 h-10 float-fast" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-full border border-[#C9A962]/30 bg-[#C9A962]/5 transform rotate-45 backdrop-blur-sm" />
      </div>

      <div className="absolute top-60 left-[5%] w-6 h-6 float-medium" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full border border-[#B8954F]/30 bg-[#B8954F]/5 transform rotate-45 backdrop-blur-sm" />
      </div>

      <div className="absolute bottom-40 right-[10%] w-16 h-16 float-elegant" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-full border border-[#C9A962]/20 bg-[#C9A962]/5 transform rotate-45 backdrop-blur-sm" />
      </div>

      {/* Floating rings - different from .xyz */}
      <div className="absolute top-32 right-[25%] w-28 h-28 float-medium opacity-40" style={{ animationDelay: '0.7s' }}>
        <div className="w-full h-full border-2 border-[#C9A962]/20 rounded-full" />
      </div>

      <div className="absolute bottom-48 left-[30%] w-20 h-20 float-elegant opacity-30" style={{ animationDelay: '2.5s' }}>
        <div className="w-full h-full border-2 border-[#E8D5A3]/20 rounded-full" />
      </div>

      {/* Rotating ring - unique to .org */}
      <div className="absolute top-1/2 right-[8%] w-32 h-32 rotate-slow opacity-20">
        <div className="w-full h-full border border-[#C9A962]/30 rounded-full" />
        <div className="absolute inset-2 border border-dashed border-[#C9A962]/20 rounded-full" />
      </div>
    </div>
  );
}

// Animated gold wave lines - distinct from .xyz straight lines
function AnimatedGoldLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C9A962" stopOpacity="0" />
          <stop offset="50%" stopColor="#C9A962" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E8D5A3" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Curved wave lines */}
      <path d="M0,150 Q300,100 600,150 T1200,150 T1800,150" stroke="url(#gold-line-gradient)" strokeWidth="1" fill="none">
        <animate attributeName="d"
          values="M0,150 Q300,100 600,150 T1200,150 T1800,150;M0,150 Q300,200 600,150 T1200,150 T1800,150;M0,150 Q300,100 600,150 T1200,150 T1800,150"
          dur="8s" repeatCount="indefinite" />
      </path>
      <path d="M0,300 Q400,250 800,300 T1600,300" stroke="url(#gold-line-gradient)" strokeWidth="1" fill="none" opacity="0.5">
        <animate attributeName="d"
          values="M0,300 Q400,250 800,300 T1600,300;M0,300 Q400,350 800,300 T1600,300;M0,300 Q400,250 800,300 T1600,300"
          dur="10s" repeatCount="indefinite" />
      </path>
      <path d="M0,450 Q250,400 500,450 T1000,450 T1500,450" stroke="url(#gold-line-gradient)" strokeWidth="1" fill="none" opacity="0.3">
        <animate attributeName="d"
          values="M0,450 Q250,400 500,450 T1000,450 T1500,450;M0,450 Q250,500 500,450 T1000,450 T1500,450;M0,450 Q250,400 500,450 T1000,450 T1500,450"
          dur="7s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

const IoMarketsOrg: React.FC<IoMarketsOrgProps> = ({ onDomainChange: _onDomainChange }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
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

      {/* Hero Section - Premium Animated */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Animated background layers */}
        <div className="absolute inset-0">
          {/* Base gradient - gold tinted navy */}
          <div className="absolute inset-0 corporate-gradient-bg" />

          {/* Elegant grid pattern - distinct from .xyz cyber-grid */}
          <div className="absolute inset-0 elegant-grid" />

          {/* Diamond pattern overlay - distinct from .xyz hex pattern */}
          <div className="absolute inset-0 diamond-pattern opacity-50" />

          {/* Gold orbs */}
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#C9A962] orb-gold" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#B8954F] orb-gold" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[#C9A962]/15 to-[#E8D5A3]/10 rounded-full blur-[120px]" />
        </div>

        {/* Floating elements */}
        <FloatingElements />
        <AnimatedGoldLines />

        <motion.div
          style={{ opacity, scale }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 z-10"
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-gold mb-10"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping-gold absolute inline-flex h-full w-full rounded-full bg-[#C9A962] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C9A962]"></span>
              </span>
              <span className="text-sm font-semibold text-white">
                <span className="gradient-text-gold">AI-First</span> Financial Technology
              </span>
              <Sparkles className="w-4 h-4 text-[#C9A962]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
            >
              <span className="relative inline-block">
                IoMarkets<sup className="text-lg md:text-xl">®</sup>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#C9A962] to-[#E8D5A3] rounded-full origin-left"
                />
              </span>
              <br />
              <span className="gradient-text-gold">Organization</span>
            </motion.h1>

            {/* Gold shimmer tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-6 font-bold"
            >
              <span className="relative inline-block bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                Where Ambition meets Innovation and Strategy meets Execution
              </span>
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed"
            >
              The most holistic AI-first financial technology ecosystem powering the future of financial services by combining the latest innovation in <span className="text-[#C9A962] font-medium">Artificial Intelligence</span>, <span className="text-[#E8D5A3] font-medium">Data Analytics</span>, and <span className="text-[#B8954F] font-medium">Digital Assets</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <button className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C9A962] to-[#B8954F] text-navy-900 font-bold text-lg overflow-hidden shadow-lg shadow-[#C9A962]/25 hover:shadow-[#C9A962]/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Ecosystem
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] to-[#C9A962] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="group w-full sm:w-auto px-10 py-5 rounded-2xl glass text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 pulse-gold">
                Partner With Us
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#C9A962]/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#C9A962]"
            />
          </div>
        </motion.div>

        {/* Bottom gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
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