# Site Officiel des Frères Capucins de Clermont-Ferrand

Nouveau site web moderne, rapide et épuré pour la communauté des **Frères Mineurs Capucins de Clermont-Ferrand** (Chapelle du 9 Boulevard Lafayette).

* **Technologie** : [Astro 5](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/)
* **Hébergement** : 100% gratuit sur **GitHub Pages** (avec SSL HTTPS automatique)
* **Administration pour les non-techniciens** : **Decap CMS** intégré sur `/admin` (gestion intuitive des événements, actualités, photos et horaires)

---

## 🚀 Démarrage Rapide (Développement Local)

### 1. Prérequis
* Node.js v20+ ou v22+
* npm

### 2. Lancer le site en local
```bash
npm install
npm run dev
```
Ouvrez [http://localhost:4321](http://localhost:4321) dans votre navigateur.

### 3. Tester l'espace de gestion `/admin` en local
```bash
# Dans un terminal séparé :
npx decap-server
```
Puis accédez à [http://localhost:4321/admin](http://localhost:4321/admin). Vous pourrez tester l'ajout d'événements et le téléversement d'affiches/photos directement avec vos fichiers locaux !

---

## 📦 Déploiement sur GitHub Pages (Gratuit)

Le projet intègre déjà le workflow automatisé `.github/workflows/deploy.yml`.

### Étape 1 : Créer un dépôt sur votre compte GitHub
Créez un dépôt sur GitHub (par exemple `capucins-clermont`).

### Étape 2 : Lier votre dossier local et pousser
```bash
git remote add origin https://github.com/VOTRE_PSEUDO/capucins-clermont.git
git push -u origin main
```

### Étape 3 : Activer GitHub Pages dans les paramètres du dépôt
1. Allez dans **Settings** > **Pages** de votre dépôt GitHub.
2. Sous **Build and deployment > Source**, sélectionnez **GitHub Actions**.
3. C'est tout ! Chaque mise à jour (ou publication depuis `/admin`) reconstruira le site en 30 secondes.

---

## 👩‍💼 Guide d'Utilisation pour les Gestionnaires Non-Techniques

Un espace d'administration visuel et en français est disponible à l'adresse :  
`https://capucins-clermont.org/admin`

### Comment publier un événement (avec photo/affiche) ?
1. Rendez-vous sur `/admin` et connectez-vous.
2. Cliquez sur **« 📅 Événements & Fêtes »** dans la barre latérale gauche.
3. Cliquez sur **« Nouvel élément »**.
4. Renseignez :
   * Le **Titre** (ex: *Messe de la nuit de Noël*, *Rencontre Padre Pio*).
   * La **Date** et les **Horaires**.
   * Le **Lieu** (rempli automatiquement par défaut).
   * L'**Affiche ou Photo** : cliquez sur *Choisir une image* et glissez votre fichier directement depuis votre téléphone ou ordinateur.
   * Le **Court résumé** et le **Programme détaillé**.
5. Cliquez sur le bouton bleu **« Publier »** en haut à droite.
6. Le site est mis à jour automatiquement en moins d'une minute !

### Comment modifier les horaires réguliers ?
1. Dans `/admin`, cliquez sur **« ⏰ Horaires Réguliers »**.
2. Modifiez directement les textes des horaires (messes, adoration, confessions).
3. Cliquez sur **« Enregistrer »**.

---

## 🌐 Configuration du Nom de Domaine `capucins-clermont.org`

Le fichier `public/CNAME` contient déjà `capucins-clermont.org`.

Chez votre registraire de domaine (OVH, Gandi, etc.) :
1. Créez un enregistrement **CNAME** pour `www` pointant vers : `VOTRE_PSEUDO.github.io`.
2. Pour le domaine racine (`capucins-clermont.org`), créez 4 enregistrements **A** pointant vers les adresses IP officielles de GitHub Pages :
   * `185.199.108.153`
   * `185.199.109.153`
   * `185.199.110.153`
   * `185.199.111.153`
3. Dans **GitHub Settings > Pages**, activez la case **Enforce HTTPS** pour le certificat SSL gratuit.

---

## 📁 Structure du Projet

```text
├── .github/workflows/deploy.yml   # Déploiement automatique GitHub Actions
├── public/
│   ├── CNAME                      # Nom de domaine personnalisé
│   ├── favicon.svg                # Croix Tau franciscaine
│   ├── admin/                     # Interface d'administration Decap CMS
│   │   ├── config.yml             # Schéma des formulaires en français
│   │   └── index.html             # Application web du tableau de bord
│   └── images/                    # Photographies et affiches
├── src/
│   ├── components/                # Cartes d'horaires, événements, carte d'accès
│   ├── content/
│   │   ├── events/                # Fichiers Markdown des événements
│   │   └── posts/                 # Fichiers Markdown des actualités
│   ├── data/schedules.json        # Données modifiables des horaires
│   ├── layouts/Layout.astro       # Gabarit avec en-tête et pied de page
│   └── pages/                     # Routes du site (/horaires, /evenements, etc.)
```
