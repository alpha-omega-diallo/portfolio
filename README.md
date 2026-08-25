# Portfolio — Mamadou Alpha Diallo

Portfolio personnel présentant mon parcours, mes compétences, mes projets et mes certifications, ainsi qu'un CV téléchargeable et un moyen de me contacter.

**Démo en ligne :** _à venir (déploiement prévu sur Vercel)_

## Stack technique

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) (via [rolldown-vite](https://vite.dev/guide/rolldown))
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Structure du projet

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── assets/          # images, icônes
├── components/
│   ├── common/      # composants réutilisables (boutons, cartes, etc.)
│   ├── layout/       # Navbar, Footer, structure globale
│   └── sections/     # sections de la page (Hero, À propos, Compétences, ...)
├── data/             # données statiques (projets, compétences, expériences...)
├── hooks/            # hooks React personnalisés
├── pages/            # pages de l'application
└── utils/            # fonctions utilitaires
```

## Installation

```bash
npm install
```

## Scripts disponibles

| Commande          | Description                              |
|-------------------|-------------------------------------------|
| `npm run dev`     | Lance le serveur de développement Vite    |
| `npm run build`   | Build de production                       |
| `npm run preview` | Prévisualise le build de production       |
| `npm run lint`    | Vérifie le code avec ESLint               |

## Feuille de route

- [x] Étape 1 — Environnement, Vite, Git, GitHub
- [x] Étape 2 — Architecture des dossiers & config CSS
- [x] Étape 3 — README, .gitignore, LICENSE
- [ ] Étape 4 — Layout: Navbar, Footer, menu responsive, thème clair/sombre
- [ ] Étape 5 — Section Hero + animations au scroll
- [ ] Étape 6 — Présentation / À propos
- [ ] Étape 7 — Compétences
- [ ] Étape 8 — Expériences & Formations
- [ ] Étape 9 — Projets & Certifications
- [ ] Étape 10 — CV téléchargeable & Contact
- [ ] Étape 11 — SEO, favicon, Open Graph, métadonnées, perf images
- [ ] Étape 12 — Accessibilité, responsive final, revue Clean Code
- [ ] Étape 13 — Déploiement Vercel
- [ ] Vérification finale

## Licence

Distribué sous licence MIT. Voir [LICENSE](./LICENSE) pour plus d'informations.
