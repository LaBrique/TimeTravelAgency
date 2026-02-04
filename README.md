# Temporal Voyages - Agence de Voyage Temporel de Luxe

## 📖 Description du Projet

**Temporal Voyages** est une landing page sophistiquée pour une agence de voyage temporel haut de gamme. Le site offre une expérience immersive et élégante permettant aux clients de découvrir trois destinations temporelles exclusives :

- **Paris 1889** - L'époque dorée de la Belle Époque avec l'inauguration de la Tour Eiffel
- **Crétacé -65M** - L'ère des dinosaures et de la nature préhistorique
- **Florence 1504** - La Renaissance avec les chefs-d'œuvre de Michel-Ange

Le site intègre un assistant IA multilingue (français/anglais) capable de conseiller les clients sur les meilleures destinations selon leurs intérêts historiques et culturels.

---

## 🛠️ Technologies Utilisées

### Frontend & Framework
- **Next.js 16** - Framework React avec App Router
- **React 19.2** - Bibliothèque UI avec support des Server Components
- **TypeScript** - Typage statique et sécurité du code
- **Tailwind CSS v4** - Framework CSS pour le styling responsive

### UI & Design
- **shadcn/ui** - Composants accessibles et personnalisables
- **Lucide React** - Icônes vectorielles modernes
- **Canvas API** - Animations et effets visuels du héros

### IA & Backend
- **AI SDK 6** (Vercel) - Intégration d'IA unifié
- **OpenAI GPT-4 Mini** - Modèle de langage pour le chatbot
- **API Routes** - Endpoints serverless pour les requêtes IA

### Accessibilité & Performance
- **ARIA Roles & Labels** - Support complet de l'accessibilité
- **Responsive Design** - Mobile-first avec breakpoints optimisés
- **SSR & Static Generation** - Optimisation des performances

---

## ✨ Features Implémentées

### 1. **Hero Section Animé**
- Arrière-plan vidéo avec Canvas personnalisé
- Gradient animé et particules flottantes
- Call-to-action dual (Réserver / Découvrir)
- Texte responsif avec mise en page équilibrée

### 2. **Galerie de Destinations**
- 3 cartes de destinations luxueuses
- Effets de survol sophistiqués
- Détails détaillés (points forts, prix, année)
- Grid responsif (1 colonne mobile, 3 colonnes desktop)

### 3. **Assistant IA Temporal**
- Widget chat collapsible/expandable
- Interface élégante avec dark mode
- Historique de conversation persistant
- Réponses en français avec expertise en histoire

### 4. **Système de Design Premium**
- Palette de couleurs luxueuse (or/gris/noir)
- Typographie élégante (Serif + Sans-serif)
- Effets de glassmorphism et backdrop blur
- Animations fluides et transitions subtiles

### 5. **Responsive & Accessible**
- Conception mobile-first
- Support complet du clavier
- Contrastes conformes WCAG
- Structure sémantique HTML

---

## 🤖 Outils IA Utilisés (Transparence)

| Outil | Utilisation | Détails |
|------|----------|---------|
| **OpenAI GPT-4 Mini** | Assistant IA Temporal | Conseils sur destinations, expertise historique, recommandations personnalisées |
| **Vercel AI SDK 6** | Intégration d'IA | Gestion des requêtes IA, streaming de réponses, conversion de messages |
| **Vercel AI Gateway** | Proxy API | Authentification sécurisée et gestion des clés API |

**Note sur la Transparence**: Tous les appels IA sont effectués via l'API Vercel Gateway, assurant la sécurité et la conformité. Aucune donnée client n'est stockée sans consentement explicite.

---

## 📦 Installation

### Prérequis
- Node.js 18+ et npm/pnpm
- Compte Vercel (optionnel pour le déploiement)

### Étapes d'Installation

```bash
# 1. Cloner le projet
git clone <repository-url>
cd temporal-voyages

# 2. Installer les dépendances
npm install
# ou
pnpm install

# 3. Configurer les variables d'environnement
# Créer un fichier .env.local:
NEXT_PUBLIC_API_URL=http://localhost:3000
# Pour OpenAI via Vercel AI Gateway (configuré par défaut)

# 4. Démarrer le serveur de développement
npm run dev
# ou
pnpm dev

# 5. Ouvrir le navigateur
# Accédez à http://localhost:3000
```

### Déploiement sur Vercel

