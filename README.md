# Luna Deplacement — Telegram + Vercel

## Fichiers
- `package.json`
- `vercel.json`
- `api/webhook.js`
- `api/register-webhook.js`
- `.gitignore`

## GitHub depuis Android
1. Connectez-vous sur https://github.com.
2. `+` → `New repository` → nommez-le `luna-deplacement-bot` → choisissez **Private**.
3. Créez le dépôt.
4. Ouvrez-le → `Add file` → `Upload files`.
5. Décompressez le ZIP sur le téléphone et téléversez le CONTENU du dossier `luna_deplacement_bot` à la racine du dépôt (ne créez pas un deuxième dossier imbriqué).
6. `Commit changes`.

Ne mettez jamais le token Telegram dans GitHub.

## Vercel
1. Connectez-vous sur https://vercel.com avec GitHub.
2. `Add New` → `Project` → importez `luna-deplacement-bot` → `Deploy`.
3. Dans Vercel : projet → `Settings` → `Environment Variables`. Ajoutez :
   - `TELEGRAM_BOT_TOKEN` = token BotFather
   - `WEBHOOK_SECRET` = secret aléatoire de 30 à 50 caractères, lettres/chiffres uniquement
   - `SETUP_KEY` = autre secret aléatoire différent
   - `APP_URL` = URL de production Vercel, ex. `https://mon-projet.vercel.app`
   - `ADMIN_CHAT_ID` = votre identifiant Telegram (facultatif au début)
   - `GALLERY_PHOTO_URLS` = URLs publiques des photos séparées par virgules (facultatif)
4. Après ajout des variables, faites `Redeploy`.

## Identifiant administrateur
Après le déploiement, envoyez `/myid` à votre bot. Copiez le nombre reçu dans `ADMIN_CHAT_ID` sur Vercel, puis faites un nouveau `Redeploy`.

## Enregistrer le webhook
Après le redeploiement, ouvrez :
`https://VOTRE-URL-VERCEL.vercel.app/api/register-webhook?key=VOTRE_SETUP_KEY`
Remplacez les deux valeurs. Résultat attendu : `{"ok":true,...}`. Ne partagez pas cette URL. Une fois le webhook enregistré, vous pouvez supprimer `SETUP_KEY` si vous n'en avez plus besoin.

## Tester
Dans Telegram : `/start`, `/prices`, `/services`, `/language`.
Demande exemple :
`/booking Date : 12 novembre | Heure : 18h | Ville : Cotonou | Durée : 1 heure | Message : Bonjour`

## Limites
- Pas de paiement intégré ni de stockage de réservations.
- Un rendez-vous n'est jamais confirmé automatiquement.
- Les photos doivent être accessibles publiquement par URL.
- Le choix de langue change le menu affiché; les commandes textuelles commencent par défaut en français.
- Ne collectez pas de coordonnées bancaires ou de documents personnels. Vérifiez les lois locales et les conditions de consentement applicables.
- Si le token est exposé, révoquez-le dans BotFather avec `/revoke` et remplacez la variable Vercel.
