import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Tjanster() {
  const [activeService, setActiveService] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }, 50)
    }
  }

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['hero', 'services', 'technology', 'superpowers', 'comparison', 'future', 'process']
          const scrollPosition = window.scrollY + window.innerHeight / 3
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i])
            if (section && section.offsetTop <= scrollPosition) {
              setCurrentSection(i)
              break
            }
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
  ]

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
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #073767, #062f58);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #062f58, #051f3d);
          transform: scale(1.1);
        }
        section {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          transform: translateY(0);
        }
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
        .nav-dot {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        .nav-dot:hover {
          transform: scale(1.3);
        }
        .nav-dot.active {
          transform: scale(1.5);
          box-shadow: 0 0 20px rgba(7, 55, 103, 0.5);
        }
        * {
          scroll-behavior: smooth;
        }
        .scroll-container {
          overscroll-behavior: contain;
        }
      `}</style>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-[#d0d8e4] scroll-smooth scroll-container">
        <div className="flex flex-col fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
          {['hero', 'services', 'technology', 'superpowers', 'comparison', 'future', 'process'].map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-dot w-4 h-4 rounded-full transition-all duration-500 ease-out ${
                currentSection === index ? 'active' : ''
              }`}
              aria-label={`Scroll to ${section} section`}
              style={{
                background: '#073767',
                transform: currentSection === index ? 'scale(1.5)' : 'scale(1)',
                boxShadow: currentSection === index ? '0 0 20px rgba(7,55,103,0.5)' : 'none'
              }}
            />
          ))}
        </div>

        <section id="hero" className="relative py-20 overflow-hidden min-h-screen flex items-center scroll-snap-start section-animate">
          <div className="absolute inset-0 bg-gradient-to-r from-[#073767]/10 to-[#062f58]/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tjänster för att
                <span className="block text-[#073767]">säkra din framtid</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Alla företag behöver utvecklas. Vi erbjuder lösningar som hjälper dig att få fler kunder,
                stärka ditt varumärke och förenkla din säljprocess.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#073767] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Byggt med React & Next.js</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <span className="text-sm text-gray-600">62% snabbare än WordPress</span>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white min-h-screen flex items-center scroll-snap-start section-animate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Våra tjänster</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Premium lösningar för att hjälpa ditt företag att växa och utvecklas
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    activeService === index ? 'border-[#073767] transform scale-105' : 'border-gray-100 hover:border-[#d0d8e4]'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{service.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#073767] hover:bg-[#062f58] text-white font-semibold rounded-lg transition-all duration-200 mt-auto"
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

        <section id="technology" className="py-20 bg-gradient-to-r from-[#073767] to-[#062f58] min-h-screen flex items-center scroll-snap-start section-animate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Varför React & Next.js?</h2>
              <p className="text-xl text-[#d0d8e4] max-w-3xl mx-auto">
                Vi bygger moderna, snabba och säkra hemsidor med de senaste teknologierna
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Blixtsnabb prestanda',
                  text: 'Next.js optimerar din sida automatiskt för hastighet – vilket ökar både SEO och användarupplevelse.'
                },
                {
                  title: 'SEO-optimerad',
                  text: 'Server-side rendering och metadatahantering förbättrar din synlighet på Google.'
                },
                {
                  title: 'Säkerhet i fokus',
                  text: 'Statisk hosting och modern kodbas minskar risken för attacker och buggar.'
                }
              ].map((tech, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.title}</h3>
                  <p className="text-[#d0d8e4]">{tech.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="superpowers" className="py-20 bg-white min-h-screen flex items-center scroll-snap-start section-animate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Superkrafter för ditt företag</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vi kombinerar design, strategi och teknik för att skapa mätbar framgång
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '⚡', title: 'Snabbare hemsidor', desc: 'Vi bygger sidor som laddar direkt – optimerade för Core Web Vitals.' },
                { icon: '💎', title: 'Skarp design', desc: 'Snygga, moderna gränssnitt som fångar uppmärksamhet och bygger förtroende.' },
                { icon: '🚀', title: 'Smidig skalbarhet', desc: 'Redo för framtiden – väx utan att behöva bygga om din webbplats.' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#073767] hover:shadow-lg transition-all">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="py-20 bg-gradient-to-r from-[#073767] to-[#062f58] min-h-screen flex items-center scroll-snap-start section-animate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-12">React vs WordPress</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-semibold mb-4">React / Next.js</h3>
                <ul className="space-y-3 text-[#d0d8e4]">
                  <li>✅ Blixtsnabb prestanda</li>
                  <li>✅ Modern utveckling</li>
                  <li>✅ Låg attackyta</li>
                  <li>✅ Anpassad för framtiden</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-semibold mb-4">WordPress</h3>
                <ul className="space-y-3 text-[#d0d8e4]">
                  <li>⚠️ Långsammare laddtider</li>
                  <li>⚠️ Kräver många plugins</li>
                  <li>⚠️ Högre säkerhetsrisk</li>
                  <li>⚠️ Svår att skala</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="future" className="py-20 bg-white min-h-screen flex items-center scroll-snap-start section-animate">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Vi bygger för framtiden</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Genom att välja moderna ramverk och optimerade arbetsflöden hjälper vi företag att ligga steget före.
              Din webbplats blir inte bara ett visitkort – utan en strategisk tillgång.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#073767] hover:bg-[#062f58] text-white text-lg font-semibold rounded-lg transition-all duration-200"
            >
              Starta ditt nästa projekt
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-[#d0d8e4] min-h-screen flex items-center scroll-snap-start section-animate">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Vår process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transparent, effektiv och resultatdriven – varje steg optimeras för kvalitet.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Analys', desc: 'Vi identifierar behov och mål tillsammans med dig.' },
                { step: '2', title: 'Design', desc: 'Vi skapar en unik, attraktiv och användarvänlig design.' },
                { step: '3', title: 'Utveckling', desc: 'Koden byggs med moderna verktyg för prestanda och säkerhet.' },
                { step: '4', title: 'Lansering', desc: 'Vi publicerar, testar och följer upp för bästa resultat.' }
              ].map((phase, i) => (
                <div key={i} className="relative bg-white rounded-xl p-8 border border-gray-200 hover:border-[#073767] hover:shadow-lg transition-all">
                  <div className="absolute -top-4 left-4 bg-[#073767] text-white w-10 h-10 flex items-center justify-center font-bold rounded-full shadow-md">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">{phase.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
