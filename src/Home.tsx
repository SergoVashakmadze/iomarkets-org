import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Users, TrendingUp, Brain, Briefcase, Wallet, Coins, Star, Tv,
  ArrowRight, Monitor, Newspaper, Shield, Sparkles, Target, Eye,
  Gem, Zap, Globe, ChevronRight, Lightbulb
} from 'lucide-react';

interface IoMarketsOrgProps {
  onDomainChange?: (domain: string) => void;
}

// Stats data
const stats = [
  { label: 'Ecosystem Domains', value: '12+', icon: Globe, color: '#00D4FF' },
  { label: 'Financial Services', value: '10+', icon: Briefcase, color: '#8B5CF6' },
  { label: 'Technology Areas', value: '5+', icon: Monitor, color: '#10B981' },
  { label: 'Innovation Focus', value: '100%', icon: Zap, color: '#F59E0B' },
];

// Floating cubes component
function FloatingCubes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating cube */}
      <div className="absolute top-20 left-[10%] w-24 h-24 float-slow">
        <div className="w-full h-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 rounded-lg transform rotate-12 backdrop-blur-sm" />
      </div>

      {/* Medium cube */}
      <div className="absolute top-40 right-[15%] w-16 h-16 float-medium" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 rounded-lg transform -rotate-12 backdrop-blur-sm" />
      </div>

      {/* Small cubes */}
      <div className="absolute bottom-32 left-[20%] w-12 h-12 float-fast" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-full border border-[#10B981]/30 bg-[#10B981]/5 rounded-lg transform rotate-45 backdrop-blur-sm" />
      </div>

      <div className="absolute top-60 left-[5%] w-8 h-8 float-medium" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full border border-[#F59E0B]/30 bg-[#F59E0B]/5 rounded-lg transform -rotate-6 backdrop-blur-sm" />
      </div>

      <div className="absolute bottom-40 right-[10%] w-20 h-20 float-slow" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 rounded-lg transform rotate-6 backdrop-blur-sm" />
      </div>

      {/* Floating rings */}
      <div className="absolute top-32 right-[25%] w-32 h-32 float-medium opacity-40" style={{ animationDelay: '0.7s' }}>
        <div className="w-full h-full border-2 border-[#8B5CF6]/20 rounded-full" />
      </div>

      <div className="absolute bottom-48 left-[30%] w-24 h-24 float-slow opacity-30" style={{ animationDelay: '2.5s' }}>
        <div className="w-full h-full border-2 border-[#00D4FF]/20 rounded-full" />
      </div>
    </div>
  );
}

