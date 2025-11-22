# 🐛 Debug - Sélecteur de Langue Mobile

## ✅ Corrections Appliquées

### Problème Identifié
Le menu overlay des langues était positionné à l'intérieur du `site-header__inner`, ce qui causait des problèmes de z-index et de positionnement.

### Solution Appliquée
1. **Déplacé le `lang-overlay` en dehors du header**
   - Maintenant au même niveau que le `nav-overlay`
   - Position: `fixed` avec `inset: 0` pour couvrir tout l'écran
   - Z-index: 200 (au-dessus de tout)

2. **Corrigé le CSS**
   - Remplacé `display: none` par `visibility: hidden`
   - Ajouté transition sur `visibility`
   - Le `display: block` s'active sur mobile (< 1024px)

## 🧪 Comment Tester

### Test Rapide
1. Ouvrez le site sur mobile ou en mode responsive
2. Cliquez sur le bouton **[FR]** en haut à droite
3. Un menu plein écran devrait apparaître avec toutes les langues
4. Cliquez sur une langue pour changer
5. Le menu devrait se fermer automatiquement

### Vérifications à Faire

#### ✅ Le bouton de langue est visible
```
DAVEN'S            [FR│☰]
                    ↑
                 Visible
```

#### ✅ Le menu s'ouvre
```
┌─────────────────────────────────┐
│  Choisir une langue        [×]  │
├─────────────────────────────────┤
│  🇫🇷 Français              ✓   │
│  🇬🇧 English                    │
│  🇩🇪 Deutsch                    │
│  🇨🇳 中文                        │
│  🇮🇹 Italiano                   │
│  🇪🇸 Español                    │
└─────────────────────────────────┘
```

#### ✅ Le changement de langue fonctionne
- Cliquez sur une langue
- Le site se traduit instantanément
- Le menu se ferme
- Le bouton affiche la nouvelle langue

## 🔍 Debug avec DevTools

### Ouvrir la Console
1. Appuyez sur F12
2. Allez dans l'onglet "Console"
3. Cliquez sur le bouton de langue
4. Vérifiez qu'il n'y a pas d'erreurs JavaScript

### Inspecter l'Élément
1. Cliquez droit sur le bouton [FR]
2. "Inspecter l'élément"
3. Vérifiez que la classe `lang-toggle` est présente
4. Vérifiez que `display: flex` est appliqué sur mobile

### Vérifier l'Overlay
1. Cliquez sur le bouton de langue
2. Inspectez l'élément `lang-overlay`
3. Vérifiez que:
   - `display: block` (sur mobile)
   - `opacity: 1` (quand ouvert)
   - `visibility: visible` (quand ouvert)
   - `pointer-events: all` (quand ouvert)

## 🎯 Classes CSS à Vérifier

### Bouton Mobile
```css
.lang-toggle {
  display: flex;        /* Sur mobile */
  width: 42px;
  height: 36px;
  z-index: 50;
}
```

### Overlay
```css
.lang-overlay {
  display: block;       /* Sur mobile */
  position: fixed;
  inset: 0;
  z-index: 200;
}

.lang-overlay--open {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}
```

### Menu
```css
.lang-overlay__menu {
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 201;
}
```

## 🐛 Problèmes Possibles

### Le bouton n'est pas visible
- Vérifiez que vous êtes en mode mobile (< 1024px)
- Vérifiez que `display: flex` est appliqué
- Vérifiez qu'il n'y a pas de `display: none !important`

### Le menu ne s'ouvre pas
- Vérifiez que `isLangOpen` change bien (console.log)
- Vérifiez que la classe `lang-overlay--open` est ajoutée
- Vérifiez que `display: block` est appliqué sur mobile

### Le menu est invisible
- Vérifiez le z-index (doit être 200)
- Vérifiez que `opacity: 1` quand ouvert
- Vérifiez que `visibility: visible` quand ouvert

### Les clics ne fonctionnent pas
- Vérifiez que `pointer-events: all` quand ouvert
- Vérifiez qu'il n'y a pas d'autre élément par-dessus

## 📱 Test sur Appareil Réel

### Étapes
1. Lancez `npm run dev`
2. Notez l'URL réseau (ex: http://192.168.1.10:3000)
3. Ouvrez sur votre téléphone
4. Testez le bouton de langue

### Comportement Attendu
- Bouton visible et cliquable
- Menu s'ouvre en plein écran
- Fond sombre avec blur
- Liste des langues avec drapeaux
- Changement de langue instantané
- Menu se ferme après sélection

## 🔧 Commandes Utiles

```bash
# Lancer le serveur
npm run dev

# Vérifier les erreurs de build
npm run build

# Nettoyer et relancer
rm -rf node_modules/.vite
npm run dev
```

## ✅ Checklist de Validation

- [ ] Bouton [FR] visible sur mobile
- [ ] Bouton cliquable
- [ ] Menu s'ouvre en plein écran
- [ ] Fond sombre visible
- [ ] 6 langues affichées avec drapeaux
- [ ] Langue active marquée avec ✓
- [ ] Clic sur langue change le site
- [ ] Menu se ferme après sélection
- [ ] Bouton [×] ferme le menu
- [ ] Clic en dehors ferme le menu
- [ ] Pas d'erreur dans la console
- [ ] Animations fluides

## 🚀 Si Tout Fonctionne

Vous devriez voir:
1. Deux boutons collés en haut à droite: [FR│☰]
2. Clic sur [FR] ouvre un menu plein écran
3. Sélection d'une langue traduit le site
4. Le menu se ferme automatiquement

---

**Note**: Si le problème persiste, vérifiez que vous avez bien sauvegardé tous les fichiers et rechargé la page (Ctrl+Shift+R pour forcer le rechargement).
