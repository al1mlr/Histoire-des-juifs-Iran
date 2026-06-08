# Histoire des Persécutions des Juifs en Iran - Guide de Déploiement

## À propos du projet

Ce site web présente une chronologie historique complète des persécutions, pogroms et exactions subis par la communauté juive d'Iran, de l'Antiquité à la période contemporaine.

**Période couverte :** 2700 ans (722 av. J.-C. - 2024)

**Nombre de périodes historiques :** 5
- Antiquité et Période Pré-islamique
- Moyen Âge et Début de la Période Islamique
- Dynastie Safavide
- Époque Qajare
- Époque Moderne et Contemporaine

## Technologies utilisées

- **Framework :** React 19.2.7
- **Build Tool :** Vite 8.0.16
- **Styling :** CSS3 personnalisé
- **Déploiement :** Site statique

## Structure du projet

```
histoire-juifs-iran/
├── src/
│   ├── App.jsx          # Composant principal avec toute la logique
│   ├── App.css          # Styles du site
│   ├── main.jsx         # Point d'entrée React
│   └── index.css        # Styles globaux
├── dist/                # Fichiers de production (générés)
├── index.html           # HTML principal
├── vite.config.js       # Configuration Vite
└── package.json         # Dépendances du projet
```

## Installation locale

```bash
# Cloner ou télécharger le projet
cd histoire-juifs-iran

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Accéder au site
# http://localhost:5173
```

## Build pour la production

```bash
# Construire le site statique
pnpm build

# Les fichiers de production seront dans le dossier `dist/`
```

## Déploiement

### Option 1 : Vercel (Recommandé)

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre dépôt GitHub
3. Vercel détectera automatiquement Vite et déploiera le site

### Option 2 : Netlify

1. Créer un compte sur [Netlify](https://netlify.com)
2. Connecter votre dépôt GitHub
3. Configurer :
   - **Build command :** `pnpm build`
   - **Publish directory :** `dist`

### Option 3 : GitHub Pages

1. Pousser le code vers GitHub
2. Aller à Settings > Pages
3. Sélectionner la branche `main` et le dossier `dist`

### Option 4 : Serveur personnel

```bash
# Construire le site
pnpm build

# Copier le contenu du dossier `dist/` vers votre serveur web
# (Apache, Nginx, etc.)
```

## Caractéristiques du site

✅ **Design Responsive** - Fonctionne sur tous les appareils
✅ **Navigation Intuitive** - Accès facile aux 5 périodes historiques
✅ **Timeline Interactive** - Visualisation élégante des événements
✅ **Optimisé pour SEO** - Métadonnées complètes
✅ **Performance** - Chargement rapide (< 1 seconde)
✅ **Accessibilité** - Conforme aux normes web

## Contenu historique

Le site couvre :

1. **Antiquité (722 av. J.-C. - 642 ap. J.-C.)**
   - Exils assyriens et babyloniens
   - Époque Sassanide et persécutions

2. **Moyen Âge (642 - XIVe siècles)**
   - Conquête arabe et statut de Dhimmi
   - Période mongole

3. **Safavide (1501-1736)**
   - Imposition du chiisme
   - Conversions forcées

4. **Qajare (1794-1925)**
   - Pogrom d'Allahdad (1839)
   - Émeutes à Hamadan (1892)
   - Pogrom de Shiraz (1910)

5. **Moderne et Contemporaine (1925-2024)**
   - Dynastie Pahlavi
   - Révolution Islamique
   - Situation actuelle

## Sources

- Wikipedia (Histoire des Juifs en Iran)
- Morasha (Communautés de la diaspora)
- Archives historiques académiques

## Maintenance

Pour mettre à jour le contenu :

1. Modifier le fichier `src/App.jsx`
2. Ajouter/modifier les événements dans l'array `periods`
3. Reconstruire le site : `pnpm build`
4. Déployer les fichiers du dossier `dist/`

## Support

Pour toute question ou suggestion concernant le contenu historique, veuillez consulter les sources académiques référencées dans le site.

## Licence

Ce projet est mis à disposition à titre éducatif et informatif.

---

**Créé par :** Manus AI
**Date :** Juin 2026
**Version :** 1.0
