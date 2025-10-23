import { useState, useEffect } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
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

        .fade-in {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .fade-in-delay {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-[#073767] to-[#062f58] flex items-center justify-center py-20 px-4">
        <div className={`max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-10 md:p-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kontakta oss</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Vi vill gärna höra från dig. Oavsett om du har frågor, funderingar eller vill starta ett projekt – skicka ett meddelande!
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className={`space-y-6 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Namn
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073767]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-post
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073767]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073767]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#073767] hover:bg-[#062f58] text-white font-semibold py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
              >
                Skicka meddelande
              </button>
            </form>
          ) : (
            <div className="text-center fade-in-delay">
              <h2 className="text-3xl font-bold text-[#073767] mb-4">Tack för ditt meddelande!</h2>
              <p className="text-gray-600 mb-8">Vi återkommer till dig så snart som möjligt.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-4 bg-[#073767] hover:bg-[#062f58] text-white font-semibold rounded-lg transition-all duration-200"
              >
                Skicka ett nytt meddelande
              </button>
            </div>
          )}

          <div className="mt-16 text-center text-gray-600 fade-in-delay">
            <p className="mb-2">📞 <span className="font-semibold text-gray-900">+46 70 123 45 67</span></p>
            <p className="mb-2">✉️ <span className="font-semibold text-gray-900">kontakt@aaawebsites.se</span></p>
            <p>📍 <span className="font-semibold text-gray-900">Göteborg, Sverige</span></p>
          </div>
        </div>
      </main>
    </>
  )
}
