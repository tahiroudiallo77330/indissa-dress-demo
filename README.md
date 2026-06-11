# Focus Barber

Site vitrine + reservation en ligne + panel admin pour un salon de coiffure / barbier.

Stack : **Next.js 16 (App Router) + TypeScript + Tailwind v4 + Drizzle ORM + Neon Postgres + JWT**.

---

## 1. Quickstart local

```bash
# 1. Deps (deja fait dans le dossier livre)
pnpm install

# 2. Cree une base Neon (gratuit) sur https://console.neon.tech
#    Recupere l'URL de connexion "pooled" :
#    postgresql://USER:PASSWORD@HOST.neon.tech/DBNAME?sslmode=require

# 3. Configure .env.local (un fichier .env.local existe deja avec les bons placeholders)
#    Edite-le et renseigne au minimum DATABASE_URL.

# 4. Genere le hash du mot de passe admin (par defaut "FocusBarber2026!")
node -e "console.log(require('bcryptjs').hashSync('FocusBarber2026!',10))"
# IMPORTANT : dans .env.local, echappe chaque $ par \$ sinon Next.js mange le hash :
#   ADMIN_PASSWORD_HASH=\$2b\$10\$abc...
# Le hash par defaut deja en place est le hash de "FocusBarber2026!".

# 5. Cree les tables et seed les donnees
pnpm db:push
pnpm db:seed

# 6. Lance le dev
pnpm dev
# -> http://localhost:3000
```

### Compte admin par defaut

- Email : `admin@focusbarber.fr`
- Mot de passe : `FocusBarber2026!`
- URL : http://localhost:3000/admin/login

---

## 2. Pages livrees

### Site vitrine (public)

- `/` Landing complete clone DA "Antic Shot" : header noir, hero avec collage photos N&B,
  bandes oranges rotatives marquee, sections LA BARBE / LA PEAU / LE CHEVEU avec polaroids,
  produits, citation, equipe (depuis DB), tarifs (depuis DB), coordonnees, footer.
- `/reservation` flow client en 5 etapes : prestation -> barbier (ou "peu importe") -> date
  -> creneau (polling 5s) -> coordonnees -> confirmation.

### Panel admin (protege par JWT)

- `/admin/login`
- `/admin` dashboard (RDV du jour + revenu prevu + prochains)
- `/admin/bookings` toutes les reservations + annulation
- `/admin/barbers` CRUD barbiers (ajout / desactivation, schedule defaut Mar-Sam 10h-19h auto)
- `/admin/services` CRUD prestations
- `/admin/schedules` planning hebdo par barbier

---

## 3. Scripts

```
pnpm dev          # serveur de dev (http://localhost:3000)
pnpm build        # build prod
pnpm start        # demarre le build prod
pnpm db:push      # synchronise le schema vers Neon (cree les tables)
pnpm db:seed      # remet les donnees par defaut (3 barbiers, 3 prestations)
pnpm db:studio    # GUI Drizzle Studio
```

---

## 4. Email setup (Resend)

A chaque RDV cree, on envoie 2 emails : confirmation au client + notif au salon.

```bash
# 1. Cree un compte gratuit sur https://resend.com (100 emails/jour gratuits)
# 2. Recupere ta cle API dans le dashboard Resend
# 3. Ajoute-la dans Vercel :
vercel env add RESEND_API_KEY production
# (colle la cle quand demande)

# Optionnel : domaine custom verifie dans Resend
vercel env add EMAIL_FROM production
# valeur : "Focus Barber <hello@tondomaine.fr>"

# Optionnel : email du salon qui recoit les notifs (defaut: dropshiping.val@gmail.com)
vercel env add SALON_EMAIL production
```

Sans `RESEND_API_KEY` les RDV se creent normalement, les emails sont skip (log).

---

## 4bis. Sync calendrier admin (Apple + Google)

Quand un client réserve, le RDV apparaît automatiquement dans ton agenda perso.

### Apple Calendar / Outlook (lien webcal — refresh ~5min)

1. Connecte-toi à `/admin`, va dans **Mon calendrier**
2. Clique **Nouveau lien**, donne un label (ex: "iPhone Val")
3. Copie l'URL `webcal://` ou clique **Ouvrir dans Apple Calendar**
4. L'agenda apparaît, refresh auto toutes les 5-15 min côté Apple

⚠️ Ne partage pas l'URL — elle expose tous les RDV. Tu peux révoquer à tout moment.

### Google Calendar setup (sync instantanée OAuth)

1. https://console.cloud.google.com → créer projet **focus-barber**
2. **Enable** API : "Google Calendar API"
3. **OAuth consent screen** :
   - Type : External
   - App name : Focus Barber
   - Support email : dropshiping.val@gmail.com
   - Authorized domains : `focus-barber.vercel.app`
   - Scope : `https://www.googleapis.com/auth/calendar.events`
   - Test users : ajouter ton email Google
