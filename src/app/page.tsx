export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🏃‍♂️ Leiderschap in de Wereld van Sport en Bewegen
          </h1>
          <p className="text-xl text-gray-600">
            Voor HBO Sportkunde Studenten
          </p>
        </header>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Welkom bij de Leiderschap Leertoepassing
          </h2>
          <p className="text-gray-700 mb-6">
            Deze applicatie helpt je begrijpen hoe leiderschapstheorieën toegepast worden in sport, fitness, bewegen en fysieke activiteit.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">📚 9 Theorieën</h3>
              <p className="text-blue-600 text-sm">Van Mintzberg tot Ferguson</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">🎯 Interactieve Quiz</h3>
              <p className="text-green-600 text-sm">Test je kennis</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">🏆 Puntensysteem</h3>
              <p className="text-purple-600 text-sm">Verdien punten door te leren</p>
            </div>
          </div>
          
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Leren 🚀
          </button>
        </div>
        
        <div className="mt-8 text-center text-gray-500">
          <p>Test versie - Als je dit ziet, werkt de preview!</p>
        </div>
      </div>
    </div>
  )
}