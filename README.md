# 🏃‍♂️ Leiderschap in de Wereld van Sport en Bewegen

Een interactieve leertoepassing over leiderschapstheorieën toegepast op sport, fitness, bewegen en fysieke activiteit.

## 🎯 Voor HBO Sportkunde Studenten

Deze applicatie helpt studenten begrijpen hoe leiderschapstheorieën toegepast worden in:
- **Professionele sport** - Teams, coaches, managers
- **Fitnesscentra** - Instructeurs, managers, personal trainers  
- **Jeugdsport** - Trainers, begeleiders, talentontwikkeling
- **Bewegingstherapie** - Therapeuten, revalidatie, gezondheid
- **Sportorganisaties** - Federaties, clubs, evenementen

## 📚 Leiderschapstheorieën

De applicatie behandelt 9 essentiële theorieën:

1. **Mintzberg's Managementrollen** - 10 rollen voor effectief leiderschap
2. **Situationeel Leidinggeven (SLII)** - Aanpassen van stijl aan ontwikkelingsniveau
3. **French & Raven's Machtsbronnen** - 6 bronnen van invloed en macht
4. **Keltner's Macht Paradox** - Hoe macht je brein kan beschadigen
5. **Kets de Vries: Disfunctioneel Leiderschap** - Veelvoorkomende valkuilen
6. **Maccoby's Narcistische Leider** - Productief vs destructief narcisme
7. **Alex Ferguson's Leiderschapsfilosofie** - 9 principes van de meest succesvolle coach
8. **Van Vugt & Wiltschut: Gezag vs Dominantie** - Het verschil tussen respect en macht

## ✨ Features

- ✅ **Interactieve Theorieën** - Uitgebreide uitleg met sportvoorbeelden
- ✅ **Voortgangsregistratie** - Houd bij welke theorieën je hebt gelezen
- ✅ **Kennisquiz** - 10 vragen om je kennis te testen
- ✅ **Puntensysteem** - Verdien punten door te leren
- ✅ **Responsive Design** - Werkt op alle apparaten
- ✅ **Lokale Opslag** - Je voortgang wordt bewaard

## 🚀 Setup

1. **Clone of fork** dit project
2. **Installeer dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Open** http://localhost:3000

## 🏗️ Deploy

Voor productie deployment:
```bash
npm run build
```

De applicatie is geconfigureerd voor statische export en kan gedeployed worden op:
- Netlify
- Vercel  
- GitHub Pages
- Elke statische hosting service

## 🎓 Educatieve Doelen

Na het voltooien van deze module kunnen studenten:
- Verschillende leiderschapsstijlen herkennen en toepassen
- Situationeel leiderschap gebruiken in sport- en bewegingscontexten
- Machtsbronnen identificeren en ethisch gebruiken
- Disfunctionele leiderschapspatronen herkennen en vermijden
- Effectieve teamculturen creëren in sport en bewegen

## 🏃‍♀️ Toepassingsgebieden

- **Teamsporten** - Voetbal, basketbal, hockey, volleybal
- **Individuele sporten** - Tennis, atletiek, zwemmen, wielrennen
- **Fitness & Wellness** - Sportscholen, personal training, groepslessen
- **Jeugdsport** - Talentontwikkeling, schoolsport, verenigingen
- **Aangepast sporten** - Parasport, revalidatiesport
- **Outdoor activiteiten** - Wandelen, fietsen, natuursport

---

**Ontwikkeld voor HBO Sportkunde** 🎓
*Leer leiderschap in de praktijk van sport en bewegen*

## 🚀 GitHub Setup Instructions

⚠️ **Belangrijk**: Deze instructies zijn voor gebruik op je lokale computer. Git is niet beschikbaar in de browser-ontwikkelomgeving.

### Voor lokaal gebruik (na downloaden van de code):

### 1. Download de code
- Download alle bestanden naar je lokale computer
- Of gebruik de "Download ZIP" optie als beschikbaar

### 2. Installeer Git (indien nog niet geïnstalleerd)
- **Windows**: Download van [git-scm.com](https://git-scm.com/)
- **macOS**: `brew install git` (met Homebrew) of download van git-scm.com
- **Linux**: `sudo apt-get install git` (Ubuntu/Debian) of equivalent voor jouw distributie

### 3. Initialiseer Git repository
```bash
cd /pad/naar/je/project
git init
```

### 4. Voeg bestanden toe en commit
```bash
git add .
git commit -m "Initial commit: Leiderschap in Sport en Bewegen app"
```

### 5. Maak GitHub Repository
1. Ga naar [github.com](https://github.com)
2. Klik "New repository"
3. Naam: `leiderschap-sport-bewegen`
4. **Niet** aanvinken: README, .gitignore, license (deze bestaan al)
5. Klik "Create repository"

### 6. Verbind en push naar GitHub
```bash
git remote add origin https://github.com/JOUW-USERNAME/leiderschap-sport-bewegen.git
git branch -M main
git push -u origin main
```

### 7. Deploy naar Netlify (Optioneel)
1. Verbind je GitHub repository met Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

---

## 💡 Alternatieve Deployment Opties

Als je geen Git wilt gebruiken, kun je de applicatie ook direct deployen:

### Netlify Drop
1. Run `npm run build` lokaal
2. Ga naar [netlify.com/drop](https://netlify.com/drop)
3. Sleep de `out` folder naar de website

### Vercel
1. Ga naar [vercel.com](https://vercel.com)
2. Upload je project bestanden
3. Vercel detecteert automatisch de Next.js configuratie

---