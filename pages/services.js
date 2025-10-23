import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Tjanster() {
  const [activeService, setActiveService] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  // Enhanced smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a slight delay for smoother animation
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 50);
    }
  };

  // Enhanced scroll detection with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['hero', 'services', 'technology', 'superpowers', 'comparison', 'future', 'process'];
          const scrollPosition = window.scrollY + window.innerHeight / 3; // More sensitive detection
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setCurrentSection(i);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Hemsidor',
      icon: '🌐',
      description: 'Alla företag behöver utvecklas och få fler kunder. Den första kontakten mellan leverantör och kund sker oftast på hemsidan.',
      features: [
        'Snygg, modern och funktionell design',
        'Sökmotoroptimerad (SEO)',
        'Responsiv för alla enheter',
        'Löpande support och underhåll',
        'React & Next.js experter'
      ],
      cta: 'Prata med oss om React och hemsidor'
    },
    {
      id: 2,
      title: 'Grafisk formgivning',
      icon: '🎨',
      description: 'Ditt varumärke är det absolut viktigaste ditt företag har. Den säger allt om ditt företag men även dig som äger och driver det.',
      features: [
        'Grafisk profil och varumärkesdesign',
        'Logotyp och visuell identitet',
        'Marknadsföringsmaterial',
        'Fräscha upp befintlig profil',
        'Enastående varumärkesupplevelse'
      ],
      cta: 'Skapa det varumärke du förtjänar'
    },
    {
      id: 3,
      title: 'Sociala medier',
      icon: '📱',
      description: 'Att använda sig av sociala medier kan skapa riktigt goda resultat. Med en utarbetad strategi ligger du i framkant.',
      features: [
        'Strategi för sociala medier',
        'Innehållsplanering och produktion',
        'Utbildning och kunskapsöverföring',
        'Digital marknadsföring',
        'Resultatanalys och optimering'
      ],
      cta: 'Utveckla din sociala medier-strategi'
    }
  ];

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
          scroll-padding-top: 0;
        }
        
        body {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }
        
        .scroll-snap-start {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        
        /* Enhanced scrollbar styling */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #1d4ed8);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #1e40af);
          transform: scale(1.1);
        }
        
        /* Smooth section transitions */
        section {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Section fade-in animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .section-animate {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Enhanced navigation dots */
        .nav-dot {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        
        .nav-dot:hover {
          transform: scale(1.3);
        }
        
        .nav-dot.active {
          transform: scale(1.5);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        /* Smooth scroll momentum */
        * {
          scroll-behavior: smooth;
        }
        
        /* Prevent scroll chaining */
        .scroll-container {
          overscroll-behavior: contain;
        }
      `}</style>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 scroll-smooth scroll-container">
      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {['hero', 'services', 'technology', 'superpowers', 'comparison', 'future', 'process'].map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`nav-dot w-4 h-4 rounded-full transition-all duration-500 ease-out ${
              currentSection === index 
                ? 'active bg-blue-600 shadow-lg' 
                : 'bg-gray-400 hover:bg-blue-500 hover:shadow-md'
            }`}
            aria-label={`Scroll to ${section} section`}
            style={{
              transform: currentSection === index ? 'scale(1.5)' : 'scale(1)',
              boxShadow: currentSection === index ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
            }}
          />
        ))}
      </div>
      {/* Hero Section */}
      <section id="hero" className="relative py-20 overflow-hidden min-h-screen flex items-center scroll-snap-start section-animate">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tjänster för att 
              <span className="block text-blue-600">säkra din framtid</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Alla företag behöver utvecklas. Vi erbjuder lösningar som hjälper dig att få fler kunder, 
              stärka ditt varumärke och förenkla din säljprocess.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Boka kostnadsfri konsultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* React Badge */}
      <section className="py-8 bg-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Byggt med React & Next.js</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <span className="text-sm text-gray-600">62% snabbare än WordPress</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white min-h-screen flex items-center scroll-snap-start section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Våra tjänster
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium lösningar för att hjälpa ditt företag att växa och utvecklas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  activeService === index 
                    ? 'border-blue-500 transform scale-105' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/#contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 mt-auto"
                  >
                    {service.cta}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 min-h-screen flex items-center scroll-snap-start section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Varför React & Next.js?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Vi bygger moderna, snabba och säkra hemsidor med de senaste teknologierna
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: '⚡', 
                title: 'Blixthastighet', 
                desc: 'React ger dig snabba, responsiva hemsidor som laddar på millisekunder',
                color: 'from-yellow-400 to-orange-500'
              },
              { 
                icon: '🔒', 
                title: 'Säkerhet', 
                desc: 'Next.js inbyggda säkerhetsfunktioner skyddar din hemsida och dina besökare',
                color: 'from-green-400 to-emerald-500'
              },
              { 
                icon: '📱', 
                title: 'Mobiloptimerad', 
                desc: 'Perfekt responsiv design som fungerar utmärkt på alla enheter',
                color: 'from-blue-400 to-cyan-500'
              },
              { 
                icon: '🚀', 
                title: 'SEO-vänlig', 
                desc: 'Server-side rendering ger dig bättre synlighet i sökmotorer',
                color: 'from-purple-400 to-pink-500'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Moderna teknologier för framtiden</h3>
              <p className="text-blue-100 text-lg mb-6">
                Medan många fortfarande använder WordPress, bygger vi med React och Next.js - 
                samma teknologier som används av Netflix, Airbnb och Facebook.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Vercel'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* React Superpowers Section */}
       <section id="superpowers" className="py-20 bg-white min-h-screen flex items-center scroll-snap-start section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Oändliga möjligheter med AAA-kvalitet React
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Med React kan vi skapa AAA-kvalitet lösningar - från enkla hemsidor till komplexa webapplikationer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Interaktiva användarupplevelser",
                    description: "Skapa dynamiska gränssnitt som känns som native appar med realtidsuppdateringar och smooth animations",
                    examples: ["Live dashboards", "Interaktiva formulär", "Realtidsdata"]
                  },
                  {
                    title: "Skalbarhet utan gränser",
                    description: "Bygg lösningar som växer med ditt företag - från startup till enterprise-nivå",
                    examples: ["Modulär arkitektur", "Enkel underhåll", "Snabba iterationer"]
                  },
                  {
                    title: "Framtidsäkrad teknik",
                    description: "React utvecklas kontinuerligt av Facebook och ett globalt community av utvecklare",
                    examples: ["Långsiktigt support", "Kontinuerliga uppdateringar", "Stort ekosystem"]
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((example, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Vad kan vi bygga åt dig?</h3>
                <div className="space-y-4">
                  {[
                    "E-handelsplattformar med realtidslager",
                    "Booking- och reservationssystem",
                    "Kundportaler med personligt innehåll",
                    "Interaktiva produktkonfiguratorer",
                    "Analytics-dashboards med live-data",
                    "Medlemsplattformar med inloggning",
                    "Mobilapplikationer med React Native",
                    "Progressiva Web Apps (PWA)"
                  ].map((idea, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>{idea}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* React vs Traditional Comparison */}
       <section id="comparison" className="py-20 bg-gray-900 text-white min-h-screen flex items-center scroll-snap-start section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Varför AAA-kvalitet React slår traditionella CMS
            </h2>
            <p className="text-xl text-gray-300">
              AAA-kvalitet webbutveckling för moderna företag
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold">React/Next.js</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Laddningstid: 0.5-2s",
                  "Säkerhet: Inbyggd XSS-skydd",
                  "SEO: Perfekt score",
                  "Underhåll: Automatisk optimering",
                  "Skalbarhet: Obegränsad",
                  "Mobil: Native performance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 opacity-75">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐌</span>
                </div>
                <h3 className="text-2xl font-bold">Traditionell CMS</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Laddningstid: 3-8s",
                  "Säkerhet: Regelbundna säkerhetshål",
                  "SEO: Begränsad kontroll",
                  "Underhåll: Manuella uppdateringar",
                  "Skalbarhet: Begränsad",
                  "Mobil: Kompromisser"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

       {/* Future Section */}
       <section id="future" className="py-20 bg-white min-h-screen flex items-center scroll-snap-start section-animate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Framtiden är AAA-kvalitet React
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Med över 15 miljoner användare worldwide och backad av Facebook/Meta, 
              är React inte en trend - det är standarden för AAA-kvalitet webbutveckling.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { number: "15M+", label: "Utvecklare" },
                { number: "97%", label: "Fortnöjdhet" },
                { number: "2.3x", label: "Snabbare utveckling" },
                { number: "100%", label: "Framtidsäkrad" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link 
              href="/#contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Bli en del av framtiden
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50 min-h-screen flex items-center scroll-snap-start section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Så fungerar det
            </h2>
            <p className="text-xl text-gray-600">
              En enkel process för att säkerställa ditt framgångsrika samarbete
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Konsultation', desc: 'Vi förstår dina behov och mål' },
              { step: '02', title: 'Planering', desc: 'Skräddarsydd strategi för ditt företag' },
              { step: '03', title: 'Genomförande', desc: 'Professionellt utförande av tjänster' },
              { step: '04', title: 'Support', desc: 'Löpande optimering och underhåll' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
    </>
  );
}