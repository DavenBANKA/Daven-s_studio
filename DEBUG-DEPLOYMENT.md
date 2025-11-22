# 🔍 Debug - Page Noire sur Vercel

## 🎯 Problème
- Le site fonctionne en local
- Le build réussit
- Mais page noire sur Vercel

## 🔎 Étapes de Debug

### 1. Vérifier les Logs Vercel
1. Aller sur https://vercel.com/dashboard
2. Cliquer sur votre projet
3. Onglet "Deployments"
4. Cliquer sur le dernier déploiement
5. Vérifier les logs de build

**Chercher :**
- ❌ Erreurs de build
- ⚠️ Warnings
- 📦 Taille du bundle

### 2. Vérifier la Console Navigateur
1. Ouvrir le site déployé
2. Appuyer sur F12
3. Onglet "Console"

**Chercher :**
- ❌ Erreurs JavaScript (rouge)
- ⚠️ Warnings (jaune)
- 🔴 Erreurs 404 (fichiers manquants)

### 3. Vérifier le Network
1. F12 → Onglet "Network"
2. Recharger la page (Ctrl+R)

**Vérifier :**
- ✅ index.html charge (200)
- ✅ CSS charge (200)
- ✅ JS charge (200)
- ❌ Fichiers 404 ?

## 🐛 Causes Possibles

### 1. Erreur JavaScript
**Symptôme :** Console montre une erreur
**Solution :** Corriger l'erreur dans le code

### 2. Fichiers Manquants
**Symptôme :** Erreurs 404 dans Network
**Solution :** Vérifier que tous les fichiers sont commités

### 3. Problème de Build
**Symptôme :** Logs Vercel montrent une erreur
**Solution :** Corriger la config ou le code

### 4. Cache Navigateur
**Symptôme :** Ancienne version affichée
**Solution :** Vider le cache (Ctrl+Shift+Delete)

### 5. Problème de Routing
**Symptôme :** Page blanche sur certaines routes
**Solution :** Vérifier vercel.json rewrites

## 🔧 Solutions Rapides

### Solution 1 : Vider le Cache
```
1. Ctrl+Shift+Delete
2. Cocher "Tout"
3. Supprimer
4. Ctrl+F5 (hard reload)
```

### Solution 2 : Redéployer
```bash
git commit --allow-empty -m "trigger redeploy"
git push
```

### Solution 3 : Rollback
1. Aller sur Vercel Dashboard
2. Trouver le déploiement qui fonctionnait
3. Cliquer "Promote to Production"

### Solution 4 : Vérifier les Variables d'Environnement
1. Vercel Dashboard → Settings → Environment Variables
2. Vérifier qu'il n'y a pas de variables manquantes

## 📋 Checklist de Vérification

- [ ] Build local réussit (`npm run build`)
- [ ] Pas d'erreurs TypeScript
- [ ] Tous les fichiers commités
- [ ] vercel.json correct
- [ ] Logs Vercel sans erreur
- [ ] Console navigateur sans erreur
- [ ] Network sans 404
- [ ] Cache vidé

## 🚨 Erreurs Communes

### Erreur : "Cannot find module"
**Cause :** Import d'un fichier supprimé
**Solution :** Vérifier tous les imports

### Erreur : "Unexpected token"
**Cause :** Erreur de syntaxe
**Solution :** Vérifier le code formaté

### Erreur : "Failed to fetch"
**Cause :** Fichier manquant
**Solution :** Vérifier que le fichier existe

### Page blanche sans erreur
**Cause :** Erreur dans React (boundary error)
**Solution :** Ajouter error boundary ou vérifier les composants

## 🔍 Debug Avancé

### Tester le Build Localement
```bash
npm run build
npx vite preview
# Ouvrir http://localhost:4173
```

Si ça marche en local mais pas sur Vercel :
- Problème de configuration Vercel
- Problème de variables d'environnement
- Problème de taille de déploiement

### Vérifier la Taille du Déploiement
```bash
npm run build
cd dist
du -sh .
# Doit être < 100 MB pour Vercel gratuit
```

### Activer les Source Maps
Dans `vite.config.ts` :
```typescript
build: {
  sourcemap: true  // Pour debug
}
```

## 📞 Informations à Fournir

Pour m'aider à debugger, envoyez-moi :

1. **Erreurs Console** (F12 → Console)
2. **Logs Vercel** (copier/coller)
3. **URL du site** déployé
4. **Erreurs 404** (F12 → Network)

## 🎯 Prochaines Étapes

1. Ouvrir F12 sur le site
2. Copier les erreurs
3. Me les envoyer
4. Je corrige le problème

---

**En attendant, le site local fonctionne parfaitement !**
