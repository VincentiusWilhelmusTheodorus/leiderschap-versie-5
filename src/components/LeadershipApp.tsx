'use client'

import { useState, useEffect } from 'react'

// Basic types
interface UserProgress {
  readTheories: string[]
  quizCompleted: boolean
  totalPoints: number
  quizScore?: number
}

export default function LeadershipApp() {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    readTheories: [],
    quizCompleted: false,
    totalPoints: 0
  })

  const [currentView, setCurrentView] = useState<'home' | 'theories' | 'quiz'>('home')

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('leadership-progress')
    if (saved) {
      try {
        setUserProgress(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading progress:', e)
      }
    }
  }, [])

  // Save progress to localStorage
  const saveProgress = (progress: UserProgress) => {
    setUserProgress(progress)
    localStorage.setItem('leadership-progress', JSON.stringify(progress))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🏃‍♂️ Leiderschap in de Wereld van Sport en Bewegen
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Voor HBO Sportkunde Studenten
          </p>
          
          {/* Progress Bar */}
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Voortgang</span>
              <span className="text-sm font-medium text-blue-600">
                {userProgress.totalPoints} punten
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((userProgress.totalPoints / 590) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {userProgress.readTheories.length}/9 theorieën gelezen
            </p>
          </div>
        </header>

        {/* Navigation */}
        <nav className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-2">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentView === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🏠 Home
            </button>
            <button
              onClick={() => setCurrentView('theories')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentView === 'theories'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📚 Theorieën
            </button>
            <button
              onClick={() => setCurrentView('quiz')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentView === 'quiz'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🎯 Quiz
            </button>
          </div>
        </nav>

        {/* Content */}
        <main>
          {currentView === 'home' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">
                  Welkom bij de Leiderschap Leertoepassing
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Leer over leiderschapstheorieën toegepast op sport, fitness, bewegen en fysieke activiteit.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2 text-lg">📚 9 Theorieën</h3>
                    <p className="text-blue-600">Van Mintzberg tot Ferguson - alle essentiële leiderschapstheorieën</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2 text-lg">🎯 Kennisquiz</h3>
                    <p className="text-green-600">10 uitdagende vragen om je kennis te testen</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2 text-lg">🏆 Puntensysteem</h3>
                    <p className="text-purple-600">Verdien punten door theorieën te lezen en de quiz te maken</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setCurrentView('theories')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Start Leren 🚀
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4">📊 Je Voortgang</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Theorieën gelezen:</span>
                      <span className="font-medium">{userProgress.readTheories.length}/9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quiz voltooid:</span>
                      <span className="font-medium">{userProgress.quizCompleted ? 'Ja' : 'Nee'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Totaal punten:</span>
                      <span className="font-medium text-blue-600">{userProgress.totalPoints}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4">🎯 Volgende Stappen</h3>
                  <div className="space-y-2">
                    {userProgress.readTheories.length < 9 && (
                      <p className="text-gray-600">• Lees meer leiderschapstheorieën</p>
                    )}
                    {userProgress.readTheories.length >= 3 && !userProgress.quizCompleted && (
                      <p className="text-gray-600">• Maak de kennisquiz</p>
                    )}
                    {userProgress.readTheories.length === 9 && userProgress.quizCompleted && (
                      <p className="text-green-600">🎉 Gefeliciteerd! Je hebt alles voltooid!</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'theories' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 Leiderschapstheorieën</h2>
                <p className="text-gray-600 mb-6">
                  Theorieën worden binnenkort toegevoegd...
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[1,2,3,4,5,6,7,8,9].map(num => (
                    <div key={num} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-800">Theorie {num}</h3>
                      <p className="text-sm text-gray-500">Binnenkort beschikbaar</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentView === 'quiz' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Kennisquiz</h2>
                <p className="text-gray-600 mb-6">
                  Quiz wordt binnenkort toegevoegd...
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-500">
                    Lees eerst enkele theorieën voordat je de quiz kunt maken.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}