```bash
# Installation globale de Vercel CLI
npm i -g vercel

# Déployer depuis le répertoire du projet
vercel

# Ou connecter directement via GitHub dans le dashboard Vercel
```

---

## 📁 Structure du Projet

```
temporal-voyages/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API pour l'assistant IA
│   ├── layout.tsx                 # Layout principal
│   ├── page.tsx                   # Page d'accueil
│   └── globals.css                # Styles globaux & thème
├── components/
│   ├── hero.tsx                   # Section héros
│   ├── destination-cards.tsx       # Galerie de destinations
│   ├── chat-widget.tsx            # Widget de chat IA
│   └── ui/                        # Composants shadcn/ui
├── public/                        # Assets statiques
└── package.json                   # Dépendances
```

---

## 🎨 Customisation

### Modifier les Couleurs

Éditer `/app/globals.css` pour ajuster la palette de couleurs :

```css
.dark {
  --primary: oklch(0.8 0.15 65);      /* Or/Doré */
  --background: oklch(0.08 0 0);      /* Noir profond */
  --accent: oklch(0.8 0.15 65);       /* Accent doré */
}
```

### Modifier les Destinations

Éditer `/components/destination-cards.tsx` pour ajouter/modifier les destinations :

```typescript
const destinations: Destination[] = [
  {
    id: 1,
    name: 'Votre Destination',
    period: 'Époque',
    year: 'Année',
    description: 'Description...',
    highlights: ['Détail 1', 'Détail 2'],
    basePrice: 'Prix',
    icon: '🎨',
  },
];
```

### Personnaliser la Personnalité de l'IA

Modifier le `system prompt` dans `/app/api/chat/route.ts` pour changer le ton ou ajouter des destinations :

```typescript
system: `Tu es l'assistant virtuel de Temporal Voyages...`
```

---

## 📊 Performances & SEO

- **Métadonnées optimisées** - Title, Description personnalisés
- **Responsive Images** - Optimisation automatique Next.js
- **Code Splitting** - Composants lazy-loaded pour réduire le bundle
- **Cache API** - Réponses d'IA mises en cache intelligemment

---

## 🔐 Sécurité

- **API Keys Protégées** - Toutes les clés API stockées en variables d'environnement
- **HTTPS Obligatoire** - En production sur Vercel
- **CORS Configuré** - Requêtes IA sécurisées via API Routes
- **Input Sanitization** - Validation des messages utilisateur

---

## 🤝 Crédits

### APIs & Services
- **OpenAI** - Modèle GPT-4 Mini pour l'IA conversationnelle
- **Vercel** - Infrastructure, AI Gateway, et déploiement
- **Next.js** - Framework web moderne
- **Tailwind CSS** - Framework CSS utilitaire

### Bibliothèques & Assets
- **shadcn/ui** - Composants UI accessibles (MIT License)
- **Lucide Icons** - Icônes vectorielles modernes (ISC License)
- **Radix UI** - Primitives UI accessibility-first
- **React Hook Form** - Gestion de formulaires
- **TypeScript** - Langage de programmation

### Design & Inspiration
- Design System: Luxury/Premium Dark Mode
- Inspiration: Agences de voyage haut de gamme, interfaces IA modernes
- Accessibilité: WCAG 2.1 AA standards

### Données Historiques
- Paris 1889: Informations historiques publiques (Exposition Universelle)
- Florence 1504: Renaissance et œuvres de Michel-Ange
- Crétacé: Données préhistoriques et paleontologie

---

## 📝 License

Ce projet est créé avec v0 par Vercel et peut être utilisé librement à titre personnel ou commercial selon vos besoins.

---

## 🚀 Prochaines Étapes Recommandées

- [ ] Ajouter une section de testimoniales clients
- [ ] Intégrer un système de réservation
- [ ] Ajouter une galerie d'images par destination
- [ ] Implémenter un système de newsletter
- [ ] Ajouter plusieurs langues (EN, ES, IT)
- [ ] Créer une page de détails pour chaque destination
- [ ] Intégrer un système de paiement (Stripe)

---

## 📧 Support & Contact

Pour des questions ou du support :
- Visiter le site : https://temporal-voyages.vercel.app
- Documentation Vercel : https://vercel.com/docs
- Support OpenAI : https://help.openai.com

---

**Créé avec ❤️ par Temporal Voyages | Powered by Vercel & v0**
