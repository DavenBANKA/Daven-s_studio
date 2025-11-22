# 🚀 Guide de Déploiement sur Vercel

## Étape 1 : Préparer votre code

Assurez-vous que tous vos fichiers sont sauvegardés et que le projet fonctionne localement :

```bash
npm install
npm run build
```

## Étape 2 : Initialiser Git (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit - Daven's Studio website"
```

## Étape 3 : Créer un repository sur GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le "davens-studio-website"
4. Ne cochez PAS "Initialize with README" (vous en avez déjà un)
5. Cliquez sur "Create repository"

## Étape 4 : Pousser votre code sur GitHub

```bash
git remote add origin https://github.com/VOTRE-USERNAME/davens-studio-website.git
git branch -M main
git push -u origin main
```

## Étape 5 : Déployer sur Vercel

### Option A : Via l'interface web (Plus simple)

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Sign Up" et connectez-vous avec GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez votre repository "davens-studio-website"
5. Vercel détectera automatiquement la configuration Vite
6. Cliquez sur "Deploy"
7. Attendez 1-2 minutes ⏳
8. Votre site est en ligne ! 🎉

### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI globalement
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer (suivez les instructions)
vercel

# Pour déployer directement en production
vercel --prod
```

## Étape 6 : Configuration du domaine personnalisé (Optionnel)

1. Dans le dashboard Vercel, allez dans "Settings" > "Domains"
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions pour configurer les DNS

## 🔄 Déploiements automatiques

Une fois connecté à GitHub, Vercel déploiera automatiquement :
- ✅ Chaque push sur la branche `main` → Production
- ✅ Chaque pull request → Preview deployment

## 🌍 Variables d'environnement (si nécessaire)

Si vous avez des clés API ou secrets :

1. Dans Vercel Dashboard → Settings → Environment Variables
2. Ajoutez vos variables
3. Redéployez le projet

## 📊 Monitoring

Vercel fournit automatiquement :
- Analytics de performance
- Logs en temps réel
- Métriques de vitesse
- Rapports d'erreurs

## 🆘 Dépannage

### Erreur de build

```bash
# Vérifiez localement
npm run build

# Si ça fonctionne localement mais pas sur Vercel,
# vérifiez les versions de Node.js dans vercel.json
```

### Problème de routing

Le fichier `vercel.json` contient déjà la configuration pour React Router.
Toutes les routes redirigent vers `index.html`.

### Site ne se charge pas

1. Vérifiez les logs dans Vercel Dashboard
2. Assurez-vous que `dist` est bien le dossier de sortie
3. Vérifiez que le build s'est terminé avec succès

## 🎯 Checklist finale

- [ ] Code testé localement
- [ ] Build réussi (`npm run build`)
- [ ] Code poussé sur GitHub
- [ ] Projet importé dans Vercel
- [ ] Déploiement réussi
- [ ] Site accessible via l'URL Vercel
- [ ] Toutes les pages fonctionnent
- [ ] Changement de langue fonctionne
- [ ] Responsive testé sur mobile

## 🔗 Liens utiles

- [Documentation Vercel](https://vercel.com/docs)
- [Vite + Vercel](https://vercel.com/docs/frameworks/vite)
- [React Router + Vercel](https://vercel.com/guides/deploying-react-with-vercel)

---

**Votre site sera accessible à :** `https://votre-projet.vercel.app`

Vous pouvez ensuite configurer un domaine personnalisé comme `davens.studio` ! 🚀
