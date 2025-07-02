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
    description: "Henry Mintzberg identificeerde 10 managementrollen verdeeld over 3 categorieën die elke effectieve leider moet beheersen.",
    content: {
      categories: [
        {
          name: "Interpersoonlijke Rollen",
          roles: [
            {
              name: "Boegbeeld",
              description: "Representeert de organisatie naar buiten toe en vervult ceremoniële taken"
            },
            {
              name: "Leider", 
              description: "Motiveert en stuurt teamleden aan, zorgt voor teamcohesie"
            },
            {
              name: "Verbindingspersoon",
              description: "Onderhoudt netwerk van contacten binnen en buiten de organisatie"
            }
          ]
        },
        {
          name: "Informationele Rollen",
          roles: [
            {
              name: "Monitor",
              description: "Verzamelt informatie uit de omgeving om op de hoogte te blijven"
            },
            {
              name: "Verspreider",
              description: "Deelt relevante informatie met teamleden en andere afdelingen"
            },
            {
              name: "Woordvoerder",
              description: "Communiceert namens de organisatie naar externe partijen"
            }
          ]
        },
        {
          name: "Besluitvormingsrollen",
          roles: [
            {
              name: "Ondernemer",
              description: "Initieert veranderingen en zoekt naar nieuwe kansen"
            },
            {
              name: "Probleemoplosser",
              description: "Reageert op onverwachte problemen en crises"
            },
            {
              name: "Hulpbronnenverdeler",
              description: "Bepaalt hoe tijd, geld en middelen worden ingezet"
            },
            {
              name: "Onderhandelaar",
              description: "Vertegenwoordigt de organisatie in belangrijke onderhandelingen"
            }
          ]
        }
      ],
      sportExample: "Een hoofdtrainer van een professioneel voetbalteam vervult alle 10 rollen: als boegbeeld bij persconferenties, als leider van het team, als verbindingspersoon met de directie, als monitor van spelersutvoeringen, als verspreider van tactische informatie, als woordvoerder naar de media, als ondernemer bij het ontwikkelen van nieuwe tactieken, als probleemoplosser bij blessures, als hulpbronnenverdeler van speeltijd, en als onderhandelaar bij transfers."
    }
  },
  {
    id: 'hersey-blanchard',
    title: "Situationeel Leidinggeven (SLII)",
    description: "Hersey en Blanchard ontwikkelden een model waarbij leiderschapsstijl wordt aangepast aan het ontwikkelingsniveau van de medewerker of sporter.",
    content: {
      introduction: {
        title: "Kern van Situationeel Leidinggeven",
        description: "Er is geen 'beste' leiderschapsstijl - de effectiviteit hangt af van de situatie en het ontwikkelingsniveau van je teamleden.",
        keyInsight: "Goede leiders passen hun stijl aan op basis van competentie en betrokkenheid van hun teamleden."
      },
      coreModel: {
        title: "Het SLII Model",
        description: "Het model is gebaseerd op twee dimensies van leiderschapsgedrag:",
        dimensions: [
          {
            name: "Sturend Gedrag",
            description: "De mate waarin een leider specifieke instructies geeft",
            characteristics: [
              "Duidelijke doelen stellen",
              "Taken gedetailleerd uitleggen", 
              "Prestaties nauwlettend volgen",
              "Deadlines en standaarden communiceren"
            ]
          },
          {
            name: "Ondersteunend Gedrag", 
            description: "De mate waarin een leider luistert en emotionele steun biedt",
            characteristics: [
              "Actief luisteren naar zorgen",
              "Aanmoedigen en complimenteren",
              "Betrekken bij besluitvorming",
              "Vertrouwen en zelfvertrouwen opbouwen"
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
            "Weinig ervaring of vaardigheden",
            "Optimistisch over mogelijkheden",
            "Heeft duidelijke sturing nodig"
          ],
          needs: "Veel sturing, weinig ondersteuning - ze zijn al gemotiveerd",
          sportExample: "Een nieuwe speler die net bij het team komt - vol enthousiasme maar moet alles nog leren over tactiek en teamcultuur."
        },
        {
          level: "D2 - Ontgoochelde Leerling", 
          competence: "Laag tot Gemiddeld",
          commitment: "Laag",
          characteristics: [
            "Realiseert dat het moeilijker is dan gedacht",
            "Motivatie neemt af door tegenslagen", 
            "Heeft wat vaardigheden ontwikkeld",
            "Twijfelt aan eigen kunnen"
          ],
          needs: "Veel sturing EN veel ondersteuning - coaching is essentieel",
          sportExample: "Een jonge sporter die na eerste successen tegen sterkere tegenstanders speelt en twijfelt aan zijn kunnen - heeft zowel technische begeleiding als mentale steun nodig."
        },
        {
          level: "D3 - Voorzichtige Uitvoerder",
          competence: "Gemiddeld tot Hoog", 
          commitment: "Wisselend",
          characteristics: [
            "Heeft de vaardigheden maar mist zelfvertrouwen",
            "Kan het werk aan maar aarzelt",
            "Wil meer verantwoordelijkheid maar is onzeker",
            "Heeft vooral vertrouwen nodig"
          ],
          needs: "Weinig sturing, veel ondersteuning - vooral vertrouwen geven",
          sportExample: "Een ervaren speler die technisch goed is maar moeite heeft met zelfvertrouwen na een blessure - kan het spel aan maar heeft mentale steun nodig."
        },
        {
          level: "D4 - Zelfstandige Uitvoerder",
          competence: "Hoog",
          commitment: "Hoog",
          characteristics: [
            "Heeft zowel vaardigheden als motivatie",
            "Kan zelfstandig werken en beslissingen nemen", 
            "Neemt verantwoordelijkheid voor resultaten",
            "Kan anderen begeleiden"
          ],
          needs: "Weinig sturing, weinig ondersteuning - ruimte geven om te excelleren",
          sportExample: "Een ervaren aanvoerder die zowel technisch uitblinkt als het team kan motiveren - heeft vooral autonomie nodig om zijn rol optimaal te vervullen."
        }
      ],
      leadershipStyles: [
        {
          style: "S1 - Sturend",
          behavior: "Hoog Sturend, Laag Ondersteunend",
          when: "Voor D1 - Enthousiaste Beginners",
          description: "Geef duidelijke instructies en controleer nauwlettend de uitvoering.",
          approach: [
            "Specifieke doelen en deadlines stellen",
            "Stap-voor-stap instructies geven",
            "Regelmatig controleren en feedback geven",
            "Beslissingen zelf nemen"
          ],
          sportExample: "Een trainer die een nieuwe speler exact uitlegt hoe een techniek uitgevoerd moet worden en elke herhaling corrigeert."
        },
        {
          style: "S2 - Coachend", 
          behavior: "Hoog Sturend, Hoog Ondersteunend",
          when: "Voor D2 - Ontgoochelde Leerlingen",
          description: "Combineer duidelijke sturing met veel emotionele ondersteuning en uitleg.",
          approach: [
            "Uitleggen waarom taken belangrijk zijn",
            "Luisteren naar zorgen en frustraties", 
            "Aanmoedigen bij tegenslagen",
            "Samen beslissingen nemen"
          ],
          sportExample: "Een coach die een speler door een moeilijke periode helpt door zowel technische correcties te geven als mentaal te ondersteunen."
        },
        {
          style: "S3 - Ondersteunend",
          behavior: "Laag Sturend, Hoog Ondersteunend", 
          when: "Voor D3 - Voorzichtige Uitvoerders",
          description: "Focus op het opbouwen van vertrouwen en betrek bij besluitvorming.",
          approach: [
            "Vragen stellen in plaats van vertellen",
            "Luisteren naar ideeën en zorgen",
            "Vertrouwen uitspreken in hun kunnen", 
            "Samen problemen oplossen"
          ],
          sportExample: "Een trainer die een ervaren maar onzekere speler helpt door te vragen wat hij denkt dat de beste aanpak is en hem te steunen in zijn keuzes."
        },
        {
          style: "S4 - Delegerend",
          behavior: "Laag Sturend, Laag Ondersteunend",
          when: "Voor D4 - Zelfstandige Uitvoerders", 
          description: "Geef autonomie en vertrouw op hun competentie en motivatie.",
          approach: [
            "Eindresultaten afspreken, niet de methode",
            "Beschikbaar zijn voor vragen",
            "Ruimte geven voor eigen beslissingen",
            "Erkenning geven voor prestaties"
          ],
          sportExample: "Een coach die zijn aanvoerder de vrijheid geeft om tijdens de wedstrijd tactische aanpassingen te maken en het team aan te sturen."
        }
      ],
      keyPrinciples: [
        "Er is geen beste leiderschapsstijl - het hangt af van de situatie",
        "Mensen ontwikkelen zich in verschillende tempo's en op verschillende gebieden",
        "Hetzelfde persoon kan op verschillende taken verschillende ontwikkelingsniveaus hebben",
        "Effectieve leiders zijn flexibel en passen hun stijl aan",
        "Het doel is mensen te helpen groeien naar D4 niveau"
      ]
    }
  },
  {
    id: 'french-raven',
    title: "French & Raven's Machtsbronnen",
    description: "French en Raven identificeerden zes bronnen van macht die leiders kunnen gebruiken om invloed uit te oefenen.",
    content: {
      powerSources: [
        {
          name: "Positiemacht (Legitimate Power)",
          description: "Macht die voortkomt uit je formele positie of functie in de organisatie",
          characteristics: [
            "Gebaseerd op hiërarchie en autoriteit",
            "Verdwijnt wanneer je je positie verlaat", 
            "Wordt geaccepteerd omdat het 'hoort'",
            "Kan leiden tot compliance maar niet altijd commitment"
          ],
          sportExample: "Een hoofdtrainer heeft positiemacht - spelers luisteren omdat hij de trainer is, niet per se omdat ze hem respecteren."
        },
        {
          name: "Beloningmacht (Reward Power)",
          description: "Macht gebaseerd op het kunnen geven van beloningen en voordelen",
          characteristics: [
            "Controle over gewenste middelen",
            "Kan materieel of immaterieel zijn",
            "Effectief voor korte termijn motivatie",
            "Risico van afhankelijkheid en manipulatie"
          ],
          sportExample: "Een coach die speeltijd, captaincy of nominaties kan toekennen heeft beloningmacht over zijn spelers."
        },
        {
          name: "Dwangmacht (Coercive Power)", 
          description: "Macht gebaseerd op het kunnen straffen of ongewenste gevolgen opleggen",
          characteristics: [
            "Gebaseerd op angst voor consequenties",
            "Kan leiden tot weerstand en sabotage",
            "Effectief voor compliance, niet voor commitment", 
            "Beschadigt vaak relaties op lange termijn"
          ],
          sportExample: "Een trainer die spelers kan schorsen, uit het team kan zetten of extra trainingen kan opleggen heeft dwangmacht."
        },
        {
          name: "Expertmacht (Expert Power)",
          description: "Macht gebaseerd op kennis, vaardigheden en expertise",
          characteristics: [
            "Gebaseerd op competentie en kennis",
            "Wordt gerespecteerd en gewaardeerd",
            "Moet constant onderhouden worden",
            "Leidt tot echte invloed en respect"
          ],
          sportExample: "Een fysiotherapeut heeft expertmacht - atleten luisteren naar zijn advies omdat hij de kennis heeft over blessurepreventie en herstel."
        },
        {
          name: "Referentiemacht (Referent Power)",
          description: "Macht gebaseerd op persoonlijke aantrekkingskracht, charisma en respect",
          characteristics: [
            "Gebaseerd op persoonlijke eigenschappen",
            "Mensen willen je volgen en op je lijken",
            "Zeer effectief voor motivatie en commitment",
            "Moeilijk te ontwikkelen maar zeer waardevol"
          ],
          sportExample: "Een gerespecteerde aanvoerder heeft referentiemacht - teamgenoten volgen hem omdat ze hem bewonderen en respecteren als persoon."
        },
        {
          name: "Informatiemacht (Information Power)",
          description: "Macht gebaseerd op toegang tot belangrijke informatie",
          characteristics: [
            "Controle over waardevolle informatie",
            "Kan strategisch gedeeld of achtergehouden worden",
            "Tijdelijk van aard - informatie verliest waarde",
            "Kan leiden tot afhankelijkheid"
          ],
          sportExample: "Een scout die exclusieve informatie heeft over tegenstanders of potentiële transfers heeft informatiemacht binnen de organisatie."
        }
      ],
      keyInsights: [
        "Effectieve leiders combineren meerdere machtsbronnen",
        "Expert- en referentiemacht zijn het meest duurzaam",
        "Positiemacht alleen is niet genoeg voor effectief leiderschap",
        "Dwangmacht moet spaarzaam gebruikt worden",
        "Macht moet ethisch en verantwoordelijk gebruikt worden"
      ],
      sportApplication: "In sport zijn expertmacht (kennis van het spel) en referentiemacht (respect van spelers) vaak belangrijker dan alleen positiemacht. De beste coaches combineren hun formele autoriteit met echte expertise en persoonlijk charisma."
    }
  },
  {
    id: 'keltner-power',
    title: "Keltner's Macht Paradox",
    description: "Dacher Keltner ontdekte dat macht letterlijk je brein verandert en empathie vermindert - de eigenschappen die je macht gaven, verdwijnen door macht zelf.",
    content: {
      paradox: {
        title: "De Macht Paradox",
        description: "De eigenschappen die je macht geven (empathie, samenwerking, luisteren) worden onderdrukt door macht zelf.",
        mechanism: "Macht activeert het beloningssysteem in je brein en onderdrukt de empathie-circuits, waardoor je minder goed wordt in het begrijpen van anderen."
      },
      brainChanges: [
        {
          name: "Verminderde Empathie",
          description: "Machtige mensen worden slechter in het herkennen van emoties bij anderen",
          sportExample: "Een succesvolle coach die niet meer doorheeft dat zijn spelers gestrest of onzeker zijn"
        },
        {
          name: "Toegenomen Impulsiviteit", 
          description: "Macht vermindert zelfcontrole en verhoogt risicogedrag",
          sportExample: "Een sportdirecteur die overhaaste beslissingen neemt zonder input van anderen"
        },
        {
          name: "Stereotype Denken",
          description: "Machtige mensen gaan meer in hokjes denken en individuele verschillen negeren",
          sportExample: "Een trainer die spelers alleen nog ziet als 'types' in plaats van als unieke individuen"
        },
        {
          name: "Verminderd Luisteren",
          description: "Naarmate macht toeneemt, neemt de neiging af om echt naar anderen te luisteren",
          sportExample: "Een hoofdcoach die geen feedback meer accepteert van assistenten of spelers"
        }
      ],
      consequences: [
        "Slechtere besluitvorming door gebrek aan diverse input",
        "Verminderde teamcohesie en vertrouwen", 
        "Hogere kans op ethische misstappen",
        "Verlies van de kwaliteiten die oorspronkelijk tot succes leidden"
      ],
      prevention: [
        {
          name: "Bewustwording",
          description: "Erken dat macht je brein verandert en blijf alert op de signalen",
          application: "Regelmatig zelfreflectie en feedback vragen aan vertrouwde personen"
        },
        {
          name: "Empathie Oefenen",
          description: "Bewust tijd besteden aan het begrijpen van anderen",
          application: "Regelmatige één-op-één gesprekken met teamleden zonder agenda"
        },
        {
          name: "Nederigheid Cultiveren",
          description: "Jezelf herinneren aan je eigen fouten en beperkingen",
          application: "Openlijk toegeven wanneer je het mis hebt en van anderen leert"
        },
        {
          name: "Diverse Input Zoeken",
          description: "Actief verschillende perspectieven en meningen vragen",
          application: "Een divers team van adviseurs en de moed om tegenspraak te accepteren"
        }
      ],
      sportExample: "Sir Alex Ferguson bleef gedurende zijn 26-jarige carrière bij Manchester United effectief omdat hij bewust empathie cultiveerde, individuele spelers bleef zien als unieke personen, en altijd open stond voor nieuwe ideeën van zijn staf."
    }
  },
  {
    id: 'kets-de-vries',
    title: "Kets de Vries: Disfunctioneel Leiderschap",
    description: "Manfred Kets de Vries identificeerde veelvoorkomende disfunctionele patronen bij leiders die effectiviteit ondermijnen.",
    content: {
      introduction: "Veel leiderschapsproblemen ontstaan door onbewuste psychologische patronen die leiders ontwikkelen als reactie op stress, onzekerheid of trauma.",
      dysfunctionalPatterns: [
        {
          name: "Conflictvermijding",
          description: "Systematisch vermijden van moeilijke gesprekken en confrontaties",
          characteristics: [
            "Problemen laten sudderen in plaats van aanpakken",
            "Hoop dat conflicten vanzelf oplossen",
            "Angst voor negatieve reacties",
            "Behoefte om aardig gevonden te worden"
          ],
          consequences: [
            "Problemen escaleren en worden groter",
            "Teamleden raken gefrustreerd",
            "Prestaties dalen door onduidelijkheid",
            "Verlies van respect en autoriteit"
          ],
          sportExample: "Een trainer die niet durft te zeggen dat een populaire speler slecht presteert, waardoor het hele team lijdt onder zijn slechte vorm."
        },
        {
          name: "Micromanagement",
          description: "Obsessieve controle over elk detail en onvermogen om te delegeren",
          characteristics: [
            "Wil alles zelf doen en controleren",
            "Vertrouwt anderen niet met belangrijke taken",
            "Bemoeit zich met kleinste details",
            "Angst om controle te verliezen"
          ],
          consequences: [
            "Teamleden voelen zich niet vertrouwd",
            "Creativiteit en initiatief worden onderdrukt",
            "Leider wordt overbelast en ineffectief",
            "Talent vertrekt naar andere organisaties"
          ],
          sportExample: "Een coach die elke pass, elke beweging wil controleren en spelers geen ruimte geeft om zelf beslissingen te nemen tijdens het spel."
        },
        {
          name: "Tiranniseren",
          description: "Gebruik van intimidatie, agressie en angst om controle te behouden",
          characteristics: [
            "Schreeuwen, bedreigen en vernederen",
            "Onvoorspelbare woede-uitbarstingen",
            "Geen tolerantie voor fouten of tegenspraak",
            "Macht gebruiken om anderen klein te houden"
          ],
          consequences: [
            "Angstcultuur in het team",
            "Creativiteit en risico's nemen verdwijnen",
            "Hoge verloop van personeel",
            "Lange termijn schade aan vertrouwen"
          ],
          sportExample: "Een trainer die spelers publiekelijk vernedert voor fouten, waardoor ze bang worden om risico's te nemen en hun natuurlijke spel verliezen."
        },
        {
          name: "Manisch Gedrag",
          description: "Hyperactiviteit en onsamenhangende beslissingen - 'heel hard rennen maar de verkeerde kant op'",
          characteristics: [
            "Constant bezig zijn zonder duidelijke focus",
            "Springen van project naar project",
            "Onrealistische deadlines en verwachtingen",
            "Geen tijd voor reflectie of planning"
          ],
          consequences: [
            "Team raakt uitgeput en verward",
            "Geen consistente richting of strategie",
            "Belangrijke details worden over het hoofd gezien",
            "Burnout bij leider en team"
          ],
          sportExample: "Een sportdirecteur die constant nieuwe initiatieven start, trainingsmethoden verandert en spelers haalt zonder duidelijke strategie, waardoor niemand weet waar ze aan toe zijn."
        }
      ],
      underlyingCauses: [
        "Onverwerkte trauma's uit het verleden",
        "Diepgewortelde onzekerheden en angsten", 
        "Gebrek aan zelfbewustzijn en reflectie",
        "Stress en druk van buitenaf",
        "Slechte rolmodellen in het verleden"
      ],
      solutions: [
        {
          name: "Zelfbewustzijn Ontwikkelen",
          description: "Herken je eigen patronen en triggers",
          methods: ["360-graden feedback", "Coaching", "Zelfreflectie", "Mindfulness"]
        },
        {
          name: "Professionele Hulp",
          description: "Werk met coaches of therapeuten aan onderliggende issues",
          methods: ["Executive coaching", "Therapie", "Mentoring", "Peer support groepen"]
        },
        {
          name: "Systemen Creëren",
          description: "Bouw structuren die disfunctioneel gedrag voorkomen",
          methods: ["Regelmatige feedback momenten", "Duidelijke procedures", "Checks and balances", "Team evaluaties"]
        }
      ],
      prevention: "De beste preventie is regelmatige zelfreflectie, het vragen van eerlijke feedback, en het creëren van een cultuur waarin mensen veilig de waarheid kunnen spreken."
    }
  },
  {
    id: 'maccoby',
    title: "Maccoby's Productief Narcisme",
    description: "Michael Maccoby ontdekte dat effectieve leiders vier narcistische elementen nodig hebben - maar alleen als ze niet doorslaan naar destructief narcisme.",
    content: {
      introduction: {
        title: "De Narcisme Paradox",
        description: "Effectieve leiders hebben bepaalde narcistische eigenschappen nodig om succesvol te zijn, maar deze mogen niet doorslaan naar destructief narcisme.",
        keyInsight: "Narcisme is niet per definitie slecht - in beperkte mate is het essentieel voor effectief leiderschap.",
        examples: "Denk aan leiders zoals Steve Jobs, Elon Musk, Mark Zuckerberg - allemaal hebben ze narcistische trekken die hen succesvol maken."
      },
      fourElements: [
        {
          name: "1. Visie - Het Grote Geheel Overzien",
          description: "Productief narcistische leiders hebben een duidelijke, grootse visie en weten precies waar ze naartoe willen.",
          characteristics: [
            "Zien het grote plaatje en lange termijn doelen",
            "Hebben een duidelijk beeld van de toekomst",
            "Kunnen complexe situaties overzien",
            "Durven grote, ambitieuze doelen te stellen"
          ],
          examples: [
            "Napoleon had een visie voor zijn wereldrijk",
            "Steve Jobs had een visie voor Apple en innovatie", 
            "Elon Musk heeft visies voor Tesla, ruimtevaart en duurzaamheid"
          ],
          sportExample: "Pep Guardiola heeft een duidelijke visie van hoe voetbal gespeeld moet worden - totaalvoetbal met balcontrole en positiespel. Deze visie past hij toe bij elk team waar hij komt.",
          questions: [
            "Heeft jouw leider een duidelijke visie?",
            "Kan hij/zij het grote geheel overzien?",
            "Weet iedereen waar het team naartoe wil?"
          ]
        },
        {
          name: "2. Charisma - Makkelijk Volgers Krijgen",
          description: "Ze zijn charismatisch en kunnen mensen overtuigen om hen te volgen, zelfs in moeilijke tijden.",
          characteristics: [
            "Natuurlijke uitstraling en aanwezigheid",
            "Kunnen mensen inspireren en motiveren",
            "Overtuigingskracht en enthousiasme",
            "Mensen willen hen volgen en geloven in hun ideeën"
          ],
          examples: [
            "Hitler (negatief voorbeeld) kon miljoenen mensen overtuigen",
            "Steve Jobs kon investeerders en klanten overtuigen van zijn producten",
            "Elon Musk haalt steeds weer miljarden op voor zijn projecten"
          ],
          sportExample: "Jürgen Klopp heeft een natuurlijk charisma waardoor spelers alles voor hem willen geven. Zijn enthousiasme en passie zijn aanstekelijk en creëren een sterke teamcultuur.",
          questions: [
            "Volgen mensen jouw leider graag?",
            "Kan hij/zij anderen overtuigen en inspireren?",
            "Heeft hij/zij natuurlijke uitstraling?"
          ]
        },
        {
          name: "3. Zelfvertrouwen - Vol Vertrouwen en Arrogant",
          description: "Ze hebben groot zelfvertrouwen, zijn overtuigend en niet bang om hun ideeën te verdedigen - soms grenzend aan arrogantie.",
          characteristics: [
            "Onwrikbaar geloof in eigen kunnen",
            "Durven grote beslissingen te nemen",
            "Laten zich niet snel ontmoedigen",
            "Kunnen overtuigend zijn ook bij tegenslag"
          ],
          examples: [
            "Donald Trump toont extreem zelfvertrouwen",
            "Steve Jobs was beroemd om zijn arrogantie en zelfvertrouwen",
            "Elon Musk blijft geloven in zijn projecten ondanks kritiek"
          ],
          sportExample: "Cristiano Ronaldo heeft een enorm zelfvertrouwen dat hem helpt om in cruciale momenten te presteren. Zijn 'arrogantie' motiveert hem om altijd de beste te willen zijn.",
          questions: [
            "Heeft jouw leider groot zelfvertrouwen?",
            "Durft hij/zij moeilijke beslissingen te nemen?",
            "Blijft hij/zij geloven in plannen ondanks tegenslag?"
          ]
        },
        {
          name: "4. Risicobereidheid - Niet Bang voor Risico's",
          description: "Ze durven grote risico's te nemen om hun doelen te bereiken en zijn bereid alles op het spel te zetten.",
          characteristics: [
            "Durven alles op één kaart te zetten",
            "Zien kansen waar anderen gevaar zien",
            "Bereid om radicale veranderingen door te voeren",
            "Laten zich niet tegenhouden door angst voor falen"
          ],
          examples: [
            "Elon Musk heeft meerdere keren zijn hele vermogen geïnvesteerd in zijn bedrijven",
            "Steve Jobs nam het risico om Apple compleet te heruitvinden",
            "Jeff Bezos verliet een veilige baan om Amazon te starten"
          ],
          sportExample: "Johan Cruyff nam het risico om als trainer een compleet nieuw systeem (totaalvoetbal) te introduceren bij Barcelona, wat revolutionair was maar ook kon mislukken.",
          questions: [
            "Durft jouw leider grote risico's te nemen?",
            "Is hij/zij bereid om alles te veranderen voor succes?",
            "Laat angst voor falen hem/haar tegenhouden?"
          ]
        }
      ],
      productiveVsDestructive: {
        title: "Productief vs Destructief Narcisme",
        productive: {
          description: "Wanneer deze vier elementen ten goede komen aan het team en de organisatie",
          characteristics: [
            "Visie wordt gedeeld en anderen worden erbij betrokken",
            "Charisma wordt gebruikt om het team te inspireren",
            "Zelfvertrouwen geeft anderen ook vertrouwen",
            "Risico's worden genomen voor het algemeen belang"
          ]
        },
        destructive: {
          description: "Wanneer deze elementen alleen het ego van de leider dienen",
          characteristics: [
            "Visie wordt opgedrongen zonder input van anderen",
            "Charisma wordt gebruikt voor persoonlijk gewin",
            "Zelfvertrouwen wordt arrogantie die anderen kleinhoudt",
            "Risico's worden genomen zonder rekening te houden met gevolgen voor anderen"
          ]
        }
      },
      keyMessage: {
        title: "De Balans is Cruciaal",
        description: "Deze vier narcistische elementen zijn essentieel voor effectief leiderschap, maar alleen als ze in balans blijven en ten goede komen aan het team.",
        warning: "Zodra ze doorslaan naar puur eigenbelang, wordt productief narcisme destructief narcisme."
      },
      sportApplication: "In sport zie je dit duidelijk: de beste coaches en aanvoerders hebben visie, charisma, zelfvertrouwen en durven risico's te nemen. Maar zodra het alleen nog om hun eigen ego gaat in plaats van het team, worden ze ineffectief."
    }
  },
  {
    id: 'ferguson',
    title: "Alex Ferguson's Leiderschapsfilosofie",
    description: "Sir Alex Ferguson leidde Manchester United 26 jaar lang naar ongekend succes. Zijn 9 leiderschapsprincipes zijn toepasbaar in elke organisatie.",
    content: {
      introduction: "Sir Alex Ferguson (1941) is een van de meest succesvolle coaches aller tijden. In 26 jaar bij Manchester United won hij 38 trofeeën, waaronder 13 Premier League titels en 2 Champions League cups.",
      nineElements: [
        {
          name: "1. Begin met de Basis",
          description: "Zorg dat de fundamenten op orde zijn voordat je aan verfijning begint",
          application: "Focus eerst op discipline, werkethiek en teamcultuur",
          sportExample: "Ferguson begon altijd met fysieke conditie en mentale instelling voordat hij aan tactiek werkte"
        },
        {
          name: "2. Discipline en Standaarden", 
          description: "Stel hoge standaarden en handhaaf deze consequent - geen uitzonderingen, zelfs niet voor sterren",
          application: "Regels gelden voor iedereen, ongeacht status of prestaties",
          sportExample: "Ferguson stuurde David Beckham weg toen deze de teamdiscipline ondermijnde, ondanks zijn sterrenstatuur"
        },
        {
          name: "3. Individuele Benadering",
          description: "Behandel elke speler als uniek individu met eigen behoeften en motivaties",
          application: "Pas je leiderschapsstijl aan per persoon",
          sportExample: "Ferguson behandelde Roy Keane anders dan Ryan Giggs, omdat ze verschillende persoonlijkheden hadden"
        },
        {
          name: "4. Lange Termijn Visie",
          description: "Denk in jaren, niet in wedstrijden - bouw voor de toekomst",
          application: "Investeer in jeugd en ontwikkeling, niet alleen in snelle resultaten",
          sportExample: "Ferguson bouwde meerdere generaties teams en investeerde zwaar in de jeugdacademie"
        },
        {
          name: "5. Controle en Autoriteit",
          description: "Behoud altijd de controle en laat nooit toe dat anderen je autoriteit ondermijnen",
          application: "Wees duidelijk over wie de beslissingen neemt",
          sportExample: "Ferguson tolereerde geen spelers die zijn autoriteit in twijfel trokken, ongeacht hun talent"
        },
        {
          name: "6. Teamwork boven Individualisme",
          description: "Het team gaat altijd voor individuele belangen",
          application: "Beloon teamspelers en ontmoedig ego's die het team schaden",
          sportExample: "Ferguson verkocht talentvolle spelers die het teambelang ondermijnden"
        },
        {
          name: "7. Voortdurende Verbetering",
          description: "Blijf leren, aanpassen en verbeteren - stilstand is achteruitgang",
          application: "Zoek constant naar nieuwe methoden en ideeën",
          sportExample: "Ferguson paste zijn tactieken aan naarmate het voetbal evolueerde en leerde van andere coaches"
        },
        {
          name: "8. Mentale Kracht Ontwikkelen",
          description: "Bouw veerkracht en mentale sterkte op bij je team",
          application: "Bereid je team voor op tegenslag en leer ze ermee om te gaan",
          sportExample: "Ferguson's teams waren beroemd om hun comebacks en mentale sterkte in moeilijke momenten"
        },
        {
          name: "9. Passie en Emotie",
          description: "Toon je passie en emotie - dit is aanstekelijk en motiveert anderen",
          application: "Laat zien dat je om het team en de doelen geeft",
          sportExample: "Ferguson's emotionele betrokkenheid bij wedstrijden motiveerde spelers om extra te presteren"
        }
      ],
      keyLessons: [
        "Consistentie in leiderschap over lange periode",
        "Balans tussen discipline en individuele aandacht",
        "Nooit compromissen sluiten met kernwaarden",
        "Investeren in mensen en hun ontwikkeling",
        "Aanpassingsvermogen zonder kernprincipes te verliezen"
      ],
      legacy: "Ferguson's succes kwam niet van één seizoen, maar van 26 jaar consequent toepassen van zijn principes. Hij toonde aan dat effectief leiderschap draait om mensen, niet alleen om tactiek.",
      modernApplication: "Ferguson's principes zijn nog steeds relevant in moderne sport en business: duidelijke waarden, individuele aandacht, lange termijn denken en het opbouwen van sterke culturen."
    }
  },
  {
    id: 'van-vugt-wiltschut',
    title: "Van Vugt & Wiltschut: Gezag vs Dominantie",
    description: "Mark van Vugt en Wendy Wiltschut onderzochten het verschil tussen gezag (gebaseerd op respect) en dominantie (gebaseerd op macht) in leiderschap.",
    content: {
      introduction: {
        title: "Het Fundamentele Verschil",
        description: "Gezag en dominantie zijn twee totaal verschillende manieren om invloed uit te oefenen, met verschillende oorzaken en gevolgen.",
        contextualNote: "Niet altijd is gezag beter dan dominantie - het hangt af van de situatie en cultuur. In sommige situaties kan dominant leiderschap effectiever zijn."
      },
      fiveComparisons: [
        {
          dimension: "1. Volgen: Vrije Keuze vs Onder Dreiging",
          authority: "Mensen volgen vrijwillig omdat ze geloven in de leider",
          dominance: "Mensen volgen uit dwang of vrees voor consequenties",
          explanation: "Bij gezag is volgen een bewuste keuze gebaseerd op respect en vertrouwen. Bij dominantie volgen mensen omdat ze moeten, niet omdat ze willen.",
          examples: {
            mandela: "Mensen volgden Mandela vrijwillig vanwege zijn integriteit",
            bokito: "Andere apen volgen Bokito uit angst voor zijn fysieke kracht"
          }
        },
        {
          dimension: "2. Perceptie: Gerespecteerd vs Gevreesd",
          authority: "De leider wordt gerespecteerd en bewonderd",
          dominance: "De dominante wordt gevreesd en gemeden",
          explanation: "Gezag creëert respect en loyaliteit, dominantie creëert angst en onderwerping.",
          examples: {
            biden: "Biden wordt gerespecteerd om zijn ervaring en integriteit",
            trump: "Trump wordt door sommigen gevreesd om zijn onvoorspelbaarheid"
          }
        },
        {
          dimension: "3. Legitimiteit: Informeel vs Formeel vs Legitiem",
          authority: "Informele leiders worden gevolgd zonder formele positie",
          dominance: "Formele leiders gebruiken hun positie voor controle",
          explanation: "Informele leiders hebben gezag zonder positie, formele leiders hebben positie zonder per se gezag. Legitieme leiders hebben beide.",
          nuance: "Mandela was lang informeel leider voordat hij president werd. Biden was informeel leider voordat hij president werd. Bokito heeft alleen formele positie (alfa). Trump heeft formele positie maar is omstreden qua legitimiteit.",
          examples: {
            mandela: "Jarenlang informeel leider, later legitiem als president",
            biden: "Informeel leider als senator, nu legitiem als president"
          }
        },
        {
          dimension: "4. Motivatie: Groepsbelang vs Eigenbelang",
          authority: "De leider dient het belang van de groep",
          dominance: "De dominante dient vooral zijn eigen belang",
          explanation: "Gezag-gebaseerde leiders stellen het groepsbelang centraal en creëren meerwaarde voor iedereen. Dominante leiders stellen zichzelf centraal.",
          examples: {
            mandela: "Gaf alles op voor zijn volk, zat jarenlang in gevangenis",
            bokito: "Staat bovenaan, krijgt alle vrouwen, gaat om hem",
            biden: "Wil zijn visie waarmaken voor het volk",
            trump: "Weigert nederlaag te accepteren, creëert verdeeldheid"
          }
        },
        {
          dimension: "5. Effect: Samenwerking vs Verdeeldheid",
          authority: "Versterkt samenwerking en eenheid",
          dominance: "Stimuleert competitie en wantrouwen",
          explanation: "Gezag bouwt bruggen en creëert samenwerking. Dominantie verdeelt en creëert interne competitie.",
          examples: {
            biden: "'Er zijn geen rode of blauwe staten, alleen Verenigde Staten'",
            trump: "Creëerde meer polarisatie en verdeeldheid"
          }
        }
      ],
      realWorldExamples: {
        title: "Praktijkvoorbeelden",
        mandela: {
          name: "Nelson Mandela - Gezag",
          description: "Het ultieme voorbeeld van gezag-gebaseerd leiderschap",
          characteristics: [
            "Jarenlang informeel leider zonder positie",
            "Diende altijd het groepsbelang boven eigenbelang",
            "Werd vrijwillig gevolgd vanwege integriteit",
            "Creëerde eenheid en verzoening",
            "Later legitiem leider als president"
          ]
        },
        bokito: {
          name: "Bokito - Dominantie",
          description: "Voorbeeld van pure dominantie in dierenrijk",
          characteristics: [
            "Gebruikt fysieke kracht voor controle",
            "Anderen volgen uit angst",
            "Dient vooral eigen belang (voedsel, vrouwen)",
            "Formele positie zonder echte loyaliteit",
            "Creëert hiërarchie gebaseerd op angst"
          ]
        },
        biden: {
          name: "Joe Biden - Genuanceerd",
          description: "Voorbeeld van complexe mix van gezag en legitimiteit",
          authorityAspects: [
            "Lange ervaring en respect in Senaat",
            "Focus op eenheid en samenwerking",
            "Wil visie waarmaken voor het volk",
            "Erkent tegenstanders als medeburgers"
          ],
          complexities: [
            "Won met meeste stemmen ooit (legitimiteit)",
            "Maar bijna helft van land stemde tegen",
            "Vraag: volgen mensen hem vrijwillig?",
            "Sommigen worden 'gedwongen' hem te volgen"
          ]
        },
        trump: {
          name: "Donald Trump - Complex Geval",
          description: "Toont zowel dominantie als gezag aspecten",
          dominanceAspects: [
            "Weigert nederlaag te accepteren",
            "Creëert verdeeldheid voor eigen ego",
            "Gebruikt intimidatie en agressie",
            "Stelt eigen belang boven landbelang"
          ],
          authorityAspects: [
            "Werd democratisch gekozen (legitimiteit)",
            "Heeft enorme aanhang die hem respecteert",
            "America First - focus op landbelang",
            "Creëerde eenheid binnen zijn achterban"
          ],
          nuance: "Trump is niet zwart-wit. Hij heeft zowel dominantie als gezag aspecten, afhankelijk van perspectief en situatie."
        }
      },
      culturalContext: {
        title: "Culturele en Situationele Context",
        description: "De effectiviteit van gezag vs dominantie hangt af van cultuur en situatie.",
        example: "China's dominante aanpak van coronavirus vs Nederland's gezag-gebaseerde aanpak - beide hadden verschillende resultaten.",
        dutchContext: "In Nederland wordt gezag-gebaseerd leiderschap meestal geprefereerd vanwege onze cultuur van overleg en consensus."
      },
      practicalApplication: {
        title: "Praktische Analyse",
        analysis: "Gebruik dit model om leiders te analyseren op alle vijf dimensies. Weinig leiders zijn 100% gezag of 100% dominantie.",
        steps: [
          "Analyseer elke dimensie afzonderlijk",
          "Geef genuanceerde antwoorden - mix van beide kanten",
          "Verklaar waarom bepaalde aspecten links of rechts scoren",
          "Bekijk de context en cultuur",
          "Beoordeel de effectiviteit in die specifieke situatie"
        ]
      },
      keyInsights: [
        "Gezag en dominantie zijn niet zwart-wit - de meeste leiders hebben aspecten van beide",
        "Context en cultuur bepalen welke aanpak effectiever is",
        "Informeel leiderschap (gezag) kan krachtiger zijn dan formeel leiderschap",
        "Legitiem leiderschap combineert formele positie met informeel gezag",
        "Analyse vereist nuance - kijk naar alle vijf dimensies afzonderlijk"
      ],
      sportApplication: "In sport zie je beide vormen: een gerespecteerde aanvoerder heeft gezag, een coach die alleen op discipline en straffen vertrouwt gebruikt dominantie. De beste sportleiders combineren formele autoriteit met echt respect en gezag."
    }
  },
  {
    id: 'authority-development',
    title: "Wiltschut & Van Vugt: Ontwikkelen van Gezag",
    description: "Wendy Wiltschut en Mark van Vugt beschrijven vijf essentiële componenten voor het ontwikkelen van gezag als leider die mensen graag willen volgen.",
    content: {
      introduction: {
        title: "Hoe Ontwikkel Je Gezag?",
        description: "Je wilt natuurlijk altijd een leider worden die mensen heel graag willen volgen. Wiltschut en Van Vugt identificeerden vijf componenten die essentieel zijn voor het ontwikkelen van echt gezag.",
        keyInsight: "Gezag ontstaat niet automatisch door een positie - het moet ontwikkeld en verdiend worden door specifieke kwaliteiten en gedragingen."
      },
      fiveComponents: [
        {
          name: "1. Vind Je Niche - Doe Waar Je Sterk In Bent",
          description: "Je moet wel bepaalde kwaliteiten hebben om een leider te zijn. Het gaat om de combinatie tussen wie je bent als persoon en wat de omgeving nodig heeft.",
          keyPrinciple: "Kwaliteit = Persoonlijke Sterke Punten × Wat de Groep Nodig Heeft",
          characteristics: [
            "Je moet echt goed zijn in wat je doet",
            "Wereldtop niveau in je vakgebied",
            "Combinatie van persoonlijke kwaliteiten en groepsbehoeften",
            "Respect verdienen door competentie"
          ],
          sportExample: {
            example: "Virgil van Dijk - Nederlands Elftal Aanvoerder",
            explanation: "Van Dijk is wereldtop als verdediger en daarom logisch dat hij aanvoerder wordt. Het zou vreemd zijn als een speler zonder die kwaliteiten de leiding zou nemen.",
            lesson: "Je moet eerst excelleren in je vakgebied voordat je leiderschapsverantwoordelijkheid kunt nemen."
          },
          practicalTips: [
            "Ontwikkel expertise in je vakgebied",
            "Begrijp wat je team/organisatie nodig heeft",
            "Zorg dat je kwaliteiten aansluiten bij groepsbehoeften",
            "Bewijs jezelf eerst voordat je leiding claimt"
          ]
        },
        {
          name: "2. Inlevingsvermogen - Leef Je In In Ondergeschikten",
          description: "Het is heel belangrijk dat je begrijpt hoe je teamleden in elkaar zitten. Iedereen is anders en vraagt een andere benadering.",
          keyPrinciple: "Effectief Leiderschap = Individuele Benadering Per Persoon",
          characteristics: [
            "Begrijp dat iedereen anders is",
            "Pas je leiderschapsstijl aan per persoon",
            "Luister naar individuele behoeften",
            "Respecteer verschillende persoonlijkheden"
          ],
          sportExample: {
            example: "Van Dijk's Verschillende Benaderingen",
            explanation: "Van Dijk gaat anders om met jonge talenten zoals De Ligt en Frenkie de Jong dan met ervaren spelers zoals Wijnaldum. Verschillende mensen, verschillende aanpak.",
            lesson: "Een goede leider past zijn stijl aan per persoon en situatie."
          },
          practicalTips: [
            "Leer je teamleden echt kennen als individuen",
            "Vraag naar hun behoeften en motivaties",
            "Pas je communicatiestijl aan per persoon",
            "Investeer tijd in één-op-één gesprekken"
          ]
        },
        {
          name: "3. Dien De Groep - Groepsbelang Boven Eigenbelang",
          description: "Ga niet voor je eigen belang, maar ga voor het belang van de groep. Dan zullen mensen je eerder volgen, want dan zit jij op hetzelfde doel als de groep heeft.",
          keyPrinciple: "Groepsbelang > Eigenbelang = Meer Volgers",
          characteristics: [
            "Stel teamdoelen boven persoonlijke doelen",
            "Neem een voorbeeldfunctie op je",
            "Help anderen ontwikkelen",
            "Offer persoonlijk gewin op voor teamresultaat"
          ],
          sportExample: {
            example: "Van Dijk vs Ronaldo",
            explanation: "Van Dijk focust op teamwinst en het ontwikkelen van andere spelers. Ronaldo, hoewel getalenteerd, schiet vaak zelf terwijl een pass beter zou zijn - eigen belang vs teambelang.",
            lesson: "Mensen volgen eerder leiders die het team dienen dan leiders die zichzelf dienen."
          },
          quote: "Ik ben nu een van de spelers aan wie de rest gaat optrekken en dat past ook bij me - Van Dijk",
          practicalTips: [
            "Maak teamdoelen duidelijk en prioriteer ze",
            "Geef anderen de kans om te excelleren",
            "Neem verantwoordelijkheid voor teamresultaten",
            "Toon dat je investeert in andermans succes"
          ]
        },
        {
          name: "4. Timing - Ken Je Moment",
          description: "Wanneer moet je optreden en wanneer niet? Je moet niet te veel doen, niet te weinig doen. Het gaat om het juiste moment kiezen voor actie.",
          keyPrinciple: "Effectief Leiderschap = Juiste Actie Op Het Juiste Moment",
          characteristics: [
            "Weet wanneer je moet ingrijpen",
            "Weet wanneer je moet wegblijven",
            "Herken je eigen status en positie",
            "Pas je rol aan aan de situatie"
          ],
          sportExample: {
            example: "Van Dijk's Timing Bewustzijn",
            explanation: "Vroeger had Van Dijk nog niet de status om leiding te geven: 'Het team zat in overgangsperiode, ik had nog niet de status van volwaardige international.' Nu wel, maar als hij geblesseerd is en het gaat goed, moet hij wegblijven.",
            lesson: "Timing is alles - je moet je moment kennen en je rol aanpassen aan de situatie."
          },
          practicalTips: [
            "Beoordeel je eigen status en positie realistisch",
            "Grijp in wanneer het team je nodig heeft",
            "Blijf weg wanneer anderen het goed doen",
            "Ontwikkel gevoel voor het juiste moment"
          ]
        },
        {
          name: "5. Gedraag Je - Wees Eerlijk, Betrouwbaar en Ethisch",
          description: "Het ethische component - wees altijd eerlijk, betrouwbaar en geef het goede voorbeeld. Als rolmodel moet je professioneel zijn.",
          keyPrinciple: "Integriteit + Professionaliteit = Duurzaam Gezag",
          characteristics: [
            "Altijd eerlijk en transparant zijn",
            "Betrouwbaar in woord en daad",
            "Ethisch gedrag in alle situaties",
            "Goede voorbeeld geven als rolmodel"
          ],
          sportExample: {
            example: "Van Dijk als Professioneel Rolmodel",
            explanation: "Van Dijk wordt een rolmodel genoemd voor teamgenoten en jonge supporters. Hij komt niet in problemen, doet geen gekke dingen, leeft professioneel. Dit in tegenstelling tot voetballers die extravagant leven.",
            lesson: "Je gedrag als leider wordt constant bekeken - professionaliteit en integriteit zijn essentieel."
          },
          practicalTips: [
            "Leef volgens de waarden die je predikt",
            "Wees consistent in je gedrag",
            "Neem verantwoordelijkheid voor je fouten",
            "Geef het goede voorbeeld in alles wat je doet"
          ]
        }
      ],
      continuousDevelopment: {
        title: "Blijf Je Ontwikkelen",
        description: "Gezag is niet iets wat je eenmaal hebt en dan houdt. Het vereist constante ontwikkeling en onderhoud.",
        components: [
          "Blijf leren en groeien in je vakgebied",
          "Vraag regelmatig feedback van je team",
          "Reflecteer op je leiderschapseffectiviteit",
          "Pas je aan aan veranderende omstandigheden"
        ]
      },
      practicalApplication: {
        title: "Toepassing in de Praktijk",
        analysis: "Gebruik deze vijf componenten om leiders te analyseren of je eigen leiderschapsontwikkeling te plannen.",
        steps: [
          "Beoordeel elke component afzonderlijk",
          "Identificeer sterke punten en ontwikkelpunten",
          "Maak een ontwikkelplan per component",
          "Monitor voortgang en pas aan waar nodig"
        ]
      },
      keyInsights: [
        "Gezag moet verdiend worden door competentie en gedrag",
        "Verschillende mensen vragen verschillende leiderschapsbenaderingen",
        "Groepsbelang boven eigenbelang creëert meer volgers",
        "Timing is cruciaal - ken je moment",
        "Integriteit en professionaliteit zijn non-negotiable",
        "Gezag vereist constante ontwikkeling en onderhoud"
      ],
      sportApplication: "In sport is dit model zeer relevant: coaches en aanvoerders moeten eerst excelleren in hun vakgebied, verschillende spelers anders benaderen, het team boven zichzelf stellen, het juiste moment kiezen voor interventies, en altijd professioneel gedrag tonen. Van Dijk is een perfect voorbeeld van hoe deze vijf componenten samen komen in effectief sportleiderschap."
    }
  }
]

