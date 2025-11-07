# Ilo Innovation Kampagne

React-Projekt für die Innovation-Kampagne von Ilo.

## Tech-Stack

- **React** 18.2.0
- **React Router** 6.3.0 für Routing
- **TailwindCSS** 3.1.6 für Styling
- **Supabase** (noch zu integrieren)

## Struktur

### Routen

- `/campaign/innovation` - Landingpage
- `/campaign/innovation/thank-you` - Danke-Seite
- `/campaign/innovation/survey` - Umfrage-Seite

### Verzeichnisstruktur

```
src/
├── campaigns/
│   └── innovation/
│       ├── components/
│       │   ├── CampaignLayout.jsx
│       │   ├── HeroSection.jsx
│       │   ├── ProblemSection.jsx
│       │   ├── SolutionSection.jsx
│       │   ├── FutureSection.jsx
│       │   ├── CTASection.jsx
│       │   └── LeadForm.jsx
│       ├── hooks/
│       │   ├── useCampaignLeads.js
│       │   └── useSurvey.js
│       ├── InnovationCampaignPage.jsx
│       ├── ThankYouPage.jsx
│       └── SurveyPage.jsx
├── App.js
├── index.js
└── index.css
```

## Installation & Start

```bash
npm install
npm start
```

## TODOs

### Inhalte
- [ ] Texte für alle Sections schreiben
- [ ] Headlines und CTAs formulieren
- [ ] Survey-Fragen definieren

### Supabase-Integration
- [ ] Supabase-Projekt einrichten
- [ ] Tabellen für `leads` und `responses` erstellen
- [ ] Hooks mit echter Supabase-Logik implementieren

### Navigation
- [ ] Navigation zwischen Seiten implementieren
- [ ] Redirect nach Lead-Formular zur Danke-Seite

### Design
- [ ] Finales Design umsetzen
- [ ] Logo integrieren
- [ ] Responsive Design optimieren

## Aktuelle Features

✅ Grundlegende Projektstruktur
✅ Routing für alle drei Seiten
✅ Skeleton-Komponenten mit Platzhaltern
✅ Lead-Formular mit Validierung
✅ TailwindCSS Setup
✅ Hooks mit Skeleton-Funktionen
