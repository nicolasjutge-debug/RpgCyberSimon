# CyberQuest — Battle Isle (Fortnite demo)

Ce dossier contient la démo Battle Isle (Vr/fortnite). J'ai intégré des fonctionnalités pédagogiques non-destructives (profil local, intégration JSONBin/Groq, synchronisation de progression, mort subite) et des optimisations Quest2.

Quick start (local)
1. Lancer un serveur static à la racine du repo:
   - Python 3: `python -m http.server 8000`
   - Node: `npx http-server -c-1`

2. Ouvrir: `http://localhost:8000/Vr/fortnite/index.html`

Tests rapides
- Vérifier l'affichage: île low-poly, rochers, particules, HUD.
- Bouton BATTLE: déclenche l'animation.
- Bouton Profile (coin sup droit): ouvrir → saisir un nom → Sauvegarder → HUD doit afficher le nom.
- (Optionnel) Coller X-Master-Key JSONBin dans la modal Profile pour tester `loadPlayer()` et la synchronisation.

Fichiers utiles
- `Vr/fortnite/index.html` — page principale.
- `Vr/fortnite/smoke_test.js` — script à coller dans la console DevTools pour checks rapides.
- `.github/workflows/smoke.yml` — workflow GitHub Actions exécutant le smoke test via Playwright.
- `.github/scripts/run_smoke.js` — runner Node/Playwright.

Notes
- Pour activer les fonctions IA (QCM / mort subite), il faut fournir une clé Groq (gsk_...) via la modal Profile.
- Ne jamais committer de clés secrètes dans le repo public. Utiliser des bins de test et/ou variables d'environnement côté CI.