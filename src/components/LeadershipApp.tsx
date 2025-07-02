'use client'

import { useState, useEffect } from 'react'
import TheoryCard from './TheoryCard'
import QuizComponent from './QuizComponent'

interface Theory {
  id: string
  title: string
  description: string
  content: any
}

const theories: Theory[] = [
  {
    id: 'mintzberg',
    title: "Mintzberg's Managementrollen",
    description: "10 essentiële rollen die elke effectieve leider moet beheersen in sport en bewegen",
    content: {
      categories: [
        {
          name: "Interpersoonlijke Rollen",
          roles: [
            {
              name: "Boegbeeld",
              description: "Representeert het team naar buiten toe, ceremoniële taken"
            },
            {
              name: "Leider",
              description: "Motiveert en stuurt teamleden, verantwoordelijk voor prestaties"
            },
            {
              name: "Verbindingspersoon",
              description: "Onderhoudt contacten met andere teams, organisaties en stakeholders"
            }
          ]
        },
        {
          name: "Informationele Rollen",
          roles: [
            {
              name: "Monitor",
              description: "Verzamelt informatie over prestaties, trends en ontwikkelingen"
            },
            {
              name: "Verspreider",
              description: "Deelt relevante informatie met teamleden en andere betrokkenen"
            },
            {
              name: "Woordvoerder",
              description: "Communiceert namens het team naar media en buitenwereld"
            }
          ]
        },
        {
          name: "Besluitvormingsrollen",
          roles: [
            {
              name: "Ondernemer",
              description: "Initieert nieuwe projecten en verbeteringen"
            },
            {
              name: "Probleemoplosser",
              description: "Handelt crises en onverwachte situaties af"
            },
            {
              name: "Hulpbronnenverdeler",
              description: "Verdeelt tijd, geld en middelen over verschillende activiteiten"
            },
            {
              name: "Onderhandelaar",
              description: "Voert onderhandelingen met spelers, sponsors en andere partijen"
            }
          ]
        }
      ],
      sportExample: "Een voetbalcoach vervult alle 10 rollen: van boegbeeld bij persconferenties tot onderhandelaar bij transfers, van leider op het trainingsveld tot probleemoplosser bij blessures."
    }
  },
  {
    id: 'hersey-blanchard',
    title: "Situationeel Leidinggeven (SLII)",
    description: "Pas je leiderschapsstijl aan op het ontwikkelingsniveau van je sporters",
    content: {
      introduction: {
        title: "De Kern van Situationeel Leiderschap",
        description: "Situationeel leiderschap erkent dat er geen 'one-size-fits-all' benadering bestaat. Effectieve leiders passen hun stijl aan op basis van de competentie en betrokkenheid van hun teamleden.",
        keyInsight: "De beste leiderschapsstijl hangt af van de situatie en de ontwikkelingsfase van je teamleden."
      },
      coreModel: {
        title: "Het SLII Model",
        description: "Het model combineert twee gedragsdimensies van leiderschap:",
        dimensions: [
          {
            name: "Sturend Gedrag",
            description: "De mate waarin een leider specifieke instructies geeft",
            characteristics: [
              "Duidelijke doelen stellen",
              "Specifieke instructies geven",
              "Nauwlettend toezicht houden",
              "Prestaties monitoren"
            ]
          },
          {
            name: "Ondersteunend Gedrag", 
            description: "De mate waarin een leider luistert en emotionele steun biedt",
            characteristics: [
              "Actief luisteren",
              "Emotionele steun bieden",
              "Faciliteren van probleemoplossing",
              "Aanmoedigen van participatie"
            ]
          }
        ]
      },
      developmentLevels: [
        {
          level: "D1 - Enthousiaste Beginner",
          competence: "Laag",
          commitment: "Hoog",
          characteristics: [
            "Hoge motivatie en enthousiasme",
            "Beperkte vaardigheden en ervaring",
            "Optimistische verwachtingen",
            "Bereid om te leren"
          ],
          needs: "Heeft veel sturing nodig maar weinig ondersteuning",
          sportExample: "Een nieuwe speler die net bij het team komt - vol enthousiasme maar moet nog de tactiek en technieken leren."
        },
        {
          level: "D2 - Ontgoochelde Leerling",
          competence: "Laag tot Gemiddeld",
          commitment: "Laag",
          characteristics: [
            "Realiteit is ingedaald",
            "Frustratie over langzame vooruitgang",
            "Twijfels over eigen kunnen",
            "Verminderde motivatie"
          ],
          needs: "Heeft zowel veel sturing als veel ondersteuning nodig",
          sportExample: "Een speler die na enkele maanden merkt dat verbetering moeilijker is dan gedacht en begint te twijfelen."
        },
        {
          level: "D3 - Voorzichtige Uitvoerder",
          competence: "Gemiddeld tot Hoog",
          commitment: "Variabel",
          characteristics: [
            "Goede technische vaardigheden",
            "Gebrek aan zelfvertrouwen",
            "Onzekerheid over zelfstandig handelen",
            "Wisselende motivatie"
          ],
          needs: "Heeft weinig sturing maar veel ondersteuning nodig",
          sportExample: "Een ervaren speler die de vaardigheden heeft maar onzeker is over het nemen van leiderschap op het veld."
        },
        {
          level: "D4 - Zelfstandige Uitvoerder",
          competence: "Hoog",
          commitment: "Hoog",
          characteristics: [
            "Hoge competentie en vaardigheden",
            "Sterke motivatie en betrokkenheid",
            "Zelfvertrouwen in eigen kunnen",
            "Bereid verantwoordelijkheid te nemen"
          ],
          needs: "Heeft weinig sturing en weinig ondersteuning nodig",
          sportExample: "Een ervaren aanvoerder die zelfstandig kan functioneren en anderen kan inspireren."
        }
      ],
      leadershipStyles: [
        {
          style: "S1 - Sturend",
          behavior: "Hoog Sturend, Laag Ondersteunend",
          when: "Voor D1 - Enthousiaste Beginners",
          description: "Geef duidelijke instructies en houd nauwlettend toezicht",
          approach: [
            "Specifieke doelen en deadlines stellen",
            "Stap-voor-stap instructies geven",
            "Frequent controleren en feedback geven",
            "Beslissingen nemen voor het teamlid"
          ],
          sportExample: "Een coach die een nieuwe speler exact vertelt hoe een techniek uit te voeren en dit stap voor stap demonstreert."
        },
        {
          style: "S2 - Coachend",
          behavior: "Hoog Sturend, Hoog Ondersteunend",
          when: "Voor D2 - Ontgoochelde Leerlingen",
          description: "Combineer duidelijke sturing met emotionele ondersteuning",
          approach: [
            "Uitleggen waarom taken belangrijk zijn",
            "Luisteren naar zorgen en frustraties",
            "Aanmoedigen en motiveren",
            "Samen beslissingen nemen"
          ],
          sportExample: "Een coach die niet alleen techniek uitlegt maar ook luistert naar frustraties en extra motivatie geeft tijdens moeilijke periodes."
        },
        {
          style: "S3 - Ondersteunend",
          behavior: "Laag Sturend, Hoog Ondersteunend",
          when: "Voor D3 - Voorzichtige Uitvoerders",
          description: "Faciliteer en ondersteun zonder veel sturing te geven",
          approach: [
            "Vragen stellen om zelfreflectie te stimuleren",
            "Luisteren en emotionele steun bieden",
            "Vertrouwen uitspreken in hun kunnen",
            "Hen betrekken bij besluitvorming"
          ],
          sportExample: "Een coach die een ervaren speler vraagt: 'Wat denk je dat de beste tactiek is?' en vertrouwen toont in hun oordeel."
        },
        {
          style: "S4 - Delegerend",
          behavior: "Laag Sturend, Laag Ondersteunend",
          when: "Voor D4 - Zelfstandige Uitvoerders",
          description: "Geef verantwoordelijkheid en vertrouw op hun competentie",
          approach: [
            "Doelen stellen en vrijheid geven in uitvoering",
            "Beschikbaar zijn voor ondersteuning indien nodig",
            "Verantwoordelijkheid volledig overdragen",
            "Resultaten monitoren op afstand"
          ],
          sportExample: "Een coach die de aanvoerder verantwoordelijk maakt voor teamtactieken en alleen ingrijpt als het echt nodig is."
        }
      ],
      keyPrinciples: [
        "Er is geen beste leiderschapsstijl - het hangt af van de situatie",
        "Ontwikkelingsniveau kan per taak verschillen",
        "Leiders moeten flexibel kunnen schakelen tussen stijlen",
        "Het doel is teamleden naar D4 niveau te ontwikkelen",
        "Regelmatige evaluatie van ontwikkelingsniveau is essentieel"
      ]
    }
  },
  {
    id: 'french-raven',
    title: "French & Raven's Machtsbronnen",
    description: "6 bronnen van macht en invloed die leiders kunnen gebruiken in sport",
    content: {
      powerSources: [
        {
          name: "Positiemacht",
          description: "Macht die voortkomt uit je formele functie of rol",
          characteristics: [
            "Gebaseerd op hiërarchie",
            "Verdwijnt bij functiewisseling",
            "Kan dwang inhouden"
          ],
          sportExample: "Een hoofdcoach die spelers kan opstellen of naar de bank verwijzen"
        },
        {
          name: "Beloningmacht",
          description: "Macht door het kunnen geven van beloningen",
          characteristics: [
            "Controle over gewenste middelen",
            "Motiverend voor prestaties",
            "Kan materieel of immaterieel zijn"
          ],
          sportExample: "Een coach die speeltijd, bonussen of erkenning kan toekennen"
        },
        {
          name: "Dwangmacht",
          description: "Macht door het kunnen opleggen van straffen",
          characteristics: [
            "Gebaseerd op angst",
            "Kan weerstand oproepen",
            "Korte termijn effectief"
          ],
          sportExample: "Een coach die spelers kan schorsen of uit het team kan zetten"
        },
        {
          name: "Expertmacht",
          description: "Macht door kennis, vaardigheden en expertise",
          characteristics: [
            "Gebaseerd op competentie",
            "Duurzaam en overdraagbaar",
            "Creëert respect"
          ],
          sportExample: "Een coach met bewezen tactische kennis en ervaring"
        },
        {
          name: "Referentiemacht",
          description: "Macht door persoonlijke aantrekkingskracht en charisma",
          characteristics: [
            "Gebaseerd op bewondering",
            "Inspireert loyaliteit",
            "Moeilijk na te bootsen"
          ],
          sportExample: "Een coach die spelers inspireren door hun persoonlijkheid en visie"
        },
        {
          name: "Informatiemacht",
          description: "Macht door toegang tot belangrijke informatie",
          characteristics: [
            "Controle over informatiestromen",
            "Kan strategisch voordeel geven",
            "Tijdelijk van aard"
          ],
          sportExample: "Een coach die exclusieve informatie heeft over tegenstanders of transfers"
        }
      ]
    }
  }
]

