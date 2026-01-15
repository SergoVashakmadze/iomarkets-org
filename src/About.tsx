import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Cpu, Brain, Zap, TrendingUp, Coins, Star, Briefcase, Wallet, Tv, Newspaper, Monitor, Sparkles, Wifi, ArrowRight, BookOpen, Factory } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>About - IoMarkets® Organization</title>
        <meta name="description" content="IoMarkets - The Internet of Markets. A comprehensive AI-first financial ecosystem revolutionizing capital markets, digital money, asset management, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              About <span className="text-amber-500">IoMarkets<sup className="text-2xl">®</sup></span>
            </h1>
            <p className="text-xl text-gray-300">
              The Internet of Markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* The Internet of Markets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">The Internet of Markets</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                <strong>IoMarkets®</strong> - the <strong>Internet of Markets</strong> - was coined by the ecosystem's founder{' '}
                <a href="https://www.linkedin.com/in/sergovashakmadze/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Sergo Vashakmadze
                </a>{' '}
                to capture a fundamental truth of our era: the internet has become the foundational infrastructure transforming every market, every transaction, and every aspect of how value is created, exchanged, and preserved globally.
              </p>
              <p>
                The internet revolution stands as the latest in a series of transformative forces that have fundamentally reshaped human civilization. To understand its significance, we must look back at the great revolutions that preceded it.
              </p>
            </div>
          </motion.div>

          {/* The Gutenberg Revolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-amber-700" />
              <h2 className="text-3xl font-bold text-slate-900">The Gutenberg Revolution: The First Information Revolution</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The Gutenberg printing press, invented in the mid-15th century, created an "information revolution" that permanently altered the course of history, transforming knowledge from a scarce, elite-controlled commodity into a widely accessible resource that empowered individuals and transformed societies.
              </p>
              <p>
                <strong>Democratization of Knowledge:</strong> Before the press, books were painstakingly hand-copied by scribes (mostly monks or clergy) and were rare, expensive, and primarily accessible only to the elite and religious institutions. Gutenberg's invention enabled mass production, making books affordable and widely available to a much broader public for the first time.
              </p>
              <p>
                <strong>Increased Literacy and Education:</strong> The widespread availability of texts in common vernacular languages, rather than just Latin, incentivized people from various social classes to learn to read and write. This led to a significant increase in literacy rates and laid the foundation for modern public education systems.
              </p>
              <p>
                <strong>Rapid Dissemination of Ideas:</strong> The press allowed for the swift and efficient spread of new ideas across Europe and beyond. This acceleration of information exchange was crucial for:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg my-6">
                <ul className="space-y-2 text-gray-700 list-none pl-0 m-0">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>The Renaissance:</strong> Fostering intellectual curiosity and distributing classical and humanist texts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>The Protestant Reformation:</strong> Enabling reformers like Martin Luther to circulate their critiques (such as the Ninety-five Theses) in pamphlets and books, challenging the Catholic Church's authority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>The Scientific Revolution:</strong> Allowing scientists like Copernicus and Galileo to share their findings and data quickly and accurately, spurring debate and collaborative discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span><strong>The Enlightenment:</strong> Providing a platform for philosophical and political writings that promoted reason and critical thinking, shaping public opinion and political revolutions</span>
                  </li>
                </ul>
              </div>
              <p>
                <strong>Standardization and Accuracy:</strong> Hand-copying was prone to human error. The printing press produced uniform, identical copies, meaning scholars and scientists could reference and build upon a shared, reliable body of knowledge with greater confidence in its accuracy.
              </p>
              <p>
                <strong>A Fundamental Shift in Human Thought:</strong> The ability to access diverse perspectives in print encouraged critical thinking and public debate, fundamentally changing how people learned, thought, and challenged existing norms and authorities. It shifted the reliance on human memory for knowledge transmission to a more permanent, accessible format.
              </p>
            </div>
          </motion.div>

          {/* The Industrial Revolutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Factory className="w-8 h-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-900">The Industrial Revolutions: Transforming the Physical World</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The Industrial Revolutions (First: ~1760-1840, Second: ~1870-1914, Third: ~1970s-2000s, Fourth: Present) transformed societies from agrarian to mechanized, leading to massive urbanization, factory systems, mass production, improved living standards, new social classes, global trade, and profound environmental impacts.
              </p>
              <div className="grid gap-4 my-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <p className="m-0"><strong>The First Industrial Revolution (~1760-1840):</strong> Powered by water and steam, this era saw mechanized textiles (the Spinning Jenny), iron production, the steam engine, canals, and early railways. It marked the shift from hand production to machine manufacturing, concentrated primarily in Britain before spreading globally.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <p className="m-0"><strong>The Second Industrial Revolution (~1870-1914):</strong> Electricity, steel, and chemicals transformed industry. The internal combustion engine, telegraph, telephone, and mass production techniques emerged. This era saw the rise of the corporation and the beginning of consumer culture.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <p className="m-0"><strong>The Third Industrial Revolution (~1970s-2000s):</strong> Electronics, information technology, computing, nuclear energy, and automation defined this period. The personal computer, the early internet, and digital communication laid the groundwork for the connected world we inhabit today.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <p className="m-0"><strong>The Fourth Industrial Revolution (Present):</strong> Cyber-physical systems, artificial intelligence, the Internet of Things, and renewable energy characterize our current era. The boundaries between physical, digital, and biological spheres blur as technologies converge.</p>
                </div>
              </div>
              <p><strong>Major Impacts Across All Industrial Revolutions:</strong></p>
              <div className="bg-slate-50 border-l-4 border-slate-600 p-4 rounded-r-lg my-6">
                <ul className="space-y-2 text-gray-700 list-none pl-0 m-0">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-700 font-bold">•</span>
                    <span><strong>Economic:</strong> Shift to manufacturing, rise of capitalism, mass production, increased GDP, global trade, and consumerism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-700 font-bold">•</span>
                    <span><strong>Social:</strong> Massive urban migration, rise of cities, emergence of middle and working classes, changes in family structure, and labour movements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-700 font-bold">•</span>
                    <span><strong>Work:</strong> Factory systems, evolving labor conditions, and eventual higher wages and protections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-700 font-bold">•</span>
                    <span><strong>Technological:</strong> Unprecedented innovation in transport, communication, science, and medicine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-700 font-bold">•</span>
                    <span><strong>Living Standards:</strong> Initially harsh conditions, but eventually higher quality of life, better diets, sanitation, and access to goods</span>
                  </li>
                </ul>
              </div>
              <p>
                The Industrial Revolutions spurred immense progress but also created significant social and environmental challenges, leading to ongoing debates about equitable growth, sustainability, and the future of work.
              </p>
            </div>
          </motion.div>

          {/* The Internet Revolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">The Internet Revolution: The Greatest Transformation Yet</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Just as the printing press democratized knowledge and the Industrial Revolutions mechanized production, the internet now serves as the invisible backbone of the modern economy - but its scope exceeds both. Every financial transaction, every market movement, every investment decision is now mediated, enhanced, or executed through internet-enabled technologies.
              </p>
            </div>
          </motion.div>

          {/* From Internet of Things to Internet of Markets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Wifi className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl font-bold text-slate-900">From "Internet of Things" to "Internet of Markets"</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The term "Internet of Things" (IoT) was coined by <strong>Kevin Ashton</strong> in 1999 while working at Procter & Gamble, where he proposed using RFID tags to track items for better supply chain management. His vision connected the physical world to the internet - a world where everyday objects could be monitored and controlled through sensors. This conceptual breakthrough laid the groundwork for the interconnected devices we see today.
              </p>

              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg my-6">
                <p className="font-semibold text-slate-800 mb-3">Kevin Ashton's Key Contributions:</p>
                <ul className="space-y-2 text-gray-700 list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Coined the Term (1999):</strong> Used "Internet of Things" in a presentation for Gillette, describing a system where the internet connects to the physical world via sensors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>Pioneered RFID:</strong> Demonstrated how items could be automatically tracked using Radio-Frequency Identification, reducing inventory costs and creating efficiencies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span><strong>MIT Auto-ID Center:</strong> Co-founded this key research hub for sensor and identification technologies.</span>
                  </li>
                </ul>
              </div>

              <p>
                While others explored connected devices earlier, Ashton's specific phrase and vision for a sensor-driven, interconnected world cemented his role as the "Father of IoT."
              </p>

              <p>
                <strong>The parallel to IoMarkets is intentional and profound.</strong> Just as Ashton recognized that the internet would transform how we interact with physical objects, IoMarkets recognizes that the internet has fundamentally transformed how we interact with markets. Where the Internet of Things connects devices and sensors, the Internet of Markets connects investors, assets, capital, and financial services into a seamless, intelligent ecosystem.
              </p>

              <p>
                The "Io" prefix in both cases represents the same transformative force: the internet as the foundational infrastructure that reimagines entire industries. IoT reimagined the physical world; IoMarkets reimagines the financial world.
              </p>
            </div>
          </motion.div>

          {/* The Pace of Change */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-amber-500" />
              <h2 className="text-3xl font-bold text-slate-900">The Pace of Change</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                In January 2018, speaking at the World Economic Forum in Davos about the "fourth industrial revolution," Canadian Prime Minister <strong>Justin Trudeau</strong> delivered what would become a prophetic observation:
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 bg-amber-50 rounded-r-lg">
                <p className="text-xl italic text-slate-800 font-medium">
                  "The pace of change has never been this fast, and yet it will never be this slow again."
                </p>
              </blockquote>
              <p>
                This statement was made years before ChatGPT sparked the current AI revolution, before generative AI entered mainstream consciousness, and well before the quantum computing breakthroughs now emerging from research labs worldwide. If the pace of change felt relentless in 2018, it has since accelerated exponentially - and quantum computing promises to accelerate it further still, putting AI and respectively everything else on steroids.
              </p>
            </div>
          </motion.div>

          {/* The Technology Waves */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-slate-900">The Technology Waves</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The internet's transformative power has manifested through successive waves of innovation:
              </p>
              <p>
                <strong>Web & Cloud</strong> revolutionized information access and made enterprise-grade infrastructure accessible to all. <strong>Big Data & Analytics</strong> turned raw information into actionable intelligence. <strong>Blockchain & Web3</strong> created trustless, decentralized systems for value transfer and asset ownership.
              </p>
              <p>
                <strong>Artificial Intelligence</strong> has emerged as the current <strong>overarching and dominant technology</strong> of our time - the lens through which all other technologies are now being reimagined and enhanced. AI augments human decision-making at unprecedented scale, from how financial news is generated and consumed to how investments are analyzed and executed. It is not merely another technology wave but the amplifier of all waves that came before.
              </p>
              <p>
                And on the horizon, <strong>Quantum Computing</strong> - the inevitable next big bang - promises to redefine computational possibilities entirely. When quantum systems mature, they will supercharge AI capabilities, break existing cryptographic systems while enabling new quantum-secure alternatives, and solve optimization problems currently intractable for classical computers. The transformation will be profound.
              </p>
              <p>
                IoMarkets operates as a <strong>"latest technology first"</strong> ecosystem, designed to harness each wave of innovation as it emerges. While AI currently dominates the technological landscape, we are already positioning for the quantum era - ensuring our ecosystem remains at the cutting edge of what's possible.
              </p>
            </div>
          </motion.div>

          {/* Revolutionizing Financial Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-slate-900">Revolutionizing Financial Services</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                These internet technologies are revolutionizing every aspect of financial services and capital markets:
              </p>

              <div className="grid gap-4 my-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <strong className="text-slate-900">Capital Markets</strong>
                    <span className="text-sm">(<a href="https://iomarkets.io" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.io</a>, <a href="https://iomarkets.pro" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.pro</a>)</span>
                  </div>
                  <p className="text-sm m-0">Have evolved from physical trading floors to 24/7 global digital networks. Tokenization converts traditional securities into digital assets enabling fractional ownership and instant settlement. AI-powered analytics and algorithmic execution, once exclusive to institutional players, are now accessible to all.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Coins className="w-5 h-5 text-emerald-600" />
                    <strong className="text-slate-900">Money & Payments</strong>
                    <span className="text-sm">(<a href="https://iomarkets.money" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.money</a>)</span>
                  </div>
                  <p className="text-sm m-0">Are being fundamentally reimagined. Stablecoins combine cryptocurrency efficiency with price stability. Programmable money executes automatically based on conditions. Cross-border transfers that once took days now happen in seconds.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-5 h-5 text-indigo-600" />
                    <strong className="text-slate-900">Asset Management & Investment</strong>
                    <span className="text-sm">(<a href="https://iomarkets.fund" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.fund</a>, <a href="https://iomarkets.vc" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.vc</a>, <a href="https://dipbuyer.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">DipBuyer.ai</a>)</span>
                  </div>
                  <p className="text-sm m-0">Has evolved from exclusive clubs to globally accessible platforms. AI-driven strategies adapt continuously to market conditions. Autonomous agents like DipBuyer.ai bring institutional-quality value investing analysis to everyone.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-green-600" />
                    <strong className="text-slate-900">Corporate Finance</strong>
                    <span className="text-sm">(<a href="https://iomarkets.co" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.co</a>)</span>
                  </div>
                  <p className="text-sm m-0">Now features real-time investor relations, streamlined capital raising, and AI-enhanced due diligence - making corporate finance faster, more transparent, and globally accessible.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Tv className="w-5 h-5 text-red-600" />
                    <Newspaper className="w-5 h-5 text-orange-600" />
                    <strong className="text-slate-900">Financial News & Media</strong>
                    <span className="text-sm">(<a href="https://iomarkets.tv" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.tv</a>, <a href="https://iomarkets.news" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.news</a>)</span>
                  </div>
                  <p className="text-sm m-0">Have transformed how information flows. AI generates real-time market reports. Personalized feeds deliver relevant content instantly. The information asymmetry that once defined professional investing has been dramatically reduced.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <strong className="text-slate-900">AI & Data Analytics</strong>
                    <span className="text-sm">(<a href="https://iomarkets.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.ai</a>)</span>
                  </div>
                  <p className="text-sm m-0">Powers the intelligence layer across the entire ecosystem: machine learning processing vast datasets, natural language processing analyzing news and sentiment, alternative data integration from non-traditional sources, and autonomous research agents conducting comprehensive analysis at superhuman speed.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Creative Economy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-pink-600" />
              <h2 className="text-3xl font-bold text-slate-900">The Creative Economy</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Beyond traditional finance, internet technologies have revolutionized the creative sector (<a href="https://iomarkets.xyz" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.xyz</a>). NFTs and digital collectibles enable verifiable ownership of unique digital works. Artists can now monetize directly to fans without gatekeepers. Music, video, and audio content flows directly from creator to consumer. Intellectual property can be registered on immutable blockchains, with smart contracts ensuring creators receive royalties automatically and in perpetuity.
              </p>
              <p>
                This represents something profound: <strong>internet technologies have become the primary wealth creation engine globally</strong>. The largest companies by market capitalization are internet-native or internet-enabled. Digital creators, once marginalized, now build billion-dollar enterprises. The creative economy, supercharged by blockchain and AI, has become a legitimate asset class.
              </p>
            </div>
          </motion.div>

          {/* The Technology Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-8 h-8 text-slate-600" />
              <h2 className="text-3xl font-bold text-slate-900">The Technology Foundation</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Underpinning everything is critical infrastructure (<a href="https://iomarkets.tech" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800">IoMarkets.tech</a>): APIs enabling seamless integration, compliance technology automating regulatory requirements, security solutions protecting digital assets, and cloud-native architecture providing global scale and resilience.
              </p>
            </div>
          </motion.div>

          {/* Navigating Exciting Times */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <h2 className="text-3xl font-bold text-slate-900">Navigating Exciting & Challenging Times</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                We live in an era of unprecedented technological change. The internet continues to evolve, each iteration more transformative than the last. Financial services, capital markets, money itself - all are being fundamentally reimagined. And the pace, as Trudeau foresaw, only accelerates.
              </p>
              <p>
                These are exciting times, full of opportunity. They are also potentially challenging times - particularly for incumbents. <strong>Agile challengers and disruptors</strong>, unburdened by legacy systems and institutional inertia, can adapt and innovate at speeds that established players often cannot match. History shows that incumbents who dismiss or underestimate emerging technologies risk being left behind, while those who embrace collaboration with innovative disruptors can combine the best of both worlds: institutional strength with entrepreneurial agility.
              </p>
              <p>
                <strong>IoMarkets is built for exactly this moment.</strong> By maintaining a "latest technology first" philosophy and building across the full spectrum of financial services - from capital markets to digital money, from venture capital to media, from creative assets to AI intelligence - we are well-equipped to navigate whatever the future brings.
              </p>
              <p>
                The Internet of Markets is not just our name - it's our thesis. The internet has become the market, and the market has become the internet. IoMarkets exists to help you thrive in this new reality.
              </p>
            </div>
          </motion.div>

          {/* A Comprehensive Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-cyan-500" />
              <h2 className="text-3xl font-bold text-slate-900">A Comprehensive Vision</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The breadth of the IoMarkets ecosystem - spanning capital markets, digital money, asset management, venture capital, corporate finance, media, creative assets, and AI intelligence - reflects a deliberately comprehensive and holistic approach. Building across so many verticals simultaneously is ambitious by design.
              </p>
              <p>
                As the saying goes, often attributed to visionaries like <strong>Richard Branson</strong> and <strong>Ellen Johnson Sirleaf</strong>:
              </p>
              <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 my-6 bg-cyan-50 rounded-r-lg">
                <p className="text-xl italic text-slate-800 font-medium">
                  "If your dreams don't scare you, they are too small."
                </p>
              </blockquote>
              <p>
                Truly ambitious goals should push you beyond your comfort zone. They should require growth, challenge your current limits, and feel a bit daunting. Scary dreams are a sign you're aiming high enough, forcing you to develop new skills and perspectives. Fear shouldn't paralyze - it should motivate you to rise to the occasion and expand your capacity.
              </p>
              <p>
                IoMarkets embraces this philosophy. The scope of our vision is intentionally audacious because the transformation underway in financial services demands nothing less. We're not building for incremental improvement - we're building for fundamental change.
              </p>
              <p>
                <strong>IoMarkets is seeking equally ambitious strategic partners</strong> - visionaries and organizations who share this transformative outlook and can contribute value beyond capital. We believe the most impactful partnerships are built on shared conviction, complementary expertise, and a mutual commitment to reshaping the future of financial services.
              </p>
              <p>
                Whether you bring deep domain expertise, strategic networks, technological capabilities, or operational excellence - if you see the same opportunity we see and are ready to build something extraordinary together, we want to hear from you. The Internet of Markets is not a solo endeavor; it's a collaborative ecosystem where the right partners amplify what's possible.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer Tagline */}
      <section className="py-12 bg-slate-900 text-center">
        <p className="text-xl text-amber-500 font-semibold italic">
          IoMarkets - Where Ambition meets Innovation & Strategy meets Execution
        </p>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4 inline-block">
              Industry Insights
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Reading</h2>
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
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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
    </div>
  );
};

export default About;
