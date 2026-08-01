# CyberQuest — Battle Isle (Fortnite-style)

Ce dossier contient une version stylisée "Battle Isle" adaptée pour Quest2 / PC / iPhone (graphisme et HUD).

Contenu:
- index.html : démonstration Three.js avec île low-poly, particules et HUD (mini-map, barre santé/armure, bouton BATTLE).
- manifest.json : PWA manifest.
- sw.js : service worker minimal pour cache.
- assets/icon.svg : icône placeholder.

Notes de test
- Desktop: ouvrir Vr/fortnite/index.html sur un serveur local (ex: `npx http-server` ou GitHub Pages).
- iPhone: héberger accessible sur le réseau, ouvrir dans Safari mobile. WebXR très limité, UI classique fonctionnera.
- Quest2: ouvrir URL dans Oculus Browser; si WebXR supporté un bouton VR apparaitra. Performance: Quest2 utilisera des paramètres réduits automatiquement.

Prochaines étapes possibles
- Remplacer assets par logos / textures et ajouter modèles glTF (.glb) dans assets/.
- Ajouter gameplay (armes, loot, construction) et réseau/matchmaking.
- Optimisations mobiles: bake lighting, compress textures.