export default function LeadershipApp() {
  const [currentView, setCurrentView] = useState<'home' | 'theories' | 'quiz'>('home')
  const [expandedTheory, setExpandedTheory] = useState<string | null>(null)
  const [readTheories, setReadTheories] = useState<string[]>([])
  const [totalPoints, setTotalPoints] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('leadership-progress')
    if (savedProgress) {
      const progress = JSON.parse(savedProgress)
      setReadTheories(progress.readTheories || [])
      setTotalPoints(progress.totalPoints || 0)
      setQuizCompleted(progress.quizCompleted || false)
      setQuizScore(progress.quizScore || 0)
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    const progress = {
      readTheories,
      totalPoints,
      quizCompleted,
      quizScore
    }
    localStorage.setItem('leadership-progress', JSON.stringify(progress))
  }, [readTheories, totalPoints, quizCompleted, quizScore])

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.includes(theoryId)) {
      setReadTheories([...readTheories, theoryId])
      setTotalPoints(totalPoints + 50)
    }
  }

  const handleQuizComplete = (score: number, total: number) => {
    const points = score * 10
    setQuizScore(score)
    setTotalPoints(totalPoints + points)
    setQuizCompleted(true)
  }

  const getProgressPercentage = () => {
    const theoriesRead = readTheories.length
    const quizDone = quizCompleted ? 1 : 0
    const totalTasks = theories.length + 1
    return Math.round(((theoriesRead + quizDone) / totalTasks) * 100)
  }

  const renderHome = () => (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          🏃‍♂️ Leiderschap in Sport & Bewegen
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Leer de essentiële leiderschapstheorieën voor HBO Sportkunde
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-gray-700">Voortgang</span>
            <span className="text-2xl font-bold text-blue-600">{totalPoints} punten</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <p className="text-gray-600">{getProgressPercentage()}% voltooid</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{theories.length}</div>
          <div className="text-gray-600">Leiderschapstheorieën</div>
          <div className="text-sm text-gray-500 mt-1">{readTheories.length} gelezen</div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
          <div className="text-gray-600">Quiz Vragen</div>
          <div className="text-sm text-gray-500 mt-1">
            {quizCompleted ? `${quizScore}/10 correct` : 'Nog niet gemaakt'}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">{totalPoints}</div>
          <div className="text-gray-600">Totaal Punten</div>
          <div className="text-sm text-gray-500 mt-1">Max: {(theories.length * 50) + 100}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <button
          onClick={() => setCurrentView('theories')}
          className="bg-blue-600 text-white p-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-left"
        >
          <h3 className="text-2xl font-bold mb-2">📚 Bestudeer Theorieën</h3>
          <p className="text-blue-100 mb-4">
            Leer over {theories.length} essentiële leiderschapstheorieën toegepast op sport
          </p>
          <div className="text-blue-200">
            {readTheories.length}/{theories.length} theorieën gelezen
          </div>
        </button>

        <button
          onClick={() => setCurrentView('quiz')}
          className="bg-purple-600 text-white p-8 rounded-lg shadow-lg hover:bg-purple-700 transition-colors text-left"
        >
          <h3 className="text-2xl font-bold mb-2">🎯 Test Je Kennis</h3>
          <p className="text-purple-100 mb-4">
            10 uitdagende vragen over alle leiderschapstheorieën
          </p>
          <div className="text-purple-200">
            {quizCompleted ? `Voltooid: ${quizScore}/10` : 'Nog niet gemaakt'}
          </div>
        </button>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🎯 Wat ga je leren?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="font-semibold text-gray-800 mb-2">Mintzberg's Rollen</h3>
            <p className="text-gray-600 text-sm">10 managementrollen voor effectief leiderschap</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-800 mb-2">Situationeel Leiden</h3>
            <p className="text-gray-600 text-sm">Pas je stijl aan op ontwikkelingsniveau</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Machtsbronnen</h3>
            <p className="text-gray-600 text-sm">6 bronnen van invloed en autoriteit</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="font-semibold text-gray-800 mb-2">Macht Paradox</h3>
            <p className="text-gray-600 text-sm">Hoe macht je brein kan beschadigen</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚠️</div>
            <h3 className="font-semibold text-gray-800 mb-2">Disfunctioneel Leiden</h3>
            <p className="text-gray-600 text-sm">Herken en vermijd veelvoorkomende valkuilen</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold text-gray-800 mb-2">Ferguson's Filosofie</h3>
            <p className="text-gray-600 text-sm">9 principes van de meest succesvolle coach</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTheories = () => (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">📚 Leiderschapstheorieën</h1>
        <button
          onClick={() => setCurrentView('home')}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          ← Terug naar Home
        </button>
      </div>

      <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Voortgang Theorieën</h2>
            <p className="text-gray-600">{readTheories.length} van {theories.length} theorieën gelezen</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{readTheories.length * 50} punten</div>
            <div className="text-gray-500 text-sm">uit theorieën</div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(readTheories.length / theories.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {expandedTheory ? (
        <div className="mb-8">
          <button
            onClick={() => setExpandedTheory(null)}
            className="mb-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Terug naar overzicht
          </button>
          <TheoryCard
            theory={theories.find(t => t.id === expandedTheory)!}
            isExpanded={true}
            onRead={() => handleTheoryRead(expandedTheory)}
            isRead={readTheories.includes(expandedTheory)}
          />
        </div>
      ) : (
        <div className="grid gap-6">
          {theories.map((theory) => (
            <div key={theory.id} onClick={() => setExpandedTheory(theory.id)}>
              <TheoryCard
                theory={theory}
                isExpanded={false}
                onRead={() => handleTheoryRead(theory.id)}
                isRead={readTheories.includes(theory.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const renderQuiz = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🎯 Leiderschap Quiz</h1>
        <button
          onClick={() => setCurrentView('home')}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          ← Terug naar Home
        </button>
      </div>

      <QuizComponent onComplete={handleQuizComplete} />
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {currentView === 'home' && renderHome()}
      {currentView === 'theories' && renderTheories()}
      {currentView === 'quiz' && renderQuiz()}
    </div>
  )
}