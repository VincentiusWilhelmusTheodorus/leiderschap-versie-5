'use client'

import { useState } from 'react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  theory: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Volgens Mintzberg, hoeveel managementrollen zijn er in totaal?",
    options: ["8", "10", "12", "15"],
    correct: 1,
    explanation: "Mintzberg identificeerde 10 managementrollen verdeeld over 3 categorieën: interpersoonlijk (3), informationeel (3) en besluitvorming (4).",
    theory: "Mintzberg's Managementrollen"
  },
  {
    id: 2,
    question: "Welke leiderschapsstijl hoort bij een D2 (Ontgoochelde Leerling) volgens SLII?",
    options: ["S1 - Sturend", "S2 - Coachend", "S3 - Ondersteunend", "S4 - Delegerend"],
    correct: 1,
    explanation: "D2 heeft zowel veel sturing als veel ondersteuning nodig, wat overeenkomt met S2 - Coachend (hoog sturend, hoog ondersteunend).",
    theory: "Situationeel Leidinggeven (SLII)"
  },
  {
    id: 3,
    question: "Welke machtsbron van French & Raven verdwijnt wanneer je je positie verlaat?",
    options: ["Expertmacht", "Referentiemacht", "Positiemacht", "Beloningmacht"],
    correct: 2,
    explanation: "Positiemacht is direct gekoppeld aan je formele functie en verdwijnt zodra je die positie verlaat.",
    theory: "French & Raven's Machtsbronnen"
  },
  {
    id: 4,
    question: "Volgens Keltner, wat is het grootste gevaar van macht?",
    options: ["Het maakt je lui", "Het beschadigt je brein", "Het maakt je eenzaam", "Het maakt je agressief"],
    correct: 1,
    explanation: "Keltner toonde aan dat macht letterlijk je brein beschadigt door empathie-circuits te onderdrukken.",
    theory: "Macht in Leiderschap"
  },
  {
    id: 5,
    question: "Welk disfunctioneel patroon beschrijft Kets de Vries als 'heel hard rennen maar de verkeerde kant op'?",
    options: ["Conflictvermijding", "Tiranniseren", "Micromanagement", "Manisch Gedrag"],
    correct: 3,
    explanation: "Manisch gedrag kenmerkt zich door hyperactiviteit en onsamenhangende beslissingen - veel energie maar verkeerde richting.",
    theory: "Disfunctioneel Leiderschap"
  },
  {
    id: 6,
    question: "Wat is volgens Maccoby het verschil tussen productief en destructief narcisme?",
    options: ["De mate van zelfvertrouwen", "Of het ten goede komt aan het team", "De hoeveelheid charisma", "De leeftijd van de leider"],
    correct: 1,
    explanation: "Productief narcisme wordt gekanaliseerd naar teamdoelen, destructief narcisme gaat ten koste van het team.",
    theory: "Maccoby's Narcistische Leider"
  },
  {
    id: 7,
    question: "Hoeveel jaar leidde Alex Ferguson Manchester United?",
    options: ["20 jaar", "24 jaar", "26 jaar", "30 jaar"],
    correct: 2,
    explanation: "Sir Alex Ferguson was 26 jaar lang manager van Manchester United (1986-2013).",
    theory: "Alex Ferguson's Leiderschapsfilosofie"
  },
  {
    id: 8,
    question: "Wat is volgens Van Vugt & Wiltschut het verschil tussen gezag en dominantie?",
    options: ["Gezag is tijdelijk, dominantie permanent", "Gezag is gebaseerd op respect, dominantie op macht", "Gezag is voor mannen, dominantie voor vrouwen", "Er is geen verschil"],
    correct: 1,
    explanation: "Gezag is gebaseerd op respect en vertrouwen, dominantie op macht en controle.",
    theory: "Gezag vs Dominantie"
  },
  {
    id: 9,
    question: "Welke van Ferguson's 9 elementen benadrukt dat er geen uitzonderingen zijn, zelfs niet voor sterren?",
    options: ["Individuele Benadering", "Discipline en Standaarden", "Lange Termijn Visie", "Controle en Autoriteit"],
    correct: 1,
    explanation: "Discipline en Standaarden betekent dat regels voor iedereen gelden, ongeacht status - zoals toen Ferguson Beckham wegstuurde.",
    theory: "Alex Ferguson's Leiderschapsfilosofie"
  },
  {
    id: 10,
    question: "Volgens SLII, wat kenmerkt een D4 (Zelfstandige Uitvoerder)?",
    options: ["Hoge competentie, lage betrokkenheid", "Lage competentie, hoge betrokkenheid", "Hoge competentie, hoge betrokkenheid", "Lage competentie, lage betrokkenheid"],
    correct: 2,
    explanation: "D4 heeft zowel hoge competentie als hoge betrokkenheid en kan zelfstandig werken.",
    theory: "Situationeel Leidinggeven (SLII)"
  }
]

