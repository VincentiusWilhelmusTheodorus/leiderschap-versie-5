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
      introduction: {
        title: "De Zes Machtsbronnen",
        description: "French en Raven identificeerden zes verschillende bronnen waaruit leiders hun invloed kunnen putten. Elke bron heeft eigen karakteristieken en toepassingen.",
        keyInsight: "Effectieve leiders combineren meerdere machtsbronnen en weten wanneer welke bron het meest geschikt is."
      },
      powerSources: [
        {
          name: "1. Positiemacht (Legitimate Power)",
          description: "Macht die voortkomt uit je formele functie of rol binnen de organisatie",
          characteristics: [
            "Gebaseerd op hiërarchie en organisatiestructuur",
            "Verdwijnt wanneer je je positie verlaat",
            "Kan dwang en autoriteit inhouden",
            "Wordt geaccepteerd door organisatiecultuur"
          ],
          advantages: [
            "Duidelijke beslissingsbevoegdheid",
            "Snelle implementatie van besluiten",
            "Respect voor hiërarchie"
          ],
          disadvantages: [
            "Kan weerstand oproepen",
            "Beperkt tot formele situaties",
            "Verdwijnt bij functiewisseling"
          ],
          sportExample: "Een hoofdcoach die spelers kan opstellen, naar de bank verwijzen, of uit het team zetten op basis van zijn formele autoriteit.",
          practicalTips: [
            "Gebruik positiemacht spaarzaam en rechtvaardig",
            "Combineer met andere machtsbronnen",
            "Leg beslissingen uit om acceptatie te vergroten"
          ]
        },
        {
          name: "2. Beloningmacht (Reward Power)",
          description: "Macht door het kunnen geven van beloningen en voordelen",
          characteristics: [
            "Controle over gewenste middelen en voordelen",
            "Motiverend voor prestaties en gedrag",
            "Kan materieel of immaterieel zijn",
            "Effectief voor korte termijn motivatie"
          ],
          advantages: [
            "Sterke motivator voor prestaties",
            "Positieve werkomgeving",
            "Duidelijke prestatie-beloning koppeling"
          ],
          disadvantages: [
            "Kan afhankelijkheid creëren",
            "Duur en niet altijd beschikbaar",
            "Effect kan afnemen over tijd"
          ],
          sportExample: "Een coach die speeltijd, bonussen, erkenning, of kansen voor internationale wedstrijden kan toekennen aan goed presterende spelers.",
          practicalTips: [
            "Maak beloningen betekenisvol en persoonlijk",
            "Koppel beloningen aan specifieke prestaties",
            "Varieer tussen materiële en immateriële beloningen"
          ]
        },
        {
          name: "3. Dwangmacht (Coercive Power)",
          description: "Macht door het kunnen opleggen van straffen en sancties",
          characteristics: [
            "Gebaseerd op angst voor negatieve gevolgen",
            "Kan weerstand en vijandigheid oproepen",
            "Korte termijn effectief, lange termijn problematisch",
            "Vereist constant toezicht"
          ],
          advantages: [
            "Snelle gedragsverandering mogelijk",
            "Duidelijke grenzen stellen",
            "Effectief in crisissituaties"
          ],
          disadvantages: [
            "Beschadigt relaties en vertrouwen",
            "Kan angst en stress veroorzaken",
            "Onderdrukt creativiteit en initiatief"
          ],
          sportExample: "Een coach die spelers kan schorsen, uit het team zetten, extra trainingen kan opleggen, of privileges kan afnemen.",
          practicalTips: [
            "Gebruik alleen als laatste redmiddel",
            "Leg straffen duidelijk uit",
            "Focus op gedrag, niet op persoon"
          ]
        },
        {
          name: "4. Expertmacht (Expert Power)",
          description: "Macht door kennis, vaardigheden en bewezen expertise",
          characteristics: [
            "Gebaseerd op competentie en vakkennis",
            "Duurzaam en overdraagbaar tussen functies",
            "Creëert respect en geloofwaardigheid",
            "Groeit door ervaring en leren"
          ],
          advantages: [
            "Hoge geloofwaardigheid en respect",
            "Duurzame invloed",
            "Stimuleert leren en ontwikkeling"
          ],
          disadvantages: [
            "Vereist continue ontwikkeling",
            "Kan verouderd raken",
            "Beperkt tot expertisegebied"
          ],
          sportExample: "Een coach met bewezen tactische kennis, ervaring met topsport, of specialistische kennis van trainingsmethoden die spelers respecteren.",
          practicalTips: [
            "Blijf jezelf ontwikkelen en leren",
            "Deel je kennis met anderen",
            "Toon nederigheid en openheid voor nieuwe inzichten"
          ]
        },
        {
          name: "5. Referentiemacht (Referent Power)",
          description: "Macht door persoonlijke aantrekkingskracht, charisma en bewondering",
          characteristics: [
            "Gebaseerd op persoonlijke eigenschappen",
            "Inspireert loyaliteit en toewijding",
            "Moeilijk na te bootsen of te leren",
            "Sterk verbonden met persoonlijkheid"
          ],
          advantages: [
            "Sterke emotionele binding",
            "Hoge motivatie van volgers",
            "Natuurlijke invloed en inspiratie"
          ],
          disadvantages: [
            "Moeilijk te ontwikkelen",
            "Kan persoonlijkheidsafhankelijk zijn",
            "Risico van persoonsverheerlijking"
          ],
          sportExample: "Een charismatische coach zoals Pep Guardiola of Jürgen Klopp die spelers inspireert door hun persoonlijkheid, visie en passie.",
          practicalTips: [
            "Wees authentiek en integer",
            "Toon oprechte interesse in anderen",
            "Ontwikkel je communicatieve vaardigheden"
          ]
        },
        {
          name: "6. Informatiemacht (Information Power)",
          description: "Macht door toegang tot belangrijke en exclusieve informatie",
          characteristics: [
            "Controle over informatiestromen",
            "Kan strategisch voordeel geven",
            "Tijdelijk van aard",
            "Afhankelijk van informatiebronnen"
          ],
          advantages: [
            "Strategisch voordeel",
            "Kan besluitvorming beïnvloeden",
            "Verhoogt eigen waarde"
          ],
          disadvantages: [
            "Tijdelijk en vergankelijk",
            "Kan misbruikt worden",
            "Afhankelijk van externe bronnen"
          ],
          sportExample: "Een coach die exclusieve informatie heeft over tegenstanders, transfermogelijkheden, of blessures van spelers.",
          practicalTips: [
            "Deel informatie strategisch en ethisch",
            "Bouw netwerk van informatiebronnnen op",
            "Gebruik informatie om team te helpen"
          ]
        }
      ],
      powerCombinations: {
        title: "Effectieve Combinaties van Machtsbronnen",
        description: "De meest effectieve leiders combineren verschillende machtsbronnen afhankelijk van de situatie:",
        combinations: [
          {
            situation: "Nieuwe speler begeleiden",
            powers: ["Expertmacht (kennis)", "Referentiemacht (inspiratie)", "Beloningmacht (erkenning)"],
            explanation: "Combineer je expertise met persoonlijke aantrekkingskracht en positieve bekrachtiging"
          },
          {
            situation: "Disciplinaire problemen",
            powers: ["Positiemacht (autoriteit)", "Dwangmacht (consequenties)", "Expertmacht (geloofwaardigheid)"],
            explanation: "Gebruik formele autoriteit ondersteund door expertise en duidelijke consequenties"
          },
          {
            situation: "Teambuilding",
            powers: ["Referentiemacht (charisma)", "Informatiemacht (visie)", "Beloningmacht (erkenning)"],
            explanation: "Inspireer met persoonlijkheid, deel visie en erken bijdragen van teamleden"
          }
        ]
      },
      keyInsights: [
        "Geen enkele machtsbron is altijd effectief - situatie bepaalt de keuze",
        "Expert- en referentiemacht zijn het meest duurzaam en respectvol",
        "Dwangmacht moet spaarzaam gebruikt worden om relaties te behouden",
        "Combinaties van machtsbronnen zijn effectiever dan één bron alleen",
        "Macht moet ethisch en ten dienste van het team gebruikt worden"
      ],
      sportApplication: "In sport zijn expertmacht (tactische kennis) en referentiemacht (inspiratie) vaak het meest effectief, aangevuld met beloningmacht (speeltijd, erkenning) en soms positiemacht (teamregels). Dwangmacht moet zeer beperkt gebruikt worden om teamcohesie te behouden."
    }
  },
  {
    id: 'keltner-power',
    title: "Keltner's Macht Paradox",
    description: "Hoe macht je brein kan beschadigen en empathie onderdrukt",
    content: {
      introduction: {
        title: "De Macht Paradox",
        description: "Dacher Keltner's onderzoek toont aan dat macht een paradoxaal effect heeft: de eigenschappen die ons macht geven (empathie, samenwerking, luisteren) worden onderdrukt zodra we macht krijgen.",
        keyInsight: "Macht corrumpeert niet alleen, het beschadigt letterlijk je brein en vermindert je vermogen tot empathie."
      },
      neuroscienceFindings: {
        title: "Neurowetenschappelijke Bevindingen",
        description: "Onderzoek met fMRI-scans toont aan dat macht fysieke veranderingen in de hersenen veroorzaakt:",
        findings: [
          {
            area: "Prefrontale Cortex",
            effect: "Verminderde activiteit",
            consequence: "Minder zelfcontrole en impulsregulatie",
            sportExample: "Een coach die impulsief uitvalt tegen spelers zonder na te denken over gevolgen"
          },
          {
            area: "Spiegelneuronen",
            effect: "Onderdrukte werking",
            consequence: "Verminderd vermogen tot empathie en perspectief nemen",
            sportExample: "Een teammanager die niet meer begrijpt waarom spelers gestrest zijn door druk"
          },
          {
            area: "Temporale Kwab",
            effect: "Veranderde activiteit",
            consequence: "Minder aandacht voor sociale signalen",
            sportExample: "Een coach die lichaamstaal en emoties van spelers niet meer opmerkt"
          }
        ]
      },
      powerEffects: {
        title: "Effecten van Macht op Gedrag",
        description: "Macht veroorzaakt voorspelbare gedragsveranderingen:",
        effects: [
          {
            category: "Sociale Perceptie",
            changes: [
              "Minder aandacht voor emoties van anderen",
              "Stereotypering en vooroordelen nemen toe",
              "Minder accurate inschatting van anderen",
              "Verminderd luisteren naar feedback"
            ],
            sportExample: "Een succesvolle coach die spelers gaat zien als 'types' in plaats van individuen"
          },
          {
            category: "Emotionele Intelligentie",
            changes: [
              "Verminderde empathie",
              "Minder emotionele zelfregulatie",
              "Verhoogde impulsiviteit",
              "Minder gevoeligheid voor sociale normen"
            ],
            sportExample: "Een teamleider die niet meer merkt wanneer teamgenoten zich ongemakkelijk voelen"
          },
          {
            category: "Gedrag en Besluitvorming",
            changes: [
              "Meer risico's nemen",
              "Minder rekening houden met anderen",
              "Verhoogd gevoel van eigenwaarde",
              "Minder ethisch gedrag"
            ],
            sportExample: "Een coach die riskante tactieken gebruikt zonder input van assistenten"
          }
        ]
      },
      paradoxCycle: {
        title: "De Paradox Cyclus",
        description: "Macht creëert een zelfversterkende negatieve cyclus:",
        stages: [
          {
            stage: "1. Macht Verkrijgen",
            description: "Door empathie, samenwerking en sociale vaardigheden",
            example: "Een assistent-coach wordt hoofdcoach door goede relaties met spelers"
          },
          {
            stage: "2. Macht Uitoefenen",
            description: "Hersenen passen zich aan, empathie neemt af",
            example: "De nieuwe hoofdcoach wordt minder gevoelig voor spelersconcerns"
          },
          {
            stage: "3. Macht Misbruiken",
            description: "Impulsief gedrag, minder rekening houden met anderen",
            example: "Coach maakt beslissingen zonder overleg en negeert feedback"
          },
          {
            stage: "4. Macht Verliezen",
            description: "Team verliest vertrouwen, prestaties dalen",
            example: "Spelers raken gedemotiveerd, resultaten verslechteren"
          }
        ]
      },
      preventionStrategies: {
        title: "Preventiestrategieën",
        description: "Hoe kun je de negatieve effecten van macht voorkomen:",
        strategies: [
          {
            strategy: "Regelmatige Zelfreflectie",
            description: "Bewust nadenken over je gedrag en impact",
            techniques: [
              "Dagelijkse reflectie op interacties",
              "Vragen stellen: 'Hoe kwam ik over?'",
              "Journaling over leiderschapsmomenten"
            ],
            sportExample: "Een coach die elke dag noteert hoe hij met spelers omging"
          },
          {
            strategy: "Actief Feedback Zoeken",
            description: "Bewust vragen om eerlijke feedback van anderen",
            techniques: [
              "360-graden feedback sessies",
              "Anonieme feedback systemen",
              "Regelmatige één-op-één gesprekken"
            ],
            sportExample: "Een teamcaptain die maandelijks vraagt hoe teamgenoten zijn leiderschap ervaren"
          },
          {
            strategy: "Empathie Oefeningen",
            description: "Bewust werken aan perspectief nemen",
            techniques: [
              "Actief luisteren oefenen",
              "Perspectief-wissel oefeningen",
              "Mindfulness en meditatie"
            ],
            sportExample: "Een coach die voor belangrijke gesprekken eerst nadenkt over het perspectief van de speler"
          },
          {
            strategy: "Macht Delen",
            description: "Bewust macht en verantwoordelijkheden delegeren",
            techniques: [
              "Democratische besluitvorming",
              "Roterende leiderschapsrollen",
              "Empowerment van teamleden"
            ],
            sportExample: "Een coach die spelers laat meebeslissen over trainingsschema's en tactiek"
          }
        ]
      },
      warningSignals: {
        title: "Waarschuwingssignalen",
        description: "Herken deze signalen dat macht je beïnvloedt:",
        signals: [
          "Je luistert minder naar anderen",
          "Je onderbreekt mensen vaker",
          "Je neemt meer risico's zonder overleg",
          "Je voelt je minder verbonden met je team",
          "Je krijgt minder feedback van anderen",
          "Je maakt snellere oordelen over mensen",
          "Je voelt je minder verantwoordelijk voor fouten"
        ]
      },
      keyInsights: [
        "Macht verandert letterlijk je brein en gedrag",
        "De eigenschappen die macht geven, worden door macht onderdrukt",
        "Bewustzijn van de paradox is de eerste stap naar preventie",
        "Regelmatige zelfreflectie en feedback zijn essentieel",
        "Macht delen voorkomt machtsmisbruik",
        "Empathie moet bewust geoefend worden in machtposities"
      ],
      sportApplication: "In sport is de macht paradox bijzonder relevant omdat coaches en teamleiders vaak snel veel invloed krijgen. Succesvolle coaches zoals Pep Guardiola en Jürgen Klopp blijven bewust werken aan empathie en feedback, ondanks hun machtspositie."
    }
  },
  {
    id: 'kets-de-vries',
    title: "Kets de Vries: Disfunctioneel Leiderschap",
    description: "Herken en vermijd de 7 meest voorkomende disfunctionele leiderschapspatronen",
    content: {
      introduction: {
        title: "Disfunctionele Leiderschapspatronen",
        description: "Manfred Kets de Vries identificeerde zeven veelvoorkomende disfunctionele patronen die leiders kunnen ontwikkelen. Deze patronen ontstaan vaak uit onbewuste angsten en onzekerheden.",
        keyInsight: "Disfunctioneel leiderschap ontstaat meestal uit onverwerkte persoonlijke issues en kan teams en organisaties ernstig beschadigen."
      },
      dysfunctionalPatterns: [
        {
          pattern: "1. Conflictvermijding",
          description: "Systematisch vermijden van confrontaties en moeilijke gesprekken",
          characteristics: [
            "Uitstel van moeilijke beslissingen",
            "Vermijden van directe feedback",
            "Hoop dat problemen vanzelf oplossen",
            "Angst voor negatieve reacties"
          ],
          causes: [
            "Angst voor afwijzing",
            "Behoefte om aardig gevonden te worden",
            "Gebrek aan zelfvertrouwen",
            "Traumatische ervaringen met conflict"
          ],
          consequences: [
            "Problemen escaleren",
            "Team verliest respect",
            "Prestaties dalen",
            "Frustratie bij teamleden"
          ],
          sportExample: "Een coach die een underperformende speler niet aanspreekt omdat hij bang is voor een emotionele reactie, waardoor het hele team lijdt onder de slechte prestaties.",
          solutions: [
            "Oefen moeilijke gesprekken",
            "Focus op gedrag, niet persoon",
            "Zoek ondersteuning van mentor",
            "Werk aan zelfvertrouwen"
          ]
        },
        {
          pattern: "2. Micromanagement",
          description: "Obsessieve controle over alle details en beslissingen",
          characteristics: [
            "Constant toezicht op teamleden",
            "Onvermogen om te delegeren",
            "Bemoeienis met kleinste details",
            "Wantrouwen in anderen"
          ],
          causes: [
            "Angst voor verlies van controle",
            "Perfectionisme",
            "Gebrek aan vertrouwen in anderen",
            "Onzekerheid over eigen competentie"
          ],
          consequences: [
            "Teamleden voelen zich niet vertrouwd",
            "Creativiteit wordt onderdrukt",
            "Burnout bij leider",
            "Hoge verloop van personeel"
          ],
          sportExample: "Een coach die elke pass, elke beweging en elke beslissing van spelers wil controleren, waardoor spelers angstig worden en hun natuurlijke spel verliezen.",
          solutions: [
            "Leer delegeren in kleine stapjes",
            "Focus op resultaten, niet proces",
            "Bouw vertrouwen in teamleden op",
            "Werk aan eigen onzekerheden"
          ]
        },
        {
          pattern: "3. Tiranniseren",
          description: "Gebruik van intimidatie, agressie en angst als leiderschapsstijl",
          characteristics: [
            "Schreeuwen en intimidatie",
            "Publieke vernedering",
            "Onredelijke eisen",
            "Gebrek aan empathie"
          ],
          causes: [
            "Eigen onzekerheid maskeren",
            "Geloof dat angst motiveert",
            "Gebrek aan andere leiderschapsvaardigheden",
            "Persoonlijke trauma's"
          ],
          consequences: [
            "Angstcultuur in team",
            "Verminderde creativiteit",
            "Hoge stress en burnout",
            "Verlies van talent"
          ],
          sportExample: "Een coach die spelers publiekelijk vernedert, schreeuwt tijdens trainingen en dreigt met uitsluiting, waardoor spelers angstig en defensief worden.",
          solutions: [
            "Leer emotieregulatie technieken",
            "Zoek professionele hulp",
            "Ontwikkel empathie",
            "Oefen positieve communicatie"
          ]
        },
        {
          pattern: "4. Manisch Gedrag",
          description: "Hyperactiviteit en onsamenhangende besluitvorming - 'heel hard rennen maar de verkeerde kant op'",
          characteristics: [
            "Constant nieuwe initiatieven",
            "Onrealistische deadlines",
            "Springen tussen projecten",
            "Gebrek aan focus"
          ],
          causes: [
            "Angst voor stilstand",
            "Behoefte om indruk te maken",
            "Onvermogen om prioriteiten te stellen",
            "Onderliggende angststoornis"
          ],
          consequences: [
            "Team raakt uitgeput",
            "Geen projecten worden afgemaakt",
            "Verwarring over doelen",
            "Burnout bij iedereen"
          ],
          sportExample: "Een coach die elke week nieuwe trainingsmethoden introduceert, constant tactieken wijzigt en spelers overbelast met verschillende focuspunten.",
          solutions: [
            "Leer prioriteiten stellen",
            "Maak realistische plannen",
            "Zoek feedback van team",
            "Oefen mindfulness"
          ]
        },
        {
          pattern: "5. Passief-Agressief Gedrag",
          description: "Indirecte uiting van negatieve gevoelens door sabotage en weerstand",
          characteristics: [
            "Verborgen sabotage",
            "Sarcasme en cynisme",
            "Uitstel van belangrijke taken",
            "Ondermijnen van anderen"
          ],
          causes: [
            "Onvermogen om direct te confronteren",
            "Gevoel van machteloosheid",
            "Angst voor open conflict",
            "Onverwerkte frustraties"
          ],
          consequences: [
            "Giftige teamsfeer",
            "Vertrouwen wordt ondermijnd",
            "Verborgen conflicten",
            "Prestaties lijden"
          ],
          sportExample: "Een assistent-coach die het oneens is met de hoofdcoach maar dit niet direct bespreekt, en in plaats daarvan subtiel de instructies ondermijnt.",
          solutions: [
            "Leer directe communicatie",
            "Werk aan assertiviteit",
            "Bespreek frustraties open",
            "Zoek professionele begeleiding"
          ]
        },
        {
          pattern: "6. Compulsief Gedrag",
          description: "Obsessie met regels, procedures en perfectie ten koste van flexibiliteit",
          characteristics: [
            "Rigide vasthouden aan procedures",
            "Onvermogen om te improviseren",
            "Perfectionalisme",
            "Angst voor fouten"
          ],
          causes: [
            "Behoefte aan controle",
            "Angst voor chaos",
            "Perfectionistische persoonlijkheid",
            "Traumatische ervaringen met onzekerheid"
          ],
          consequences: [
            "Gebrek aan innovatie",
            "Team wordt gefrustreerd",
            "Gemiste kansen",
            "Rigide organisatiecultuur"
          ],
          sportExample: "Een coach die zo gefixeerd is op het perfect uitvoeren van trainingsschema's dat hij niet kan aanpassen aan de behoeften van individuele spelers.",
          solutions: [
            "Oefen flexibiliteit",
            "Accepteer dat fouten normaal zijn",
            "Experimenteer met nieuwe benaderingen",
            "Werk aan angst voor onzekerheid"
          ]
        },
        {
          pattern: "7. Depressief Leiderschap",
          description: "Pessimisme, gebrek aan energie en negatieve kijk op mogelijkheden",
          characteristics: [
            "Chronisch pessimisme",
            "Gebrek aan enthousiasme",
            "Focus op problemen",
            "Lage energie"
          ],
          causes: [
            "Persoonlijke depressie",
            "Burnout",
            "Teleurstellingen uit verleden",
            "Gebrek aan zingeving"
          ],
          consequences: [
            "Team verliest motivatie",
            "Negatieve sfeer",
            "Verminderde prestaties",
            "Hoge verloop"
          ],
          sportExample: "Een coach die na een reeks nederlagen zo negatief wordt dat hij alleen nog maar focust op wat er mis gaat, waardoor het team alle zelfvertrouwen verliest.",
          solutions: [
            "Zoek professionele hulp",
            "Focus op positieve aspecten",
            "Zorg voor work-life balance",
            "Ontwikkel nieuwe doelen"
          ]
        }
      ],
      recognitionSigns: {
        title: "Herkenningssignalen",
        description: "Hoe herken je disfunctioneel leiderschap bij jezelf:",
        selfAssessment: [
          "Krijg je regelmatig negatieve feedback over je leiderschapsstijl?",
          "Verlies je vaak goede teamleden?",
          "Voel je je constant gestrest of overweldigd?",
          "Heb je moeite met het maken van beslissingen?",
          "Vermijd je moeilijke gesprekken?",
          "Voel je je geïsoleerd van je team?",
          "Heb je het gevoel dat niemand je begrijpt?"
        ],
        teamSignals: [
          "Hoge verloop van teamleden",
          "Lage teammoraal",
          "Verminderde prestaties",
          "Gebrek aan innovatie",
          "Veel conflicten",
          "Angstcultuur",
          "Verminderde communicatie"
        ]
      },
      preventionAndRecovery: {
        title: "Preventie en Herstel",
        description: "Strategieën om disfunctioneel leiderschap te voorkomen en te herstellen:",
        strategies: [
          {
            category: "Zelfbewustzijn",
            actions: [
              "Regelmatige zelfreflectie",
              "360-graden feedback",
              "Persoonlijkheidstests",
              "Coaching of therapie"
            ]
          },
          {
            category: "Vaardigheidsontwikkeling",
            actions: [
              "Leiderschapstraining",
              "Communicatievaardigheden",
              "Emotionele intelligentie",
              "Conflicthantering"
            ]
          },
          {
            category: "Ondersteuning",
            actions: [
              "Mentoring",
              "Peer coaching",
              "Professionele begeleiding",
              "Netwerk van collega's"
            ]
          },
          {
            category: "Structurele Maatregelen",
            actions: [
              "Duidelijke feedback systemen",
              "Regelmatige evaluaties",
              "Checks and balances",
              "Cultuur van openheid"
            ]
          }
        ]
      },
      keyInsights: [
        "Disfunctioneel leiderschap ontstaat meestal uit onbewuste angsten",
        "Vroege herkenning voorkomt ernstige schade aan teams",
        "Professionele hulp is vaak nodig voor herstel",
        "Zelfbewustzijn is de eerste stap naar verbetering",
        "Structurele maatregelen kunnen disfunctioneel gedrag voorkomen",
        "Iedereen kan disfunctionele patronen ontwikkelen onder stress"
      ],
      sportApplication: "In sport kunnen disfunctionele leiderschapspatronen bijzonder schadelijk zijn omdat teams afhankelijk zijn van vertrouwen en samenwerking. Coaches en teamleiders moeten bewust zijn van deze patronen en actief werken aan gezond leiderschap."
    }
  },
  {
    id: 'maccoby-narcissism',
    title: "Maccoby's Narcistische Leider",
    description: "Het verschil tussen productief en destructief narcisme in leiderschap",
    content: {
      introduction: {
        title: "Narcisme in Leiderschap",
        description: "Michael Maccoby onderscheidt tussen productief en destructief narcisme. Narcistische leiders kunnen zowel zeer succesvol als zeer schadelijk zijn, afhankelijk van hoe ze hun narcisme kanaliseren.",
        keyInsight: "Narcisme is niet per definitie slecht - het kan productief zijn als het ten goede komt aan het team en de organisatie."
      },
      narcissismTypes: {
        title: "Twee Vormen van Narcisme",
        description: "Maccoby identificeert twee hoofdvormen van narcisme in leiderschap:",
        types: [
          {
            type: "Productief Narcisme",
            description: "Narcisme dat wordt gekanaliseerd naar teamdoelen en organisatiesucces",
            characteristics: [
              "Hoge zelfvertrouwen gecombineerd met empathie",
              "Visionaire denken en inspiratie",
              "Bereidheid om risico's te nemen voor het team",
              "Vermogen om anderen te motiveren en inspireren"
            ],
            benefits: [
              "Sterke visie en richting",
              "Hoge motivatie en energie",
              "Bereidheid om moeilijke beslissingen te nemen",
              "Inspirerend voor teamleden"
            ],
            sportExample: "Een coach zoals Pep Guardiola die zelfverzekerd is over zijn methoden maar dit gebruikt om zijn team naar nieuwe hoogten te brengen, waarbij hij luistert naar spelers en assistenten.",
            keyBehaviors: [
              "Deelt credits met het team",
              "Luistert naar feedback",
              "Focust op teamresultaten",
              "Ontwikkelt anderen"
            ]
          },
          {
            type: "Destructief Narcisme",
            description: "Narcisme dat ten koste gaat van het team en alleen de leider dient",
            characteristics: [
              "Gebrek aan empathie voor anderen",
              "Alles draait om eigen ego en status",
              "Onvermogen om kritiek te accepteren",
              "Exploitatie van teamleden voor eigen doelen"
            ],
            dangers: [
              "Toxische teamcultuur",
              "Hoge verloop van talent",
              "Slechte besluitvorming door gebrek aan input",
              "Ethische problemen"
            ],
            sportExample: "Een coach die alle credits opeist bij overwinningen, spelers de schuld geeft bij nederlagen, en geen kritiek accepteert van assistenten of spelers.",
            keyBehaviors: [
              "Claimt alle successen",
              "Geeft anderen de schuld bij falen",
              "Weigert feedback te accepteren",
              "Gebruikt team voor eigen glorie"
            ]
          }
        ]
      },
      transformationFactors: {
        title: "Factoren die Narcisme Beïnvloeden",
        description: "Wat bepaalt of narcisme productief of destructief wordt:",
        factors: [
          {
            factor: "Zelfbewustzijn",
            description: "Bewustzijn van eigen narcistische tendensen",
            productiveApproach: "Erkent eigen narcisme en gebruikt het bewust voor teamdoelen",
            destructiveApproach: "Ontkent narcistische tendensen en ziet zichzelf als perfect",
            development: [
              "Regelmatige zelfreflectie",
              "360-graden feedback",
              "Coaching en mentoring",
              "Mindfulness praktijk"
            ]
          },
          {
            factor: "Empathie",
            description: "Vermogen om perspectief van anderen te begrijpen",
            productiveApproach: "Combineert zelfvertrouwen met begrip voor anderen",
            destructiveApproach: "Ziet anderen alleen als middel voor eigen doelen",
            development: [
              "Actief luisteren oefenen",
              "Perspectief-wissel oefeningen",
              "Één-op-één gesprekken met teamleden",
              "Emotionele intelligentie training"
            ]
          },
          {
            factor: "Feedback Receptiviteit",
            description: "Bereidheid om kritiek en feedback te accepteren",
            productiveApproach: "Zoekt actief feedback en gebruikt het voor verbetering",
            destructiveApproach: "Weigert kritiek en omringt zich met ja-knikkers",
            development: [
              "Creëer veilige feedback cultuur",
              "Vraag expliciet om kritiek",
              "Beloon eerlijke feedback",
              "Werk met externe coach"
            ]
          },
          {
            factor: "Doeloriëntatie",
            description: "Focus op persoonlijke vs. team/organisatie doelen",
            productiveApproach: "Persoonlijk succes gekoppeld aan teamsucces",
            destructiveApproach: "Persoonlijk succes ten koste van team",
            development: [
              "Stel gezamenlijke doelen",
              "Meet teamprestaties",
              "Deel successen met team",
              "Focus op legacy building"
            ]
          }
        ]
      },
      warningSignals: {
        title: "Waarschuwingssignalen voor Destructief Narcisme",
        description: "Herken deze signalen bij jezelf of anderen:",
        personalSigns: [
          "Je accepteert geen kritiek of feedback",
          "Je claimt alle successen voor jezelf",
          "Je geeft anderen altijd de schuld bij problemen",
          "Je voelt je superieur aan je teamleden",
          "Je luistert niet echt naar anderen",
          "Je gebruikt mensen voor je eigen doelen",
          "Je hebt geen echte vrienden, alleen bewonderaars"
        ],
        teamSigns: [
          "Teamleden zijn bang om eerlijk te zijn",
          "Hoge verloop van goede mensen",
          "Ja-knikkers cultuur",
          "Gebrek aan innovatie en creativiteit",
          "Ethische problemen",
          "Focus op leider in plaats van resultaten",
          "Angst voor fouten maken"
        ]
      },
      developmentStrategies: {
        title: "Ontwikkelingsstrategieën",
        description: "Hoe ontwikkel je productief narcisme en voorkom je destructief narcisme:",
        strategies: [
          {
            strategy: "Bewuste Zelfanalyse",
            description: "Regelmatig onderzoeken van eigen motivaties en gedrag",
            techniques: [
              "Dagelijkse reflectie op interacties",
              "Vragen: 'Waarom deed ik dit?'",
              "Journaling over leiderschapsmomenten",
              "Persoonlijkheidstests en assessments"
            ],
            sportExample: "Een coach die na elke training noteert hoe hij reageerde op spelers en waarom"
          },
          {
            strategy: "Empathie Ontwikkeling",
            description: "Bewust werken aan begrip voor anderen",
            techniques: [
              "Actief luisteren zonder oordelen",
              "Vragen stellen over gevoelens van anderen",
              "Perspectief-wissel oefeningen",
              "Tijd doorbrengen met teamleden"
            ],
            sportExample: "Een teamcaptain die regelmatig vraagt hoe teamgenoten zich voelen en echt luistert naar antwoorden"
          },
          {
            strategy: "Feedback Cultuur Creëren",
            description: "Omgeving maken waar eerlijke feedback mogelijk is",
            techniques: [
              "Anonieme feedback systemen",
              "Regelmatige één-op-één gesprekken",
              "Belonen van eerlijke feedback",
              "Externe coaching en mentoring"
            ],
            sportExample: "Een coach die maandelijks anonieme feedback vraagt van spelers over zijn coaching stijl"
          },
          {
            strategy: "Team-Gerichte Doelen",
            description: "Persoonlijk succes koppelen aan teamsucces",
            techniques: [
              "Gezamenlijke doelstelling",
              "Team KPI's boven persoonlijke",
              "Delen van credits en erkenning",
              "Focus op ontwikkeling van anderen"
            ],
            sportExample: "Een coach die zijn succes meet aan de ontwikkeling van zijn spelers, niet alleen aan gewonnen wedstrijden"
          }
        ]
      },
      successfulNarcissists: {
        title: "Voorbeelden van Productief Narcisme in Sport",
        description: "Succesvolle sportleiders die hun narcisme productief kanaliseren:",
        examples: [
          {
            name: "Pep Guardiola",
            narcissisticTraits: [
              "Extreem zelfvertrouwen in eigen methoden",
              "Perfectionalistische visie",
              "Hoge verwachtingen van zichzelf en anderen"
            ],
            productiveChanneling: [
              "Luistert naar spelers en assistenten",
              "Geeft credits aan team bij successen",
              "Focust op ontwikkeling van spelers",
              "Accepteert kritiek en past zich aan"
            ],
            results: "Consistent succes met verschillende teams door combinatie van visie en empathie"
          },
          {
            name: "Serena Williams",
            narcissisticTraits: [
              "Onwrikbaar geloof in eigen kunnen",
              "Hoge zelfvertrouwen onder druk",
              "Competitieve drive en perfectionalisme"
            ],
            productiveChanneling: [
              "Inspireert andere vrouwelijke atleten",
              "Gebruikt platform voor sociale doelen",
              "Erkent bijdragen van coaches en team",
              "Mentort jonge spelers"
            ],
            results: "Grootste tennisser aller tijden die ook positieve impact heeft op sport en samenleving"
          }
        ]
      },
      keyInsights: [
        "Narcisme kan zowel productief als destructief zijn",
        "Zelfbewustzijn is cruciaal voor productief narcisme",
        "Empathie voorkomt dat narcisme destructief wordt",
        "Feedback accepteren is essentieel voor groei",
        "Team-gerichte doelen kanaliseren narcisme positief",
        "Productieve narcisten inspireren en ontwikkelen anderen",
        "Destructieve narcisten vernietigen teams en culturen"
      ],
      sportApplication: "In sport kan narcisme zeer krachtig zijn voor prestaties, maar het moet bewust gekanaliseerd worden naar teamdoelen. De beste sportleiders combineren zelfvertrouwen met empathie en teamfocus."
    }
  },
  {
    id: 'ferguson-leadership',
    title: "Alex Ferguson's Leiderschapsfilosofie",
    description: "9 principes van de meest succesvolle voetbalcoach aller tijden",
    content: {
      introduction: {
        title: "Sir Alex Ferguson: 26 Jaar Manchester United",
        description: "Sir Alex Ferguson leidde Manchester United 26 jaar lang (1986-2013) en won 38 trofeeën. Zijn leiderschapsfilosofie biedt waardevolle lessen voor elke leider in sport en daarbuiten.",
        keyInsight: "Ferguson's succes kwam niet alleen door tactische kennis, maar door zijn unieke vermogen om mensen te leiden, motiveren en ontwikkelen over lange periodes."
      },
      nineElements: {
        title: "Ferguson's 9 Leiderschapselementen",
        description: "De kernprincipes die Ferguson's succes mogelijk maakten:",
        elements: [
          {
            element: "1. Controle en Autoriteit",
            description: "Absolute duidelijkheid over wie de leider is en finale beslissingen neemt",
            principles: [
              "De leider heeft het laatste woord",
              "Autoriteit moet gerespecteerd worden",
              "Geen twijfel over hiërarchie",
              "Beslissingen worden niet openlijk betwist"
            ],
            implementation: [
              "Duidelijke communicatie over verwachtingen",
              "Consistente toepassing van regels",
              "Geen uitzonderingen voor sterren",
              "Directe confrontatie bij uitdagingen"
            ],
            sportExample: "Ferguson stuurde David Beckham weg toen deze zijn autoriteit uitdaagde, ondanks Beckham's status als superster. Dit toonde aan dat niemand boven het team staat.",
            benefits: [
              "Duidelijkheid voor iedereen",
              "Snelle besluitvorming",
              "Respect voor leiderschap",
              "Geen machtsstrijd"
            ],
            challenges: [
              "Kan autoritair overkomen",
              "Vereist sterke persoonlijkheid",
              "Risico van ja-knikkers cultuur",
              "Moet gebalanceerd worden met empathie"
            ]
          },
          {
            element: "2. Discipline en Standaarden",
            description: "Hoge standaarden stellen en handhaven voor iedereen, zonder uitzonderingen",
            principles: [
              "Regels gelden voor iedereen",
              "Geen uitzonderingen voor sterren",
              "Consistente toepassing van discipline",
              "Hoge verwachtingen van gedrag en prestatie"
            ],
            implementation: [
              "Duidelijke gedragscodes opstellen",
              "Consequent straffen bij overtredingen",
              "Belonen van gewenst gedrag",
              "Voorbeeldgedrag tonen als leider"
            ],
            sportExample: "Ferguson had strikte regels over punctualiteit, kleding en gedrag. Spelers die te laat kwamen werden beboet, ongeacht hun status in het team.",
            benefits: [
              "Professionele cultuur",
              "Gelijkheid binnen team",
              "Duidelijke verwachtingen",
              "Respect voor waarden"
            ],
            challenges: [
              "Kan rigide zijn",
              "Vereist moed om door te zetten",
              "Mogelijk conflict met sterren",
              "Balans tussen streng en rechtvaardig"
            ]
          },
          {
            element: "3. Teamwork boven Individualisme",
            description: "Het team komt altijd op de eerste plaats, individuele ego's zijn ondergeschikt",
            principles: [
              "Teambelang gaat voor persoonlijk belang",
              "Geen ruimte voor ego's die team schaden",
              "Samenwerking wordt beloond",
              "Individualisme wordt ontmoedigd"
            ],
            implementation: [
              "Teamdoelen boven individuele statistieken",
              "Belonen van assists en teamplay",
              "Confronteren van egoïstisch gedrag",
              "Creëren van onderlinge afhankelijkheid"
            ],
            sportExample: "Ferguson verkocht talentvolle spelers die hun eigen belang boven het team stelden, zoals Jaap Stam en David Beckham, om de teamcultuur te beschermen.",
            benefits: [
              "Sterke teamcohesie",
              "Wederzijdse ondersteuning",
              "Gezamenlijke verantwoordelijkheid",
              "Duurzaam succes"
            ],
            challenges: [
              "Verlies van individueel talent",
              "Moeilijke beslissingen",
              "Balans tussen team en individu",
              "Communicatie over teamwaarden"
            ]
          },
          {
            element: "4. Motivatie en Inspiratie",
            description: "Het vermogen om spelers te motiveren en het beste uit hen te halen",
            principles: [
              "Verschillende motivatietechnieken voor verschillende persoonlijkheden",
              "Emotionele verbinding met spelers",
              "Inspireren door visie en passie",
              "Geloof in potentieel van spelers"
            ],
            implementation: [
              "Persoonlijke gesprekken met spelers",
              "Verschillende benaderingen per individu",
              "Gebruik van emotie en passie",
              "Verhalen en voorbeelden delen"
            ],
            sportExample: "Ferguson's beroemde 'hairdryer treatment' voor sommige spelers, terwijl hij anderen juist met een arm om de schouder motiveerde. Hij paste zijn aanpak aan per persoon.",
            benefits: [
              "Maximale prestaties van spelers",
              "Sterke emotionele binding",
              "Hoge motivatie en betrokkenheid",
              "Persoonlijke ontwikkeling"
            ],
            challenges: [
              "Vereist diep begrip van mensen",
              "Tijdrovend en intensief",
              "Emotioneel belastend",
              "Risico van favorietisme"
            ]
          },
          {
            element: "5. Individuele Benadering",
            description: "Elke speler heeft een unieke aanpak nodig gebaseerd op persoonlijkheid en behoeften",
            principles: [
              "Geen one-size-fits-all benadering",
              "Begrip van individuele persoonlijkheden",
              "Aangepaste communicatiestijlen",
              "Respect voor verschillen"
            ],
            implementation: [
              "Tijd investeren in leren kennen van spelers",
              "Verschillende communicatiestijlen gebruiken",
              "Persoonlijke ontwikkelingsplannen",
              "Flexibiliteit in benadering"
            ],
            sportExample: "Ferguson behandelde Roy Keane anders dan Ryan Giggs, omdat hij begreep dat ze verschillende persoonlijkheden hadden en andere motivatie nodig hadden.",
            benefits: [
              "Optimale ontwikkeling per individu",
              "Sterke persoonlijke relaties",
              "Respect en vertrouwen",
              "Maximaal potentieel benutten"
            ],
            challenges: [
              "Zeer tijdrovend",
              "Complexe management",
              "Risico van ongelijkheid",
              "Vereist hoge emotionele intelligentie"
            ]
          },
          {
            element: "6. Lange Termijn Visie",
            description: "Denken en plannen voor de toekomst, niet alleen voor het heden",
            principles: [
              "Investeren in jeugdontwikkeling",
              "Duurzame teambuilding",
              "Anticiperen op veranderingen",
              "Legacy building"
            ],
            implementation: [
              "Jeugdacademie ontwikkelen",
              "Successieplanning voor spelers",
              "Investeren in infrastructuur",
              "Cultuur en waarden overdragen"
            ],
            sportExample: "Ferguson's investering in de jeugdacademie bracht spelers voort zoals Beckham, Scholes, Giggs en de Neville broers - de basis voor jaren van succes.",
            benefits: [
              "Duurzaam succes",
              "Kosteneffectieve ontwikkeling",
              "Sterke organisatiecultuur",
              "Continuïteit"
            ],
            challenges: [
              "Lange termijn investering",
              "Onzekere resultaten",
              "Druk voor korte termijn resultaten",
              "Geduld vereist"
            ]
          },
          {
            element: "7. Aanpassingsvermogen",
            description: "Flexibiliteit om te veranderen met de tijd en omstandigheden",
            principles: [
              "Bereidheid om te leren en aan te passen",
              "Openheid voor nieuwe ideeën",
              "Evolutie van stijl en tactiek",
              "Reageren op veranderende omstandigheden"
            ],
            implementation: [
              "Regelmatige evaluatie van methoden",
              "Leren van anderen",
              "Experimenteren met nieuwe benaderingen",
              "Feedback accepteren en gebruiken"
            ],
            sportExample: "Ferguson paste zijn tactiek aan van aanvallend voetbal in de jaren '90 naar meer gecontroleerd spel in de jaren 2000, afhankelijk van beschikbare spelers en tegenstanders.",
            benefits: [
              "Blijvende relevantie",
              "Competitief voordeel",
              "Continue verbetering",
              "Innovatie"
            ],
            challenges: [
              "Weerstand tegen verandering",
              "Risico van inconsistentie",
              "Leerproces kan tijd kosten",
              "Balans tussen traditie en vernieuwing"
            ]
          },
          {
            element: "8. Mentale Kracht",
            description: "Ontwikkelen van veerkracht, doorzettingsvermogen en mentale sterkte",
            principles: [
              "Nooit opgeven mentaliteit",
              "Leren van nederlagen",
              "Druk omzetten in prestatie",
              "Geloof in comeback mogelijkheden"
            ],
            implementation: [
              "Mentale training en coaching",
              "Positieve mindset cultiveren",
              "Omgaan met tegenslagen",
              "Vertrouwen opbouwen"
            ],
            sportExample: "Ferguson's teams stonden bekend om late goals en comebacks. De 'Fergie Time' mentaliteit dat je nooit opgeeft tot de laatste seconde.",
            benefits: [
              "Veerkracht bij tegenslagen",
              "Sterke prestaties onder druk",
              "Nooit-opgeven mentaliteit",
              "Zelfvertrouwen"
            ],
            challenges: [
              "Moeilijk te meten en ontwikkelen",
              "Individuele verschillen",
              "Kan leiden tot overbelasting",
              "Balans tussen druk en ondersteuning"
            ]
          },
          {
            element: "9. Passie en Toewijding",
            description: "Onvoorwaardelijke liefde voor het spel en totale toewijding aan excellentie",
            principles: [
              "Passie is aanstekelijk",
              "Totale toewijding aan excellentie",
              "Liefde voor het spel overbrengen",
              "Energie en enthousiasme tonen"
            ],
            implementation: [
              "Enthousiasme tonen in alles wat je doet",
              "Passie delen met team",
              "Energie brengen naar trainingen",
              "Liefde voor sport uitstralen"
            ],
            sportExample: "Ferguson's zichtbare passie tijdens wedstrijden, zijn emotionele reacties en zijn onuitputtelijke energie inspireerden spelers om hun uiterste best te doen.",
            benefits: [
              "Inspiratie voor team",
              "Hoge motivatie",
              "Positieve energie",
              "Aanstekelijk enthousiasme"
            ],
            challenges: [
              "Emotioneel uitputtend",
              "Moeilijk vol te houden",
              "Kan overweldigend zijn",
              "Authentiek moeten blijven"
            ]
          }
        ]
      },
      implementationGuide: {
        title: "Implementatie in Moderne Sport",
        description: "Hoe pas je Ferguson's principes toe in hedendaagse sportomgevingen:",
        modernAdaptations: [
          {
            principle: "Autoriteit in Democratische Tijd",
            challenge: "Moderne atleten verwachten meer inspraak",
            solution: "Combineer duidelijk leiderschap met consultatie en uitleg",
            example: "Neem finale beslissingen maar leg uit waarom en luister naar input"
          },
          {
            principle: "Discipline met Empathie",
            challenge: "Generatie Z heeft andere verwachtingen",
            solution: "Hoge standaarden met begrip voor individuele omstandigheden",
            example: "Strikte regels maar flexibiliteit voor persoonlijke situaties"
          },
          {
            principle: "Team vs. Social Media Ego's",
            challenge: "Sociale media versterkt individualisme",
            solution: "Educatie over teamwaarden en sociale media richtlijnen",
            example: "Teamgerichte content belonen, ego-posts ontmoedigen"
          }
        ]
      },
      keyInsights: [
        "Leiderschap vereist zowel autoriteit als empathie",
        "Consistentie in standaarden bouwt respect op",
        "Individuele benadering binnen teamkader is essentieel",
        "Lange termijn visie creëert duurzaam succes",
        "Aanpassingsvermogen is cruciaal voor blijvende relevantie",
        "Mentale kracht kan ontwikkeld worden",
        "Passie en toewijding zijn aanstekelijk",
        "Discipline en standaarden gelden voor iedereen",
        "Teambelang gaat altijd voor individueel belang"
      ],
      sportApplication: "Ferguson's principes zijn toepasbaar in elke sport en op elk niveau. De kernboodschap is dat succesvol leiderschap een combinatie vereist van duidelijke autoriteit, hoge standaarden, individuele aandacht en onwrikbare toewijding aan teamdoelen."
    }
  },
  {
    id: 'van-vugt-wiltschut',
    title: "Van Vugt & Wiltschut: Gezag vs Dominantie",
    description: "Het cruciale verschil tussen respect-gebaseerd leiderschap en macht-gebaseerd leiderschap",
    content: {
      introduction: {
        title: "Gezag versus Dominantie",
        description: "Mark van Vugt en Wendy Wiltschut maken een fundamenteel onderscheid tussen twee vormen van leiderschap: gezag (gebaseerd op respect en competentie) en dominantie (gebaseerd op macht en controle).",
        contextualNote: "Dit onderscheid is cruciaal voor het begrijpen van effectief en ethisch leiderschap in moderne organisaties en sportteams."
      },
      fiveComparisons: [
        {
          dimension: "1. Basis van Invloed",
          authority: "Gebaseerd op respect, vertrouwen en erkende competentie",
          dominance: "Gebaseerd op macht, controle en vaak angst",
          nuance: "Gezag groeit van onderaf (volgers geven het), dominantie wordt van bovenaf opgelegd",
          explanation: "Gezag ontstaat wanneer mensen vrijwillig kiezen om iemand te volgen vanwege hun kwaliteiten. Dominantie wordt afgedwongen door positie of dwang.",
          examples: {
            gezag: "Een ervaren coach die respect verdient door kennis en resultaten",
            dominantie: "Een manager die gehoorzaamheid afdwingt door dreigingen"
          }
        },
        {
          dimension: "2. Duurzaamheid",
          authority: "Duurzaam en stabiel, groeit over tijd",
          dominance: "Fragiel en tijdelijk, vereist constante handhaving",
          nuance: "Gezag wordt sterker door succes, dominantie wordt zwakker door weerstand",
          explanation: "Gezag bouwt zich op door consistente prestaties en integriteit. Dominantie moet constant worden bevestigd en kan snel verdwijnen.",
          examples: {
            gezag: "Sir Alex Ferguson's groeiende invloed over 26 jaar",
            dominantie: "Een dictatoriale coach die macht verliest bij eerste tegenslag"
          }
        },
        {
          dimension: "3. Effect op Volgers",
          authority: "Inspireert, motiveert en ontwikkelt anderen",
          dominance: "Onderdrukt, intimideert en beperkt groei",
          nuance: "Gezag brengt het beste in mensen naar boven, dominantie onderdrukt potentieel",
          explanation: "Mensen onder gezag voelen zich gewaardeerd en gemotiveerd. Onder dominantie voelen ze zich onderdrukt en angstig.",
          examples: {
            gezag: "Spelers die beter presteren door vertrouwen van coach",
            dominantie: "Spelers die angstig en defensief worden"
          }
        },
        {
          dimension: "4. Besluitvorming",
          authority: "Inclusief, luistert naar input, neemt weloverwogen beslissingen",
          dominance: "Autocratisch, negeert input, impulsieve beslissingen",
          nuance: "Gezag combineert leiderschap met wijsheid, dominantie met willekeur",
          explanation: "Leiders met gezag waarderen verschillende perspectieven. Dominante leiders zien input als bedreiging van hun macht.",
          examples: {
            gezag: "Coach die tactiek bespreekt met assistenten en ervaren spelers",
            dominantie: "Coach die alleen beslist en geen tegenspraak duldt"
          }
        },
        {
          dimension: "5. Langetermijn Resultaten",
          authority: "Duurzame prestaties, sterke cultuur, ontwikkeling van talent",
          dominance: "Korte termijn resultaten, hoge verloop, burnout",
          nuance: "Gezag bouwt legacy's, dominantie vernietigt ze",
          explanation: "Gezag creëert organisaties die blijven presteren. Dominantie kan korte termijn resultaten geven maar schaadt lange termijn succes.",
          examples: {
            gezag: "Teams die blijven presteren na vertrek van leider",
            dominantie: "Teams die instorten zonder dominante leider"
          }
        }
      ],
      realWorldExamples: {
        title: "Voorbeelden uit de Praktijk",
        mandela: {
          name: "Nelson Mandela - Gezag",
          description: "Perfect voorbeeld van leiderschap gebaseerd op moreel gezag en respect",
          characteristics: [
            "Leidde door moreel voorbeeld",
            "Bouwde bruggen tussen vijanden",
            "Inspireerde door integriteit en visie",
            "Macht gebruikt voor verzoening, niet wraak"
          ]
        },
        bokito: {
          name: "Bokito de Gorilla - Dominantie",
          description: "Voorbeeld van pure dominantie gebaseerd op fysieke kracht en intimidatie",
          characteristics: [
            "Leidde door fysieke superioriteit",
            "Gebruikte agressie en intimidatie",
            "Geen empathie of samenwerking",
            "Macht behouden door angst"
          ]
        },
        biden: {
          name: "Joe Biden - Complex Gezag",
          description: "Moderne politieke leider die gezag combineert met democratische waarden",
          authorityAspects: [
            "Lange ervaring en expertise",
            "Empathie en luistervaardigheden",
            "Consensus building",
            "Respect voor instituties"
          ],
          complexities: [
            "Moet omgaan met polarisatie",
            "Balans tussen leiderschap en democratie",
            "Uitdagingen van moderne media",
            "Verschillende verwachtingen van kiezers"
          ]
        },
        trump: {
          name: "Donald Trump - Dominantie Elementen",
          description: "Controversieel voorbeeld van leiderschap met sterke dominantie aspecten",
          dominanceAspects: [
            "Intimidatie en agressieve communicatie",
            "Geen compromissen of samenwerking",
            "Persoonlijke aanvallen op tegenstanders",
            "Macht centraliseren en loyaliteit eisen"
          ],
          authorityAspects: [
            "Charisma en overtuigingskracht",
            "Duidelijke visie en boodschap",
            "Verbinding met bepaalde groepen",
            "Besluitvaardigheid"
          ],
          nuance: "Trump toont hoe leiders elementen van beide kunnen hebben, maar dominantie aspecten kunnen gezag ondermijnen"
        }
      },
      culturalContext: {
        title: "Nederlandse Context",
        description: "In Nederland wordt gezag traditioneel meer gewaardeerd dan dominantie",
        example: "De Nederlandse 'poldermodel' cultuur van overleg en consensus past beter bij gezag dan dominantie",
        dutchContext: "Nederlandse sportculturen waarderen coaches die luisteren, uitleggen en samen beslissen meer dan autoritaire leiders"
      },
      practicalApplication: {
        title: "Toepassing in Sport",
        analysis: "Voor sportleiders is het onderscheid tussen gezag en dominantie cruciaal voor langetermijn succes",
        steps: [
          "Bouw gezag op door competentie en integriteit te tonen",
          "Luister naar je team en waardeer hun input",
          "Gebruik macht om anderen te ontwikkelen, niet te onderdrukken",
          "Creëer vertrouwen door consistent en eerlijk te zijn",
          "Focus op teamdoelen, niet persoonlijke macht",
          "Accepteer feedback en toon bereidheid om te leren"
        ]
      },
      keyInsights: [
        "Gezag is duurzamer en effectiever dan dominantie",
        "Respect moet verdiend worden, macht kan afgedwongen worden",
        "Gezag inspireert groei, dominantie beperkt potentieel",
        "Moderne teams reageren beter op gezag dan dominantie",
        "Culturele context beïnvloedt acceptatie van leiderschapsstijlen",
        "Leiders kunnen elementen van beide hebben, maar gezag is preferabel"
      ],
      sportApplication: "In sport is gezag essentieel voor teamcohesie en langetermijn succes. Coaches met gezag ontwikkelen betere spelers en sterkere teams dan die met alleen dominantie."
    }
  },
  {
    id: 'authority-development',
    title: "Gezagsontwikkeling in de Praktijk",
    description: "Vijf concrete componenten om authentiek gezag te ontwikkelen als sportleider",
    content: {
      introduction: {
        title: "Van Theorie naar Praktijk",
        description: "Gezag ontwikkelen is een bewust proces dat tijd, reflectie en oefening vereist. Het gaat niet om het afdwingen van respect, maar om het verdienen ervan door consistent gedrag en authentieke leiderschap.",
        keyInsight: "Echt gezag groeit van binnenuit en wordt erkend door anderen - het kan niet worden geclaimd of afgedwongen."
      },
      fiveComponents: [
        {
          name: "1. Zelfkennis en Authenticiteit",
          description: "De basis van gezag ligt in het kennen van jezelf - je sterke punten, zwakke punten, waarden en motivaties",
          keyPrinciple: "Je kunt anderen niet leiden als je jezelf niet kent",
          characteristics: [
            "Bewustzijn van eigen emoties en reacties",
            "Eerlijkheid over eigen beperkingen",
            "Duidelijkheid over persoonlijke waarden",
            "Consistentie tussen woorden en daden"
          ],
          sportExample: {
            example: "Pep Guardiola's openheid over zijn perfectionisme",
            explanation: "Guardiola erkent openlijk zijn obsessie met details en perfectie. Deze zelfkennis helpt hem om zijn stijl aan te passen aan verschillende spelers en situaties.",
            lesson: "Door eerlijk te zijn over wie je bent, creëer je vertrouwen en respect bij je team"
          },
          practicalTips: [
            "Houd een dagelijks reflectiejournaal bij",
            "Vraag regelmatig feedback aan vertrouwde personen",
            "Doe persoonlijkheidstests en assessments",
            "Werk met een coach of mentor",
            "Observeer je eigen reacties in stressvolle situaties"
          ],
          quote: "Authenticiteit is de dagelijkse praktijk van het loslaten van wie we denken dat we zouden moeten zijn en het omarmen van wie we zijn. - Brené Brown"
        },
        {
          name: "2. Competentie en Expertise",
          description: "Gezag vereist bewezen competentie in je vakgebied - mensen volgen leiders die weten waar ze het over hebben",
          keyPrinciple: "Expertise is de basis van geloofwaardigheid",
          characteristics: [
            "Diepgaande kennis van je sport/vakgebied",
            "Continue leer- en ontwikkelingsmentaliteit",
            "Vermogen om complexe concepten uit te leggen",
            "Bewezen track record van resultaten"
          ],
          sportExample: {
            example: "José Mourinho's tactische expertise",
            explanation: "Mourinho's gedetailleerde kennis van tactiek en zijn vermogen om dit over te brengen op spelers heeft hem gezag gegeven bij topclubs wereldwijd.",
            lesson: "Investeer continu in je vakkennis - expertise is de basis van respect"
          },
          practicalTips: [
            "Blijf jezelf bijscholen door cursussen en certificeringen",
            "Leer van andere succesvolle coaches en leiders",
            "Analyseer je eigen prestaties en die van je team",
            "Deel je kennis met anderen om het te verdiepen",
            "Experimenteer met nieuwe methoden en technieken"
          ],
          quote: "In een tijd van drastische verandering zijn het de leerders die de toekomst erven. De geleerden bevinden zich meestal perfect uitgerust voor een wereld die niet meer bestaat. - Eric Hoffer"
        },
        {
          name: "3. Emotionele Intelligentie",
          description: "Het vermogen om je eigen emoties te begrijpen en die van anderen, en deze kennis te gebruiken voor effectieve communicatie en leiderschap",
          keyPrinciple: "Mensen volgen leiders die hen begrijpen en inspireren",
          characteristics: [
            "Zelfbewustzijn van eigen emotionele toestanden",
            "Empathie voor gevoelens en perspectieven van anderen",
            "Vermogen om emoties te reguleren onder druk",
            "Sociale vaardigheden voor effectieve communicatie"
          ],
          sportExample: {
            example: "Jürgen Klopp's emotionele verbinding met spelers",
            explanation: "Klopp's vermogen om emotioneel te verbinden met zijn spelers, hun frustraties te begrijpen en hen te motiveren heeft hem tot een van de meest gerespecteerde coaches gemaakt.",
            lesson: "Emotionele intelligentie creëert diepere verbindingen en sterkere teams"
          },
          practicalTips: [
            "Oefen actief luisteren zonder meteen oplossingen te bieden",
            "Leer lichaamstaal en non-verbale communicatie te lezen",
            "Ontwikkel technieken voor emotieregulatie (ademhaling, mindfulness)",
            "Voer regelmatig één-op-één gesprekken met teamleden",
            "Vraag naar gevoelens, niet alleen naar feiten"
          ],
          quote: "Leiderschap gaat over emotie. Het gaat over het vermogen om mensen te verbinden met hun dromen. - Jack Welch"
        },
        {
          name: "4. Integriteit en Betrouwbaarheid",
          description: "Consistent ethisch gedrag en het nakomen van beloften - de basis van vertrouwen",
          keyPrinciple: "Vertrouwen is de valuta van leiderschap",
          characteristics: [
            "Doen wat je zegt dat je gaat doen",
            "Eerlijkheid, ook wanneer het moeilijk is",
            "Ethische besluitvorming onder druk",
            "Verantwoordelijkheid nemen voor fouten"
          ],
          sportExample: {
            example: "Arsène Wenger's principiële houding",
            explanation: "Wenger stond bekend om zijn weigering om spelers te kopen die hij ethisch problematisch vond, zelfs als dit sportief nadelig was. Deze integriteit gaf hem enorm gezag.",
            lesson: "Principes behouden, zelfs onder druk, bouwt langetermijn respect op"
          },
          practicalTips: [
            "Maak alleen beloften die je kunt nakomen",
            "Erken fouten openlijk en leer ervan",
            "Behandel alle teamleden eerlijk en consistent",
            "Neem verantwoordelijkheid voor teamresultaten",
            "Wees transparant in je besluitvorming"
          ],
          quote: "Integriteit is het doen van het juiste, zelfs wanneer niemand kijkt. - C.S. Lewis"
        },
        {
          name: "5. Visie en Inspiratie",
          description: "Het vermogen om een overtuigende toekomstvisie te creëren en anderen te inspireren om deze na te streven",
          keyPrinciple: "Mensen volgen leiders die hen naar een betere toekomst kunnen leiden",
          characteristics: [
            "Duidelijke visie op waar het team naartoe gaat",
            "Vermogen om deze visie inspirerend te communiceren",
            "Verbinding tussen dagelijkse acties en grote doelen",
            "Optimisme en geloof in mogelijkheden"
          ],
          sportExample: {
            example: "Bill Belichick's 'Do Your Job' filosofie",
            explanation: "Belichick's eenvoudige maar krachtige visie dat iedereen zijn rol perfect moet uitvoeren heeft de New England Patriots tot een dynastie gemaakt.",
            lesson: "Een duidelijke, inspirerende visie geeft richting en motivatie aan het hele team"
          },
          practicalTips: [
            "Ontwikkel een heldere teamvisie samen met je spelers",
            "Communiceer regelmatig over doelen en voortgang",
            "Verbind dagelijkse trainingen met grote ambities",
            "Gebruik verhalen en metaforen om je visie te verduidelijken",
            "Toon enthousiasme en passie voor je visie"
          ],
          quote: "Een leider is iemand die de weg kent, de weg gaat en de weg toont. - John C. Maxwell"
        }
      ],
      continuousDevelopment: {
        title: "Continue Ontwikkeling",
        description: "Gezagsontwikkeling is een levenslang proces dat constante aandacht en verbetering vereist",
        components: [
          "Regelmatige zelfevaluatie en reflectie",
          "Feedback zoeken van teamleden en collega's",
          "Investeren in persoonlijke en professionele ontwikkeling",
          "Mentoring van anderen om je eigen leiderschap te versterken",
          "Aanpassen aan veranderende omstandigheden en generaties"
        ]
      },
      practicalApplication: {
        title: "Implementatie Stappenplan",
        analysis: "Begin met zelfkennis en bouw systematisch aan alle vijf componenten",
        steps: [
          "Start met een eerlijke zelfanalyse van je huidige leiderschapsstijl",
          "Identificeer je sterkste en zwakste component van de vijf",
          "Maak een ontwikkelingsplan met concrete acties per component",
          "Zoek feedback van je team over je leiderschapseffectiviteit",
          "Implementeer één verbetering per keer en meet de impact",
          "Herhaal dit proces regelmatig voor continue groei"
        ]
      },
      keyInsights: [
        "Gezag ontwikkelen is een bewust en continu proces",
        "Alle vijf componenten zijn nodig voor volledig gezag",
        "Authenticiteit is belangrijker dan perfectie",
        "Gezag groeit door consistent gedrag over tijd",
        "Feedback en zelfreflectie zijn essentieel voor groei",
        "Gezag dient het team, niet de leider"
      ],
      sportApplication: "Deze vijf componenten vormen een praktische roadmap voor elke sportleider die authentiek gezag wil ontwikkelen. Begin waar je bent, wees geduldig met het proces, en focus op het dienen van je team."
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