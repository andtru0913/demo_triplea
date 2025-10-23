import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        /* Fade in animation */
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
        
        .fade-in {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .fade-in-delay {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .fade-in-delay-2 {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-4xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Om <span className="text-blue-600">AAA Websites</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Din partner för AAA-kvalitet hemsidor och digital framgång
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`prose prose-lg max-w-none ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Är ditt företag i behov av nya möjligheter?
                </h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  Känner du att din hemsida inte presterar? Känner du att du inte får ut det du önskar av den leverantör som du använder dig utav inte erbjuder den support och kunskap som du önskar? Är du i behov av att öka din omsättning, få en starkare profil på Internet samtidigt som du behöver en lösning som är stabil och genererar fler kunder? – Då är AAA Websites ett lämpligt alternativ och jag tänker berätta varför.
                </p>
              </div>

              {/* Lösningar i världsklass */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🌍</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Lösningar i världsklass</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Jag tänker vara ärlig. De lösningar som AAA Websites erbjuder är i världsklass. För det första så erbjuds du en helhetslösning så att du slipper bekymra dig för någon del som har med din hemsida att göra.
                </p>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <p className="text-gray-800 font-medium mb-4">Du får nämligen, förutom en snygg och modern hemsida även hjälp med:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Domännamn', 'Webbhotell', 'Besöksstatistik', 'Analyser', 'Rådgivning', 'Förbättringsförslag'].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* En kontaktperson */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">👤</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">En kontaktperson</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Många företagare tycker inte det är särskilt roligt att lägga tid på att sitta i telefon om något mot förmodan skulle strula. Därför behöver du aldrig oroa dig. Du lyfter luren och ringer ett samtal och sedan löser jag problemet åt dig.
                </p>
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <p className="text-gray-800 font-medium mb-4">Det är vad jag kallar service på hög nivå:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Slippa sitta i telefonköer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Slippa bekymmer med att förklara ditt problem flera gånger</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Känna bekvämligheten i att ha en konsult som känner dig och ditt företag</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Vi älskar varumärken */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">❤️</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Vi älskar varumärken</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Din grafiska profil, ditt varumärke är det viktigaste du har. Utan ett tydligt och kraftfullt varumärke saknar ditt företag både struktur och balans och riskerar därför att förlora alla de potentiella kunder som letar efter dina tjänster, varje dag, året runt. Därför är det skäl nog att låta oss göra en genomgång på hur vi kan förbättra ditt varumärke, både på Internet och IRL (som det kallas) så att du kan få alla de kunder som är i köpartagen idag.
                </p>
              </div>

              {/* Du kan få hjälp med så mycket */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Du kan få hjälp med så mycket…</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  AAA Websites är en webbyrå som är både kreativ och fantasirik och det gör oss framgångsrika, även utanför Internet. Så för att göra det enkelt för dig att se vad vi kan hjälpa till med kommer här en lista.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Hemsida',
                    'Grafisk formgivning av tryckmaterial',
                    'Digital marknadsföring',
                    'Sökmotoroptimering',
                    'Digitala strategier',
                    'Digitala analyser',
                    'Webbdesign / RE-design',
                    'Sociala medier'
                  ].map((service, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hur vi arbetar */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Hur vi arbetar… ihop</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Varje projekt är alltid unikt i sin natur. Inget företag är det andra likt och om man går på djupet så är inga människor de andra lika. Det här vet vi efter den erfarenhet vi har med att ha samarbetat med våra kunder.
                </p>
                <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                  <p className="text-gray-800 font-medium mb-4">Det gör oss som webbyrå unika:</p>
                  <p className="text-gray-700 leading-relaxed">
                    För vårt sätt att arbeta grundar sig i att vi arbetar tätt ihop med våra kunder. Vi vet att alla kunder har särskilda behov av hur företaget skall synas och vårdas och därför är det viktigt att du som väljer en webbyrå som leverantör väljer en med omsorg om dig och ditt varumärke.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className={`bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center ${isVisible ? 'fade-in-delay-2' : 'opacity-0'}`}>
                <h3 className="text-2xl font-bold mb-4">Vår unika modell är framtagen för dig och ditt företag</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Den är en framgångsfaktor för dig som kund och ser till att vi tillsammans skapar fler möjligheter för din verksamhet.
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Kontakta din blivande konsult idag!
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
