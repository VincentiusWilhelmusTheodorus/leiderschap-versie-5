'use client'

import { useState, useEffect } from 'react'
import TheoryCard from './TheoryCard'

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

// Theory data
const theories: Theory[] = [
  {
    id: 'mintzberg',
    title: "Mintzberg's Managementrollen",
    description: "Henry Mintzberg identificeerde 10 essentiële rollen die elke manager vervult, verdeeld over interpersoonlijke, informationele en besluitvormingsrollen.",
    content: {
      introduction: {
        title: "De 10 Managementrollen van Mintzberg",
        description: "Henry Mintzberg onderzocht wat managers werkelijk doen en identificeerde 10 rollen verdeeld over 3 categorieën.",
        keyInsight: "Effectief leiderschap vereist het beheersen van alle 10 rollen, afhankelijk van de situatie."
      },
      categories: [
        {
          name: "🤝 Interpersoonlijke Rollen",
          description: "Rollen die voortkomen uit de formele autoriteit van de manager",
          roles: [
            {
              name: "Boegbeeld (Figurehead)",
              description: "Ceremoniële en symbolische taken uitvoeren als vertegenwoordiger van de organisatie",
              sportExample: "Een hoofdcoach die de club vertegenwoordigt bij officiële evenementen en persconferenties"
            },
            {
              name: "Leider (Leader)",
              description: "Motiveren, begeleiden en ontwikkelen van teamleden",
              sportExample: "Een teamcaptain die spelers motiveert en het team samenbrengt"
            },
            {
              name: "Verbindingspersoon (Liaison)",
              description: "Netwerken en relaties onderhouden met externe partijen",
              sportExample: "Een sportdirecteur die contacten onderhoudt met andere clubs, sponsors en media"
            }
          ]
        },
        {
          name: "📊 Informationele Rollen",
          description: "Rollen gericht op het verzamelen, verwerken en delen van informatie",
          roles: [
            {
              name: "Monitor",
              description: "Informatie verzamelen over de organisatie en omgeving",
              sportExample: "Een coach die tegenstanders analyseert en spelerstatistieken bijhoudt"
            },
            {
              name: "Verspreider (Disseminator)",
              description: "Belangrijke informatie delen met teamleden",
              sportExample: "Een trainer die tactische informatie en spelplannen communiceert naar spelers"
            },
            {
              name: "Woordvoerder (Spokesperson)",
              description: "Informatie over de organisatie naar buiten brengen",
              sportExample: "Een manager die namens het team spreekt met journalisten en fans"
            }
          ]
        },
        {
          name: "⚡ Besluitvormingsrollen",
          description: "Rollen waarbij belangrijke beslissingen worden genomen",
          roles: [
            {
              name: "Ondernemer (Entrepreneur)",
              description: "Nieuwe initiatieven starten en veranderingen doorvoeren",
              sportExample: "Een technisch directeur die nieuwe trainingsmethoden introduceert"
            },
            {
              name: "Probleemoplosser (Disturbance Handler)",
              description: "Onverwachte problemen en crises aanpakken",
              sportExample: "Een coach die tijdens een wedstrijd tactisch moet omschakelen bij blessures"
            },
            {
              name: "Hulpbronnenverdeler (Resource Allocator)",
              description: "Budget, tijd en middelen toewijzen",
              sportExample: "Een clubmanager die het budget verdeelt over transfers, faciliteiten en jeugdopleiding"
            },
            {
              name: "Onderhandelaar (Negotiator)",
              description: "Namens de organisatie onderhandelen met externe partijen",
              sportExample: "Een zaakwaarnemer die contracten onderhandelt voor spelers"
            }
          ]
        }
      ],
      keyPrinciples: [
        "Alle 10 rollen zijn belangrijk - geen enkele rol kan worden weggelaten",
        "De nadruk op verschillende rollen varieert per situatie en functieniveau",
        "Effectieve managers schakelen soepel tussen rollen",
        "Rolconflicten kunnen ontstaan wanneer rollen tegenstrijdige eisen stellen"
      ],
      sportApplication: "In de sport zijn deze rollen duidelijk zichtbaar: een hoofdcoach is tegelijkertijd leider (motiveren spelers), monitor (analyseren prestaties), onderhandelaar (transfers) en probleemoplosser (tactische aanpassingen). Succesvolle sportleiders beheersen alle rollen en weten wanneer welke rol prioriteit heeft.",
      practicalTips: [
        "Herken welke rol een situatie vereist voordat je handelt",
        "Ontwikkel bewust vaardigheden voor je zwakkere rollen",
        "Delegeer rollen waar mogelijk aan teamleden met sterke vaardigheden",
        "Evalueer regelmatig welke rollen je het meest en minst gebruikt"
      ]
    }
  },
  {
    id: 'hersey-blanchard',
    title: "Situationeel Leidinggeven (SLII)",
    description: "Het Situational Leadership model van Hersey en Blanchard toont hoe je je leiderschapsstijl moet aanpassen aan het ontwikkelingsniveau van je teamleden.",
    content: {
      introduction: {
        title: "Situationeel Leidinggeven - De Juiste Stijl op het Juiste Moment",
        description: "Ontwikkeld door Paul Hersey en Ken Blanchard, toont dit model dat er geen 'beste' leiderschapsstijl bestaat - alleen de juiste stijl voor de juiste situatie.",
        keyInsight: "Effectief leiderschap betekent je stijl aanpassen aan het competentie- en betrokkenheidsniveau van je teamleden."
      },
      coreModel: {
        title: "Het Kernmodel: Twee Dimensies",
        description: "SLII is gebaseerd op twee gedragsdimensies die leiders kunnen variëren:",
        dimensions: [
          {
            name: "Sturend Gedrag (Directive Behavior)",
            description: "De mate waarin een leider specifieke instructies geeft en nauwlettend toezicht houdt",
            characteristics: [
              "Duidelijke instructies geven",
              "Taken en rollen definiëren", 
              "Nauw toezicht houden",
              "Deadlines en standaarden stellen"
            ]
          },
          {
            name: "Ondersteunend Gedrag (Supportive Behavior)", 
            description: "De mate waarin een leider luistert, aanmoedigt en faciliteert",
            characteristics: [
              "Actief luisteren naar teamleden",
              "Aanmoediging en erkenning geven",
              "Faciliteren van probleemoplossing",
              "Betrekken bij besluitvorming"
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
            "Optimistisch over mogelijkheden",
            "Heeft duidelijke richting nodig"
          ],
          needs: "Veel sturing en instructie, weinig emotionele ondersteuning nodig",
          sportExample: "Een nieuwe speler die net bij het team komt - gemotiveerd maar moet de spelstijl en tactiek nog leren"
        },
        {
          level: "D2 - Ontgoochelde Leerling", 
          competence: "Laag tot Gemiddeld",
          commitment: "Laag",
          characteristics: [
            "Realiteit is ingedaald - het is moeilijker dan gedacht",
            "Frustratie over langzame vooruitgang",
            "Twijfels over eigen kunnen",
            "Heeft zowel richting als ondersteuning nodig"
          ],
          needs: "Veel sturing én veel ondersteuning om door de moeilijke fase heen te komen",
          sportExample: "Een jonge speler die na enkele maanden merkt dat het profniveau veel zwaarder is dan verwacht"
        },
        {
          level: "D3 - Voorzichtige Uitvoerder",
          competence: "Gemiddeld tot Hoog", 
          commitment: "Variabel",
          characteristics: [
            "Heeft de vaardigheden ontwikkeld",
            "Onzeker over eigen kunnen in nieuwe situaties", 
            "Wil meer verantwoordelijkheid maar twijfelt",
            "Heeft vooral vertrouwen en ondersteuning nodig"
          ],
          needs: "Weinig sturing maar veel ondersteuning en aanmoediging",
          sportExample: "Een ervaren speler die een nieuwe positie moet leren - kan voetballen maar onzeker in nieuwe rol"
        },
        {
          level: "D4 - Zelfstandige Uitvoerder",
          competence: "Hoog",
          commitment: "Hoog",
          characteristics: [
            "Hoge vaardigheden en ervaring",
            "Gemotiveerd en betrokken",
            "Kan zelfstandig werken",
            "Neemt verantwoordelijkheid"
          ],
          needs: "Weinig sturing en weinig ondersteuning - vooral autonomie",
          sportExample: "Een ervaren teamcaptain die zelfstandig kan functioneren en anderen kan begeleiden"
        }
      ],
      leadershipStyles: [
        {
          style: "S1 - Sturend (Directing)",
          behavior: "Hoog Sturend, Laag Ondersteunend",
          when: "Voor D1 - Enthousiaste Beginners",
          description: "Geef duidelijke instructies en houd nauw toezicht. Focus op wat, hoe, waar en wanneer.",
          approach: [
            "Specifieke doelen en deadlines stellen",
            "Stap-voor-stap instructies geven", 
            "Regelmatig controleren en feedback geven",
            "Beslissingen nemen voor het teamlid"
          ],
          sportExample: "Een nieuwe speler uitleggen hoe de warming-up werkt, welke oefeningen wanneer en hoe"
        },
        {
          style: "S2 - Coachend (Coaching)",
          behavior: "Hoog Sturend, Hoog Ondersteunend", 
          when: "Voor D2 - Ontgoochelde Leerlingen",
          description: "Combineer duidelijke instructies met veel ondersteuning en aanmoediging.",
          approach: [
            "Uitleggen waarom taken belangrijk zijn",
            "Luisteren naar zorgen en frustraties",
            "Aanmoedigen en motiveren", 
            "Samen beslissingen nemen"
          ],
          sportExample: "Een speler die moeite heeft uitleggen waarom bepaalde oefeningen helpen en hem aanmoedigen vol te houden"
        },
        {
          style: "S3 - Ondersteunend (Supporting)",
          behavior: "Laag Sturend, Hoog Ondersteunend",
          when: "Voor D3 - Voorzichtige Uitvoerders", 
          description: "Faciliteer en ondersteun, laat het teamlid de beslissingen nemen.",
          approach: [
            "Luisteren en vragen stellen",
            "Vertrouwen uitspreken in hun kunnen",
            "Samen problemen oplossen",
            "Hen de beslissingen laten nemen"
          ],
          sportExample: "Een ervaren speler vragen wat hij denkt dat de beste aanpak is en hem steunen in zijn keuzes"
        },
        {
          style: "S4 - Delegerend (Delegating)", 
          behavior: "Laag Sturend, Laag Ondersteunend",
          when: "Voor D4 - Zelfstandige Uitvoerders",
          description: "Geef autonomie en vertrouwen, laat hen hun eigen weg vinden.",
          approach: [
            "Doelen stellen en vrijheid geven in uitvoering",
            "Beschikbaar zijn wanneer nodig",
            "Regelmatige check-ins plannen",
            "Erkenning geven voor prestaties"
          ],
          sportExample: "Een teamcaptain de verantwoordelijkheid geven voor teambuilding activiteiten"
        }
      ],
      keyPrinciples: [
        "Er is geen beste leiderschapsstijl - alleen de juiste stijl voor de situatie",
        "Ontwikkelingsniveau kan per taak verschillen - iemand kan D4 zijn in voetbal maar D1 in media-training",
        "Mensen ontwikkelen zich niet altijd lineair - ze kunnen tijdelijk terugvallen",
        "Effectieve leiders kunnen alle vier stijlen gebruiken",
        "Het gaat om het ontwikkelingsniveau van het teamlid, niet hun persoonlijkheid"
      ],
      commonMistakes: [
        "Altijd dezelfde stijl gebruiken ongeacht de situatie",
        "Aannemen dat ervaren mensen in alles D4 zijn",
        "Te snel overgaan naar delegeren zonder voldoende ondersteuning",
        "Persoonlijke voorkeur laten prevaleren boven wat het teamlid nodig heeft"
      ],
      sportApplication: "In de sport is SLII bijzonder waardevol omdat spelers constant nieuwe vaardigheden leren. Een ervaren voetballer (D4 in zijn positie) kan een D1 zijn wanneer hij een nieuwe tactiek leert. Coaches die SLII toepassen passen hun benadering aan per speler en per vaardigheid, wat leidt tot snellere ontwikkeling en betere prestaties."
    }
  },
  {
    id: 'french-raven',
    title: "French & Raven's Machtsbronnen",
    description: "John French en Bertram Raven identificeerden zes bronnen van macht die leiders kunnen gebruiken om invloed uit te oefenen op anderen.",
    content: {
      introduction: {
        title: "De Zes Machtsbronnen van French & Raven",
        description: "In 1959 identificeerden French en Raven vijf machtsbronnen, later uitgebreid naar zes. Deze bronnen bepalen hoe leiders invloed kunnen uitoefenen.",
        keyInsight: "Effectieve leiders begrijpen welke machtsbronnen ze hebben en gebruiken de juiste bron voor elke situatie."
      },
      powerSources: [
        {
          name: "🏛️ Positiemacht (Legitimate Power)",
          description: "Macht die voortkomt uit je formele positie of titel in de organisatie",
          characteristics: [
            "Gebaseerd op hiërarchie en organisatiestructuur",
            "Komt met de functie, niet met de persoon",
            "Verdwijnt wanneer je de positie verlaat",
            "Wordt algemeen geaccepteerd als 'recht om te leiden'"
          ],
          advantages: [
            "Duidelijk en officieel erkend",
            "Geeft recht om beslissingen te nemen",
            "Wordt meestal gerespecteerd"
          ],
          disadvantages: [
            "Kan leiden tot blinde gehoorzaamheid",
            "Werkt niet bij gelijken of externen",
            "Kan weerstand oproepen als overmatig gebruikt"
          ],
          sportExample: "Een hoofdcoach die spelers kan opstellen of wisselen omdat dat bij zijn functie hoort",
          whenToUse: "Bij duidelijke hiërarchische beslissingen, noodsituaties, of wanneer andere machtsbronnen niet werken"
        },
        {
          name: "💰 Beloningmacht (Reward Power)",
          description: "Macht gebaseerd op het kunnen geven van beloningen die anderen waarderen",
          characteristics: [
            "Controle over gewenste middelen of uitkomsten",
            "Kan materieel of immaterieel zijn",
            "Effectiviteit hangt af van waarde van beloning voor ontvanger",
            "Vereist middelen om beloningen te kunnen geven"
          ],
          advantages: [
            "Motiveert positief gedrag",
            "Creëert positieve relaties",
            "Kan prestaties verhogen"
          ],
          disadvantages: [
            "Kan duur zijn om vol te houden",
            "Risico op afhankelijkheid van beloningen",
            "Werkt niet als beloningen niet gewaardeerd worden"
          ],
          sportExample: "Een coach die speeltijd, captainband, of bonussen kan toekennen aan goed presterende spelers",
          whenToUse: "Om gewenst gedrag te stimuleren, prestaties te belonen, of motivatie te verhogen"
        },
        {
          name: "⚡ Dwangmacht (Coercive Power)",
          description: "Macht gebaseerd op het kunnen geven van straffen of het wegnemen van beloningen",
          characteristics: [
            "Controle over ongewenste consequenties",
            "Kan fysiek, psychologisch of materieel zijn",
            "Werkt door angst voor negatieve gevolgen",
            "Meest controversiële vorm van macht"
          ],
          advantages: [
            "Kan snel gedragsverandering bewerkstelligen",
            "Effectief bij ernstige overtredingen",
            "Duidelijk in communicatie"
          ],
          disadvantages: [
            "Creëert negatieve sfeer en weerstand",
            "Kan relaties beschadigen",
            "Werkt alleen zolang toezicht mogelijk is",
            "Kan leiden tot wraakgevoelens"
          ],
          sportExample: "Een coach die spelers kan schorsen, uit het team zetten, of extra trainingen kan opleggen",
          whenToUse: "Als laatste redmiddel, bij ernstige overtredingen, of wanneer veiligheid in het geding is"
        },
        {
          name: "🎓 Expertmacht (Expert Power)",
          description: "Macht gebaseerd op kennis, vaardigheden en expertise die anderen nodig hebben",
          characteristics: [
            "Gebaseerd op competentie en kennis",
            "Moet erkend worden door anderen",
            "Kan domein-specifiek zijn",
            "Groeit met ervaring en leren"
          ],
          advantages: [
            "Wordt gerespecteerd en gewaardeerd",
            "Creëert vertrouwen en geloofwaardigheid",
            "Moeilijk weg te nemen",
            "Motiveert anderen om te leren"
          ],
          disadvantages: [
            "Kan verouderen als kennis achterhaald raakt",
            "Werkt alleen binnen expertisegebied",
            "Kan leiden tot arrogantie"
          ],
          sportExample: "Een voormalig topspeler die nu coach is en gerespecteerd wordt om zijn spelervaring en tactische kennis",
          whenToUse: "Bij technische beslissingen, training en ontwikkeling, of complexe problemoplossing"
        },
        {
          name: "❤️ Referentiemacht (Referent Power)",
          description: "Macht gebaseerd op persoonlijke aantrekkingskracht, charisma en de wens van anderen om je te behagen",
          characteristics: [
            "Gebaseerd op persoonlijke eigenschappen",
            "Mensen willen graag geassocieerd worden met de leider",
            "Ontstaat door bewondering en respect",
            "Moeilijk te ontwikkelen maar zeer krachtig"
          ],
          advantages: [
            "Creëert sterke loyaliteit",
            "Motiveert intrinsiek",
            "Werkt ook zonder formele autoriteit",
            "Bouwt sterke teams"
          ],
          disadvantages: [
            "Moeilijk te ontwikkelen",
            "Kan persoonlijk worden opgevat",
            "Risico op favorietisme",
            "Kan verdwijnen bij persoonlijke problemen"
          ],
          sportExample: "Een teamcaptain die geliefd en gerespecteerd is, waardoor teamgenoten hem willen volgen en indruk op hem willen maken",
          whenToUse: "Voor teambuilding, motivatie, en het creëren van een positieve cultuur"
        },
        {
          name: "📚 Informatiemacht (Information Power)",
          description: "Macht gebaseerd op toegang tot belangrijke informatie die anderen nodig hebben",
          characteristics: [
            "Controle over waardevolle informatie",
            "Kan tijdelijk of permanent zijn",
            "Waarde hangt af van relevantie van informatie",
            "Kan snel veranderen in informatietijdperk"
          ],
          advantages: [
            "Maakt je onmisbaar",
            "Geeft invloed op besluitvorming",
            "Kan snel opgebouwd worden"
          ],
          disadvantages: [
            "Kan snel verouderen",
            "Risico op informatie-hoarding",
            "Afhankelijk van toegang tot bronnen"
          ],
          sportExample: "Een analist die exclusieve informatie heeft over tegenstanders, blessures, of transfergeruchten",
          whenToUse: "Bij strategische planning, besluitvorming, of wanneer specifieke kennis vereist is"
        }
      ],
      powerCombinations: {
        title: "Effectieve Machtscombinaties",
        description: "De meest effectieve leiders combineren verschillende machtsbronnen strategisch:",
        combinations: [
          {
            name: "Expert + Referent",
            description: "Zeer krachtige combinatie - mensen volgen je omdat je weet wat je doet én omdat ze je respecteren",
            example: "Een ervaren coach die zowel tactisch sterk is als geliefd bij spelers"
          },
          {
            name: "Positie + Expert",
            description: "Formele autoriteit ondersteund door competentie - klassieke leiderschapscombinatie",
            example: "Een hoofdcoach die zowel de formele bevoegdheid heeft als de tactische kennis"
          },
          {
            name: "Beloning + Referent",
            description: "Positieve motivatie gecombineerd met persoonlijke aantrekkingskracht",
            example: "Een teamcaptain die zowel invloed heeft op speeltijd als geliefd is bij teamgenoten"
          }
        ]
      },
      culturalConsiderations: {
        title: "Culturele Verschillen in Machtsbronnen",
        description: "De effectiviteit van machtsbronnen varieert per cultuur:",
        considerations: [
          "In hiërarchische culturen wordt positiemacht meer gerespecteerd",
          "In individualistische culturen is expertmacht belangrijker",
          "In collectivistische culturen heeft referentiemacht meer invloed",
          "Nederlandse cultuur waardeert expertmacht en is kritisch op positiemacht"
        ]
      },
      practicalApplication: {
        title: "Praktische Toepassing in Sport",
        analysis: "In de sport zijn alle zes machtsbronnen zichtbaar en belangrijk:",
        steps: [
          "Analyseer welke machtsbronnen je hebt in verschillende situaties",
          "Ontwikkel bewust je zwakkere machtsbronnen",
          "Gebruik de juiste machtsbron voor elke situatie",
          "Combineer machtsbronnen voor maximale effectiviteit",
          "Evalueer regelmatig of je machtsbronnen nog effectief zijn"
        ]
      },
      keyInsights: [
        "Macht is niet inherent slecht - het gaat om hoe je het gebruikt",
        "Verschillende situaties vereisen verschillende machtsbronnen",
        "De meest effectieve leiders hebben toegang tot meerdere machtsbronnen",
        "Machtsbronnen kunnen ontwikkeld en verloren worden",
        "Ethisch gebruik van macht bouwt vertrouwen en respect op"
      ],
      sportApplication: "In de sport zien we alle machtsbronnen terug: coaches hebben positiemacht (kunnen opstellen), beloningmacht (speeltijd), dwangmacht (schorsen), expertmacht (tactische kennis), en soms referentiemacht (charisma). De beste sportleiders combineren deze bronnen effectief en ethisch."
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
              {userProgress.readTheories.length}/{theories.length} theorieën gelezen
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
                    <h3 className="font-semibold text-blue-800 mb-2 text-lg">📚 {theories.length} Theorieën</h3>
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
                      <span className="font-medium">{userProgress.readTheories.length}/{theories.length}</span>
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
                    {userProgress.readTheories.length < theories.length && (
                      <p className="text-gray-600">• Lees meer leiderschapstheorieën</p>
                    )}
                    {userProgress.readTheories.length >= 3 && !userProgress.quizCompleted && (
                      <p className="text-gray-600">• Maak de kennisquiz</p>
                    )}
                    {userProgress.readTheories.length === theories.length && userProgress.quizCompleted && (
                      <p className="text-green-600">🎉 Gefeliciteerd! Je hebt alles voltooid!</p>
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
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Kennisquiz</h2>
                <p className="text-gray-600 mb-6">
                  Quiz wordt binnenkort toegevoegd...
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-500">
                    Lees eerst enkele theorieën voordat je de quiz kunt maken.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Aanbevolen: minimaal 3 theorieën gelezen
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