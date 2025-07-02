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

// Complete theory data with all 9 theories
const theories: Theory[] = [
  {
    id: 'mintzberg',
    title: "Mintzberg's Managementrollen",
    description: "Henry Mintzberg identificeerde 10 essentiële rollen die elke manager vervult, verdeeld over interpersoonlijke, informationele en besluitvormingsrollen.",
    content: {
      categories: [
        {
          name: "Interpersoonlijke Rollen",
          roles: [
            {
              name: "Boegbeeld (Figurehead)",
              description: "Ceremoniële en symbolische taken uitvoeren als representant van de organisatie"
            },
            {
              name: "Leider (Leader)",
              description: "Motiveren, begeleiden en ontwikkelen van teamleden"
            },
            {
              name: "Verbinder (Liaison)",
              description: "Netwerken onderhouden met externe contacten en stakeholders"
            }
          ]
        },
        {
          name: "Informationele Rollen",
          roles: [
            {
              name: "Monitor",
              description: "Informatie verzamelen over interne en externe ontwikkelingen"
            },
            {
              name: "Verspreider (Disseminator)",
              description: "Belangrijke informatie doorspelen aan teamleden"
            },
            {
              name: "Woordvoerder (Spokesperson)",
              description: "Organisatie vertegenwoordigen naar buitenwereld"
            }
          ]
        },
        {
          name: "Besluitvormingsrollen",
          roles: [
            {
              name: "Ondernemer (Entrepreneur)",
              description: "Initiëren van verandering en innovatie"
            },
            {
              name: "Probleemoplosser (Disturbance Handler)",
              description: "Reageren op onverwachte problemen en crises"
            },
            {
              name: "Hulpbronnenverdeler (Resource Allocator)",
              description: "Beslissen over verdeling van tijd, geld en middelen"
            },
            {
              name: "Onderhandelaar (Negotiator)",
              description: "Namens organisatie onderhandelen met externe partijen"
            }
          ]
        }
      ],
      sportExample: "Een hoofdcoach voetbal vervult alle 10 rollen: Boegbeeld (bij persconferenties), Leider (motiveren spelers), Verbinder (contact met bestuur), Monitor (analyseren tegenstanders), Verspreider (tactische instructies), Woordvoerder (media), Ondernemer (nieuwe tactieken), Probleemoplosser (blessures/schorsingen), Hulpbronnenverdeler (speeltijd verdelen), Onderhandelaar (transfers)."
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
            name: "Sturend Gedrag",
            description: "De mate waarin je specifieke instructies geeft",
            characteristics: [
              "Duidelijke doelen stellen",
              "Stap-voor-stap uitleggen",
              "Nauw toezicht houden",
              "Deadlines en standaarden definiëren"
            ]
          },
          {
            name: "Ondersteunend Gedrag", 
            description: "De mate waarin je luistert, aanmoedigt en faciliteert",
            characteristics: [
              "Actief luisteren naar zorgen",
              "Aanmoedigen en complimenteren",
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
            "Weinig specifieke vaardigheden",
            "Optimistisch over mogelijkheden",
            "Nog geen ervaring met moeilijkheden"
          ],
          needs: "Heeft veel sturing nodig maar weinig ondersteuning - ze zijn al gemotiveerd",
          sportExample: "Een nieuwe speler die net bij het team komt - vol enthousiasme maar moet alles nog leren over tactieken en teamcultuur"
        },
        {
          level: "D2 - Ontgoochelde Leerling",
          competence: "Laag tot Gemiddeld",
          commitment: "Laag",
          characteristics: [
            "Realiteit is ingedaald",
            "Frustratie over moeilijkheden",
            "Twijfels over eigen kunnen",
            "Heeft wat vaardigheden ontwikkeld"
          ],
          needs: "Heeft zowel veel sturing als veel ondersteuning nodig",
          sportExample: "Een speler die na enkele maanden merkt dat het moeilijker is dan gedacht - prestaties vallen tegen en motivatie daalt"
        },
        {
          level: "D3 - Voorzichtige Uitvoerder",
          competence: "Gemiddeld tot Hoog",
          commitment: "Variabel",
          characteristics: [
            "Heeft vaardigheden ontwikkeld",
            "Wisselende zelfvertrouwen",
            "Kan taken uitvoeren maar twijfelt",
            "Zoekt bevestiging"
          ],
          needs: "Weinig sturing maar veel ondersteuning en aanmoediging",
          sportExample: "Een ervaren speler die technisch goed is maar worstelt met zelfvertrouwen na een mindere periode"
        },
        {
          level: "D4 - Zelfstandige Uitvoerder",
          competence: "Hoog",
          commitment: "Hoog",
          characteristics: [
            "Hoge vaardigheden",
            "Hoge motivatie",
            "Zelfvertrouwen",
            "Kan zelfstandig werken"
          ],
          needs: "Weinig sturing en weinig ondersteuning - kan zelfstandig functioneren",
          sportExample: "Een ervaren aanvoerder die zowel technisch uitblinkt als het team kan motiveren en leiden"
        }
      ],
      leadershipStyles: [
        {
          style: "S1 - Sturend",
          behavior: "Hoog Sturend, Laag Ondersteunend",
          when: "Voor D1 - Enthousiaste Beginners",
          description: "Geef duidelijke instructies en houd nauw toezicht",
          approach: [
            "Specifieke doelen en deadlines stellen",
            "Stap-voor-stap instructies geven",
            "Regelmatig controleren",
            "Weinig ruimte voor eigen input"
          ],
          sportExample: "Een nieuwe speler krijgt exacte positionering uitgelegd, specifieke oefeningen en wordt nauw gevolgd tijdens training"
        },
        {
          style: "S2 - Coachend",
          behavior: "Hoog Sturend, Hoog Ondersteunend",
          when: "Voor D2 - Ontgoochelde Leerlingen",
          description: "Combineer duidelijke sturing met veel ondersteuning en aanmoediging",
          approach: [
            "Blijf duidelijke instructies geven",
            "Luister naar zorgen en frustraties",
            "Leg uit waarom dingen gedaan worden",
            "Moedig aan en geef positieve feedback"
          ],
          sportExample: "Coach legt niet alleen uit wat te doen maar ook waarom, luistert naar frustraties en geeft extra aanmoediging"
        },
        {
          style: "S3 - Ondersteunend",
          behavior: "Laag Sturend, Hoog Ondersteunend",
          when: "Voor D3 - Voorzichtige Uitvoerders",
          description: "Faciliteer en ondersteun, laat hen problemen oplossen",
          approach: [
            "Stel open vragen",
            "Luister actief",
            "Faciliteer probleemoplossing",
            "Geef vertrouwen en aanmoediging"
          ],
          sportExample: "Coach vraagt speler wat hij denkt dat goed zou werken, luistert naar ideeën en helpt bij het uitwerken van oplossingen"
        },
        {
          style: "S4 - Delegerend",
          behavior: "Laag Sturend, Laag Ondersteunend",
          when: "Voor D4 - Zelfstandige Uitvoerders",
          description: "Geef verantwoordelijkheid en vertrouw op hun kunnen",
          approach: [
            "Delegeer taken en verantwoordelijkheden",
            "Geef ruimte voor eigen beslissingen",
            "Wees beschikbaar als nodig",
            "Erken en waardeer prestaties"
          ],
          sportExample: "Ervaren spelers krijgen vrijheid om eigen keuzes te maken, coach vertrouwt op hun expertise en grijpt alleen in als gevraagd"
        }
      ],
      keyPrinciples: [
        "Er is geen beste leiderschapsstijl - alleen de juiste stijl voor de situatie",
        "Ontwikkelingsniveau bepaalt welke stijl nodig is",
        "Mensen kunnen verschillende niveaus hebben voor verschillende taken",
        "Effectieve leiders kunnen flexibel schakelen tussen stijlen",
        "Het doel is mensen te ontwikkelen naar D4 niveau"
      ]
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
          name: "Positiemacht (Legitimate Power)",
          description: "Macht die voortkomt uit je formele positie of titel",
          characteristics: [
            "Gebaseerd op hiërarchie",
            "Formeel erkend",
            "Verdwijnt bij functiewisseling",
            "Kan weerstand oproepen"
          ],
          sportExample: "Hoofdcoach kan spelers opstellen of naar de bank verwijzen vanwege zijn functie",
          effectiveness: "Zorgt voor compliance maar niet altijd voor commitment"
        },
        {
          name: "Beloningmacht (Reward Power)",
          description: "Macht om beloningen uit te delen",
          characteristics: [
            "Controle over gewenste middelen",
            "Kan motiveren",
            "Tijdelijk effect",
            "Kan afhankelijkheid creëren"
          ],
          sportExample: "Coach bepaalt speeltijd, kan spelers belonen met basisplaats of aanvoerdersband",
          effectiveness: "Effectief voor korte termijn motivatie"
        },
        {
          name: "Dwangmacht (Coercive Power)",
          description: "Macht om straffen uit te delen",
          characteristics: [
            "Gebaseerd op angst",
            "Kan weerstand oproepen",
            "Negatieve bijeffecten",
            "Korte termijn effect"
          ],
          sportExample: "Coach kan spelers schorsen, extra trainingen geven of uit selectie zetten",
          effectiveness: "Moet spaarzaam gebruikt worden, kan vertrouwen beschadigen"
        },
        {
          name: "Expertmacht (Expert Power)",
          description: "Macht gebaseerd op kennis en vaardigheden",
          characteristics: [
            "Gebaseerd op competentie",
            "Duurzaam",
            "Creëert respect",
            "Moet onderhouden worden"
          ],
          sportExample: "Coach met bewezen tactische kennis en ervaring wordt gerespecteerd om zijn expertise",
          effectiveness: "Zeer effectief, creëert natuurlijk gezag"
        },
        {
          name: "Referentiemacht (Referent Power)",
          description: "Macht gebaseerd op persoonlijke aantrekkingskracht en charisma",
          characteristics: [
            "Gebaseerd op bewondering",
            "Persoonlijk",
            "Moeilijk te ontwikkelen",
            "Zeer invloedrijk"
          ],
          sportExample: "Charismatische coach waar spelers voor willen spelen en die ze willen navolgen",
          effectiveness: "Zeer krachtig, mensen volgen je graag"
        },
        {
          name: "Informatiemacht (Information Power)",
          description: "Macht gebaseerd op toegang tot belangrijke informatie",
          characteristics: [
            "Controle over informatie",
            "Kan strategisch gebruikt worden",
            "Tijdelijk",
            "Kan vertrouwen beïnvloeden"
          ],
          sportExample: "Coach heeft exclusieve informatie over tegenstanders, blessures of transferplannen",
          effectiveness: "Effectief maar moet ethisch gebruikt worden"
        }
      ],
      practicalApplication: {
        title: "Praktische Toepassing in Sport",
        analysis: "Succesvolle sportleiders combineren meerdere machtsbronnen en passen ze situationeel toe:",
        strategies: [
          "Bouw expertmacht op door continue ontwikkeling",
          "Ontwikkel referentiemacht door authentiek leiderschap",
          "Gebruik positiemacht spaarzaam en rechtvaardig",
          "Balanceer beloningen en consequenties",
          "Deel informatie transparant en strategisch",
          "Vermijd overmatig gebruik van dwangmacht"
        ]
      },
      keyInsights: [
        "Meerdere machtsbronnen zijn effectiever dan één",
        "Expert- en referentiemacht zijn het meest duurzaam",
        "Dwangmacht moet zeer spaarzaam gebruikt worden",
        "Macht zonder verantwoordelijkheid is gevaarlijk",
        "De perceptie van macht is vaak belangrijker dan de werkelijke macht"
      ]
    }
  },
  {
    id: 'keltner-power',
    title: "Keltner's Macht Paradox",
    description: "Dacher Keltner ontdekte dat macht je brein letterlijk kan beschadigen door empathie-circuits te onderdrukken, wat leidt tot minder effectief leiderschap.",
    content: {
      introduction: {
        title: "De Macht Paradox - Hoe Macht Je Brein Beschadigt",
        description: "Psycholoog Dacher Keltner van UC Berkeley ontdekte een verontrustende paradox: de eigenschappen die je macht geven, worden door macht zelf ondermijnd.",
        keyInsight: "Macht beschadigt letterlijk je brein door empathie-circuits te onderdrukken."
      },
      theParadox: {
        title: "De Paradox Uitgelegd",
        description: "Mensen krijgen macht door empathie, sociale vaardigheden en het vermogen om anderen te begrijpen. Maar eenmaal aan de macht, verlies je juist deze vaardigheden.",
        process: [
          "Je krijgt macht door empathie en sociale intelligentie",
          "Macht activeert het beloningssysteem in je brein",
          "Dit onderdrukt de empathie-circuits (temporopariëtale junctie)",
          "Je verliest het vermogen om anderen te begrijpen",
          "Dit leidt tot slechte beslissingen en verlies van macht"
        ]
      },
      brainChanges: {
        title: "Neurologische Veranderingen",
        description: "Onderzoek toont aan dat macht fysieke veranderingen in het brein veroorzaakt:",
        changes: [
          "Verminderde activiteit in empathie-circuits",
          "Verhoogde activiteit in beloningssysteem",
          "Minder spiegelneuronenactiviteit",
          "Verminderd vermogen tot perspectief nemen",
          "Verhoogde impulsiviteit"
        ],
        consequences: [
          "Minder accuraat inschatten van emoties",
          "Verminderd luisteren naar anderen",
          "Meer stereotypering",
          "Minder rekening houden met gevolgen",
          "Verhoogd risico op machtsmisbruik"
        ]
      },
      sportExamples: {
        title: "Voorbeelden uit de Sport",
        examples: [
          {
            situation: "Succesvolle Coach Syndroom",
            description: "Coach die succesvol wordt, stopt met luisteren naar spelers en assistenten",
            consequence: "Team prestaties dalen, spelers raken gedemotiveerd"
          },
          {
            situation: "Stervoetballer Ego",
            description: "Topspeler die geen kritiek meer accepteert en teamgenoten negeert",
            consequence: "Teamchemie verslechtert, individuele prestaties dalen"
          },
          {
            situation: "Sportbestuurder Blindheid",
            description: "Bestuurder die geen contact meer heeft met de basis",
            consequence: "Beslissingen die niet aansluiten bij realiteit"
          }
        ]
      },
      prevention: {
        title: "Preventie Strategieën",
        description: "Hoe kun je de macht paradox voorkomen?",
        strategies: [
          {
            name: "Bewuste Empathie Oefening",
            description: "Dagelijks bewust oefenen met perspectief nemen",
            practice: "Vraag jezelf af: 'Hoe zou deze persoon zich voelen?'"
          },
          {
            name: "Feedback Systemen",
            description: "Structurele feedback van ondergeschikten",
            practice: "360-graden feedback, anonieme evaluaties"
          },
          {
            name: "Macht Delen",
            description: "Bewust macht en verantwoordelijkheden delegeren",
            practice: "Geef anderen echte beslissingsbevoegdheid"
          },
          {
            name: "Nederigheid Cultiveren",
            description: "Regelmatig herinneren aan je eigen beperkingen",
            practice: "Zoek situaties waar je de student bent"
          },
          {
            name: "Diverse Perspectieven",
            description: "Omring jezelf met mensen die je tegenspreken",
            practice: "Waardeer en beloon kritische stemmen"
          }
        ]
      },
      practicalApplication: {
        title: "Toepassing in Sportleiderschap",
        analysis: "Voor sportleiders is bewustzijn van de macht paradox cruciaal omdat sport hiërarchisch is en succes snel tot macht kan leiden.",
        steps: [
          "Herken de signalen van macht paradox in jezelf",
          "Implementeer structurele feedback mechanismen",
          "Oefen bewust empathie en perspectief nemen",
          "Deel macht en verantwoordelijkheden",
          "Blijf leren en jezelf ontwikkelen"
        ]
      },
      keyInsights: [
        "Macht corrumpeert niet alleen moreel, maar ook neurologisch",
        "De eigenschappen die je macht geven, worden door macht ondermijnd",
        "Bewustzijn van de paradox is de eerste stap naar preventie",
        "Structurele maatregelen zijn nodig, goede intenties zijn niet genoeg",
        "Empathie moet bewust geoefend worden door machthebbers"
      ],
      sportApplication: "In de sport is dit bijzonder relevant omdat succesvolle coaches en spelers snel macht krijgen. Bewustzijn van deze paradox helpt sportleiders effectief te blijven en hun teams te blijven dienen in plaats van zichzelf."
    }
  },
  {
    id: 'kets-de-vries',
    title: "Kets de Vries: Disfunctioneel Leiderschap",
    description: "Manfred Kets de Vries identificeerde veelvoorkomende disfunctionele leiderschapspatronen die organisaties en teams kunnen beschadigen.",
    content: {
      introduction: {
        title: "Disfunctioneel Leiderschap - Wanneer Leiderschap Misgaat",
        description: "Manfred Kets de Vries, psychoanalyticus en managementgoeroe, onderzocht waarom leiders falen en identificeerde veelvoorkomende disfunctionele patronen.",
        keyInsight: "Veel leiderschapsproblemen hebben hun oorsprong in onbewuste psychologische patronen."
      },
      dysfunctionalPatterns: [
        {
          name: "Narcistische Leider",
          description: "Overdreven behoefte aan bewondering en gebrek aan empathie",
          characteristics: [
            "Alles draait om hen",
            "Accepteert geen kritiek",
            "Overschat eigen kunnen",
            "Exploiteert anderen"
          ],
          sportExample: "Coach die alle eer opeist voor overwinningen maar spelers de schuld geeft van nederlagen",
          consequences: "Team verliest motivatie, talenten vertrekken, toxische cultuur",
          recognition: "Let op: overdreven zelfpromotie, gebrek aan interesse in anderen"
        },
        {
          name: "Paranoïde Leider",
          description: "Excessief wantrouwen en verdachtmakingen",
          characteristics: [
            "Ziet overal complotten",
            "Vertrouwt niemand",
            "Controleert alles",
            "Isoleert zichzelf"
          ],
          sportExample: "Trainer die denkt dat spelers tegen hem samenspannen en constant controleert",
          consequences: "Angstcultuur, geen open communicatie, creativiteit wordt onderdrukt",
          recognition: "Let op: overdreven controle, wantrouwen zonder basis"
        },
        {
          name: "Theatrale Leider",
          description: "Overdreven emotioneel en aandacht zoekend gedrag",
          characteristics: [
            "Dramatisch gedrag",
            "Emotioneel instabiel",
            "Zoekt constant aandacht",
            "Oppervlakkige relaties"
          ],
          sportExample: "Coach die extreme emotionele uitbarstingen heeft en alles overdrijft",
          consequences: "Team weet niet waar ze aan toe zijn, focus op drama in plaats van prestatie",
          recognition: "Let op: extreme emoties, alles wordt overdreven"
        },
        {
          name: "Dwangmatige Leider",
          description: "Obsessie met controle en perfectie",
          characteristics: [
            "Perfectionist",
            "Micromanagement",
            "Rigide regels",
            "Angst voor fouten"
          ],
          sportExample: "Trainer die elke beweging controleert en geen ruimte geeft voor creativiteit",
          consequences: "Spelers durven geen risico's te nemen, innovatie wordt onderdrukt",
          recognition: "Let op: overdreven focus op details, geen delegatie"
        },
        {
          name: "Passief-Agressieve Leider",
          description: "Indirecte uiting van negatieve gevoelens",
          characteristics: [
            "Vermijdt directe confrontatie",
            "Saboteert subtiel",
            "Onduidelijke communicatie",
            "Houdt wrok vast"
          ],
          sportExample: "Coach die niet direct zegt wat hij denkt maar spelers 'straft' door ze te negeren",
          consequences: "Onduidelijkheid, frustratie, geen echte probleemoplossing",
          recognition: "Let op: indirecte communicatie, subtiele sabotage"
        },
        {
          name: "Manisch Gedrag",
          description: "Hyperactiviteit en onsamenhangende beslissingen",
          characteristics: [
            "Constant in beweging",
            "Veel projecten tegelijk",
            "Impulsieve beslissingen",
            "Geen focus"
          ],
          sportExample: "Coach die constant nieuwe tactieken introduceert zonder ze uit te werken",
          consequences: "Chaos, geen consistentie, team raakt verward",
          recognition: "Let op: hyperactiviteit, veel beginnen maar weinig afmaken"
        }
      ],
      underlyingCauses: {
        title: "Onderliggende Oorzaken",
        description: "Disfunctioneel leiderschap heeft vaak diepe psychologische wortels:",
        causes: [
          "Onverwerkte jeugdtrauma's",
          "Lage zelfwaardering gecompenseerd door macht",
          "Angst voor falen of afwijzing",
          "Gebrek aan zelfbewustzijn",
          "Stress en burn-out"
        ]
      },
      prevention: {
        title: "Preventie en Interventie",
        description: "Hoe kun je disfunctioneel leiderschap voorkomen of aanpakken?",
        strategies: [
          {
            name: "Zelfbewustzijn Ontwikkelen",
            description: "Regelmatige zelfreflectie en feedback",
            tools: ["360-graden feedback", "Coaching", "Persoonlijkheidstests"]
          },
          {
            name: "Professionele Hulp",
            description: "Therapie of coaching bij disfunctionele patronen",
            tools: ["Executive coaching", "Psychotherapie", "Stress management"]
          },
          {
            name: "Systemen en Checks",
            description: "Structurele maatregelen om macht te begrenzen",
            tools: ["Governance structuren", "Peer review", "Externe toezicht"]
          },
          {
            name: "Cultuur van Feedback",
            description: "Omgeving waar kritiek gewaardeerd wordt",
            tools: ["Open communicatie", "Psychologische veiligheid", "Lerende organisatie"]
          }
        ]
      },
      practicalApplication: {
        title: "Herkenning in de Sportpraktijk",
        analysis: "Sport is een omgeving waar disfunctioneel leiderschap veel schade kan aanrichten vanwege de emotionele intensiteit en hiërarchische structuren.",
        steps: [
          "Leer de signalen van disfunctioneel gedrag herkennen",
          "Creëer veilige feedback mechanismen",
          "Investeer in persoonlijke ontwikkeling van leiders",
          "Implementeer checks and balances",
          "Zoek professionele hulp bij ernstige problemen"
        ]
      },
      keyInsights: [
        "Disfunctioneel leiderschap is vaak onbewust",
        "Vroege herkenning voorkomt grote schade",
        "Professionele hulp is vaak nodig",
        "Systemen zijn belangrijker dan goede intenties",
        "Zelfbewustzijn is de basis van gezond leiderschap"
      ],
      sportApplication: "In de sport kunnen disfunctionele leiderschapspatronen bijzonder schadelijk zijn omdat ze niet alleen prestaties beïnvloeden, maar ook de mentale gezondheid van sporters. Bewustzijn en vroege interventie zijn cruciaal."
    }
  },
  {
    id: 'maccoby-narcissist',
    title: "Maccoby's Narcistische Leider",
    description: "Michael Maccoby onderscheidt productief en destructief narcisme in leiderschap, waarbij narcistische eigenschappen zowel kracht als zwakte kunnen zijn.",
    content: {
      introduction: {
        title: "De Narcistische Leider - Kracht en Gevaar van Narcisme",
        description: "Michael Maccoby, psychoanalyticus en managementconsultant, onderzocht hoe narcistische eigenschappen zowel effectief als destructief kunnen zijn in leiderschap.",
        keyInsight: "Narcisme kan productief zijn wanneer het ten goede komt aan het team, maar destructief wanneer het alleen het ego dient."
      },
      narcissismSpectrum: {
        title: "Het Narcisme Spectrum",
        description: "Narcisme is niet zwart-wit, maar een spectrum van gezond zelfvertrouwen tot destructieve zelfobsessie:",
        levels: [
          {
            name: "Gezond Zelfvertrouwen",
            description: "Realistische zelfwaardering en empathie voor anderen",
            characteristics: ["Zelfbewust", "Empathisch", "Realistisch", "Teamgericht"]
          },
          {
            name: "Productief Narcisme",
            description: "Sterke visie en charisma ten dienste van het team",
            characteristics: ["Visionair", "Charismatisch", "Ambitieus", "Inspirerend"]
          },
          {
            name: "Destructief Narcisme",
            description: "Zelfobsessie ten koste van anderen",
            characteristics: ["Egocentrisch", "Manipulatief", "Exploiterend", "Empathieloos"]
          }
        ]
      },
      productiveNarcissism: {
        title: "Productief Narcisme - De Kracht",
        description: "Wanneer narcistische eigenschappen ten goede komen aan het team:",
        strengths: [
          {
            trait: "Visionaire Kracht",
            description: "Vermogen om grote dromen te hebben en anderen te inspireren",
            sportExample: "Coach die het team laat geloven in onmogelijk lijkende doelen"
          },
          {
            trait: "Charisma en Overtuigingskracht",
            description: "Natuurlijk vermogen om anderen te motiveren en mee te krijgen",
            sportExample: "Aanvoerder die door persoonlijkheid het team kan oppeppen"
          },
          {
            trait: "Zelfvertrouwen onder Druk",
            description: "Blijft kalm en zelfverzekerd in moeilijke situaties",
            sportExample: "Speler die in cruciale momenten de verantwoordelijkheid neemt"
          },
          {
            trait: "Ambitie en Drive",
            description: "Onuitputtelijke energie om doelen te bereiken",
            sportExample: "Trainer die altijd naar perfectie streeft en team meesleept"
          }
        ],
        conditions: [
          "Visie dient het team, niet alleen het ego",
          "Succes wordt gedeeld met het team",
          "Luistert naar feedback van anderen",
          "Erkent bijdragen van teamgenoten"
        ]
      },
      destructiveNarcissism: {
        title: "Destructief Narcisme - Het Gevaar",
        description: "Wanneer narcistische eigenschappen ten koste gaan van het team:",
        dangers: [
          {
            trait: "Gebrek aan Empathie",
            description: "Kan zich niet inleven in anderen",
            sportExample: "Coach die geen begrip heeft voor persoonlijke problemen van spelers",
            consequence: "Spelers voelen zich niet gewaardeerd"
          },
          {
            trait: "Alles Draait om Mij",
            description: "Claimt alle eer en geeft anderen de schuld",
            sportExample: "Speler die bij overwinning alle eer opeist maar bij verlies teamgenoten de schuld geeft",
            consequence: "Team verliest motivatie en vertrouwen"
          },
          {
            trait: "Geen Kritiek Accepteren",
            description: "Ziet elke feedback als aanval",
            sportExample: "Trainer die assistenten ontslaat die andere meningen hebben",
            consequence: "Geen verbetering, isolatie"
          },
          {
            trait: "Exploiteren van Anderen",
            description: "Gebruikt mensen voor eigen doelen",
            sportExample: "Coach die spelers uitbuit voor eigen carrière",
            consequence: "Burn-out en cynisme bij team"
          }
        ]
      },
      transformation: {
        title: "Van Destructief naar Productief",
        description: "Hoe kun je destructief narcisme ombuigen naar productief narcisme?",
        strategies: [
          {
            name: "Bewustwording Creëren",
            description: "Herkennen van narcistische patronen",
            methods: ["360-graden feedback", "Video-analyse van gedrag", "Coaching"]
          },
          {
            name: "Empathie Ontwikkelen",
            description: "Bewust oefenen met perspectief nemen",
            methods: ["Actief luisteren", "Vragen stellen", "Tijd besteden aan teamleden"]
          },
          {
            name: "Succes Delen",
            description: "Bewust erkennen van anderen",
            methods: ["Publiek bedanken", "Credits geven", "Anderen in spotlight zetten"]
          },
          {
            name: "Feedback Waarderen",
            description: "Kritiek zien als geschenk",
            methods: ["Vragen om feedback", "Bedanken voor kritiek", "Handelen naar feedback"]
          }
        ]
      },
      sportExamples: {
        title: "Voorbeelden uit de Sport",
        examples: [
          {
            name: "Productief: Pep Guardiola",
            description: "Visionair coach met sterke persoonlijkheid die teams transformeert",
            productiveTraits: [
              "Duidelijke visie op voetbal",
              "Inspireert spelers tot groei",
              "Erkent bijdragen van anderen",
              "Constant leren en verbeteren"
            ]
          },
          {
            name: "Destructief: Problematische Sterren",
            description: "Getalenteerde spelers die teams kunnen ontwrichten",
            destructiveTraits: [
              "Eisen speciale behandeling",
              "Geven teamgenoten de schuld",
              "Accepteren geen coaching",
              "Zetten eigen belang boven team"
            ]
          }
        ]
      },
      practicalApplication: {
        title: "Praktische Toepassing",
        analysis: "In de sport is narcisme vaak aanwezig vanwege de competitieve natuur en individuele erkenning. Het is cruciaal om dit te kanaliseren naar teamdoelen.",
        steps: [
          "Herken narcistische eigenschappen in jezelf en anderen",
          "Evalueer of het productief of destructief is",
          "Implementeer feedback systemen",
          "Beloon teamgericht gedrag",
          "Zoek professionele hulp bij destructieve patronen"
        ]
      },
      keyInsights: [
        "Narcisme is niet inherent slecht - het gaat om de toepassing",
        "Productief narcisme kan teams naar grote hoogten brengen",
        "Destructief narcisme vernietigt teamcohesie",
        "Transformatie is mogelijk met bewustzijn en inspanning",
        "Feedback en empathie zijn cruciale tegenwichten"
      ],
      sportApplication: "In de sport kunnen narcistische eigenschappen zowel een zegen als een vloek zijn. Coaches en teamleiders moeten leren herkennen wanneer narcisme productief is (inspirerend en visionair) versus destructief (egocentrisch en teamondermijnend)."
    }
  },
  {
    id: 'alex-ferguson',
    title: "Alex Ferguson's Leiderschapsfilosofie",
    description: "Sir Alex Ferguson's 26-jarige succesvolle leiderschap bij Manchester United biedt 9 essentiële leiderschapsprincipes voor langdurig succes.",
    content: {
      introduction: {
        title: "Sir Alex Ferguson - Meester van Langdurig Succes",
        description: "26 jaar lang leidde Sir Alex Ferguson Manchester United naar ongekend succes: 38 trofeeën, waaronder 13 Premier League titels en 2 Champions League overwinningen.",
        keyInsight: "Langdurig succes vereist meer dan tactiek - het gaat om mensen, cultuur en voortdurende vernieuwing."
      },
      nineElements: [
        {
          name: "1. Controle en Autoriteit",
          description: "Duidelijke hiërarchie en onbetwiste leiding",
          explanation: "Ferguson maakte altijd duidelijk wie de baas was. Niemand, ook geen sterren, stond boven het team.",
          sportExample: "Toen David Beckham te veel aandacht kreeg van media, verkocht Ferguson hem. 'Geen enkele speler is groter dan de club.'",
          practicalTips: [
            "Stel duidelijke grenzen en verwachtingen",
            "Wees consistent in je beslissingen",
            "Laat zien dat regels voor iedereen gelden",
            "Neem moeilijke beslissingen als het nodig is"
          ],
          quote: "Als je de controle verliest over een sterke persoonlijkheid, verlies je de controle over het hele team."
        },
        {
          name: "2. Discipline en Standaarden",
          description: "Hoge standaarden voor iedereen, zonder uitzonderingen",
          explanation: "Ferguson tolereerde geen gedrag dat de teamgeest ondermijnde, ongeacht talent.",
          sportExample: "Roy Keane, aanvoerder en clublegende, werd weggestuurd toen zijn gedrag destructief werd voor het team.",
          practicalTips: [
            "Definieer duidelijke gedragsnormen",
            "Handhaaf standaarden consistent",
            "Geen uitzonderingen voor 'sterren'",
            "Beloon gewenst gedrag, corrigeer ongewenst gedrag"
          ],
          quote: "Standaarden dalen nooit - ze worden alleen maar gehandhaafd of opgegeven."
        },
        {
          name: "3. Teamwork boven Individualisme",
          description: "Het team komt altijd op de eerste plaats",
          explanation: "Individuele talenten werden gekoesterd, maar alleen als ze het team dienden.",
          sportExample: "Cristiano Ronaldo werd geleerd om zijn individuele vaardigheden te gebruiken voor teamdoelen, niet voor persoonlijke glorie.",
          practicalTips: [
            "Beloon teamgerichte prestaties",
            "Maak individuele doelen afhankelijk van teamdoelen",
            "Vier teamsuccessen meer dan individuele prestaties",
            "Creëer onderlinge afhankelijkheid"
          ],
          quote: "Voetbal is een teamsport. Elf vrienden kunnen een team verslaan van elf individuen."
        },
        {
          name: "4. Motivatie en Inspiratie",
          description: "Verschillende mensen hebben verschillende motivatie nodig",
          explanation: "Ferguson paste zijn benadering aan per speler - sommigen hadden aanmoediging nodig, anderen confrontatie.",
          sportExample: "Ryan Giggs kreeg vertrouwen en ruimte, terwijl Cristiano Ronaldo uitdaging en confrontatie nodig had om te groeien.",
          practicalTips: [
            "Leer wat elke persoon motiveert",
            "Pas je communicatiestijl aan per individu",
            "Gebruik zowel wortel als stok",
            "Vind de juiste balans tussen uitdaging en ondersteuning"
          ],
          quote: "Management gaat over mensen. Als je mensen niet kunt motiveren, ben je geen manager."
        },
        {
          name: "5. Voortdurende Vernieuwing",
          description: "Constant evolueren en verbeteren",
          explanation: "Ferguson vernieuwde zijn team regelmatig om stagnatie te voorkomen.",
          sportExample: "Hij bouwde vier verschillende succesvolle teams in 26 jaar, telkens aangepast aan nieuwe tijden en spelers.",
          practicalTips: [
            "Evalueer regelmatig wat werkt en wat niet",
            "Wees niet bang om succesvolle methoden te veranderen",
            "Investeer in nieuwe talenten en ideeën",
            "Blijf leren van anderen"
          ],
          quote: "Stilstand is achteruitgang. Je moet altijd vooruit blijven bewegen."
        },
        {
          name: "6. Lange Termijn Visie",
          description: "Denken in jaren, niet in wedstrijden",
          explanation: "Ferguson bouwde voor de toekomst, ook als dat korte termijn offers betekende.",
          sportExample: "Hij gaf jonge spelers zoals Giggs, Scholes en Beckham kansen, ook al kostte dat soms punten op korte termijn.",
          practicalTips: [
            "Ontwikkel een duidelijke langetermijnvisie",
            "Investeer in jeugd en ontwikkeling",
            "Neem soms korte termijn pijn voor lange termijn winst",
            "Blijf gefocust op de grote doelen"
          ],
          quote: "Ik bouw niet voor vandaag, ik bouw voor de volgende tien jaar."
        },
        {
          name: "7. Omgaan met Druk",
          description: "Kalm blijven onder extreme druk",
          explanation: "Ferguson liet nooit zien dat hij stress had, wat vertrouwen gaf aan zijn spelers.",
          sportExample: "In de Champions League finale van 1999, 1-0 achter in de 90e minuut, bleef hij kalm en motiveerde zijn team tot een 2-1 overwinning.",
          practicalTips: [
            "Ontwikkel emotionele zelfcontrole",
            "Laat je team je stress niet zien",
            "Focus op wat je kunt beïnvloeden",
            "Gebruik druk als motivatie, niet als last"
          ],
          quote: "Druk is een privilege - het betekent dat je iets belangrijks doet."
        },
        {
          name: "8. Individuele Benadering",
          description: "Elke speler heeft een unieke aanpak nodig",
          explanation: "Ferguson behandelde elke speler anders, gebaseerd op hun persoonlijkheid en behoeften.",
          sportExample: "Paul Scholes kreeg vrijheid en vertrouwen, terwijl Wayne Rooney sturing en structuur nodig had.",
          practicalTips: [
            "Leer elke teamlid persoonlijk kennen",
            "Pas je leiderschapsstijl aan per persoon",
            "Investeer tijd in individuele gesprekken",
            "Respecteer verschillende persoonlijkheden"
          ],
          quote: "Je kunt niet iedereen hetzelfde behandelen, omdat niet iedereen hetzelfde is."
        },
        {
          name: "9. Nooit Opgeven Mentaliteit",
          description: "Doorzetten tot het einde, altijd geloven in succes",
          explanation: "Ferguson's teams stonden bekend om late goals en comebacks.",
          sportExample: "'Fergie Time' - zijn teams scoorden vaak cruciale goals in de laatste minuten omdat ze nooit opgaven.",
          practicalTips: [
            "Cultiveer een nooit-opgeven mentaliteit",
            "Leer van nederlagen maar laat je er niet door definiëren",
            "Blijf geloven in je team, ook in moeilijke tijden",
            "Maak van tegenslag een motivatie"
          ],
          quote: "Het spel is pas afgelopen als de scheidsrechter fluit. Tot die tijd blijven we vechten."
        }
      ],
      implementation: {
        title: "Implementatie in Andere Sporten",
        description: "Ferguson's principes zijn toepasbaar in elke sport en organisatie:",
        steps: [
          "Begin met duidelijke autoriteit en standaarden",
          "Bouw een cultuur van teamwork en discipline",
          "Leer elke teamlid individueel kennen",
          "Ontwikkel een langetermijnvisie",
          "Blijf jezelf en je team vernieuwen"
        ]
      },
      keyInsights: [
        "Langdurig succes vereist meer dan talent - het gaat om cultuur",
        "Discipline en standaarden zijn niet-onderhandelbaar",
        "Individuele benadering binnen teamkader is essentieel",
        "Voortdurende vernieuwing voorkomt stagnatie",
        "Mentale kracht is net zo belangrijk als fysieke vaardigheden"
      ],
      sportApplication: "Ferguson's filosofie toont aan dat succesvol sportleiderschap gaat om het creëren van een cultuur waarin individuen kunnen excelleren binnen een teamkader. Zijn principes zijn toepasbaar in elke sport waar langdurig succes en teamcohesie belangrijk zijn."
    }
  },
  {
    id: 'van-vugt-wiltschut',
    title: "Van Vugt & Wiltschut: Gezag vs Dominantie",
    description: "Mark van Vugt en Wendy Wiltschut onderzoeken het verschil tussen gezag (gebaseerd op respect) en dominantie (gebaseerd op macht), en hoe dit leiderschap beïnvloedt.",
    content: {
      introduction: {
        title: "Gezag versus Dominantie - Het Fundamentele Verschil",
        description: "Evolutiepsychologen Mark van Vugt en Wendy Wiltschut onderzochten hoe mensen leiders kiezen en volgen, en ontdekten een cruciaal onderscheid tussen twee vormen van leiderschap.",
        contextualNote: "Hun onderzoek combineert evolutiepsychologie, sociale psychologie en organisatiekunde om te begrijpen waarom sommige leiders succesvol zijn en anderen falen."
      },
      fiveComparisons: [
        {
          dimension: "1. Basis van Macht",
          authority: "Gebaseerd op respect, vertrouwen en erkenning van competentie",
          dominance: "Gebaseerd op angst, dwang en fysieke of sociale macht",
          nuance: "Gezag wordt vrijwillig gegeven, dominantie wordt opgelegd",
          explanation: "Mensen volgen gezaghebbende leiders omdat ze willen, dominante leiders omdat ze moeten.",
          examples: {
            gezag: "Nelson Mandela - gevolgd vanwege moreel gezag",
            dominantie: "Dictators - gevolgd vanwege angst voor consequenties"
          }
        },
        {
          dimension: "2. Duurzaamheid",
          authority: "Stabiel en duurzaam, groeit vaak in de tijd",
          dominance: "Fragiel en tijdelijk, vereist constante handhaving",
          nuance: "Gezag versterkt zichzelf, dominantie verzwakt zichzelf",
          explanation: "Gezag creëert loyaliteit die zichzelf versterkt, dominantie creëert weerstand die uiteindelijk tot opstand leidt.",
          examples: {
            gezag: "Sir Alex Ferguson - 26 jaar succesvol leiderschap",
            dominantie: "Autoritaire coaches - vaak korte termijn 'succes'"
          }
        },
        {
          dimension: "3. Effect op Volgers",
          authority: "Stimuleert groei, creativiteit en eigenaarschap",
          dominance: "Onderdrukt initiatief, creëert afhankelijkheid en angst",
          nuance: "Gezag maakt mensen sterker, dominantie maakt mensen zwakker",
          explanation: "Onder gezaghebbend leiderschap ontwikkelen mensen zich, onder dominantie stagneren ze.",
          examples: {
            gezag: "Coaches die spelers beter maken dan ze dachten mogelijk te zijn",
            dominantie: "Coaches die spelers afhankelijk maken van hun instructies"
          }
        },
        {
          dimension: "4. Communicatiestijl",
          authority: "Open, transparant, luistert naar feedback",
          dominance: "Eenrichtingsverkeer, geen ruimte voor tegenspraak",
          nuance: "Gezag nodigt uit tot dialoog, dominantie eist gehoorzaamheid",
          explanation: "Gezaghebbende leiders zijn zelfverzekerd genoeg om kritiek te accepteren, dominante leiders zien kritiek als bedreiging.",
          examples: {
            gezag: "Pep Guardiola - staat open voor input van spelers",
            dominantie: "Autoritaire trainers - 'doe wat ik zeg, vraag niet waarom'"
          }
        },
        {
          dimension: "5. Evolutionaire Oorsprong",
          authority: "Ontwikkeld voor groepsvoordeel en samenwerking",
          dominance: "Ontwikkeld voor individueel voordeel en competitie",
          nuance: "Gezag dient de groep, dominantie dient het individu",
          explanation: "Evolutionair gezien ontstond gezag om groepen effectiever te maken, dominantie om individuele voordelen te behalen.",
          examples: {
            gezag: "Natuurlijke leiders die groepsprestaties verbeteren",
            dominantie: "Alfa-types die vooral zichzelf bevoordelen"
          }
        }
      ],
      realWorldExamples: {
        title: "Voorbeelden uit de Werkelijkheid",
        mandela: {
          name: "Nelson Mandela - Gezag",
          description: "Perfect voorbeeld van gezaghebbend leiderschap",
          characteristics: [
            "Moreel gezag door persoonlijke offers",
            "Verzoening in plaats van wraak",
            "Luisterde naar alle partijen",
            "Diende het land, niet zichzelf"
          ]
        },
        bokito: {
          name: "Bokito de Gorilla - Dominantie",
          description: "Voorbeeld van pure dominantie uit het dierenrijk",
          characteristics: [
            "Fysieke intimidatie",
            "Controle door angst",
            "Geen empathie of samenwerking",
            "Alleen eigen belang"
          ]
        },
        biden: {
          name: "Joe Biden - Complex Voorbeeld",
          description: "Toont hoe moderne leiders elementen van beide kunnen hebben",
          authorityAspects: [
            "Ervaring en institutionele kennis",
            "Empathie en luisterbereidheid",
            "Consensus zoeken"
          ],
          complexities: [
            "Soms autoritair in besluitvorming",
            "Institutionele macht vs persoonlijk gezag",
            "Balans tussen leiding en samenwerking"
          ]
        },
        trump: {
          name: "Donald Trump - Dominantie met Gezag Elementen",
          description: "Controversieel voorbeeld dat beide aspecten toont",
          dominanceAspects: [
            "Intimidatie en persoonlijke aanvallen",
            "Geen ruimte voor tegenspraak",
            "Eigen belang centraal"
          ],
          authorityAspects: [
            "Charisma en overtuigingskracht",
            "Sterke aanhang die hem vertrouwt",
            "Duidelijke visie (voor aanhangers)"
          ],
          nuance: "Toont aan dat de grens tussen gezag en dominantie soms dun kan zijn, afhankelijk van perspectief van de volger"
        }
      },
      culturalContext: {
        title: "Nederlandse Context",
        description: "In Nederland wordt gezag traditioneel meer gewaardeerd dan dominantie",
        example: "Nederlandse 'poldermodel' - consensus en overleg boven autoritaire besluitvorming",
        dutchContext: "Tall poppy syndrome - wantrouwen jegens te dominante leiders, voorkeur voor bescheiden maar competent leiderschap"
      },
      practicalApplication: {
        title: "Toepassing in Sportleiderschap",
        analysis: "Voor sportleiders is het cruciaal om gezag op te bouwen in plaats van te vertrouwen op dominantie, vooral voor langdurig succes.",
        steps: [
          "Bouw competentie op door continue ontwikkeling",
          "Toon respect voor je spelers als individuen",
          "Wees transparant in je besluitvorming",
          "Luister naar feedback en pas aan waar nodig",
          "Dien het team, niet je eigen ego"
        ]
      },
      keyInsights: [
        "Gezag is duurzamer en effectiever dan dominantie",
        "Mensen presteren beter onder gezaghebbend leiderschap",
        "Dominantie kan korte termijn resultaten geven maar schaadt lange termijn",
        "Moderne samenlevingen waarderen gezag boven dominantie",
        "Echte leiders bouwen anderen op in plaats van ze klein te houden"
      ],
      sportApplication: "In de sport is dit onderscheid cruciaal omdat sporters hun beste prestaties leveren wanneer ze intrinsiek gemotiveerd zijn. Gezaghebbende coaches creëren omgevingen waarin sporters groeien en excelleren, terwijl dominante coaches vaak korte termijn compliance krijgen ten koste van lange termijn ontwikkeling en welzijn."
    }
  },
  {
    id: 'authority-development',
    title: "Gezagsontwikkeling in de Praktijk",
    description: "Een praktische gids voor het ontwikkelen van natuurlijk gezag in sportleiderschap, gebaseerd op vijf kerncomponenten en continue ontwikkeling.",
    content: {
      introduction: {
        title: "Gezagsontwikkeling - Van Positie naar Respect",
        description: "Echte gezag ontstaat niet door een titel of positie, maar door het consistent demonstreren van competentie, integriteit en zorg voor anderen.",
        keyInsight: "Gezag is iets wat je verdient door je daden, niet iets wat je krijgt door je functie."
      },
      fiveComponents: [
        {
          name: "1. Competentie en Expertise",
          description: "De basis van gezag is het beheersen van je vak en het continu ontwikkelen van je kennis en vaardigheden.",
          keyPrinciple: "Je kunt alleen leiden in gebieden waar je zelf bekwaam bent",
          characteristics: [
            "Diepgaande kennis van je sport/gebied",
            "Praktische ervaring en bewezen resultaten",
            "Continue leer- en ontwikkelingsmentaliteit",
            "Vermogen om complexe zaken eenvoudig uit te leggen"
          ],
          sportExample: {
            example: "Pep Guardiola's Tactische Meesterschap",
            explanation: "Guardiola's gezag komt voort uit zijn diepgaande begrip van voetbaltactieken, zijn vermogen om spelers te ontwikkelen, en zijn bewezen track record van succes.",
            lesson: "Spelers respecteren hem omdat hij hen beter maakt en omdat zijn methoden werken."
          },
          practicalTips: [
            "Investeer dagelijks in je vakkennis",
            "Leer van andere succesvolle coaches/leiders",
            "Blijf op de hoogte van nieuwe ontwikkelingen",
            "Deel je kennis genereus met anderen",
            "Erken wat je niet weet en leer bij"
          ],
          quote: "Expertise is de basis van gezag - je kunt niet leiden waar je niet bekwaam bent."
        },
        {
          name: "2. Integriteit en Authenticiteit",
          description: "Gezag vereist dat je woorden en daden overeenkomen, en dat je authentiek bent in je interacties met anderen.",
          keyPrinciple: "Vertrouwen is de basis van gezag, en vertrouwen ontstaat door consistentie tussen woord en daad",
          characteristics: [
            "Doen wat je zegt en zeggen wat je doet",
            "Eerlijk zijn, ook als het moeilijk is",
            "Toegeven van fouten en leren ervan",
            "Authentiek blijven onder druk"
          ],
          sportExample: {
            example: "Jürgen Klopp's Eerlijkheid",
            explanation: "Klopp's gezag komt mede door zijn eerlijkheid - hij geeft toe wanneer zijn team slecht speelt, neemt verantwoordelijkheid voor nederlagen, en is authentiek in zijn emoties.",
            lesson: "Spelers vertrouwen hem omdat hij altijd eerlijk is, ook als de waarheid pijnlijk is."
          },
          practicalTips: [
            "Houd je beloftes, hoe klein ook",
            "Geef fouten toe en leer ervan",
            "Wees consistent in je waarden en gedrag",
            "Toon je menselijke kant",
            "Neem verantwoordelijkheid voor je beslissingen"
          ],
          quote: "Integriteit is niet onderhandelbaar - zonder vertrouwen is er geen gezag."
        },
        {
          name: "3. Empathie en Menselijke Verbinding",
          description: "Gezag ontstaat wanneer mensen voelen dat je om hen geeft als persoon, niet alleen als presteerder.",
          keyPrinciple: "Mensen volgen leiders die om hen geven, niet alleen leiders die van hen winnen",
          characteristics: [
            "Oprechte interesse in mensen als individu",
            "Vermogen om te luisteren en te begrijpen",
            "Rekening houden met persoonlijke omstandigheden",
            "Emotionele intelligentie en sociale vaardigheden"
          ],
          sportExample: {
            example: "Sir Alex Ferguson's Persoonlijke Benadering",
            explanation: "Ferguson kende niet alleen de voetbalvaardigheden van zijn spelers, maar ook hun families, dromen en angsten. Hij paste zijn benadering aan per individu.",
            lesson: "Spelers gaven alles voor hem omdat ze voelden dat hij om hen gaf als mensen, niet alleen als voetballers."
          },
          practicalTips: [
            "Leer je teamleden persoonlijk kennen",
            "Toon interesse in hun leven buiten de sport",
            "Luister actief naar hun zorgen en ideeën",
            "Pas je communicatie aan per persoon",
            "Vier persoonlijke mijlpalen mee"
          ],
          quote: "Mensen geven niet om hoeveel je weet tot ze weten hoeveel je om hen geeft."
        },
        {
          name: "4. Visie en Inspiratie",
          description: "Gezaghebbende leiders kunnen anderen inspireren door een duidelijke, betekenisvolle visie die verder gaat dan alleen winnen.",
          keyPrinciple: "Mensen volgen leiders die hen helpen een betere versie van zichzelf te worden",
          characteristics: [
            "Duidelijke visie op wat mogelijk is",
            "Vermogen om anderen te inspireren en motiveren",
            "Focus op groei en ontwikkeling",
            "Betekenis geven aan inspanningen"
          ],
          sportExample: {
            example: "Johan Cruyff's Voetbalfilosofie",
            explanation: "Cruyff's gezag kwam niet alleen van zijn spelerscarrière, maar van zijn visie op hoe voetbal gespeeld moest worden - mooi, intelligent en aanvallend.",
            lesson: "Spelers en coaches wilden voor hem werken omdat hij hen liet geloven in een hoger doel dan alleen winnen."
          },
          practicalTips: [
            "Ontwikkel een duidelijke visie op succes",
            "Communiceer waarom jullie doen wat jullie doen",
            "Help mensen hun potentieel zien",
            "Maak doelen betekenisvol",
            "Inspireer door je eigen passie te tonen"
          ],
          quote: "Visie geeft richting, inspiratie geeft energie - beide zijn nodig voor gezag."
        },
        {
          name: "5. Moed en Besluitvaardigheid",
          description: "Gezag vereist de moed om moeilijke beslissingen te nemen en er voor te staan, ook onder druk.",
          keyPrinciple: "Leiderschap betekent soms eenzame beslissingen nemen voor het grotere goed",
          characteristics: [
            "Bereidheid om moeilijke beslissingen te nemen",
            "Standvastigheid onder druk",
            "Moed om voor je overtuigingen op te komen",
            "Verantwoordelijkheid nemen voor consequenties"
          ],
          sportExample: {
            example: "Zinedine Zidane's Moedige Keuzes",
            explanation: "Zidane toonde moed door ervaren sterren op de bank te zetten als het team daarvan profiteerde, en door zijn eigen principes te volgen ondanks media-druk.",
            lesson: "Spelers respecteerden hem omdat hij moedige beslissingen nam voor het team, niet voor zijn eigen populariteit."
          },
          practicalTips: [
            "Neem beslissingen gebaseerd op principes, niet op populariteit",
            "Sta achter je keuzes, ook als ze bekritiseerd worden",
            "Toon moed in moeilijke gesprekken",
            "Bescherm je team tegen externe druk",
            "Leer van fouten maar blijf besluitvaardig"
          ],
          quote: "Moed is niet de afwezigheid van angst, maar handelen ondanks de angst."
        }
      ],
      continuousDevelopment: {
        title: "Continue Ontwikkeling van Gezag",
        description: "Gezag is geen eindbestemming maar een voortdurend proces van groei en ontwikkeling.",
        components: [
          "Regelmatige zelfreflectie en feedback zoeken",
          "Leren van andere gezaghebbende leiders",
          "Investeren in persoonlijke en professionele ontwikkeling",
          "Aanpassen aan veranderende omstandigheden",
          "Nederig blijven en open staan voor verbetering"
        ]
      },
      practicalApplication: {
        title: "Implementatie in de Sportpraktijk",
        analysis: "Het ontwikkelen van gezag is een bewust proces dat tijd en consistentie vereist.",
        steps: [
          "Evalueer je huidige niveau in elk van de vijf componenten",
          "Identificeer je sterkste en zwakste gebieden",
          "Maak een ontwikkelingsplan met concrete acties",
          "Zoek feedback van teamleden en collega's",
          "Blijf consistent werken aan je ontwikkeling"
        ]
      },
      keyInsights: [
        "Gezag ontwikkelt zich geleidelijk door consistent gedrag",
        "Alle vijf componenten zijn nodig - zwakte in één gebied ondermijnt het geheel",
        "Authenticiteit is crucialer dan perfectie",
        "Gezag moet voortdurend onderhouden en ontwikkeld worden",
        "Het gaat om dienen, niet om gediend worden"
      ],
      sportApplication: "In de sport is gezagsontwikkeling essentieel omdat sporters hun beste prestaties leveren onder leiders die ze respecteren en vertrouwen. Door bewust te werken aan deze vijf componenten kunnen sportleiders een omgeving creëren waarin iedereen kan groeien en excelleren."
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
                style={{ width: `${Math.min((userProgress.totalPoints / 550) * 100, 100)}%` }}
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
                  Leer over 9 essentiële leiderschapstheorieën toegepast op sport, fitness, bewegen en fysieke activiteit.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2 text-lg">📚 {theories.length} Theorieën</h3>
                    <p className="text-blue-600">Van Mintzberg tot Ferguson - essentiële leiderschapstheorieën voor sport</p>
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