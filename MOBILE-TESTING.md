# 📱 Guide de Test Mobile - Sélecteur de Langue

## ✅ Fonctionnalités Ajoutées

### Sur Mobile et Tablette (< 1024px)

1. **Bouton de langue dédié** 
   - Positionné à côté du bouton menu hamburger
   - Affiche la langue actuelle (FR, EN, DE, etc.)
   - Style premium avec bordure violette

2. **Menu overlay plein écran**
   - S'ouvre en cliquant sur le bouton de langue
   - Fond sombre avec blur
   - Liste de toutes les langues disponibles avec drapeaux
   - Langue active marquée avec un ✓

3. **6 langues disponibles**
   - 🇫🇷 Français
   - 🇬🇧 English
   - 🇩🇪 Deutsch
   - 🇨🇳 中文
   - 🇮🇹 Italiano
   - 🇪🇸 Español

### Sur Desktop (> 1024px)

- Le sélecteur de langue classique reste dans le header
- Menu déroulant horizontal avec les langues

## 🧪 Comment Tester

### Test sur Mobile Réel

1. Ouvrez le site sur votre téléphone
2. Regardez en haut à droite du header
3. Vous devriez voir deux boutons :
   - **Bouton langue** (ex: "FR") - à gauche
   - **Bouton menu** (☰) - à droite

4. Cliquez sur le bouton langue
5. Un menu plein écran devrait apparaître
6. Sélectionnez une langue
7. Le site devrait se traduire instantanément

### Test avec Chrome DevTools

1. Ouvrez Chrome DevTools (F12)
2. Cliquez sur l'icône mobile (Toggle device toolbar)
3. Sélectionnez un appareil mobile (iPhone, Samsung, etc.)
4. Rafraîchissez la page
5. Testez le bouton de langue

### Résolutions à Tester

- **Mobile Portrait** : 375px × 667px (iPhone SE)
- **Mobile Landscape** : 667px × 375px
- **Tablet Portrait** : 768px × 1024px (iPad)
- **Tablet Landscape** : 1024px × 768px
- **Desktop** : 1920px × 1080px

## 🎨 Design Mobile

### Bouton de Langue Mobile
```
┌─────────────────────────────────┐
│  DAVEN'S    [FR]  [☰]          │
│             ↑      ↑            │
│          Langue  Menu           │
└─────────────────────────────────┘
```

### Menu Overlay Ouvert
```
┌─────────────────────────────────┐
│                                 │
│  ┌───────────────────────────┐ │
│  │ Choisir une langue    [×] │ │
│  ├───────────────────────────┤ │
│  │ 🇫🇷 Français          ✓  │ │
│  │ 🇬🇧 English              │ │
│  │ 🇩🇪 Deutsch              │ │
│  │ 🇨🇳 中文                  │ │
│  │ 🇮🇹 Italiano             │ │
│  │ 🇪🇸 Español              │ │
│  └───────────────────────────┘ │
│                                 │
└─────────────────────────────────┘
```

## ✨ Interactions

### Bouton de Langue
- **Hover** : Fond violet clair + bordure plus visible
- **Click** : Ouvre le menu overlay
- **Active** : Légère translation vers le haut

### Options de Langue
- **Hover** : Fond violet + translation vers la droite
- **Active** : Fond violet foncé + bordure + checkmark ✓
- **Click** : Change la langue + ferme le menu

### Fermeture du Menu
- Cliquer sur le bouton [×]
- Cliquer en dehors du menu
- Appuyer sur Escape (desktop)

## 🐛 Points à Vérifier

- [ ] Le bouton de langue est visible sur mobile
- [ ] Le bouton de langue est à côté du menu hamburger
- [ ] Le menu s'ouvre en plein écran
- [ ] Toutes les langues sont affichées
- [ ] Les drapeaux sont visibles
- [ ] La langue active a un checkmark
- [ ] Le changement de langue fonctionne
- [ ] Le menu se ferme après sélection
- [ ] Le site se traduit correctement
- [ ] Pas de conflit avec le menu de navigation
- [ ] Le bouton est caché sur desktop
- [ ] Le sélecteur desktop fonctionne toujours

## 📊 Breakpoints

| Taille | Comportement |
|--------|-------------|
| < 480px | Bouton langue petit (38px) |
| 480px - 768px | Bouton langue moyen (42px) |
| 768px - 1024px | Bouton langue + menu overlay |
| > 1024px | Sélecteur desktop classique |

## 🚀 Commandes de Test

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir sur le réseau local (pour tester sur mobile)
# L'URL sera affichée dans le terminal
# Ex: http://192.168.1.x:3000
```

## 📱 Test sur Appareil Réel

1. Assurez-vous que votre ordinateur et téléphone sont sur le même réseau WiFi
2. Lancez `npm run dev`
3. Notez l'URL réseau affichée (ex: http://192.168.1.10:3000)
4. Ouvrez cette URL sur votre téléphone
5. Testez le bouton de langue

## 🎯 Checklist Finale

- [ ] Bouton visible sur iPhone
- [ ] Bouton visible sur Android
- [ ] Bouton visible sur iPad
- [ ] Menu s'ouvre correctement
- [ ] Toutes les langues fonctionnent
- [ ] Animations fluides
- [ ] Pas de bug visuel
- [ ] Performance acceptable
- [ ] Compatible Safari iOS
- [ ] Compatible Chrome Android

---

**Note** : Si vous rencontrez des problèmes, vérifiez la console du navigateur (F12) pour les erreurs JavaScript.