// Animated lines component
function AnimatedLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00D4FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#line-gradient)" strokeWidth="1">
        <animate attributeName="x1" from="-100%" to="100%" dur="8s" repeatCount="indefinite" />
        <animate attributeName="x2" from="0%" to="200%" dur="8s" repeatCount="indefinite" />
      </line>
      <line x1="0" y1="40%" x2="100%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1">
        <animate attributeName="x1" from="-100%" to="100%" dur="10s" repeatCount="indefinite" />
        <animate attributeName="x2" from="0%" to="200%" dur="10s" repeatCount="indefinite" />
      </line>
      <line x1="0" y1="60%" x2="100%" y2="60%" stroke="url(#line-gradient)" strokeWidth="1">
        <animate attributeName="x1" from="-100%" to="100%" dur="7s" repeatCount="indefinite" />
        <animate attributeName="x2" from="0%" to="200%" dur="7s" repeatCount="indefinite" />
      </line>
      <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#line-gradient)" strokeWidth="1">
        <animate attributeName="x1" from="-100%" to="100%" dur="9s" repeatCount="indefinite" />
        <animate attributeName="x2" from="0%" to="200%" dur="9s" repeatCount="indefinite" />
      </line>
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
      window.open(domain, '_blank');
    } else {
      window.location.href = `https://${domain}`;
    }
  };

  const ecosystemServices = [
    { icon: TrendingUp, name: 'IoMarkets.io', description: 'AI-Powered Web3 Capital Markets', color: '#00D4FF', gradient: 'from-cyan-500/20 to-blue-500/20', domain: 'iomarkets.io', isExternal: false },
    { icon: Coins, name: 'IoMarkets.money', description: 'Digital Money, Stablecoins & Payments', color: '#10B981', gradient: 'from-emerald-500/20 to-green-500/20', domain: 'iomarkets.money', isExternal: false },
    { icon: Star, name: 'IoMarkets.xyz', description: 'Digital Collectibles & NFT Platform', color: '#EC4899', gradient: 'from-pink-500/20 to-rose-500/20', domain: 'iomarkets.xyz', isExternal: false },
    { icon: TrendingUp, name: 'IoMarkets.com', description: 'Advanced Cryptocurrency Trading Exchange', color: '#3B82F6', gradient: 'from-blue-500/20 to-indigo-500/20', domain: 'iomarkets.com', isExternal: false },
    { icon: Brain, name: 'IoMarkets.ai', description: 'AI-Powered Markets Intelligence', color: '#8B5CF6', gradient: 'from-violet-500/20 to-purple-500/20', domain: 'iomarkets.ai', isExternal: false },
    { icon: Briefcase, name: 'IoMarkets.co', description: 'Corporate Finance & Investor Relations', color: '#22C55E', gradient: 'from-green-500/20 to-emerald-500/20', domain: 'iomarkets.co', isExternal: false },
    { icon: Wallet, name: 'IoMarkets.vc', description: 'Venture Capital Investment Fund', color: '#6366F1', gradient: 'from-indigo-500/20 to-violet-500/20', domain: 'iomarkets.vc', isExternal: false },
    { icon: Coins, name: 'IoMarkets.fund', description: 'Asset Management', color: '#EAB308', gradient: 'from-yellow-500/20 to-amber-500/20', domain: 'iomarkets.fund', isExternal: false },
    { icon: Tv, name: 'IoMarkets.tv', description: 'Global Financial News Television', color: '#EF4444', gradient: 'from-red-500/20 to-orange-500/20', domain: 'iomarkets.tv', isExternal: false },
    { icon: Newspaper, name: 'IoMarkets.news', description: 'Global Online Financial News', color: '#F97316', gradient: 'from-orange-500/20 to-amber-500/20', domain: 'iomarkets.news', isExternal: false },
    { icon: Monitor, name: 'IoMarkets.tech', description: 'Financial Technology Solutions', color: '#64748B', gradient: 'from-slate-500/20 to-gray-500/20', domain: 'iomarkets.tech', isExternal: false },
    { icon: Target, name: 'DipBuyer.ai', description: 'AI Agent for Value Investing', color: '#06B6D4', gradient: 'from-cyan-500/20 to-teal-500/20', domain: 'https://dipbuyer.ai', isExternal: true },
  ];

  const values = [
    { title: "Integrity", description: "Operate with the highest ethical standards and transparency", icon: Shield, color: '#00D4FF' },
    { title: "Intelligence", description: "Leverage data, AI, and human expertise", icon: Brain, color: '#8B5CF6' },
    { title: "Innovation", description: "Continuously push boundaries in capital markets", icon: Lightbulb, color: '#10B981' },
    { title: "Energy", description: "Bring passion and dynamism to financial transformation", icon: Zap, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen web3-gradient-bg">
      <Helmet>
        <title>IoMarkets® Organization</title>
        <meta name="title" content="IoMarkets® Organization" />
        <meta name="description" content="IoMarkets® - The most holistic AI-powered Web3 financial ecosystem. Email: info@iomarkets.org. IoMarkets® LLC. 30 N Gould St Ste R, Sheridan, Wyoming 82801." />
        <meta property="og:title" content="IoMarkets® Organization" />
        <meta property="og:description" content="IoMarkets® - The most holistic AI-powered Web3 financial ecosystem." />
        <meta property="og:site_name" content="IoMarkets®" />
        <meta property="twitter:title" content="IoMarkets® Organization" />
        <meta property="twitter:description" content="IoMarkets® - The most holistic AI-powered Web3 financial ecosystem." />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Animated background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0e1a]/50 to-[#0a0e1a]" />
          <div className="absolute inset-0 cyber-grid" />
          <div className="absolute inset-0 hex-pattern opacity-50" />

          {/* Orbs */}
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#00D4FF] orb" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#8B5CF6] orb" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 rounded-full blur-[150px]" />

          {/* Particles */}
          <div className="absolute inset-0 particles" />
        </div>

        {/* Floating elements */}
        <FloatingCubes />
        <AnimatedLines />

        <motion.div
          style={{ opacity, scale }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border-beam mb-10"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00D4FF]"></span>
              </span>
              <span className="text-sm font-semibold text-white">
                AI-First <span className="gradient-text-animated">Financial Technology</span>
              </span>
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
            >
              <span className="relative inline-block">
                IoMarkets<sup className="text-lg md:text-2xl text-amber-500">®</sup>
              </span>{' '}
              <span className="gradient-text-animated">Organization</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xl md:text-2xl mb-4 font-bold"
            >
              <span className="relative inline-block bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                Where Ambition meets Innovation and Strategy meets Execution
              </span>
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed"
            >
              The most holistic AI-first financial technology ecosystem powering the future of financial services by combining the latest innovation in{' '}
              <span className="text-[#00D4FF] font-semibold">Artificial Intelligence</span>,{' '}
              <span className="text-[#8B5CF6] font-semibold">Data Analytics</span>, and{' '}
              <span className="text-[#10B981] font-semibold">Digital Assets</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <a
                href="#ecosystem"
                className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white font-bold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Ecosystem
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:info@iomarkets.org"
                className="group w-full sm:w-auto px-10 py-5 rounded-2xl glass text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 pulse-glow-cyan"
              >
                <Users className="w-5 h-5" />
                Partner With Us
              </a>
            </motion.div>

            {/* Quick stats inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-20 flex flex-wrap items-center justify-center gap-8 lg:gap-16"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div
                    className="text-3xl sm:text-4xl font-bold mb-1 transition-all group-hover:scale-110"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1526] to-[#0a0e1a]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative glass-premium rounded-2xl p-8 text-center overflow-hidden card-3d">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)` }}
                  />

                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                  >
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>

                  <p className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="relative py-24">
        <div className="absolute inset-0 hex-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-12 bg-gradient-to-r from-[#00D4FF] to-transparent" />
                <span className="text-[#00D4FF] text-sm font-semibold uppercase tracking-wider">
                  Our Ecosystem
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold text-white mb-3"
              >
                Financial <span className="gradient-text">Ecosystem</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-lg max-w-2xl"
              >
                Integrated financial services spanning Public and Private Capital Markets, Asset Management, AI, Digital Assets, and Financial News
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-3d"
              >
                <div
                  onClick={() => handleServiceClick(service.domain, service.isExternal)}
                  className={`group relative p-6 rounded-2xl glass-premium overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div
                    className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-50"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                  />

                  <div className="relative">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}
                    >
                      <service.icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      {service.name}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: service.color }} />
                    </h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1020] to-[#0a0e1a]" />
        <div className="absolute inset-0 cyber-grid opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-6"
            >
              <Gem className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm text-gray-300">Our Foundation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Mission, Vision & <span className="gradient-text-animated">Values</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 rounded-3xl glass-premium overflow-hidden transition-all duration-500 hover:scale-[1.02] h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl opacity-50 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#00D4FF15', border: '1px solid #00D4FF30' }}>
                      <Target className="w-7 h-7 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Mission</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Increase liquidity, visibility, transparency & diversification in public and private markets
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                      <span>Democratize access to investments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                      <span>Reduce information asymmetry with AI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0" />
                      <span>Enable fractional ownership</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 rounded-3xl glass-premium overflow-hidden transition-all duration-500 hover:scale-[1.02] h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl opacity-50 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#8B5CF615', border: '1px solid #8B5CF630' }}>
                      <Eye className="w-7 h-7 text-[#8B5CF6]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Vision</h3>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Become the global digital finance powerhouse and ecosystem of choice
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0" />
                      <span>Unified global marketplace</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0" />
                      <span>Bridge traditional and decentralized finance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0" />
                      <span>New standards for transparency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 rounded-3xl glass-premium overflow-hidden transition-all duration-500 hover:scale-[1.02] h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl opacity-50 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F59E0B15', border: '1px solid #F59E0B30' }}>
                      <Gem className="w-7 h-7 text-[#F59E0B]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Values</h3>
                  </div>
                  <div className="space-y-4">
                    {values.map((value) => (
                      <div key={value.title} className="flex items-start gap-3">
                        <value.icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: value.color }} />
                        <div>
                          <span className="font-semibold text-white">{value.title}</span>
                          <span className="text-gray-400"> - {value.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0d1a2d] to-[#0a1628]" />
            <div className="absolute inset-0 border-beam rounded-[2rem]" />
            <div className="absolute inset-0 cyber-grid opacity-30" />

            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00D4FF] orb opacity-30" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#8B5CF6] orb opacity-30" style={{ animationDelay: '1s' }} />

            <div className="relative p-12 sm:p-16 lg:p-24">
              <div className="text-center max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 mb-8"
                >
                  <Globe className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-sm text-[#00D4FF]">Join the Ecosystem</span>
                </motion.div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to <span className="gradient-text-animated">Partner</span> with Us?
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Join our ecosystem to build the future of financial services and capital markets together.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <a
                    href="mailto:info@iomarkets.org"
                    className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white font-bold text-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Contact Us
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="#ecosystem"
                    className="w-full sm:w-auto px-10 py-5 rounded-2xl glass text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#00D4FF]" />
                    <span>12+ Domains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-[#8B5CF6]" />
                    <span>AI-Powered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#10B981]" />
                    <span>Global Reach</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IoMarketsOrg;