4. **Credentials** → **Create credentials** → **OAuth client ID** → Web application
   - Authorized redirect URIs : `https://focus-barber.vercel.app/api/admin/google/callback`
5. Récupère **Client ID** + **Client Secret**, puis :

```bash
printf '%s' 'TON_CLIENT_ID'     | vercel env add GOOGLE_CLIENT_ID production
printf '%s' 'TON_CLIENT_SECRET' | vercel env add GOOGLE_CLIENT_SECRET production
# optionnel - URL de base pour le redirect (defaut: https://focus-barber.vercel.app)
printf '%s' 'https://focus-barber.vercel.app' | vercel env add APP_URL production
vercel --prod
```

6. Va dans `/admin` → **Mon calendrier** → **Connecter Google Calendar**

Sans `GOOGLE_CLIENT_ID/SECRET`, le bouton est disabled (tooltip "Setup en cours, voir README"). Le site continue de fonctionner normalement.

---

## 5. Deploy Vercel

```bash
# 1. Push sur GitHub (recommandation : --private)
gh repo create focus-barber --private --source=. --remote=origin --push

# 2. Importe le repo dans Vercel (https://vercel.com/new)
# 3. Ajoute les env vars dans Vercel UI :
#    DATABASE_URL, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD_HASH
#    Optionnel : BOOKING_BUFFER_MIN (defaut 0) - minutes de battement apres chaque RDV
#    Pas besoin d'echapper les $ dans Vercel UI - il prend la valeur litterale.
# 4. Deploy. Vercel run pnpm build automatiquement.

# 5. Premier setup base : depuis le local pointe vers Neon
pnpm db:push
pnpm db:seed
```

---

## 6. Architecture

```
src/
  app/
    page.tsx                       # landing
    reservation/                   # flow client
    admin/
      login/                       # page login (hors auth)
      (authed)/                    # groupe protege par proxy.ts
        page.tsx                   # dashboard
        bookings/
        barbers/
        services/
        schedules/
    api/
      services/                    # GET liste publique
      barbers/                     # GET liste publique
      availability/                # GET creneaux libres
      bookings/                    # POST creation reservation
      auth/                        # login / logout
      admin/                       # CRUD protege
  components/site/                 # Header, Hero, RotatingBanner, etc.
  db/
    schema.ts                      # Drizzle schema
    seed.ts                        # donnees par defaut
  lib/
    db.ts                          # client Drizzle + Neon
    auth.ts                        # JWT (Node)
    auth-edge.ts                   # constants edge-safe
    availability.ts                # logique creneaux
    utils.ts                       # cn, fmtPriceEUR, etc.
  proxy.ts                         # ex-middleware, protege /admin et /api/admin
```

### Logique d'availability

- Slots de 15 minutes, generes a partir des `barber_schedules` du jour.
- Exclusion : creneaux passes (+30 min de buffer), `barber_time_off`, conflits avec
  `bookings` au statut `confirmed`.
- Mode "peu importe" : agrege les slots de tous les barbiers offrant le service, puis
  dedup par heure de debut (premier barbier libre gagne). A la creation du booking,
  on re-resoud le barbier cote serveur (transactionnel - si conflit, retourne 409).

### Securite

- JWT signe HS256 + cookie `httpOnly + sameSite=Lax + secure` en prod.
- Bcrypt 10 rounds pour le mot de passe admin.
- `proxy.ts` valide le JWT a chaque requete `/admin/*` et `/api/admin/*`.
- Drizzle parametre toutes les requetes (pas de SQL injection).
- Validation Zod sur tous les payloads d'API ecriture.

---

## 7. Troubleshooting

### "Login retourne 401 alors que le password est bon"

Le hash bcrypt contient des `$` que Next.js interprete comme variables d'env, ce qui mange
des bouts du hash. Echappe avec `\$` dans `.env.local` :

```
# MAUVAIS (Next mange $2b et $10)
ADMIN_PASSWORD_HASH="$2b$10$abc..."

# BON
ADMIN_PASSWORD_HASH=\$2b\$10\$abc...
```

Sur Vercel UI, mets la valeur brute sans echappement.

### "TypeError" / 500 sur /admin

DATABASE_URL pas defini ou base pas migree. Verifie `.env.local` et lance `pnpm db:push`.

### "Aucun creneau disponible"

Les seeds donnent Mar-Sam 10h-19h. Choisis une date Mar-Sam dans les 30 prochains jours,
sans conflit. Sinon va dans `/admin/schedules` pour verifier les horaires.
