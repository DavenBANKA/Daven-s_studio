#!/bin/bash

# Script de déploiement rapide pour Vercel
# Usage: ./deploy.sh

echo "🚀 Déploiement de Daven's Studio sur Vercel"
echo "============================================"
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Installez-le depuis https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de l'installation des dépendances"
    exit 1
fi

echo "✅ Dépendances installées"
echo ""

# Build du projet
echo "🔨 Build du projet..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du build"
    exit 1
fi

echo "✅ Build réussi"
echo ""

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "📥 Installation de Vercel CLI..."
    npm install -g vercel
fi

echo "✅ Vercel CLI installé"
echo ""

# Déployer sur Vercel
echo "🚀 Déploiement sur Vercel..."
echo ""
echo "Choisissez une option:"
echo "1) Déploiement de test (preview)"
echo "2) Déploiement en production"
read -p "Votre choix (1 ou 2): " choice

case $choice in
    1)
        echo "📤 Déploiement en mode preview..."
        vercel
        ;;
    2)
        echo "📤 Déploiement en production..."
        vercel --prod
        ;;
    *)
        echo "❌ Choix invalide"
        exit 1
        ;;
esac

echo ""
echo "✅ Déploiement terminé!"
echo "🌐 Votre site est maintenant en ligne!"
echo ""
