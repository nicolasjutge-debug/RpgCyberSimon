# CyberQuest — Battle Isle (Fortnite) — Notes de livraison

Ce répertoire contient la démo "Battle Isle" (Vr/fortnite). J'ai intégré les fonctionnalités pédagogiques demandées (profils, intégration JSONBin/Groq, checks "mort subite", synchronisation de progression) sans toucher aux parties visuelles et UX déjà validées.

Ce qui a été ajouté dans la branche fortnite-ui

- Vr/fortnite/index.html : intégration non destructive des fonctions pédagogiques (profile modal, loadPlayer, syncProg, checkSuddenDeath, updateHUD).
- Fichiers de documentation et test de fumée (smoke_test.js) ajoutés dans Vr/fortnite pour faciliter la validation.

But : finaliser le livrable en conservant l'intégration visuelle validée et fournir des outils pour vérifier rapidement.

Comment tester localement (rapide)

1. Démarrer un serveur local à la racine du dépôt :
   - Python 3 : `python -m http.server 8000`
   - ou Node : `npx http-server -c-1`
2. Ouvrir dans un navigateur Desktop : `http://localhost:8000/Vr/fortnite/index.html`
3. Vérifications manuelles essentielles :
   - L'UI validée est inchangée : île low‑poly, rochers, particules.
   - Le HUD (top/bottom) est présent et le bouton BATTLE déclenche l'animation.
   - Le bouton "Profile" (coin sup. droit) ouvre la modal de configuration.
   - Sauvegarder un nom de profil (ex: Simon) : le HUD affiche le nom.
   - Si tu fournis une clé JSONBin (X-Master-Key), la fonction loadPlayer() tentera de lire les données ; voir la console pour les logs.

Exécuter le test de fumée (smoke test)

- Ouvre la page `Vr/fortnite/index.html` dans ton navigateur.
- Ouvre la console DevTools et colle le contenu de `smoke_test.js` (ou inclue-le dans la page pour tests automatisés). Le script retournera un rapport simple en console.

Activation des fonctionnalités d'IA / Groq

- Pour activer la génération de QCM et les défis via Groq, fournis une clé `gsk_...` (colle-la dans la modal Profile). Sans clé, les actions qui requièrent Groq afficheront qu'une clé est nécessaire.

Notes sur JSONBin

- Le BIN_ID par défaut dans le code pointe sur un bin de test. Pour activer la lecture/écriture complète, fournis une X-Master-Key JSONBin et vérifie que le bin autorise la lecture publique si tu veux utiliser les comptes Guest via code.

Checklist avant création de la Pull Request

- [ ] Vérifier visuellement la scène sur Desktop et Quest2 (si possible)
- [ ] Fournir les assets finaux (si besoin) dans `Vr/fortnite/assets/` (je peux les ajouter)
- [ ] Confirmer si tu veux que je crée la Pull Request depuis `fortnite-ui` vers la branche par défaut (recommandé)

Commandes Git utiles (si tu veux créer la PR manuellement)

git checkout fortnite-ui
git pull origin fortnite-ui
# vérifier les changements
git push origin fortnite-ui
# puis créer la PR sur GitHub via l'interface ou gh cli :
# gh pr create --base main --head fortnite-ui --title "feat: finalise fortnite UI + pédagogie" --body "Description..."


---