export default function LeadershipApp() {
  const [selectedTheory, setSelectedTheory] = useState<string | null>(null)
  const [readTheories, setReadTheories] = useState<string[]>([])
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)

  // Load progress from localStorage
  useEffect(() => {
    const savedReadTheories = localStorage.getItem('readTheories')
    const savedQuizCompleted = localStorage.getItem('quizCompleted')
    const savedQuizScore = localStorage.getItem('quizScore')
    const savedTotalPoints = localStorage.getItem('totalPoints')

    if (savedReadTheories) {
      setReadTheories(JSON.parse(savedReadTheories))
    }
    if (savedQuizCompleted) {
      setQuizCompleted(JSON.parse(savedQuizCompleted))
    }
    if (savedQuizScore) {
      setQuizScore(JSON.parse(savedQuizScore))
    }
    if (savedTotalPoints) {
      setTotalPoints(JSON.parse(savedTotalPoints))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('readTheories', JSON.stringify(readTheories))
    localStorage.setItem('quizCompleted', JSON.stringify(quizCompleted))
    localStorage.setItem('quizScore', JSON.stringify(quizScore))
    localStorage.setItem('totalPoints', JSON.stringify(totalPoints))
  }, [readTheories, quizCompleted, quizScore, totalPoints])

  const handleTheoryClick = (theoryId: string) => {
    if (selectedTheory === theoryId) {
      setSelectedTheory(null)
    } else {
      setSelectedTheory(theoryId)
      setShowQuiz(false)
    }
  }

  const handleTheoryRead = (theoryId: string) => {
    if (!readTheories.includes(theoryId)) {
      setReadTheories([...readTheories, theoryId])
      setTotalPoints(totalPoints + 50)
    }
  }

  const handleQuizComplete = (score: number, total: number) => {
    if (!quizCompleted) {
      setQuizCompleted(true)
      setQuizScore(score)
      setTotalPoints(totalPoints + (score * 10))
    }
  }

  const handleShowQuiz = () => {
    setShowQuiz(true)
    setSelectedTheory(null)
  }

  const getProgressPercentage = () => {
    const theoriesRead = readTheories.length
    const quizDone = quizCompleted ? 1 : 0
    const total = theories.length + 1 // theories + quiz
    return Math.round(((theoriesRead + quizDone) / total) * 100)
  }

  const selectedTheoryData = theories.find(t => t.id === selectedTheory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🏃‍♂️ Leiderschap in de Wereld van Sport en Bewegen
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Ontdek hoe leiderschapstheorieën toegepast worden in sport, fitness, bewegen en fysieke activiteit
          </p>
          
          {/* Progress and Points */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{getProgressPercentage()}%</div>
                <div className="text-gray-600">Voortgang</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{totalPoints}</div>
                <div className="text-gray-600">Totaal Punten</div>
                <div className="text-sm text-gray-500 mt-1">
                  50 punten per theorie + 10 per quiz vraag
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {readTheories.length}/{theories.length}
                </div>
                <div className="text-gray-600">Theorieën Gelezen</div>
                <div className="text-sm text-gray-500 mt-1">
                  Quiz: {quizCompleted ? `${quizScore}/10` : '0/10'}
                </div>
              </div>
            </div>
          </div>

          {/* Context Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Toepassingsgebieden</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🏆 Professionele Sport</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Hoofdtrainers en coaches</li>
                  <li>• Sportdirecteuren</li>
                  <li>• Teamcaptains en aanvoerders</li>
                  <li>• Performance managers</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">💪 Fitness & Wellness</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Fitnesscentrum managers</li>
                  <li>• Personal trainers</li>
                  <li>• Groepsinstructeurs</li>
                  <li>• Wellness coaches</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">🧒 Jeugdsport</h3>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Jeugdtrainers</li>
                  <li>• Talentontwikkelaars</li>
                  <li>• Schoolsport begeleiders</li>
                  <li>• Verenigingsbestuurders</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">🏥 Bewegingstherapie</h3>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Fysiotherapeuten</li>
                  <li>• Bewegingstherapeuten</li>
                  <li>• Revalidatie specialisten</li>
                  <li>• Gezondheidscoaches</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🏢 Sportorganisaties</h3>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Sportbond directeuren</li>
                  <li>• Evenement managers</li>
                  <li>• Facility managers</li>
                  <li>• Scheidsrechters</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-semibold text-teal-800 mb-2">🌲 Recreatie & Outdoor</h3>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>• Outdoor instructeurs</li>
                  <li>• Recreatie coördinatoren</li>
                  <li>• Avontuurlijke activiteiten</li>
                  <li>• Natuursport begeleiders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => {
              setSelectedTheory(null)
              setShowQuiz(false)
            }}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              !selectedTheory && !showQuiz
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            📚 Alle Theorieën
          </button>
          <button
            onClick={handleShowQuiz}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              showQuiz
                ? 'bg-purple-600 text-white'
                : 'bg-white text-purple-600 hover:bg-purple-50'
            }`}
          >
            🎯 Quiz {quizCompleted && '✓'}
          </button>
        </div>

        {/* Content */}
        {showQuiz ? (
          <QuizComponent onComplete={handleQuizComplete} />
        ) : selectedTheory ? (
          <div className="mb-8">
            <button
              onClick={() => setSelectedTheory(null)}
              className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ← Terug naar overzicht
            </button>
            <TheoryCard
              theory={selectedTheoryData!}
              isExpanded={true}
              onRead={() => handleTheoryRead(selectedTheory)}
              isRead={readTheories.includes(selectedTheory)}
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theories.map((theory) => (
              <div key={theory.id} onClick={() => handleTheoryClick(theory.id)}>
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

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            🎓 <strong>Ontwikkeld voor HBO Sportkunde</strong> - Leer leiderschap in de praktijk van sport en bewegen
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Alle theorieën zijn toegepast op sport, fitness, bewegingstherapie en fysieke activiteit
          </p>
        </div>
      </div>
    </div>
  )
}