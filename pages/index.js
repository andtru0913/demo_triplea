import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ telephone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (data.success) {
        setMessage(data.message)
        setFormData({ telephone: '' })
      } else setMessage(data.message)
    } catch {
      setMessage('Ett fel uppstod. Försök igen senare.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Komplett hemsida
            <span className="block text-[#073767]">till ditt företag!</span>
          </h1>

          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <p className="text-lg font-semibold text-gray-800">
              Från <span className="text-[#073767]">499:- / månad</span> - Det mesta ingår!
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12 bg-gradient-to-br from-[#073767] to-[#073767]/90 text-white">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Vad erbjuder vi?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-blue-100 leading-relaxed">
                        Professionell webbutveckling med moderna tekniker
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-blue-100 leading-relaxed">
                        Skräddarsydda designlösningar som förmedlar ert varumärke
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-blue-100 leading-relaxed">
                        Digital marknadsföring som ökar din synlighet online
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <h3 className="font-semibold mb-3">Perfekt för</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Småföretag', 'Startups', 'E-handel', 'Serviceföretag', 'Konsulter'].map((item) => (
                      <span key={item} className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Redo att växa digitalt?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AAA Websites levererar hemsidor av högsta kvalitet för små och medelstora företag. 
                    Vi erbjuder premium webbutveckling med React & Next.js, modern design och 
                    digital marknadsföring.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Ditt telefonnummer
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="070 123 45 67"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#073767] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed transform scale-95'
                        : 'bg-gradient-to-r from-[#073767] to-[#073767]/90 hover:from-[#073767]/80 hover:to-[#073767]/80 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                    } text-white flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Skickar...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Boka kostnadsfritt möte
                      </>
                    )}
                  </button>

                  {message && (
                    <div
                      className={`p-4 rounded-lg border ${
                        message.includes('Tack')
                          ? 'bg-green-50 text-green-800 border-green-200'
                          : 'bg-red-50 text-red-800 border-red-200'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-center gap-2">
                        {message.includes('Tack') ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {message}
                      </div>
                    </div>
                  )}
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Vi kontaktar dig inom 24 timmar för att boka möte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Inga startkostnader', desc: 'Bara månadskostnad från dag 1' },
              { title: 'Support dygnet runt', desc: 'Alltid tillgängliga för våra kunder' },
              { title: 'SEO-optimerad', desc: 'Bra synlighet i sökmotorer' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/60"
              >
                <h3 className="font-semibold text-[#073767] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
