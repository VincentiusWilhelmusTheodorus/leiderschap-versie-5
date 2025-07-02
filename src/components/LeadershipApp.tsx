'use client'

import { useState, useEffect } from 'react'
import TheoryCard from './TheoryCard'
import QuizComponent from './QuizComponent'

// Types
interface UserProgress {
  readTheories: string[]
  quizCompleted: boolean
  totalPoints: number
  quizScore?: number
}

interface Theory {
  id: string
  title: string
  description: string
  content: any
}

// Theory data - simplified for now
const theories: Theory[] = [
  {
    id: 'mintzberg',
    title: "Mintzberg's Managementrollen",
    description: "Henry Mintzberg identificeerde 10 essentiële rollen die elke manager vervult, verdeeld over interpersoonlijke, informationele en besluitvormingsrollen.",
    content: {
      introduction: "De 10 Managementrollen van Mintzberg",
      description: "Henry Mintzberg onderzocht wat managers werkelijk doen en identificeerde 10 rollen verdeeld over 3 categorieën.",
      keyInsight: "Effectief leiderschap vereist het beheersen van alle 10 rollen, afhankelijk van de situatie.",
      sportApplication: "In de sport zijn deze rollen duidelijk zichtbaar: een hoofdcoach is tegelijkertijd leider (motiveren spelers), monitor (analyseren prestaties), onderhandelaar (transfers) en probleemoplosser (tactische aanpassingen)."
    }
  },
  {
    id: 'hersey-blanchard',
    title: "Situationeel Leidinggeven (SLII)",
    description: "Het Situational Leadership model van Hersey en Blanchard toont hoe je je leiderschapsstijl moet aanpassen aan het ontwikkelingsniveau van je teamleden.",
    content: {
      introduction: "Situationeel Leidinggeven - De Juiste Stijl op het Juiste Moment",
      description: "Ontwikkeld door Paul Hersey en Ken Blanchard, toont dit model dat er geen 'beste' leiderschapsstijl bestaat - alleen de juiste stijl voor de juiste situatie.",
      keyInsight: "Effectief leiderschap betekent je stijl aanpassen aan het competentie- en betrokkenheidsniveau van je teamleden.",
      sportApplication: "In de sport is SLII bijzonder waardevol omdat spelers constant nieuwe vaardigheden leren. Een ervaren voetballer kan een beginner zijn wanneer hij een nieuwe tactiek leert."
    }
  },
  {
    id: 'french-raven',
    title: "French & Raven's Machtsbronnen",
    description: "John French en Bertram Raven identificeerden zes bronnen van macht die leiders kunnen gebruiken om invloed uit te oefenen op anderen.",
    content: {
      introduction: "De Zes Machtsbronnen van French & Raven",
      description: "In 1959 identificeerden French en Raven vijf machtsbronnen, later uitgebreid naar zes. Deze bronnen bepalen hoe leiders invloed kunnen uitoefenen.",
      keyInsight: "Effectieve leiders begrijpen welke machtsbronnen ze hebben en gebruiken de juiste bron voor elke situatie.",
      sportApplication: "In de sport zien we alle machtsbronnen terug: coaches hebben positiemacht (kunnen opstellen), beloningmacht (speeltijd), dwangmacht (schorsen), expertmacht (tactische kennis), en soms referentiemacht (charisma)."
    }
  }
]

