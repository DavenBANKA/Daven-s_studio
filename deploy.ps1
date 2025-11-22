# Script de déploiement rapide pour Vercel (Windows PowerShell)
# Usage: .\deploy.ps1

Write-Host "🚀 Déploiement de Daven's Studio sur Vercel" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Node.js est installé
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js n'est pas installé. Installez-le depuis https://nodejs.org" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Installer les dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors de l'installation des dépendances" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Dépendances installées" -ForegroundColor Green
Write-Host ""

# Build du projet
Write-Host "🔨 Build du projet..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Vérifier si Vercel CLI est installé
try {
    vercel --version | Out-Null
    Write-Host "✅ Vercel CLI installé" -ForegroundColor Green
} catch {
    Write-Host "📥 Installation de Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    Write-Host "✅ Vercel CLI installé" -ForegroundColor Green
}

Write-Host ""

# Déployer sur Vercel
Write-Host "🚀 Déploiement sur Vercel..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Choisissez une option:" -ForegroundColor Yellow
Write-Host "1) Déploiement de test (preview)"
Write-Host "2) Déploiement en production"
$choice = Read-Host "Votre choix (1 ou 2)"

switch ($choice) {
    "1" {
        Write-Host "📤 Déploiement en mode preview..." -ForegroundColor Yellow
        vercel
    }
    "2" {
        Write-Host "📤 Déploiement en production..." -ForegroundColor Yellow
        vercel --prod
    }
    default {
        Write-Host "❌ Choix invalide" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "✅ Déploiement terminé!" -ForegroundColor Green
Write-Host "🌐 Votre site est maintenant en ligne!" -ForegroundColor Cyan
Write-Host ""