interface QuizComponentProps {
  onComplete: (score: number, total: number) => void
}

export default function QuizComponent({ onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed
      const score = selectedAnswers.reduce((acc, answer, index) => {
        return acc + (answer === quizQuestions[index].correct ? 1 : 0)
      }, 0)
      setShowResults(true)
      onComplete(score, quizQuestions.length)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const getScore = () => {
    return selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quizQuestions[index].correct ? 1 : 0)
    }, 0)
  }

  const getScorePercentage = () => {
    return Math.round((getScore() / quizQuestions.length) * 100)
  }

  const getScoreMessage = () => {
    const percentage = getScorePercentage()
    if (percentage >= 90) return "🏆 Uitstekend! Je bent een echte leiderschap expert!"
    if (percentage >= 80) return "🌟 Zeer goed! Je beheerst de theorieën goed!"
    if (percentage >= 70) return "👍 Goed gedaan! Je hebt de basis goed onder de knie!"
    if (percentage >= 60) return "📚 Redelijk! Bestudeer de theorieën nog eens extra!"
    return "💪 Blijf oefenen! Lees de theorieën nog eens door!"
  }

  if (!quizStarted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">🎯 Leiderschap Quiz</h2>
        <p className="text-gray-600 mb-6 text-lg">
          Test je kennis van alle leiderschapstheorieën met 10 uitdagende vragen!
        </p>
        
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold text-purple-800 mb-3">Quiz Informatie</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-medium text-purple-700 mb-2">📊 Details</h4>
              <ul className="text-purple-600 space-y-1">
                <li>• 10 meerkeuzevragen</li>
                <li>• Alle theorieën komen aan bod</li>
                <li>• 10 punten per goed antwoord</li>
                <li>• Directe feedback na afloop</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-700 mb-2">🎯 Tips</h4>
              <ul className="text-purple-600 space-y-1">
                <li>• Lees alle antwoorden goed</li>
                <li>• Denk aan de sportvoorbeelden</li>
                <li>• Je kunt terug naar vorige vragen</li>
                <li>• Neem je tijd</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={() => setQuizStarted(true)}
          className="px-8 py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
        >
          Start Quiz 🚀
        </button>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">🎉 Quiz Voltooid!</h2>
          <div className="text-6xl font-bold text-purple-600 mb-2">
            {getScore()}/{quizQuestions.length}
          </div>
          <div className="text-2xl text-gray-600 mb-4">
            {getScorePercentage()}% correct
          </div>
          <p className="text-lg text-gray-700 mb-6">
            {getScoreMessage()}
          </p>
          <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-lg inline-block">
            Je hebt {getScore() * 10} punten verdiend! 🎯
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Gedetailleerde Resultaten</h3>
          {quizQuestions.map((question, index) => {
            const userAnswer = selectedAnswers[index]
            const isCorrect = userAnswer === question.correct
            
            return (
              <div key={question.id} className={`border rounded-lg p-4 ${isCorrect ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-800 flex-1">
                    {index + 1}. {question.question}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {isCorrect ? '✓ Correct' : '✗ Fout'}
                  </span>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-1">Jouw antwoord:</p>
                  <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {question.options[userAnswer]}
                  </p>
                </div>
                
                {!isCorrect && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">Correct antwoord:</p>
                    <p className="font-medium text-green-700">
                      {question.options[question.correct]}
                    </p>
                  </div>
                )}
                
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-blue-800 text-sm">
                    <strong>Uitleg:</strong> {question.explanation}
                  </p>
                  <p className="text-blue-600 text-xs mt-1">
                    <strong>Theorie:</strong> {question.theory}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => {
              setCurrentQuestion(0)
              setSelectedAnswers([])
              setShowResults(false)
              setQuizStarted(false)
            }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            🔄 Opnieuw Proberen
          </button>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Voortgang</span>
          <span className="text-sm text-gray-600">{currentQuestion + 1} van {quizQuestions.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-purple-600 font-medium mb-1">Theorie: {question.theory}</p>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          {currentQuestion + 1}. {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            currentQuestion === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ← Vorige
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {selectedAnswers[currentQuestion] !== undefined ? 'Antwoord geselecteerd' : 'Selecteer een antwoord'}
          </p>
        </div>

        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            selectedAnswers[currentQuestion] === undefined
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : currentQuestion === quizQuestions.length - 1
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {currentQuestion === quizQuestions.length - 1 ? 'Voltooien' : 'Volgende →'}
        </button>
      </div>
    </div>
  )
}