export default function LeadershipApp() {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    readTheories: [],
    quizCompleted: false,
    totalPoints: 0
  })

  const [currentView, setCurrentView] = useState<'home' | 'theories' | 'quiz'>('home')
  const [expandedTheory, setExpandedTheory] = useState<string | null>(null)

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

  // Handle theory read
  const handleTheoryRead = (theoryId: string) => {
    if (!userProgress.readTheories.includes(theoryId)) {
      const newProgress = {
        ...userProgress,
        readTheories: [...userProgress.readTheories, theoryId],
        totalPoints: userProgress.totalPoints + 50
      }
      saveProgress(newProgress)
    }
  }

  // Handle theory click
  const handleTheoryClick = (theoryId: string) => {
    setExpandedTheory(expandedTheory === theoryId ? null : theoryId)
  }

  // Handle quiz completion
  const handleQuizComplete = (score: number, total: number) => {
    const points = score * 10 // 10 points per correct answer
    const newProgress = {
      ...userProgress,
      quizCompleted: true,
      quizScore: score,
      totalPoints: userProgress.totalPoints + points
    }
    saveProgress(newProgress)
  }

  // Check if quiz is available
  const isQuizAvailable = userProgress.readTheories.length >= 2

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
                style={{ width: `${Math.min((userProgress.totalPoints / 250) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {userProgress.readTheories.length}/{theories.length} theorieën • Quiz: {userProgress.quizCompleted ? 'Voltooid' : 'Nog niet'}
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
              className={`px-6 py-2 rounded-lg font-medium transition-colors relative ${
                currentView === 'quiz'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🎯 Quiz
              {isQuizAvailable && !userProgress.quizCompleted && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  !
                </span>
              )}
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
                    <h3 className="font-semibold text-blue-800 mb-2 text-lg">📚 {theories.length} Theorieën</h3>
                    <p className="text-blue-600">Van Mintzberg tot French & Raven - essentiële leiderschapstheorieën</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2 text-lg">🎯 Kennisquiz</h3>
                    <p className="text-green-600">10 uitdagende vragen om je kennis te testen</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2 text-lg">🏆 Puntensysteem</h3>
                    <p className="text-purple-600">50 punten per theorie + 10 punten per goed antwoord</p>
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
                      <span className="font-medium">{userProgress.readTheories.length}/{theories.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quiz voltooid:</span>
                      <span className="font-medium">{userProgress.quizCompleted ? `Ja (${userProgress.quizScore}/10)` : 'Nee'}</span>
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
                    {userProgress.readTheories.length < theories.length && (
                      <p className="text-gray-600">• Lees meer leiderschapstheorieën (+50 punten per theorie)</p>
                    )}
                    {isQuizAvailable && !userProgress.quizCompleted && (
                      <p className="text-green-600">• 🎯 Quiz is nu beschikbaar! (+100 punten mogelijk)</p>
                    )}
                    {userProgress.readTheories.length === theories.length && userProgress.quizCompleted && (
                      <p className="text-green-600">🎉 Gefeliciteerd! Je hebt alles voltooid!</p>
                    )}
                    {!isQuizAvailable && (
                      <p className="text-gray-500">• Lees minimaal 2 theorieën om de quiz te ontgrendelen</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'theories' && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">📚 Leiderschapstheorieën</h2>
                <p className="text-gray-600 mb-6">
                  Klik op een theorie om deze te lezen en 50 punten te verdienen
                </p>
              </div>

              <div className="grid gap-6">
                {theories.map((theory) => (
                  <div key={theory.id} onClick={() => handleTheoryClick(theory.id)}>
                    <TheoryCard
                      theory={theory}
                      isExpanded={expandedTheory === theory.id}
                      onRead={() => handleTheoryRead(theory.id)}
                      isRead={userProgress.readTheories.includes(theory.id)}
                    />
                  </div>
                ))}
              </div>

              {/* Coming Soon Theories */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">🔜 Binnenkort Beschikbaar</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Keltner's Macht Paradox",
                    "Kets de Vries: Disfunctioneel Leiderschap", 
                    "Maccoby's Narcistische Leider",
                    "Alex Ferguson's Leiderschapsfilosofie",
                    "Van Vugt & Wiltschut: Gezag vs Dominantie",
                    "Gezagsontwikkeling in de Praktijk"
                  ].map((title, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg opacity-60">
                      <h4 className="font-medium text-gray-600 mb-2">{title}</h4>
                      <p className="text-sm text-gray-500">Wordt binnenkort toegevoegd...</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentView === 'quiz' && (
            <div className="max-w-4xl mx-auto">
              {!isQuizAvailable ? (
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">🔒 Quiz Vergrendeld</h2>
                  <p className="text-gray-600 mb-6">
                    Lees eerst minimaal 2 theorieën voordat je de quiz kunt maken.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-blue-800 mb-3">Voortgang naar Quiz</h3>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{userProgress.readTheories.length}</div>
                        <div className="text-sm text-blue-600">Gelezen</div>
                      </div>
                      <div className="text-gray-400">/</div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-400">2</div>
                        <div className="text-sm text-gray-400">Vereist</div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentView('theories')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    📚 Ga naar Theorieën
                  </button>
                </div>
              ) : (
                <QuizComponent onComplete={handleQuizComplete} />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}