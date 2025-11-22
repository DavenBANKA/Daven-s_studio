import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Home",
        work: "Work",
        studio: "Studio",
        contact: "Contact",
      },
      cta: {
        startProject: "Démarrer un projet",
      },
      footer: {
        baseline:
          "Studio de projets technologiques pour des expériences digitales ambitieuses, conçues pour durer.",
        nav: {
          label: "Navigation",
          home: "Accueil",
          work: "Réalisations",
          studio: "Studio",
          contact: "Contact",
        },
        services: {
          label: "Services",
          branding: "Branding & Identité",
          web: "Conception Web",
          motion: "Motion Design",
          photo: "Photographie & Vidéo",
          strategy: "Stratégie Digitale",
        },
        contact: {
          label: "Contact",
          address: "Lomé-TOGO",
        },
        social: {
          label: "Social",
          linkedin: "LinkedIn",
          instagram: "Instagram",
          behance: "Behance",
          github: "GitHub",
        },
        legal: {
          label: "Mentions Légales",
          privacy: "Confidentialité",
          terms: "Conditions Générales",
          cookies: "Cookies",
        },
        newsletter: {
          label: "Newsletter",
          placeholder: "Entrez votre e-mail",
          aria: "Newsletter email",
          submit: "S'inscrire",
        },
        copyright: "Tous droits réservés.",
        cookies: "Nous utilisons des cookies",
      },
      contact: {
        eyebrow: "Contact",
        title: "Parlons de votre prochain projet",
        lead: "Décrivez‑nous brièvement votre contexte et vos objectifs. Nous revenons vers vous sous 24 à 48h avec une première lecture et des pistes d'accompagnement.",
        methods: {
          email: {
            label: "Email professionnel",
            value: "lionesspretty7@gmail.com"
          },
          whatsapp: {
            label: "WhatsApp Business",
            value: "+228 91 59 67 88"
          }
        },
        availability: {
          badge: "Disponible pour nouveaux projets",
          text: "Réponse sous 24-48h · Consultation initiale gratuite"
        },
        form: {
          name: {
            label: "Nom complet",
            placeholder: "Votre nom"
          },
          email: {
            label: "E‑mail",
            placeholder: "vous@entreprise.com"
          },
          projectType: {
            label: "Type de projet",
            placeholder: "Plateforme, site, produit..."
          },
          message: {
            label: "Résumé du projet",
            placeholder: "Parlez‑nous de votre contexte, vos objectifs, vos délais..."
          },
          submit: "Envoyer la demande",
          note: "Ce formulaire est une démo front‑end : branchement à votre CRM ou outil d'e‑mailing à définir."
        }
      },
      services: {
        branding: {
          title: "Branding & Identité",
          subtitle: "Nous créons des marques qui marquent les esprits",
          intro: "De la stratégie de marque à l'identité visuelle complète, nous accompagnons votre entreprise pour construire une image forte, cohérente et mémorable. Notre approche mêle créativité, psychologie du consommateur et excellence technique.",
          processTitle: "Notre processus",
          processList: [
            "Audit de marque et analyse concurrentielle",
            "Définition de la plateforme de marque",
            "Création de l'identité visuelle (logo, couleurs, typographie)",
            "Développement des guidelines de marque",
            "Déploiement sur tous les supports"
          ],
          whyTitle: "Pourquoi nous choisir",
          whyText: "Avec plus de 50 identités créées, nous transformons votre vision en une marque qui raconte une histoire, connecte avec votre audience et se démarque sur le marché."
        },
        web: {
          title: "Conception Web",
          subtitle: "Des expériences digitales qui convertissent",
          intro: "Nous concevons des sites web qui allient esthétique exceptionnelle, performance technique et expérience utilisateur optimale. Chaque projet est une opportunité de repousser les limites du design web.",
          expertiseTitle: "Notre expertise",
          expertiseList: [
            "Design UI/UX sur mesure",
            "Développement responsive et accessible",
            "Optimisation des performances",
            "Intégration CMS et e-commerce",
            "Maintenance et évolution"
          ],
          techTitle: "Technologies",
          techText: "React, Next.js, TypeScript, Tailwind CSS, Node.js, et les dernières standards web pour garantir des sites rapides, sécurisés et évolutifs."
        },
        motion: {
          title: "Motion Design",
          subtitle: "Donnez vie à vos idées avec l'animation",
          intro: "Le motion design transforme vos messages en expériences visuelles captivantes. Nous créons des animations qui racontent votre histoire, renforcent votre identité et engagent votre audience.",
          servicesTitle: "Nos services",
          servicesList: [
            "Animations de logo et branding",
            "Vidéos explicatives et tutoriels",
            "Animations pour réseaux sociaux",
            "Motion graphics pour sites web",
            "Génériques et habillages vidéo"
          ],
          approachTitle: "Notre approche",
          approachText: "Chaque animation est pensée pour servir votre message. Nous combinons créativité artistique et stratégie de communication pour créer des contenus qui marquent les esprits."
        },
        photo: {
          title: "Photographie & Vidéo",
          subtitle: "Capturez l'essence de votre marque",
          intro: "Des visuels professionnels qui racontent votre histoire. Nous créons des contenus photo et vidéo authentiques qui renforcent votre identité et connectent avec votre audience.",
          servicesTitle: "Nos prestations",
          servicesList: [
            "Shooting produits et packshots",
            "Reportages corporate et événementiels",
            "Portraits professionnels",
            "Vidéos promotionnelles et institutionnelles",
            "Contenus pour réseaux sociaux"
          ],
          qualityTitle: "Qualité professionnelle",
          qualityText: "Équipement haut de gamme, post-production soignée et livraison dans les formats adaptés à tous vos supports de communication."
        },
        strategy: {
          title: "Stratégie Digitale",
          subtitle: "Transformez votre présence en ligne",
          intro: "Une stratégie digitale efficace est la clé du succès en ligne. Nous vous accompagnons pour définir une vision claire, des objectifs mesurables et un plan d'action concret.",
          servicesTitle: "Nos accompagnements",
          servicesList: [
            "Audit digital et analyse concurrentielle",
            "Définition de la stratégie de contenu",
            "Optimisation SEO et référencement",
            "Stratégie social media",
            "Analytics et mesure de performance"
          ],
          resultsTitle: "Résultats mesurables",
          resultsText: "Nous mettons en place des KPIs clairs et des outils de suivi pour mesurer l'impact de chaque action et optimiser continuellement votre présence digitale."
        }
      },
      legal: {
        privacy: {
          title: "Politique de Confidentialité",
          lastUpdated: "Dernière mise à jour",
          intro: "Chez Daven's Studio, nous prenons la protection de vos données personnelles très au sérieux. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.",
          sections: {
            collection: {
              title: "Collecte des données",
              content: "Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services : nom, email, informations de projet. Ces données sont collectées avec votre consentement explicite."
            },
            usage: {
              title: "Utilisation des données",
              content: "Vos données sont utilisées exclusivement pour vous fournir nos services, vous contacter concernant votre projet et améliorer notre offre. Nous ne vendons ni ne partageons vos données avec des tiers."
            },
            rights: {
              title: "Vos droits",
              content: "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à lionesspretty7@gmail.com."
            },
            security: {
              title: "Sécurité",
              content: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé."
            }
          }
        },
        terms: {
          title: "Conditions Générales d'Utilisation",
          lastUpdated: "Dernière mise à jour",
          intro: "En utilisant les services de Daven's Studio, vous acceptez les présentes conditions générales d'utilisation.",
          sections: {
            services: {
              title: "Services proposés",
              content: "Daven's Studio propose des services de conception, développement et accompagnement de projets digitaux. Les prestations sont définies dans des devis personnalisés."
            },
            obligations: {
              title: "Obligations du client",
              content: "Le client s'engage à fournir les informations et ressources nécessaires à la réalisation du projet dans les délais convenus."
            },
            payment: {
              title: "Conditions de paiement",
              content: "Les modalités de paiement sont définies dans chaque devis. Un acompte peut être demandé au démarrage du projet."
            },
            liability: {
              title: "Responsabilité",
              content: "Daven's Studio s'engage à fournir des services de qualité professionnelle. Notre responsabilité est limitée au montant des prestations facturées."
            }
          }
        },
        cookies: {
          title: "Politique de Cookies",
          lastUpdated: "Dernière mise à jour",
          intro: "Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site.",
          sections: {
            what: {
              title: "Qu'est-ce qu'un cookie ?",
              content: "Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur un site web. Il permet de mémoriser vos préférences et d'améliorer votre expérience."
            },
            types: {
              title: "Types de cookies utilisés",
              content: "Nous utilisons des cookies essentiels pour le fonctionnement du site, des cookies analytiques pour comprendre l'utilisation du site, et des cookies de préférence pour mémoriser vos choix."
            },
            control: {
              title: "Contrôle des cookies",
              content: "Vous pouvez contrôler et supprimer les cookies via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter le fonctionnement du site."
            },
            thirdParty: {
              title: "Cookies tiers",
              content: "Nous utilisons Google Analytics pour analyser le trafic du site. Ces services peuvent déposer leurs propres cookies."
            }
          }
        }
      },
      home: {
        heroBrand: "Daven's Studio",
        heroEyebrow: "Studio de projets technologiques",
        heroTitleLine1: "Nous",
        heroTitleLine2: "orchestrons",
        heroTitleLine3: "vos projets",
        heroTitleLine4: "technologiques.",
        heroText:
          "Daven's conçoit, pilote et déploie des produits digitaux propulsés par l'IA et le cloud pour les marques qui veulent une présence en ligne audacieuse, cohérente et techniquement solide, pilotée par la donnée.",
        heroCtaLink: "Découvrir nos projets",
        heroCtaNote: "Disponibilités limitées pour 2025.",
        heroSideLabel: "Ce que nous faisons",
        heroSideText:
          "Stratégie produit, IA appliquée, architectures cloud, design d’interface, développements web & mobile et accompagnement long terme. Une équipe resserrée, dédiée à vos enjeux.",
        heroBarItem1: "Daven's · Studio de projets technologiques",
        heroBarItem2: "Discovery · Design · Delivery",
        heroBarItem3: "Basé en Afrique · Clients internationaux",
        heroMediaP1:
          "Daven's accompagne les équipes produit, marketing et direction dans la mise en scène de leurs expériences technologiques : plateformes SaaS, sites de lancement, outils internes.",
        heroMediaP2:
          "Nous combinons stratégie, design et développement pour créer des interfaces claires, rapides et ambitieuses, pensées pour le long terme.",
        approachEyebrow: "Approche",
        approachTitle: "De l’idée à la plateforme en ligne",
        approachText:
          "Chaque projet commence par une phase d’immersion dans votre contexte : audiences, objectifs business, contraintes techniques. Nous traduisons ensuite cette vision en assistants IA, interfaces cloud et outils internes centrés sur vos flux de données.",
        approachList1: "Immersion et cadrage stratégique avec vos équipes.",
        approachList2: "Design d’interface et prototypage interactif.",
        approachList3:
          "Développement, intégration et accompagnement au lancement.",
        typesDeliverablesLabel: "Types de livrables",
        typesDeliverablesValue:
          "Sites vitrines, applications web (e-commerce, e-learning, etc.), logiciels d’application, solutions IA, automatisation, analyse de données, big data, plateformes SaaS, outils internes, landing pages",
        industriesLabel: "Industries",
        industriesValue: "Tech, fintech, éducation, santé, industrie",
        useCasesEyebrow: "Cas d’usage typiques",
        useCasesTitle: "Comment nous appliquons l’IA, le cloud et la data",
        useCasesText:
          "Quelques exemples de situations où nous intervenons pour transformer des idées en produits digitaux concrets.",
        case1Tag: "Support client IA",
        case1Client: "Assistants & copilotes",
        case1Title:
          "Aider vos équipes support avec des réponses assistées par l’IA",
        case1Roles:
          "Analyse de connaissance · Interfaces conversationnelles",
        case2Tag: "Portails cloud",
        case2Client: "Espace client",
        case2Title: "Portails sécurisés pour vos clients ou partenaires",
        case2Roles: "Authentification · Dashboards · Intégrations API",
        case3Tag: "Outils data internes",
        case3Client: "Équipes métiers",
        case3Title: "Consolider et visualiser vos données métier clés",
        case3Roles: "Design de workflow · Data‑viz · Automatisation",
        case4Tag: "Big Data & Analytics",
        case4Client: "Data Scientists",
        case4Title:
          "Exploiter de grands volumes de données pour l’analyse prédictive",
        case4Roles: "Pipeline ETL · Machine Learning · Reporting avancé",
        architectsEyebrow: "Architectes de solution",
        architectsTitle: "Concevoir l’architecture de vos produits digitaux",
        architectsText:
          "Nous intervenons en amont des projets pour clarifier l’architecture cible : quelles briques techniques, quelles intégrations, quels parcours utilisateurs. L’objectif est de transformer vos idées en un schéma clair, réaliste et évolutif.",
        architectsList1:
          "Cartographie de l’existant et des contraintes métier.",
        architectsList2:
          "Choix des briques cloud, data et IA adaptées.",
        architectsList3:
          "Définition des parcours et de l’architecture fonctionnelle.",
        architectsDeliverablesLabel: "Livrables typiques",
        architectsDeliverablesValue:
          "Schémas d’architecture, backlog initial, recommandations tech, cahier des charges, spécifications fonctionnelles, maquettes interactives, prototypes, wireframes, design system, charte graphique, roadmap produit, plan de migration, benchmark technologique, analyse de risques, budget estimé, planning prévisionnel, définition des KPI, modèle de données, API specifications, plan de test, stratégie d’hébergement, recommandations sécurité, plan de déploiement, documentation technique, guides d’intégration, support post-lancement",
        deliveryEyebrow: "Prestataire de projet",
        deliveryTitle: "Piloter et livrer vos projets technologiques",
        deliveryText:
          "Daven's prend en charge la mise en œuvre complète : cadrage, design, développement, recette et mise en production. Nous travaillons en cycles courts avec des démonstrations régulières pour sécuriser chaque étape.",
        deliveryList1:
          "Gestion de projet produit et coordination des parties prenantes.",
        deliveryList2:
          "Design d’interface, composants réutilisables et design system.",
        deliveryList3:
          "Développements web & mobile, intégrations API, déploiement.",
        deliveryFormatsLabel: "Formats de mission",
        deliveryFormatsValue:
          "Projets forfaitaires, régie augmentée, équipe dédiée, conseil stratégique, audit technique, workshop de design, sprint de prototypage, accompagnement au lancement, support technique, formation équipes, revue de code, expertise IA & data, mise à niveau architecture, optimisation performance, migration cloud, intégration API, développement sur mesure, maintenance applicative, évolution continue, coaching produit, veille technologique, assistance technique, pilotage de projet, gestion de la roadmap, analyse de l’existant, préconisations solutions, cadrage budgétaire, plan de transformation",
        followEyebrow: "Suivi des entreprises",
        followTitle: "Accompagner vos équipes sur la durée",
        followText:
          "Une fois la plateforme en ligne, nous restons à vos côtés pour faire évoluer le produit : nouvelles fonctionnalités, optimisations de performance, amélioration continue de l’expérience.",
        followList1:
          "Roadmap produit partagée et priorisation des évolutions.",
        followList2:
          "Suivi des performances, analytics et retours utilisateurs.",
        followList3:
          "Support pour vos équipes internes (marketing, produit, tech).",
        followTypeLabel: "Type d’accompagnement",
        followTypeValue:
          "Support mensuel, sprints d’amélioration, interventions ciblées",
      },
      studio: {
        about: {
          eyebrow: "À propos",
          lead: "Daven's est un studio de projets technologiques qui conçoit et pilote des produits digitaux propulsés par l'IA et le cloud pour des marques qui veulent faire les choses autrement. Nous travaillons avec des équipes marketing, produit et direction pour transformer des enjeux complexes en expériences claires et ambitieuses.",
          sideLabel: "Mieux nous connaître",
          sideText1: "Nous collaborons principalement avec des startups, PME et équipes innovation qui ont besoin de partenaires capables de comprendre à la fois la vision business, les contraintes techniques et la réalité du terrain.",
          sideText2: "Basés en Europe et organisés en remote-first, nous mettons en place une équipe resserrée autour de chaque projet pour garder de la vitesse sans sacrifier la qualité."
        },
        team: {
          eyebrow: "Équipe & organisation",
          description1: "Nous travaillons en petit noyau dédié à chaque projet : un point de contact unique côté Daven's, entouré de profils spécialisés (UX, UI, développement front/back, intégration).",
          description2: "Les échanges se font en visioconférence et via des outils collaboratifs (Figma, Notion, Slack) pour garder une cadence fluide sans réunions inutiles."
        },
        methodology: {
          eyebrow: "Méthodologie",
          title: "Un cadre clair en cinq étapes",
          description: "Nous structurons les projets pour garder le cap tout en laissant de la place aux ajustements : vous savez à tout moment où nous en sommes et ce qui arrive ensuite.",
          steps: {
            discovery: "Discovery : compréhension du contexte, des données et des enjeux.",
            design: "Design : parcours, maquettes, prototypes et design system.",
            data: "Data & IA : préparation des données, choix des briques IA.",
            build: "Build : développement, intégrations, tests et mise en ligne.",
            run: "Run : suivi, itérations et amélioration continue du produit."
          }
        }
      },
      work: {
        eyebrow: "Work",
        title: "Projets sélectionnés",
        subtitle: "Une sélection de plateformes, produits et expériences créées pour nos clients. Chaque projet est pensé comme une collaboration stratégique sur le long terme.",
        filters: {
          all: "Tous",
          saas: "SaaS",
          mobile: "Mobile",
          branding: "Branding",
          ecommerce: "E-commerce",
          ai: "IA"
        },
        projects: {
          novastack: {
            tag: "Plateforme SaaS",
            client: "NovaStack",
            title: "Refonte complète d'une plateforme B2B",
            roles: "Product strategy · UX/UI · Web app",
            stats: {
              conversion: "+45% conversion",
              users: "200K+ utilisateurs",
              rating: "4.8★ rating",
              revenue: "€2M+ revenus"
            }
          },
          auralink: {
            tag: "Marque tech",
            client: "Auralink",
            title: "Identité digitale & site de lancement",
            roles: "Branding · Website · Motion",
            stats: {
              traffic: "+320% trafic",
              engagement: "8min session",
              bounce: "-25% rebond",
              leads: "+150% leads"
            }
          },
          pulseone: {
            tag: "Produit mobile",
            client: "PulseOne",
            title: "Application companion pour IoT",
            roles: "Design système · iOS · Android",
            stats: {
              downloads: "500K+ téléchargements",
              retention: "78% rétention",
              crashes: "-90% crashes",
              rating: "4.7★ rating"
            }
          },
          dataflow: {
            tag: "Data Platform",
            client: "DataFlow",
            title: "Dashboard analytics en temps réel",
            roles: "Data viz · Backend · Cloud",
            stats: {
              latency: "<100ms latence",
              uptime: "99.9% uptime",
              queries: "1M+ requêtes/jour",
              accuracy: "99.5% précision"
            }
          },
          fintech: {
            tag: "Fintech",
            client: "PaySecure",
            title: "Infrastructure de paiement next-gen",
            roles: "Security · API · Blockchain",
            stats: {
              transactions: "€50M+ transactions",
              fraud: "-85% fraude",
              speed: "2s validation",
              compliance: "100% conformité"
            }
          },
          healthtech: {
            tag: "HealthTech",
            client: "MediCare",
            title: "Plateforme télémédecine",
            roles: "HIPAA · Video · Mobile",
            stats: {
              consultations: "100K+ consultations",
              wait: "-70% temps d'attente",
              satisfaction: "96% satisfaction",
              savings: "30% économies"
            }
          }
        },
        impact: {
          eyebrow: "Impact",
          title: "Résultats mesurables",
          subtitle: "Notre approche data-driven transforme les ambitions business en performances concrètes. Chaque projet optimisé génère un retour sur investissement quantifiable.",
          metrics: {
            roi: {
              value: "4.2x",
              label: "ROI moyen sur 24 mois",
              detail: "Mesuré sur 45+ projets scaling"
            },
            retention: {
              value: "87%",
              label: "Taux de rétention client",
              detail: "Partenariats long terme établis"
            },
            acquisition: {
              value: "-42%",
              label: "Coût acquisition client",
              detail: "Optimisation conversion et funnels"
            },
            traffic: {
              value: "3.8x",
              label: "Croissance trafic organique",
              detail: "SEO et performance technique"
            },
            satisfaction: {
              value: "96%",
              label: "Satisfaction utilisateur",
              detail: "Net Promoter Score moyen"
            },
            cart: {
              value: "62%",
              label: "Augmentation panier moyen",
              detail: "E-commerce et UX optimisation"
            }
          }
        },
        services: {
          eyebrow: "Services IA & cloud",
          title: "Ce que nous construisons concrètement",
          subtitle: "Nous intervenons sur des projets où l'IA, le cloud et la donnée apportent un avantage concret : automatisation, meilleure expérience client, pilotage plus fin de l'activité.",
          assistants: {
            label: "Assistants IA",
            value: "Copilotes pour vos équipes, bots de support, aides à la décision"
          },
          platforms: {
            label: "Plateformes cloud",
            value: "Portails clients, back‑offices, outils internes scalables"
          },
          data: {
            label: "Produits data",
            value: "Dashboards, reporting avancé, consolidation de données"
          },
          automation: {
            label: "Automatisation",
            value: "Intégrations API, workflows no/low‑code, scripts dédiés"
          }
        },
        process: {
          eyebrow: "Comment nous travaillons",
          title: "Des cycles courts, une vision long terme",
          subtitle: "Nous structurons les projets en cycles courts pour vous montrer des résultats tangibles rapidement : prototypes cliquables, premières versions en ligne, tests utilisateurs. Chaque itération alimente la roadmap produit.",
          list1: "Kick-off et cadrage fonctionnel avec les parties prenantes.",
          list2: "Maquettes interactives, design system et guidelines.",
          list3: "Sprints de développement avec démos régulières."
        },
        technologies: {
          eyebrow: "Technologies",
          title: "Notre stack technique",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            ai: "IA & Data",
            mobile: "Mobile",
            testing: "Testing & Quality",
            security: "Security & Auth",
            api: "API & Integration"
          }
        },
        industries: {
          eyebrow: "Secteurs d'intervention",
          title: "Expertise métier spécialisée",
          subtitle: "Une compréhension approfondie des enjeux spécifiques à chaque secteur pour des solutions taillées sur mesure et performantes.",
          sectors: {
            startups: {
              title: "Startups & Innovation",
              description: "Accélération go-to-market, MVP scalables, levées de fonds. De l'idée à la première traction en un temps record.",
              metrics: ["Accompagnement complet", "Solutions évolutives"]
            },
            fintech: {
              title: "Financial Technology",
              description: "Infrastructure de paiement, gestion patrimoine, trading algorithmique. Sécurité et conformité réglementaire garanties.",
              metrics: ["Haute sécurité", "Conformité stricte"]
            },
            edtech: {
              title: "Education Technology",
              description: "Plateformes LMS next-gen, adaptive learning, systèmes d'évaluation. Expériences pédagogiques engageantes et mesurables.",
              metrics: ["Pédagogie innovante", "Résultats mesurables"]
            },
            health: {
              title: "Santé & MedTech",
              description: "Solutions télémédecine, dossiers patients intelligents, IA diagnostique. Conformité HIPAA et RGPD intégrée.",
              metrics: ["Confidentialité maximale", "Technologies avancées"]
            },
            industry: {
              title: "Industrie 4.0",
              description: "IoT industriel, maintenance prédictive, digital twins. Optimisation des opérations et réduction des coûts.",
              metrics: ["Optimisation continue", "Innovation IoT"]
            },
            retail: {
              title: "Luxue & Retail",
              description: "E-commerce omnicanal, expérience client premium, gestion inventaire IA. Transformation digitale préservant l'exclusivité.",
              metrics: ["Expérience premium", "Innovation digitale"]
            }
          }
        },
        methodology: {
          eyebrow: "Processus",
          title: "Notre méthodologie en 5 phases",
          phases: {
            discovery: {
              title: "Découverte",
              description: "Analyse de vos besoins, audit technique, workshops avec les équipes."
            },
            strategy: {
              title: "Stratégie",
              description: "Définition de la roadmap, choix technologiques, planning projet."
            },
            design: {
              title: "Design",
              description: "Wireframes, maquettes, design system, prototypes interactifs."
            },
            development: {
              title: "Développement",
              description: "Sprints agiles, démos régulières, tests automatisés, intégration continue."
            },
            launch: {
              title: "Lancement & Support",
              description: "Déploiement production, monitoring, formations, évolution continue."
            }
          }
        },
        studio: {
          about: {
            eyebrow: "À propos",
            lead: "Daven's est un studio de projets technologiques qui conçoit et pilote des produits digitaux propulsés par l'IA et le cloud pour des marques qui veulent faire les choses autrement. Nous travaillons avec des équipes marketing, produit et direction pour transformer des enjeux complexes en expériences claires et ambitieuses.",
            sideLabel: "Mieux nous connaître",
            sideText1: "Nous collaborons principalement avec des startups, PME et équipes innovation qui ont besoin de partenaires capables de comprendre à la fois la vision business, les contraintes techniques et la réalité du terrain.",
            sideText2: "Basés en Europe et organisés en remote-first, nous mettons en place une équipe resserrée autour de chaque projet pour garder de la vitesse sans sacrifier la qualité."
          },
          team: {
            eyebrow: "Équipe & organisation",
            description1: "Nous travaillons en petit noyau dédié à chaque projet : un point de contact unique côté Daven's, entouré de profils spécialisés (UX, UI, développement front/back, intégration).",
            description2: "Les échanges se font en visioconférence et via des outils collaboratifs (Figma, Notion, Slack) pour garder une cadence fluide sans réunions inutiles."
          },
          methodology: {
            eyebrow: "Méthodologie",
            title: "Un cadre clair en cinq étapes",
            description: "Nous structurons les projets pour garder le cap tout en laissant de la place aux ajustements : vous savez à tout moment où nous en sommes et ce qui arrive ensuite.",
            steps: {
              discovery: "Discovery : compréhension du contexte, des données et des enjeux.",
              design: "Design : parcours, maquettes, prototypes et design system.",
              data: "Data & IA : préparation des données, choix des briques IA.",
              build: "Build : développement, intégrations, tests et mise en ligne.",
              run: "Run : suivi, itérations et amélioration continue du produit."
            }
          }
        }
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        work: "Work",
        studio: "Studio",
        contact: "Contact",
      },
      cta: {
        startProject: "Start a project",
      },
      footer: {
        baseline:
          "Technology studio for ambitious digital experiences built to last.",
        nav: {
          label: "Navigation",
          home: "Home",
          work: "Work",
          studio: "Studio",
          contact: "Contact",
        },
        services: {
          label: "Services",
          branding: "Branding & Identity",
          web: "Web Design",
          motion: "Motion Design",
          photo: "Photography & Video",
          strategy: "Digital Strategy",
        },
        contact: {
          label: "Contact",
          address: "Lomé-TOGO",
        },
        social: {
          label: "Social",
          linkedin: "LinkedIn",
          instagram: "Instagram",
          behance: "Behance",
          github: "GitHub",
        },
        legal: {
          label: "Legal",
          privacy: "Privacy",
          terms: "Terms of Service",
          cookies: "Cookies",
        },
        newsletter: {
          label: "Newsletter",
          placeholder: "Enter your email",
          aria: "Newsletter email",
          submit: "Subscribe",
        },
        copyright: "All rights reserved.",
        cookies: "We use cookies",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's talk about your next project",
        lead: "Briefly describe your context and objectives. We'll get back to you within 24-48h with an initial assessment and support options.",
        methods: {
          email: {
            label: "Professional Email",
            value: "lionesspretty7@gmail.com"
          },
          whatsapp: {
            label: "WhatsApp Business",
            value: "+228 91 59 67 88"
          }
        },
        availability: {
          badge: "Available for new projects",
          text: "Response within 24-48h · Free initial consultation"
        },
        form: {
          name: {
            label: "Full name",
            placeholder: "Your name"
          },
          email: {
            label: "Email",
            placeholder: "you@company.com"
          },
          projectType: {
            label: "Project type",
            placeholder: "Platform, website, product..."
          },
          message: {
            label: "Project summary",
            placeholder: "Tell us about your context, objectives, timeline..."
          },
          submit: "Send request",
          note: "This form is a front-end demo: connection to your CRM or emailing tool to be defined."
        }
      },
      services: {
        branding: {
          title: "Branding & Identity",
          subtitle: "We create brands that leave a lasting impression",
          intro: "From brand strategy to complete visual identity, we support your business in building a strong, consistent and memorable image. Our approach combines creativity, consumer psychology and technical excellence.",
          processTitle: "Our process",
          processList: [
            "Brand audit and competitive analysis",
            "Brand platform definition",
            "Visual identity creation (logo, colors, typography)",
            "Brand guidelines development",
            "Deployment across all media"
          ],
          whyTitle: "Why choose us",
          whyText: "With over 50 identities created, we transform your vision into a brand that tells a story, connects with your audience and stands out in the market."
        },
        web: {
          title: "Web Design",
          subtitle: "Digital experiences that convert",
          intro: "We design websites that combine exceptional aesthetics, technical performance and optimal user experience. Each project is an opportunity to push the boundaries of web design.",
          expertiseTitle: "Our expertise",
          expertiseList: [
            "Custom UI/UX design",
            "Responsive and accessible development",
            "Performance optimization",
            "CMS and e-commerce integration",
            "Maintenance and evolution"
          ],
          techTitle: "Technologies",
          techText: "React, Next.js, TypeScript, Tailwind CSS, Node.js, and the latest web standards to ensure fast, secure and scalable sites."
        },
        motion: {
          title: "Motion Design",
          subtitle: "Bring your ideas to life with animation",
          intro: "Motion design transforms your messages into captivating visual experiences. We create animations that tell your story, strengthen your identity and engage your audience.",
          servicesTitle: "Our services",
          servicesList: [
            "Logo and branding animations",
            "Explainer videos and tutorials",
            "Social media animations",
            "Motion graphics for websites",
            "Title sequences and video branding"
          ],
          approachTitle: "Our approach",
          approachText: "Each animation is designed to serve your message. We combine artistic creativity and communication strategy to create content that makes an impact."
        },
        photo: {
          title: "Photography & Video",
          subtitle: "Capture the essence of your brand",
          intro: "Professional visuals that tell your story. We create authentic photo and video content that strengthens your identity and connects with your audience.",
          servicesTitle: "Our services",
          servicesList: [
            "Product photography and packshots",
            "Corporate and event coverage",
            "Professional portraits",
            "Promotional and corporate videos",
            "Social media content"
          ],
          qualityTitle: "Professional quality",
          qualityText: "High-end equipment, careful post-production and delivery in formats adapted to all your communication media."
        },
        strategy: {
          title: "Digital Strategy",
          subtitle: "Transform your online presence",
          intro: "An effective digital strategy is the key to online success. We support you in defining a clear vision, measurable objectives and a concrete action plan.",
          servicesTitle: "Our support",
          servicesList: [
            "Digital audit and competitive analysis",
            "Content strategy definition",
            "SEO optimization and referencing",
            "Social media strategy",
            "Analytics and performance measurement"
          ],
          resultsTitle: "Measurable results",
          resultsText: "We set up clear KPIs and tracking tools to measure the impact of each action and continuously optimize your digital presence."
        }
      },
      legal: {
        privacy: {
          title: "Privacy Policy",
          lastUpdated: "Last updated",
          intro: "At Daven's Studio, we take the protection of your personal data very seriously. This policy explains how we collect, use and protect your information.",
          sections: {
            collection: {
              title: "Data collection",
              content: "We only collect data necessary for the proper functioning of our services: name, email, project information. This data is collected with your explicit consent."
            },
            usage: {
              title: "Data usage",
              content: "Your data is used exclusively to provide our services, contact you about your project and improve our offering. We do not sell or share your data with third parties."
            },
            rights: {
              title: "Your rights",
              content: "You have the right to access, rectify and delete your data. To exercise these rights, contact us at lionesspretty7@gmail.com."
            },
            security: {
              title: "Security",
              content: "We implement technical and organizational security measures to protect your data against unauthorized access."
            }
          }
        },
        terms: {
          title: "Terms of Service",
          lastUpdated: "Last updated",
          intro: "By using Daven's Studio services, you accept these terms of service.",
          sections: {
            services: {
              title: "Services offered",
              content: "Daven's Studio offers design, development and support services for digital projects. Services are defined in personalized quotes."
            },
            obligations: {
              title: "Client obligations",
              content: "The client agrees to provide the information and resources necessary to complete the project within the agreed timeframes."
            },
            payment: {
              title: "Payment terms",
              content: "Payment terms are defined in each quote. A deposit may be requested at the start of the project."
            },
            liability: {
              title: "Liability",
              content: "Daven's Studio is committed to providing professional quality services. Our liability is limited to the amount of services invoiced."
            }
          }
        },
        cookies: {
          title: "Cookie Policy",
          lastUpdated: "Last updated",
          intro: "This site uses cookies to improve your browsing experience and analyze site usage.",
          sections: {
            what: {
              title: "What is a cookie?",
              content: "A cookie is a small text file stored on your device when you visit a website. It allows you to remember your preferences and improve your experience."
            },
            types: {
              title: "Types of cookies used",
              content: "We use essential cookies for site operation, analytical cookies to understand site usage, and preference cookies to remember your choices."
            },
            control: {
              title: "Cookie control",
              content: "You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect site functionality."
            },
            thirdParty: {
              title: "Third-party cookies",
              content: "We use Google Analytics to analyze site traffic. These services may set their own cookies."
            }
          }
        }
      },
      home: {
        heroBrand: "Daven's Studio",
        heroEyebrow: "Technology project studio",
        heroTitleLine1: "We",
        heroTitleLine2: "orchestrate",
        heroTitleLine3: "your digital",
        heroTitleLine4: "projects.",
        heroText:
          "Daven's designs, leads and deploys digital products powered by AI and the cloud for brands that want a bold, coherent and data‑driven online presence.",
        heroCtaLink: "Explore our work",
        heroCtaNote: "Limited availability for 2025.",
        heroSideLabel: "What we do",
        heroSideText:
          "Product strategy, applied AI, cloud architectures, interface design, web & mobile development and long‑term support. A compact team dedicated to your challenges.",
        heroBarItem1: "Daven's · Technology project studio",
        heroBarItem2: "Discovery · Design · Delivery",
        heroBarItem3: "Based in Africa · International clients",
        heroMediaP1:
          "Daven's works with product, marketing and leadership teams to stage their technological experiences: SaaS platforms, launch sites, internal tools.",
        heroMediaP2:
          "We combine strategy, design and engineering to create clear, fast and ambitious interfaces built for the long term.",
        approachEyebrow: "Approach",
        approachTitle: "From idea to live platform",
        approachText:
          "Every project starts with an immersion in your context: audiences, business objectives, technical constraints. We then turn this vision into AI assistants, cloud interfaces and internal tools centered on your data flows.",
        approachList1: "Immersion and strategic framing with your teams.",
        approachList2: "Interface design and interactive prototyping.",
        approachList3:
          "Development, integration and launch support.",
        typesDeliverablesLabel: "Deliverable types",
        typesDeliverablesValue:
          "Marketing sites, web applications (e‑commerce, e‑learning, etc.), business software, AI solutions, automation, data analytics, big data platforms, SaaS platforms, internal tools, landing pages",
        industriesLabel: "Industries",
        industriesValue: "Tech, fintech, education, healthcare, industry",
        useCasesEyebrow: "Typical use cases",
        useCasesTitle: "How we apply AI, cloud and data",
        useCasesText:
          "A few examples of situations where we turn ideas into concrete digital products.",
        case1Tag: "AI customer support",
        case1Client: "Assistants & copilots",
        case1Title:
          "Helping your support teams with AI‑assisted answers",
        case1Roles: "Knowledge analysis · Conversational interfaces",
        case2Tag: "Cloud portals",
        case2Client: "Client space",
        case2Title: "Secure portals for your clients or partners",
        case2Roles: "Authentication · Dashboards · API integrations",
        case3Tag: "Internal data tools",
        case3Client: "Business teams",
        case3Title: "Consolidate and visualize your key business data",
        case3Roles: "Workflow design · Data‑viz · Automation",
        case4Tag: "Big Data & Analytics",
        case4Client: "Data scientists",
        case4Title:
          "Leveraging large volumes of data for predictive analysis",
        case4Roles: "ETL pipelines · Machine Learning · Advanced reporting",
        architectsEyebrow: "Solution architects",
        architectsTitle: "Designing your digital product architecture",
        architectsText:
          "We step in upstream to clarify the target architecture: which technical bricks, which integrations, which user journeys. The goal is to turn your ideas into a clear, realistic and scalable blueprint.",
        architectsList1:
          "Mapping the existing landscape and business constraints.",
        architectsList2:
          "Selecting the right cloud, data and AI building blocks.",
        architectsList3:
          "Defining user journeys and functional architecture.",
        architectsDeliverablesLabel: "Typical deliverables",
        architectsDeliverablesValue:
          "Architecture diagrams, initial backlog, tech recommendations, specifications, functional specs, interactive mockups, prototypes, wireframes, design system, visual identity, product roadmap, migration plan, technology benchmark, risk analysis, budget estimates, planning, KPI definition, data model, API specifications, test plan, hosting strategy, security recommendations, deployment plan, technical documentation, integration guides, post‑launch support",
        deliveryEyebrow: "Project delivery",
        deliveryTitle: "Leading and delivering your tech projects",
        deliveryText:
          "Daven's handles the full implementation: scoping, design, development, testing and production launch. We work in short cycles with regular demos to secure each step.",
        deliveryList1:
          "Product project management and stakeholder coordination.",
        deliveryList2:
          "Interface design, reusable components and design system.",
        deliveryList3:
          "Web & mobile development, API integrations, deployment.",
        deliveryFormatsLabel: "Engagement formats",
        deliveryFormatsValue:
          "Fixed‑price projects, augmented staff, dedicated team, strategic advisory, technical audits, design workshops, prototyping sprints, launch support, technical support, team training, code reviews, AI & data expertise, architecture upgrades, performance optimization, cloud migration, API integrations, custom development, application maintenance, continuous improvement, product coaching, technology watch, technical assistance, project leadership, roadmap management, current‑state analysis, solution recommendations, budget scoping, transformation plan",
        followEyebrow: "Ongoing support",
        followTitle: "Supporting your teams over time",
        followText:
          "Once the platform is live, we stay by your side to evolve the product: new features, performance optimizations, continuous UX improvement.",
        followList1:
          "Shared product roadmap and evolution prioritization.",
        followList2:
          "Performance monitoring, analytics and user feedback.",
        followList3:
          "Support for your internal teams (marketing, product, tech).",
        followTypeLabel: "Support types",
        followTypeValue:
          "Monthly support, improvement sprints, targeted interventions",
      },
      work: {
        eyebrow: "Work",
        title: "Selected Projects",
        subtitle: "A selection of platforms, products and experiences created for our clients. Each project is designed as a long-term strategic collaboration.",
        filters: {
          all: "All",
          saas: "SaaS",
          mobile: "Mobile",
          branding: "Branding",
          ecommerce: "E-commerce",
          ai: "AI"
        },
        projects: {
          novastack: {
            tag: "SaaS Platform",
            client: "NovaStack",
            title: "Complete B2B platform redesign",
            roles: "Product strategy · UX/UI · Web app",
            stats: {
              conversion: "+45% conversion",
              users: "200K+ users",
              rating: "4.8★ rating",
              revenue: "€2M+ revenue"
            }
          },
          auralink: {
            tag: "Tech Brand",
            client: "Auralink",
            title: "Digital identity & launch website",
            roles: "Branding · Website · Motion",
            stats: {
              traffic: "+320% traffic",
              engagement: "8min session",
              bounce: "-25% bounce",
              leads: "+150% leads"
            }
          },
          pulseone: {
            tag: "Mobile Product",
            client: "PulseOne",
            title: "IoT companion application",
            roles: "Design system · iOS · Android",
            stats: {
              downloads: "500K+ downloads",
              retention: "78% retention",
              crashes: "-90% crashes",
              rating: "4.7★ rating"
            }
          },
          dataflow: {
            tag: "Data Platform",
            client: "DataFlow",
            title: "Real-time analytics dashboard",
            roles: "Data viz · Backend · Cloud",
            stats: {
              latency: "<100ms latency",
              uptime: "99.9% uptime",
              queries: "1M+ queries/day",
              accuracy: "99.5% accuracy"
            }
          },
          fintech: {
            tag: "Fintech",
            client: "PaySecure",
            title: "Next-gen payment infrastructure",
            roles: "Security · API · Blockchain",
            stats: {
              transactions: "€50M+ transactions",
              fraud: "-85% fraud",
              speed: "2s validation",
              compliance: "100% compliance"
            }
          },
          healthtech: {
            tag: "HealthTech",
            client: "MediCare",
            title: "Telemedicine platform",
            roles: "HIPAA · Video · Mobile",
            stats: {
              consultations: "100K+ consultations",
              wait: "-70% wait time",
              satisfaction: "96% satisfaction",
              savings: "30% savings"
            }
          }
        },
        impact: {
          eyebrow: "Impact",
          title: "Measurable Results",
          subtitle: "Our data-driven approach transforms business ambitions into concrete performance. Every optimized project generates quantifiable ROI.",
          metrics: {
            roi: {
              value: "4.2x",
              label: "Average ROI over 24 months",
              detail: "Measured on 45+ scaling projects"
            },
            retention: {
              value: "87%",
              label: "Client retention rate",
              detail: "Long-term partnerships established"
            },
            acquisition: {
              value: "-42%",
              label: "Customer acquisition cost",
              detail: "Conversion and funnel optimization"
            },
            traffic: {
              value: "3.8x",
              label: "Organic traffic growth",
              detail: "SEO and technical performance"
            },
            satisfaction: {
              value: "96%",
              label: "User satisfaction",
              detail: "Average Net Promoter Score"
            },
            cart: {
              value: "62%",
              label: "Average cart value increase",
              detail: "E-commerce and UX optimization"
            }
          }
        },
        services: {
          eyebrow: "AI & Cloud Services",
          title: "What we actually build",
          subtitle: "We work on projects where AI, cloud and data bring concrete advantages: automation, better customer experience, finer activity management.",
          assistants: {
            label: "AI Assistants",
            value: "Copilots for your teams, support bots, decision aids"
          },
          platforms: {
            label: "Cloud Platforms",
            value: "Customer portals, back‑offices, scalable internal tools"
          },
          data: {
            label: "Data Products",
            value: "Dashboards, advanced reporting, data consolidation"
          },
          automation: {
            label: "Automation",
            value: "API integrations, no/low‑code workflows, dedicated scripts"
          }
        },
        process: {
          eyebrow: "How we work",
          title: "Short cycles, long-term vision",
          subtitle: "We structure projects in short cycles to show you tangible results quickly: clickable prototypes, first online versions, user testing. Each iteration feeds the product roadmap.",
          list1: "Kick-off and functional scoping with stakeholders.",
          list2: "Interactive mockups, design system and guidelines.",
          list3: "Development sprints with regular demos."
        },
        technologies: {
          eyebrow: "Technologies",
          title: "Our tech stack",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            ai: "AI & Data",
            mobile: "Mobile",
            testing: "Testing & Quality",
            security: "Security & Auth",
            api: "API & Integration"
          }
        },
        industries: {
          eyebrow: "Industry Sectors",
          title: "Specialized Business Expertise",
          subtitle: "Deep understanding of specific challenges in each sector for tailored, high-performance solutions.",
          sectors: {
            startups: {
              title: "Startups & Innovation",
              description: "Go-to-market acceleration, scalable MVPs, fundraising. From idea to first traction in record time.",
              metrics: ["Complete support", "Scalable solutions"]
            },
            fintech: {
              title: "Financial Technology",
              description: "Payment infrastructure, wealth management, algorithmic trading. Guaranteed security and regulatory compliance.",
              metrics: ["High security", "Strict compliance"]
            },
            edtech: {
              title: "Education Technology",
              description: "Next-gen LMS platforms, adaptive learning, assessment systems. Engaging and measurable pedagogical experiences.",
              metrics: ["Innovative pedagogy", "Measurable results"]
            },
            health: {
              title: "Health & MedTech",
              description: "Telemedicine solutions, intelligent patient records, diagnostic AI. Integrated HIPAA and GDPR compliance.",
              metrics: ["Maximum confidentiality", "Advanced technologies"]
            },
            industry: {
              title: "Industry 4.0",
              description: "Industrial IoT, predictive maintenance, digital twins. Operations optimization and cost reduction.",
              metrics: ["Continuous optimization", "IoT innovation"]
            },
            retail: {
              title: "Luxury & Retail",
              description: "Omnichannel e-commerce, premium customer experience, AI inventory management. Digital transformation preserving exclusivity.",
              metrics: ["Premium experience", "Digital innovation"]
            }
          }
        },
        methodology: {
          eyebrow: "Process",
          title: "Our 5-phase methodology",
          phases: {
            discovery: {
              title: "Discovery",
              description: "Analysis of your needs, technical audit, workshops with teams."
            },
            strategy: {
              title: "Strategy",
              description: "Roadmap definition, technology choices, project planning."
            },
            design: {
              title: "Design",
              description: "Wireframes, mockups, design system, interactive prototypes."
            },
            development: {
              title: "Development",
              description: "Agile sprints, regular demos, automated testing, continuous integration."
            },
            launch: {
              title: "Launch & Support",
              description: "Production deployment, monitoring, training, continuous evolution."
            }
          }
        },
        studio: {
          about: {
            eyebrow: "About",
            lead: "Daven's is a technology project studio that designs and drives digital products powered by AI and cloud for brands that want to do things differently. We work with marketing, product and management teams to transform complex challenges into clear and ambitious experiences.",
            sideLabel: "Get to know us better",
            sideText1: "We mainly collaborate with startups, SMEs and innovation teams that need partners able to understand both business vision, technical constraints and field reality.",
            sideText2: "Based in Europe and organized as remote-first, we set up a tight team around each project to maintain speed without sacrificing quality."
          },
          team: {
            eyebrow: "Team & organization",
            description1: "We work in a small dedicated core for each project: a single point of contact on Daven's side, surrounded by specialized profiles (UX, UI, front/back development, integration).",
            description2: "Exchanges are done via video conference and collaborative tools (Figma, Notion, Slack) to maintain a fluid pace without unnecessary meetings."
          },
          methodology: {
            eyebrow: "Methodology",
            title: "A clear framework in five steps",
            description: "We structure projects to stay on track while leaving room for adjustments: you always know where we are and what's coming next.",
            steps: {
              discovery: "Discovery: understanding the context, data and issues.",
              design: "Design: user journeys, mockups, prototypes and design system.",
              data: "Data & AI: data preparation, choice of AI components.",
              build: "Build: development, integrations, testing and deployment.",
              run: "Run: monitoring, iterations and continuous product improvement."
            }
          }
        }
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: "Start",
        work: "Projekte",
        studio: "Studio",
        contact: "Kontakt",
      },
      cta: {
        startProject: "Projekt starten",
      },
      footer: {
        baseline:
          "Technologie‑Studio für anspruchsvolle, langlebige digitale Erlebnisse.",
        nav: {
          label: "Navigation",
          home: "Start",
          work: "Projekte",
          studio: "Studio",
          contact: "Kontakt",
        },
        services: {
          label: "Dienstleistungen",
          branding: "Branding & Identität",
          web: "Web-Design",
          motion: "Motion Design",
          photo: "Fotografie & Video",
          strategy: "Digitale Strategie",
        },
        contact: {
          label: "Kontakt",
          address: "Lomé-TOGO",
        },
        social: {
          label: "Social",
          linkedin: "LinkedIn",
          instagram: "Instagram",
          behance: "Behance",
          github: "GitHub",
        },
        legal: {
          label: "Impressum",
          privacy: "Datenschutz",
          terms: "AGB",
          cookies: "Cookies",
        },
        newsletter: {
          label: "Newsletter",
          placeholder: "E-Mail eingeben",
          aria: "Newsletter E-Mail",
          submit: "Abonnieren",
        },
        copyright: "Alle Rechte vorbehalten.",
        cookies: "Wir verwenden Cookies",
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Sprechen wir über Ihr nächstes Projekt",
        lead: "Beschreiben Sie uns kurz Ihren Kontext und Ihre Ziele. Wir melden uns innerhalb von 24-48 Stunden mit einer ersten Einschätzung und Unterstützungsoptionen.",
        methods: {
          email: {
            label: "Professionelle E-Mail",
            value: "lionesspretty7@gmail.com"
          },
          whatsapp: {
            label: "WhatsApp Business",
            value: "+228 91 59 67 88"
          }
        },
        availability: {
          badge: "Verfügbar für neue Projekte",
          text: "Antwort innerhalb von 24-48h · Kostenlose Erstberatung"
        },
        form: {
          name: {
            label: "Vollständiger Name",
            placeholder: "Ihr Name"
          },
          email: {
            label: "E-Mail",
            placeholder: "sie@unternehmen.com"
          },
          projectType: {
            label: "Projekttyp",
            placeholder: "Plattform, Website, Produkt..."
          },
          message: {
            label: "Projektzusammenfassung",
            placeholder: "Erzählen Sie uns von Ihrem Kontext, Zielen, Zeitplan..."
          },
          submit: "Anfrage senden",
          note: "Dieses Formular ist eine Frontend-Demo: Verbindung zu Ihrem CRM oder E-Mail-Tool muss definiert werden."
        }
      },
      services: {
        branding: {
          title: "Branding & Identität",
          subtitle: "Wir schaffen Marken, die im Gedächtnis bleiben",
          intro: "Von der Markenstrategie bis zur vollständigen visuellen Identität begleiten wir Ihr Unternehmen beim Aufbau eines starken, konsistenten und einprägsamen Images.",
          processTitle: "Unser Prozess",
          processList: ["Markenaudit", "Markenplattform", "Visuelle Identität", "Markenrichtlinien", "Einsatz"],
          whyTitle: "Warum uns wählen",
          whyText: "Mit über 50 geschaffenen Identitäten verwandeln wir Ihre Vision in eine Marke."
        },
        web: {
          title: "Webdesign",
          subtitle: "Digitale Erlebnisse, die konvertieren",
          intro: "Wir gestalten Websites, die außergewöhnliche Ästhetik, technische Leistung und optimale Benutzererfahrung vereinen.",
          expertiseTitle: "Unsere Expertise",
          expertiseList: ["UI/UX-Design", "Responsive Entwicklung", "Performance-Optimierung", "CMS-Integration", "Wartung"],
          techTitle: "Technologien",
          techText: "React, Next.js, TypeScript, Tailwind CSS, Node.js und die neuesten Webstandards."
        },
        motion: {
          title: "Motion Design",
          subtitle: "Erwecken Sie Ihre Ideen zum Leben",
          intro: "Motion Design verwandelt Ihre Botschaften in fesselnde visuelle Erlebnisse.",
          servicesTitle: "Unsere Dienstleistungen",
          servicesList: ["Logo-Animationen", "Erklärvideos", "Social-Media-Animationen", "Motion Graphics", "Video-Branding"],
          approachTitle: "Unser Ansatz",
          approachText: "Wir kombinieren künstlerische Kreativität und Kommunikationsstrategie."
        },
        photo: {
          title: "Fotografie & Video",
          subtitle: "Erfassen Sie die Essenz Ihrer Marke",
          intro: "Professionelle Visuals, die Ihre Geschichte erzählen.",
          servicesTitle: "Unsere Dienstleistungen",
          servicesList: ["Produktfotografie", "Corporate-Berichterstattung", "Porträts", "Werbevideos", "Social-Media-Inhalte"],
          qualityTitle: "Professionelle Qualität",
          qualityText: "High-End-Ausrüstung und sorgfältige Nachbearbeitung."
        },
        strategy: {
          title: "Digitale Strategie",
          subtitle: "Transformieren Sie Ihre Online-Präsenz",
          intro: "Eine effektive digitale Strategie ist der Schlüssel zum Online-Erfolg.",
          servicesTitle: "Unsere Unterstützung",
          servicesList: ["Digitales Audit", "Content-Strategie", "SEO-Optimierung", "Social-Media-Strategie", "Analytics"],
          resultsTitle: "Messbare Ergebnisse",
          resultsText: "Wir richten klare KPIs ein, um die Wirkung zu messen."
        }
      },
      legal: {
        privacy: {
          title: "Datenschutzerklärung",
          lastUpdated: "Zuletzt aktualisiert",
          intro: "Bei Daven's Studio nehmen wir den Schutz Ihrer persönlichen Daten sehr ernst.",
          sections: {
            collection: { title: "Datenerfassung", content: "Wir sammeln nur notwendige Daten mit Ihrer Zustimmung." },
            usage: { title: "Datennutzung", content: "Ihre Daten werden ausschließlich für unsere Dienste verwendet." },
            rights: { title: "Ihre Rechte", content: "Sie haben das Recht auf Zugang, Berichtigung und Löschung." },
            security: { title: "Sicherheit", content: "Wir implementieren Sicherheitsmaßnahmen zum Schutz Ihrer Daten." }
          }
        },
        terms: {
          title: "Nutzungsbedingungen",
          lastUpdated: "Zuletzt aktualisiert",
          intro: "Durch die Nutzung unserer Dienste akzeptieren Sie diese Bedingungen.",
          sections: {
            services: { title: "Dienstleistungen", content: "Wir bieten Design-, Entwicklungs- und Unterstützungsdienste." },
            obligations: { title: "Kundenpflichten", content: "Der Kunde stellt erforderliche Informationen bereit." },
            payment: { title: "Zahlungsbedingungen", content: "Zahlungsbedingungen sind in jedem Angebot definiert." },
            liability: { title: "Haftung", content: "Unsere Haftung ist auf den Betrag der Dienstleistungen begrenzt." }
          }
        },
        cookies: {
          title: "Cookie-Richtlinie",
          lastUpdated: "Zuletzt aktualisiert",
          intro: "Diese Website verwendet Cookies zur Verbesserung Ihres Erlebnisses.",
          sections: {
            what: { title: "Was ist ein Cookie?", content: "Ein Cookie ist eine kleine Textdatei auf Ihrem Gerät." },
            types: { title: "Cookie-Typen", content: "Wir verwenden wesentliche, analytische und Präferenz-Cookies." },
            control: { title: "Cookie-Kontrolle", content: "Sie können Cookies über Ihre Browser-Einstellungen kontrollieren." },
            thirdParty: { title: "Drittanbieter-Cookies", content: "Wir verwenden Google Analytics." }
          }
        }
      },
      home: {
        heroBrand: "Daven's Studio",
        heroEyebrow: "Studio für Technologieprojekte",
        heroTitleLine1: "Wir",
        heroTitleLine2: "orkestrieren",
        heroTitleLine3: "Ihre digitalen",
        heroTitleLine4: "Projekte.",
        heroText:
          "Daven's konzipiert, steuert und liefert digitale Produkte, die von KI und Cloud‑Technologien angetrieben werden – für Marken, die eine mutige, konsistente und datengetriebene Online‑Präsenz aufbauen möchten.",
        heroCtaLink: "Unsere Projekte entdecken",
        heroCtaNote: "Begrenzte Verfügbarkeit für 2025.",
        heroSideLabel: "Was wir tun",
        heroSideText:
          "Produktstrategie, angewandte KI, Cloud‑Architekturen, Interface‑Design, Web‑ & Mobile‑Entwicklung und langfristige Begleitung. Ein fokussiertes Team, das sich Ihren Herausforderungen widmet.",
        heroBarItem1: "Daven's · Studio für Technologieprojekte",
        heroBarItem2: "Discovery · Design · Delivery",
        heroBarItem3: "Mit Sitz in Afrika · Internationale Kunden",
        heroMediaP1:
          "Daven's unterstützt Produkt‑, Marketing‑ und Management‑Teams bei der Inszenierung ihrer Technologie‑Erlebnisse: SaaS‑Plattformen, Launch‑Sites, interne Tools.",
        heroMediaP2:
          "Wir verbinden Strategie, Design und Entwicklung, um klare, schnelle und ambitionierte Interfaces zu schaffen, die auf Langfristigkeit ausgelegt sind.",
        approachEyebrow: "Vorgehen",
        approachTitle: "Von der Idee zur Online‑Plattform",
        approachText:
          "Jedes Projekt beginnt mit einer Eintauchphase in Ihren Kontext: Zielgruppen, Business‑Ziele, technische Rahmenbedingungen. Daraus entwickeln wir KI‑Assistenten, Cloud‑Interfaces und interne Tools rund um Ihre Datenflüsse.",
        approachList1:
          "Eintauchen in den Kontext und strategische Klärung mit Ihren Teams.",
        approachList2:
          "Interface‑Design und interaktive Prototypen.",
        approachList3:
          "Entwicklung, Integration und Launch‑Begleitung.",
        typesDeliverablesLabel: "Lieferobjekte",
        typesDeliverablesValue:
          "Websites, Web‑Applikationen (E‑Commerce, E‑Learning usw.), Business‑Software, KI‑Lösungen, Automatisierung, Datenanalyse, Big‑Data‑Plattformen, SaaS‑Plattformen, interne Tools, Landing Pages",
        industriesLabel: "Branchen",
        industriesValue:
          "Tech, Fintech, Bildung, Gesundheitswesen, Industrie",
        useCasesEyebrow: "Typische Use Cases",
        useCasesTitle: "Wie wir KI, Cloud und Data einsetzen",
        useCasesText:
          "Einige Beispiele, wie wir Ideen in konkrete digitale Produkte verwandeln.",
        case1Tag: "KI‑Kundensupport",
        case1Client: "Assistenten & Copiloten",
        case1Title:
          "Unterstützung Ihrer Support‑Teams mit KI‑gestützten Antworten",
        case1Roles:
          "Wissensanalyse · Konversationelle Interfaces",
        case2Tag: "Cloud‑Portale",
        case2Client: "Kundenbereich",
        case2Title:
          "Sichere Portale für Ihre Kunden oder Partner",
        case2Roles:
          "Authentifizierung · Dashboards · API‑Integrationen",
        case3Tag: "Interne Data‑Tools",
        case3Client: "Fachabteilungen",
        case3Title:
          "Konsolidierung und Visualisierung Ihrer wichtigsten Geschäftsdaten",
        case3Roles:
          "Workflow‑Design · Data‑Viz · Automatisierung",
        case4Tag: "Big Data & Analytics",
        case4Client: "Data Scientists",
        case4Title:
          "Nutzung großer Datenmengen für prädiktive Analysen",
        case4Roles:
          "ETL‑Pipelines · Machine Learning · Erweitertes Reporting",
        architectsEyebrow: "Solution Architects",
        architectsTitle:
          "Architektur Ihrer digitalen Produkte entwerfen",
        architectsText:
          "Wir steigen frühzeitig ein, um die Zielarchitektur zu klären: welche technischen Bausteine, welche Integrationen, welche User Journeys. Ziel ist ein klares, realistisches und skalierbares Architektur‑Bild.",
        architectsList1:
          "Kartierung des Ist‑Zustands und der fachlichen Zwänge.",
        architectsList2:
          "Auswahl passender Cloud‑, Data‑ und KI‑Bausteine.",
        architectsList3:
          "Definition der Journeys und der funktionalen Architektur.",
        architectsDeliverablesLabel: "Typische Deliverables",
        architectsDeliverablesValue:
          "Architekturdiagramme, initialer Backlog, Tech‑Empfehlungen, Lasten‑ & Pflichtenhefte, funktionale Spezifikationen, interaktive Mockups, Prototypen, Wireframes, Design System, Brand‑Richtlinien, Produkt‑Roadmap, Migrationsplan, Technologie‑Benchmark, Risikoanalyse, Budget‑Schätzungen, Terminplanung, KPI‑Definition, Datenmodell, API‑Spezifikationen, Testplan, Hosting‑Strategie, Security‑Empfehlungen, Deployment‑Plan, technische Doku, Integrations‑Guides, Post‑Launch‑Support",
        deliveryEyebrow: "Projektumsetzung",
        deliveryTitle: "Ihre Technologieprojekte steuern und liefern",
        deliveryText:
          "Daven's übernimmt die komplette Umsetzung: Scoping, Design, Entwicklung, Tests und Go‑Live. Wir arbeiten in kurzen Zyklen mit regelmäßigen Demos, um jede Phase abzusichern.",
        deliveryList1:
          "Produkt‑Projektsteuerung und Koordination der Stakeholder.",
        deliveryList2:
          "Interface‑Design, wiederverwendbare Komponenten und Design System.",
        deliveryList3:
          "Web‑ & Mobile‑Entwicklung, API‑Integrationen, Deployment.",
        deliveryFormatsLabel: "Formate",
        deliveryFormatsValue:
          "Festpreisprojekte, verstärkte Teams, dediziertes Team, strategische Beratung, technische Audits, Design‑Workshops, Prototyping‑Sprints, Launch‑Begleitung, technischer Support, Schulungen, Code‑Reviews, KI‑ & Data‑Expertise, Architektur‑Modernisierung, Performance‑Optimierung, Cloud‑Migration, API‑Integrationen, Individualentwicklung, Anwendungs‑Maintenance, kontinuierliche Weiterentwicklung, Produkt‑Coaching, Technologie‑Monitoring, technische Assistenz, Projektleitung, Roadmap‑Management, Ist‑Analyse, Lösungs‑Empfehlungen, Budget‑Rahmen, Transformationsplan",
        followEyebrow: "Langfristige Begleitung",
        followTitle: "Ihre Teams über die Zeit begleiten",
        followText:
          "Nach dem Go‑Live bleiben wir an Ihrer Seite, um das Produkt weiterzuentwickeln: neue Features, Performance‑Optimierung, kontinuierliche Verbesserung der User Experience.",
        followList1:
          "Geteilte Produkt‑Roadmap und Priorisierung der Weiterentwicklungen.",
        followList2:
          "Monitoring, Analytics und Nutzerfeedback.",
        followList3:
          "Support für Ihre internen Teams (Marketing, Produkt, Tech).",
        followTypeLabel: "Begleitformate",
        followTypeValue:
          "Monatlicher Support, Verbesserungs‑Sprints, gezielte Interventionen",
      },
      work: {
        eyebrow: "Work",
        title: "Ausgewählte Projekte",
        subtitle: "Eine Auswahl an Plattformen, Produkten und Erfahrungen, die für unsere Kunden erstellt wurden. Jedes Projekt ist als langfristige strategische Zusammenarbeit konzipiert.",
        filters: {
          all: "Alle",
          saas: "SaaS",
          mobile: "Mobile",
          branding: "Branding",
          ecommerce: "E-commerce",
          ai: "KI"
        },
        projects: {
          novastack: {
            tag: "SaaS-Plattform",
            client: "NovaStack",
            title: "Komplette B2B-Plattform-Neugestaltung",
            roles: "Product-Strategie · UX/UI · Web-App",
            stats: {
              conversion: "+45% Konversion",
              users: "200K+ Nutzer",
              rating: "4.8★ Bewertung",
              revenue: "€2M+ Umsatz"
            }
          },
          auralink: {
            tag: "Tech-Marke",
            client: "Auralink",
            title: "Digitale Identität & Launch-Website",
            roles: "Branding · Website · Motion",
            stats: {
              traffic: "+320% Traffic",
              engagement: "8min Session",
              bounce: "-25% Absprungrate",
              leads: "+150% Leads"
            }
          },
          pulseone: {
            tag: "Mobiles Produkt",
            client: "PulseOne",
            title: "IoT-Begleit-App",
            roles: "Design-System · iOS · Android",
            stats: {
              downloads: "500K+ Downloads",
              retention: "78% Retention",
              crashes: "-90% Abstürze",
              rating: "4.7★ Bewertung"
            }
          },
          dataflow: {
            tag: "Daten-Plattform",
            client: "DataFlow",
            title: "Echtzeit-Analytics-Dashboard",
            roles: "Data-Viz · Backend · Cloud",
            stats: {
              latency: "<100ms Latenz",
              uptime: "99.9% Uptime",
              queries: "1M+ Abfragen/Tag",
              accuracy: "99.5% Genauigkeit"
            }
          },
          fintech: {
            tag: "Fintech",
            client: "PaySecure",
            title: "Next-Gen-Zahlungsinfrastruktur",
            roles: "Security · API · Blockchain",
            stats: {
              transactions: "€50M+ Transaktionen",
              fraud: "-85% Betrug",
              speed: "2s Validierung",
              compliance: "100% Konformität"
            }
          },
          healthtech: {
            tag: "HealthTech",
            client: "MediCare",
            title: "Telemedizin-Plattform",
            roles: "HIPAA · Video · Mobile",
            stats: {
              consultations: "100K+ Konsultationen",
              wait: "-70% Wartezeit",
              satisfaction: "96% Zufriedenheit",
              savings: "30% Ersparnis"
            }
          }
        },
        impact: {
          eyebrow: "Impact",
          title: "Messbare Ergebnisse",
          subtitle: "Unser datengesteuerter Ansatz transformiert Geschäftsambitionen in konkrete Leistung. Jedes optimierte Projekt generiert quantifizierbaren ROI.",
          metrics: {
            roi: {
              value: "4.2x",
              label: "Durchschnittlicher ROI über 24 Monate",
              detail: "Gemessen an 45+ Scaling-Projekten"
            },
            retention: {
              value: "87%",
              label: "Kundenbindungsrate",
              detail: "Langfristige Partnerschaften etabliert"
            },
            acquisition: {
              value: "-42%",
              label: "Kundenakquisitionskosten",
              detail: "Konversions- und Funnel-Optimierung"
            },
            traffic: {
              value: "3.8x",
              label: "Organisches Traffic-Wachstum",
              detail: "SEO und technische Performance"
            },
            satisfaction: {
              value: "96%",
              label: "Nutzerzufriedenheit",
              detail: "Durchschnittlicher Net Promoter Score"
            },
            cart: {
              value: "62%",
              label: "Durchschnittlicher Warenkorbwert-Steigerung",
              detail: "E-Commerce und UX-Optimierung"
            }
          }
        },
        services: {
          eyebrow: "KI & Cloud Services",
          title: "Was wir tatsächlich bauen",
          subtitle: "Wir arbeiten an Projekten, bei denen KI, Cloud und Daten konkrete Vorteile bringen: Automatisierung, bessere Kundenerfahrung, feinere Aktivitätssteuerung.",
          assistants: {
            label: "KI-Assistenten",
            value: "Copiloten für Ihre Teams, Support-Bots, Entscheidungshilfen"
          },
          platforms: {
            label: "Cloud-Plattformen",
            value: "Kundenportale, Back‑Offices, skalierbare interne Tools"
          },
          data: {
            label: "Datenprodukte",
            value: "Dashboards, erweitertes Reporting, Datenkonsolidierung"
          },
          automation: {
            label: "Automatisierung",
            value: "API-Integrationen, No/Low‑Code-Workflows, dedizierte Skripte"
          }
        },
        process: {
          eyebrow: "Wie wir arbeiten",
          title: "Kurze Zyklen, langfristige Vision",
          subtitle: "Wir strukturieren Projekte in kurzen Zyklen, um Ihnen schnell greifbare Ergebnisse zu zeigen: klickbare Prototypen, erste Online-Versionen, User-Testing. Jede Iteration speist die Produkt-Roadmap.",
          list1: "Kick-off und funktionales Scoping mit Stakeholdern.",
          list2: "Interaktive Mockups, Design-System und Guidelines.",
          list3: "Entwicklungs-Sprints mit regelmäßigen Demos."
        },
        technologies: {
          eyebrow: "Technologien",
          title: "Unser Tech-Stack",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            ai: "KI & Data",
            mobile: "Mobile",
            testing: "Testing & Quality",
            security: "Security & Auth",
            api: "API & Integration"
          }
        },
        industries: {
          eyebrow: "Industrie-Sektoren",
          title: "Spezialisierte Business-Expertise",
          subtitle: "Tiefes Verständnis spezifischer Herausforderungen in jedem Sektor für maßgeschneiderte, hochperformante Lösungen.",
          sectors: {
            startups: {
              title: "Startups & Innovation",
              description: "Go-to-Market-Beschleunigung, skalierbare MVPs, Fundraising. Von Idee zur ersten Traktion in Rekordzeit.",
              metrics: ["Vollständige Unterstützung", "Skalierbare Lösungen"]
            },
            fintech: {
              title: "Financial Technology",
              description: "Zahlungsinfrastruktur, Vermögensverwaltung, algorithmischer Handel. Garantierte Sicherheit und regulatorische Konformität.",
              metrics: ["Hohe Sicherheit", "Strenge Konformität"]
            },
            edtech: {
              title: "Education Technology",
              description: "Next-Gen LMS-Plattformen, adaptives Lernen, Bewertungssysteme. Engagierende und messbare pädagogische Erfahrungen.",
              metrics: ["Innovative Pädagogik", "Messbare Ergebnisse"]
            },
            health: {
              title: "Gesundheit & MedTech",
              description: "Telemedizin-Lösungen, intelligente Patientenakten, diagnostische KI. Integrierte HIPAA- und DSGVO-Konformität.",
              metrics: ["Maximale Vertraulichkeit", "Fortschrittliche Technologien"]
            },
            industry: {
              title: "Industrie 4.0",
              description: "Industrie-IoT, vorausschauende Wartung, Digital Twins. Betriebsoptimierung und Kostenreduktion.",
              metrics: ["Kontinuierliche Optimierung", "IoT-Innovation"]
            },
            retail: {
              title: "Luxus & Retail",
              description: "Omnichannel-E-Commerce, Premium-Kundenerfahrung, KI-Bestandsmanagement. Digitale Transformation unter Wahrung der Exklusivität.",
              metrics: ["Premium-Erfahrung", "Digitale Innovation"]
            }
          }
        },
        methodology: {
          eyebrow: "Prozess",
          title: "Unsere 5-Phasen-Methodik",
          phases: {
            discovery: {
              title: "Discovery",
              description: "Analyse Ihrer Bedürfnisse, technisches Audit, Workshops mit Teams."
            },
            strategy: {
              title: "Strategie",
              description: "Roadmap-Definition, Technologie-Wahl, Projektplanung."
            },
            design: {
              title: "Design",
              description: "Wireframes, Mockups, Design-System, interaktive Prototypen."
            },
            development: {
              title: "Entwicklung",
              description: "Agile Sprints, regelmäßige Demos, automatisiertes Testing, Continuous Integration."
            },
            launch: {
              title: "Launch & Support",
              description: "Produktions-Deployment, Monitoring, Training, kontinuierliche Weiterentwicklung."
            }
          }
        },
        studio: {
          about: {
            eyebrow: "Über uns",
            lead: "Daven's ist ein Technologieprojekt-Studio, das digitale Produkte entwirft und steuert, die von KI und Cloud angetrieben werden für Marken, die Dinge anders machen wollen. Wir arbeiten mit Marketing-, Produkt- und Managementteams, um komplexe Herausforderungen in klare und ehrgeizige Erlebnisse zu verwandeln.",
            sideLabel: "Lernen Sie uns besser kennen",
            sideText1: "Wir arbeiten hauptsächlich mit Startups, KMUs und Innovationsteams zusammen, die Partner benötigen, die sowohl die Business-Vision, technischen Einschränkungen als auch die Feldrealität verstehen können.",
            sideText2: "In Europa ansässig und als Remote-first organisiert, setzen wir ein enges Team um jedes Projekt, um Geschwindigkeit zu erhalten ohne Qualität zu opfern."
          },
          team: {
            eyebrow: "Team & Organisation",
            description1: "Wir arbeiten in einem kleinen dedizierten Kern für jedes Projekt: ein einziger Kontaktpunkt auf Daven's-Seite, umgeben von spezialisierten Profilen (UX, UI, Front/Back-Entwicklung, Integration).",
            description2: "Der Austausch erfolgt per Videokonferenz und kollaborativen Tools (Figma, Notion, Slack), um ein flüssiges Tempo ohne unnötige Meetings zu halten."
          },
          methodology: {
            eyebrow: "Methodik",
            title: "Ein klarer Rahmen in fünf Schritten",
            description: "Wir strukturieren Projekte, um Kurs zu halten während Raum für Anpassungen bleibt: Sie wissen immer, wo wir sind und was als nächstes kommt.",
            steps: {
              discovery: "Discovery: Verständnis des Kontexts, der Daten und der Herausforderungen.",
              design: "Design: User Journeys, Mockups, Prototypen und Design-System.",
              data: "Data & KI: Datenvorbereitung, Wahl der KI-Komponenten.",
              build: "Build: Entwicklung, Integrationen, Testing und Deployment.",
              run: "Run: Monitoring, Iterationen und kontinuierliche Produktverbesserung."
            }
          }
        }
      },
    },
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        work: "项目",
        studio: "工作室",
        contact: "联系",
      },
      cta: {
        startProject: "开始项目",
      },
      footer: {
        baseline: "专注于打造持久而富有雄心的数字体验的技术工作室。",
        nav: {
          label: "导航",
          home: "首页",
          work: "项目",
          studio: "工作室",
          contact: "联系",
        },
        services: {
          label: "服务",
          branding: "品牌与识别",
          web: "网页设计",
          motion: "动态设计",
          photo: "摄影与视频",
          strategy: "数字战略",
        },
        contact: {
          label: "联系",
          address: "洛美-多哥",
        },
        social: {
          label: "社交",
          linkedin: "LinkedIn",
          instagram: "Instagram",
          behance: "Behance",
          github: "GitHub",
        },
        legal: {
          label: "法律",
          privacy: "隐私",
          terms: "服务条款",
          cookies: "Cookie",
        },
        newsletter: {
          label: "订阅",
          placeholder: "输入您的邮箱",
          aria: "订阅邮箱",
          submit: "订阅",
        },
        copyright: "版权所有。",
        cookies: "我们使用 Cookie",
      },
      contact: {
        eyebrow: "联系",
        title: "让我们谈谈您的下一个项目",
        lead: "简要描述您的背景和目标。我们将在24-48小时内回复您，提供初步评估和支持方案。",
        methods: {
          email: {
            label: "专业邮箱",
            value: "lionesspretty7@gmail.com"
          },
          whatsapp: {
            label: "WhatsApp 商务",
            value: "+228 91 59 67 88"
          }
        },
        availability: {
          badge: "接受新项目",
          text: "24-48小时内回复 · 免费初步咨询"
        },
        form: {
          name: {
            label: "全名",
            placeholder: "您的姓名"
          },
          email: {
            label: "电子邮件",
            placeholder: "您@公司.com"
          },
          projectType: {
            label: "项目类型",
            placeholder: "平台、网站、产品..."
          },
          message: {
            label: "项目摘要",
            placeholder: "告诉我们您的背景、目标、时间表..."
          },
          submit: "发送请求",
          note: "此表单是前端演示：需要定义与您的CRM或邮件工具的连接。"
        }
      },
      services: {
        branding: { title: "品牌与识别", subtitle: "我们创造令人难忘的品牌", intro: "从品牌战略到完整的视觉识别。", processTitle: "我们的流程", processList: ["品牌审计", "品牌平台", "视觉识别", "品牌指南", "部署"], whyTitle: "为什么选择我们", whyText: "凭借50多个身份，我们将您的愿景转化为品牌。" },
        web: { title: "网页设计", subtitle: "转化的数字体验", intro: "我们设计结合美学、性能和用户体验的网站。", expertiseTitle: "我们的专长", expertiseList: ["UI/UX设计", "响应式开发", "性能优化", "CMS集成", "维护"], techTitle: "技术", techText: "React、Next.js、TypeScript、Tailwind CSS、Node.js。" },
        motion: { title: "动态设计", subtitle: "用动画赋予生命", intro: "动态设计将信息转化为视觉体验。", servicesTitle: "我们的服务", servicesList: ["标志动画", "解说视频", "社交媒体动画", "动态图形", "视频品牌"], approachTitle: "我们的方法", approachText: "我们结合艺术创造力和沟通策略。" },
        photo: { title: "摄影与视频", subtitle: "捕捉品牌精髓", intro: "讲述故事的专业视觉效果。", servicesTitle: "我们的服务", servicesList: ["产品摄影", "企业报道", "专业肖像", "宣传视频", "社交媒体内容"], qualityTitle: "专业质量", qualityText: "高端设备和精心后期制作。" },
        strategy: { title: "数字战略", subtitle: "转变在线存在", intro: "有效的数字战略是成功的关键。", servicesTitle: "我们的支持", servicesList: ["数字审计", "内容战略", "SEO优化", "社交媒体战略", "分析"], resultsTitle: "可衡量的结果", resultsText: "我们建立明确的KPI来衡量影响。" }
      },
      legal: {
        privacy: { title: "隐私政策", lastUpdated: "最后更新", intro: "我们非常重视保护您的个人数据。", sections: { collection: { title: "数据收集", content: "我们只收集必要的数据。" }, usage: { title: "数据使用", content: "您的数据仅用于我们的服务。" }, rights: { title: "您的权利", content: "您有权访问、更正和删除数据。" }, security: { title: "安全", content: "我们实施安全措施保护您的数据。" } } },
        terms: { title: "服务条款", lastUpdated: "最后更新", intro: "使用我们的服务即表示您接受这些条款。", sections: { services: { title: "服务", content: "我们提供设计、开发和支持服务。" }, obligations: { title: "客户义务", content: "客户提供必要的信息。" }, payment: { title: "付款条款", content: "付款条款在报价中定义。" }, liability: { title: "责任", content: "我们的责任仅限于服务金额。" } } },
        cookies: { title: "Cookie政策", lastUpdated: "最后更新", intro: "本网站使用Cookie改善体验。", sections: { what: { title: "什么是Cookie？", content: "Cookie是设备上的小文本文件。" }, types: { title: "Cookie类型", content: "我们使用基本、分析和偏好Cookie。" }, control: { title: "Cookie控制", content: "您可以通过浏览器设置控制Cookie。" }, thirdParty: { title: "第三方Cookie", content: "我们使用Google Analytics。" } } }
      },
      home: {
        heroBrand: "Daven's Studio",
        heroEyebrow: "科技项目工作室",
        heroTitleLine1: "我们",
        heroTitleLine2: "为您编排",
        heroTitleLine3: "数字项目",
        heroTitleLine4: "的每个环节。",
        heroText:
          "Daven's 为品牌规划、主导并交付由 AI 和云技术驱动的数字产品，打造大胆统一、以数据为核心的线上体验。",
        heroCtaLink: "查看我们的项目",
        heroCtaNote: "2025 年名额有限。",
        heroSideLabel: "我们的工作",
        heroSideText:
          "产品战略、应用型 AI、云架构、界面设计、Web 与移动开发以及长期陪伴。小而精的团队，专注解决你的关键问题。",
        heroBarItem1: "Daven's · 科技项目工作室",
        heroBarItem2: "Discovery · Design · Delivery",
        heroBarItem3: "立足非洲 · 服务全球客户",
        heroMediaP1:
          "Daven's 与产品、市场及管理团队合作，打造科技体验：SaaS 平台、发布站点、内部工具等。",
        heroMediaP2:
          "我们结合战略、设计与工程，打造清晰、迅速且富有抱负的界面，并面向长期演进。",
        approachEyebrow: "方法",
        approachTitle: "从想法到在线平台",
        approachText:
          "每个项目都从深入理解你的业务环境开始：受众、业务目标与技术约束。随后我们将这些洞察转化为围绕数据流构建的 AI 助手、云端界面和内部工具。",
        approachList1: "与团队共同梳理环境与战略方向。",
        approachList2: "界面设计与交互式原型。",
        approachList3: "开发、集成与上线支持。",
        typesDeliverablesLabel: "交付物类型",
        typesDeliverablesValue:
          "展示站点、Web 应用（电商、在线教育等）、业务系统、AI 解决方案、自动化、数据分析、大数据平台、SaaS 平台、内部工具、落地页",
        industriesLabel: "行业",
        industriesValue: "科技、金融科技、教育、医疗、工业",
        useCasesEyebrow: "典型用例",
        useCasesTitle: "我们如何应用 AI、云与数据",
        useCasesText:
          "一些案例，展示我们如何把想法变为真实可用的数字产品。",
        case1Tag: "AI 客服支持",
        case1Client: "助手与协同工具",
        case1Title:
          "用 AI 辅助回答，提升支持团队效率",
        case1Roles: "知识分析 · 会话式界面",
        case2Tag: "云端门户",
        case2Client: "客户空间",
        case2Title: "为客户与合作伙伴搭建安全门户",
        case2Roles: "身份认证 · 仪表盘 · API 集成",
        case3Tag: "内部数据工具",
        case3Client: "业务团队",
        case3Title: "整合并可视化关键业务数据",
        case3Roles: "流程设计 · 数据可视化 · 自动化",
        case4Tag: "大数据与分析",
        case4Client: "数据科学家",
        case4Title:
          "利用海量数据做预测性分析",
        case4Roles: "ETL 流程 · 机器学习 · 高级报表",
        architectsEyebrow: "解决方案架构师",
        architectsTitle: "设计你的数字产品架构",
        architectsText:
          "我们在项目前期介入，澄清目标架构：采用哪些技术组件、如何集成、用户路径如何设计。目标是把想法变成清晰、可落地且可扩展的蓝图。",
        architectsList1: "梳理现状与业务约束。",
        architectsList2: "选择合适的云、数据与 AI 组件。",
        architectsList3: "定义用户路径与功能架构。",
        architectsDeliverablesLabel: "典型交付物",
        architectsDeliverablesValue:
          "架构图、初始 Backlog、技术建议、需求文档、功能规格说明、交互原型、原型 Demo、线框图、设计系统、视觉规范、产品路线图、迁移计划、技术评估、风险分析、预算估算、里程碑规划、KPI 设计、数据模型、API 规格、测试计划、部署与托管方案、安全建议、上线计划、技术文档、集成指引、上线后支持",
        deliveryEyebrow: "项目交付",
        deliveryTitle: "驱动并交付你的技术项目",
        deliveryText:
          "Daven's 负责从头到尾的落地：范围界定、设计、开发、测试到正式上线。我们以短周期迭代和定期 Demo 的方式推进，降低每个阶段的风险。",
        deliveryList1:
          "产品项目管理与各方协调。",
        deliveryList2:
          "界面设计、可复用组件与设计系统。",
        deliveryList3:
          "Web 与移动开发、API 集成、部署。",
        deliveryFormatsLabel: "合作形式",
        deliveryFormatsValue:
          "打包项目、增强团队、专属团队、战略咨询、技术评估、设计工作坊、原型冲刺、上线支持、技术支持、团队培训、代码评审、AI 与数据专家支持、架构升级、性能优化、云迁移、API 集成、定制开发、应用运维、持续迭代、产品辅导、技术前瞻、技术顾问、项目管理、路线图管理、现状评估、解决方案建议、预算规划、转型计划",
        followEyebrow: "长期陪伴",
        followTitle: "持续支持你的团队",
        followText:
          "平台上线后，我们继续陪伴你迭代产品：新功能、性能优化与体验持续改进。",
        followList1:
          "共建产品路线图并排序优先级。",
        followList2:
          "性能监控、数据分析与用户反馈。",
        followList3:
          "为内部团队（市场、产品、技术）提供支持。",
        followTypeLabel: "陪伴方式",
        followTypeValue:
          "月度支持、优化冲刺、定向介入",
      },
      work: {
        eyebrow: "Work",
        title: "精选项目",
        subtitle: "为客户创建的平台、产品和体验精选。每个项目都设计为长期战略合作。",
        filters: {
          all: "全部",
          saas: "SaaS",
          mobile: "移动",
          branding: "品牌",
          ecommerce: "电商",
          ai: "AI"
        },
        projects: {
          novastack: {
            tag: "SaaS平台",
            client: "NovaStack",
            title: "B2B平台完整重设计",
            roles: "产品策略 · UX/UI · 网络应用",
            stats: {
              conversion: "+45% 转化率",
              users: "200K+ 用户",
              rating: "4.8★ 评分",
              revenue: "€2M+ 收入"
            }
          },
          auralink: {
            tag: "科技品牌",
            client: "Auralink",
            title: "数字身份与发布网站",
            roles: "品牌 · 网站 · 动效",
            stats: {
              traffic: "+320% 流量",
              engagement: "8min 会话",
              bounce: "-25% 跳出率",
              leads: "+150% 潜在客户"
            }
          },
          pulseone: {
            tag: "移动产品",
            client: "PulseOne",
            title: "IoT配套应用",
            roles: "设计系统 · iOS · Android",
            stats: {
              downloads: "500K+ 下载",
              retention: "78% 留存",
              crashes: "-90% 崩溃",
              rating: "4.7★ 评分"
            }
          },
          dataflow: {
            tag: "数据平台",
            client: "DataFlow",
            title: "实时分析仪表板",
            roles: "数据可视化 · 后端 · 云",
            stats: {
              latency: "<100ms 延迟",
              uptime: "99.9% 正常运行",
              queries: "1M+ 查询/天",
              accuracy: "99.5% 准确性"
            }
          },
          fintech: {
            tag: "金融科技",
            client: "PaySecure",
            title: "下一代支付基础设施",
            roles: "安全 · API · 区块链",
            stats: {
              transactions: "€50M+ 交易",
              fraud: "-85% 欺诈",
              speed: "2s 验证",
              compliance: "100% 合规"
            }
          },
          healthtech: {
            tag: "医疗科技",
            client: "MediCare",
            title: "远程医疗平台",
            roles: "HIPAA · 视频 · 移动",
            stats: {
              consultations: "100K+ 咨询",
              wait: "-70% 等待时间",
              satisfaction: "96% 满意度",
              savings: "30% 节省"
            }
          }
        },
        impact: {
          eyebrow: "影响",
          title: "可衡量结果",
          subtitle: "我们的数据驱动方法将商业抱负转化为具体绩效。每个优化项目都产生可量化的投资回报。",
          metrics: {
            roi: {
              value: "4.2x",
              label: "24个月平均投资回报率",
              detail: "基于45+扩展项目测量"
            },
            retention: {
              value: "87%",
              label: "客户保留率",
              detail: "建立长期合作伙伴关系"
            },
            acquisition: {
              value: "-42%",
              label: "客户获取成本",
              detail: "转化和漏斗优化"
            },
            traffic: {
              value: "3.8x",
              label: "自然流量增长",
              detail: "SEO和技术性能"
            },
            satisfaction: {
              value: "96%",
              label: "用户满意度",
              detail: "平均净推荐值"
            },
            cart: {
              value: "62%",
              label: "平均购物车价值增长",
              detail: "电商和用户体验优化"
            }
          }
        },
        services: {
          eyebrow: "AI与云服务",
          title: "我们实际构建什么",
          subtitle: "我们在AI、云和数据带来具体优势的项目上工作：自动化、更好的客户体验、更精细的活动管理。",
          assistants: {
            label: "AI助手",
            value: "团队副驾驶、支持机器人、决策辅助"
          },
          platforms: {
            label: "云平台",
            value: "客户门户、后台、可扩展内部工具"
          },
          data: {
            label: "数据产品",
            value: "仪表板、高级报告、数据整合"
          },
          automation: {
            label: "自动化",
            value: "API集成、无/低代码工作流、专用脚本"
          }
        },
        process: {
          eyebrow: "我们如何工作",
          title: "短周期、长期愿景",
          subtitle: "我们将项目构建为短周期，快速向您展示可触摸的结果：可点击原型、首个在线版本、用户测试。每次迭代都为产品路线图提供支持。",
          list1: "与利益相关者进行启动和功能范围界定。",
          list2: "交互式模型、设计系统和指南。",
          list3: "定期演示的开发冲刺。"
        },
        technologies: {
          eyebrow: "技术",
          title: "我们的技术栈",
          categories: {
            frontend: "前端",
            backend: "后端",
            cloud: "云与DevOps",
            ai: "AI与数据",
            mobile: "移动",
            testing: "测试与质量",
            security: "安全与认证",
            api: "API与集成"
          }
        },
        industries: {
          eyebrow: "行业领域",
          title: "专业业务专长",
          subtitle: "深入理解每个行业的具体挑战，提供定制化、高性能解决方案。",
          sectors: {
            startups: {
              title: "初创公司与创新",
              description: "上市加速、可扩展MVP、融资。从想法到首次吸引力的创纪录时间。",
              metrics: ["全面支持", "可扩展解决方案"]
            },
            fintech: {
              title: "金融科技",
              description: "支付基础设施、财富管理、算法交易。保证安全和监管合规。",
              metrics: ["高安全性", "严格合规"]
            },
            edtech: {
              title: "教育科技",
              description: "下一代LMS平台、自适应学习、评估系统。引人入胜且可衡量的教学体验。",
              metrics: ["创新教学", "可衡量结果"]
            },
            health: {
              title: "健康与医疗科技",
              description: "远程医疗解决方案、智能患者记录、诊断AI。集成HIPAA和GDPR合规。",
              metrics: ["最高机密性", "先进技术"]
            },
            industry: {
              title: "工业4.0",
              description: "工业物联网、预测性维护、数字孪生。运营优化和成本降低。",
              metrics: ["持续优化", "物联网创新"]
            },
            retail: {
              title: "奢侈品与零售",
              description: "全渠道电商、高端客户体验、AI库存管理。保持排他性的数字化转型。",
              metrics: ["高端体验", "数字创新"]
            }
          }
        },
        methodology: {
          eyebrow: "流程",
          title: "我们的5阶段方法论",
          phases: {
            discovery: {
              title: "发现",
              description: "分析您的需求、技术审计、团队研讨会。"
            },
            strategy: {
              title: "策略",
              description: "路线图定义、技术选择、项目规划。"
            },
            design: {
              title: "设计",
              description: "线框图、模型、设计系统、交互原型。"
            },
            development: {
              title: "开发",
              description: "敏捷冲刺、定期演示、自动化测试、持续集成。"
            },
            launch: {
              title: "发布与支持",
              description: "生产部署、监控、培训、持续演进。"
            }
          }
        },
        studio: {
          about: {
            eyebrow: "关于",
            lead: "Daven's是一个技术项目工作室，为想要以不同方式做事的品牌设计和推动由AI和云驱动的数字产品。我们与营销、产品和管理团队合作，将复杂挑战转化为清晰而雄心勃勃的体验。",
            sideLabel: "更好地了解我们",
            sideText1: "我们主要与需要能够理解业务愿景、技术限制和现场现实的合作伙伴的初创公司、中小企业和创新团队合作。",
            sideText2: "总部位于欧洲，采用远程优先组织，我们在每个项目周围组建一个紧密的团队，以保持速度而不牺牲质量。"
          },
          team: {
            eyebrow: "团队与组织",
            description1: "我们在每个项目上都在一个小的专用核心中工作：Daven's方面的单一联系人，周围是专业配置文件（UX、UI、前端/后端开发、集成）。",
            description2: "通过视频会议和协作工具（Figma、Notion、Slack）进行交流，以保持流畅的节奏而不需要不必要的会议。"
          },
          methodology: {
            eyebrow: "方法论",
            title: "清晰的五步框架",
            description: "我们构建项目以保持航向，同时为调整留出空间：您始终知道我们在哪里以及接下来会发生什么。",
            steps: {
              discovery: "发现：理解上下文、数据和问题。",
              design: "设计：用户旅程、模型、原型和设计系统。",
              data: "数据与AI：数据准备、AI组件选择。",
              build: "构建：开发、集成、测试和部署。",
              run: "运行：监控、迭代和持续产品改进。"
            }
          }
        }
      },
    },
  },
  it: {
    translation: {
      nav: {
        home: "Home",
        work: "Lavori",
        studio: "Studio",
        contact: "Contatto",
      },
      cta: {
        startProject: "Inizia un progetto",
      },
      footer: {
        baseline:
          "Studio tecnologico per esperienze digitali ambiziose e durature.",
        nav: {
          label: "Navigazione",
          home: "Home",
          work: "Lavori",
          studio: "Studio",
          contact: "Contatto",
        },
        services: {
          label: "Servizi",
          branding: "Branding & Identità",
          web: "Web Design",
          motion: "Motion Design",
          photo: "Fotografia & Video",
          strategy: "Strategia Digitale",
        },
        contact: {
          label: "Contatto",
          address: "Lomé-TOGO",
        },
        social: {
          label: "Social",
          linkedin: "LinkedIn",
          instagram: "Instagram",
          behance: "Behance",
          github: "GitHub",
        },
        legal: {
          label: "Legale",
          privacy: "Privacy",
          terms: "Termini di Servizio",
          cookies: "Cookie",
        },
        newsletter: {
          label: "Newsletter",
          placeholder: "Inserisci la tua email",
          aria: "Email newsletter",
          submit: "Iscriviti",
        },
        copyright: "Tutti i diritti riservati.",
        cookies: "Utilizziamo i cookie",
      },
      contact: {
        eyebrow: "Contatto",
        title: "Parliamo del tuo prossimo progetto",
        lead: "Descrivi brevemente il tuo contesto e i tuoi obiettivi. Ti risponderemo entro 24-48 ore con una valutazione iniziale e opzioni di supporto.",
        methods: {
          email: {
            label: "Email professionale",
            value: "lionesspretty7@gmail.com"
          },
          whatsapp: {
            label: "WhatsApp Business",
            value: "+228 91 59 67 88"
          }
        },
        availability: {
          badge: "Disponibile per nuovi progetti",
          text: "Risposta entro 24-48h · Consulenza iniziale gratuita"
        },
        form: {
          name: {
            label: "Nome completo",
            placeholder: "Il tuo nome"
          },
          email: {
            label: "Email",
            placeholder: "tu@azienda.com"
          },
          projectType: {
            label: "Tipo di progetto",
            placeholder: "Piattaforma, sito, prodotto..."
          },
          message: {
            label: "Riepilogo del progetto",
            placeholder: "Raccontaci del tuo contesto, obiettivi, tempistiche..."
          },
          submit: "Invia richiesta",
          note: "Questo modulo è una demo front-end: connessione al tuo CRM o strumento di emailing da definire."
        }
      },
      services: {
        branding: { title: "Branding & Identità", subtitle: "Creiamo marchi memorabili", intro: "Dalla strategia di marca all'identità visiva completa.", processTitle: "Il nostro processo", processList: ["Audit del marchio", "Piattaforma del marchio", "Identità visiva", "Linee guida", "Distribuzione"], whyTitle: "Perché sceglierci", whyText: "Con oltre 50 identità create, trasformiamo la tua visione in un marchio." },
        web: { title: "Web Design", subtitle: "Esperienze digitali che convertono", intro: "Progettiamo siti web che combinano estetica, prestazioni e UX.", expertiseTitle: "La nostra esperienza", expertiseList: ["Design UI/UX", "Sviluppo responsive", "Ottimizzazione", "Integrazione CMS", "Manutenzione"], techTitle: "Tecnologie", techText: "React, Next.js, TypeScript, Tailwind CSS, Node.js." },
        motion: { title: "Motion Design", subtitle: "Dai vita alle tue idee", intro: "Il motion design trasforma i messaggi in esperienze visive.", servicesTitle: "I nostri servizi", servicesList: ["Animazioni logo", "Video esplicativi", "Animazioni social", "Motion graphics", "Video branding"], approachTitle: "Il nostro approccio", approachText: "Combiniamo creatività artistica e strategia di comunicazione." },
        photo: { title: "Fotografia & Video", subtitle: "Cattura l'essenza del tuo marchio", intro: "Visual professionali che raccontano la tua storia.", servicesTitle: "I nostri servizi", servicesList: ["Fotografia prodotti", "Reportage corporate", "Ritratti professionali", "Video promozionali", "Contenuti social"], qualityTitle: "Qualità professionale", qualityText: "Attrezzatura di alta gamma e post-produzione accurata." },
        strategy: { title: "Strategia Digitale", subtitle: "Trasforma la tua presenza online", intro: "Una strategia digitale efficace è la chiave del successo.", servicesTitle: "Il nostro supporto", servicesList: ["Audit digitale", "Strategia contenuti", "Ottimizzazione SEO", "Strategia social", "Analytics"], resultsTitle: "Risultati misurabili", resultsText: "Stabiliamo KPI chiari per misurare l'impatto." }
      },
      legal: {
        privacy: { title: "Privacy Policy", lastUpdated: "Ultimo aggiornamento", intro: "Prendiamo molto sul serio la protezione dei tuoi dati personali.", sections: { collection: { title: "Raccolta dati", content: "Raccogliamo solo i dati necessari con il tuo consenso." }, usage: { title: "Utilizzo dati", content: "I tuoi dati sono utilizzati esclusivamente per i nostri servizi." }, rights: { title: "I tuoi diritti", content: "Hai il diritto di accedere, rettificare ed eliminare i dati." }, security: { title: "Sicurezza", content: "Implementiamo misure di sicurezza per proteggere i tuoi dati." } } },
        terms: { title: "Termini di Servizio", lastUpdated: "Ultimo aggiornamento", intro: "Utilizzando i nostri servizi, accetti questi termini.", sections: { services: { title: "Servizi", content: "Offriamo servizi di design, sviluppo e supporto." }, obligations: { title: "Obblighi del cliente", content: "Il cliente fornisce le informazioni necessarie." }, payment: { title: "Condizioni di pagamento", content: "Le condizioni di pagamento sono definite in ogni preventivo." }, liability: { title: "Responsabilità", content: "La nostra responsabilità è limitata all'importo dei servizi." } } },
        cookies: { title: "Cookie Policy", lastUpdated: "Ultimo aggiornamento", intro: "Questo sito utilizza cookie per migliorare l'esperienza.", sections: { what: { title: "Cos'è un cookie?", content: "Un cookie è un piccolo file di testo sul tuo dispositivo." }, types: { title: "Tipi di cookie", content: "Utilizziamo cookie essenziali, analitici e di preferenza." }, control: { title: "Controllo cookie", content: "Puoi controllare i cookie tramite le impostazioni del browser." }, thirdParty: { title: "Cookie di terze parti", content: "Utilizziamo Google Analytics." } } }
      },
      home: {
        heroBrand: "Daven's Studio",
        heroEyebrow: "Studio di progetti tecnologici",
        heroTitleLine1: "Orchestr",
        heroTitleLine2: "iamo i tuoi",
        heroTitleLine3: "progetti",
        heroTitleLine4: "digitali.",
        heroText:
          "Daven's progetta, guida e distribuisce prodotti digitali alimentati da IA e cloud per marchi che desiderano una presenza online audace, coerente e basata sui dati.",
        heroCtaLink: "Scopri i nostri lavori",
        heroCtaNote: "Disponibilità limitata per il 2025.",
        heroSideLabel: "Cosa facciamo",
        heroSideText:
          "Strategia di prodotto, IA applicata, architetture cloud, design di interfaccia, sviluppo web & mobile e supporto a lungo termine. Un team compatto dedicato alle tue sfide.",
        heroBarItem1: "Daven's · Studio di progetti tecnologici",
        heroBarItem2: "Discovery · Design · Delivery",
        heroBarItem3: "Basato in Africa · Clienti internazionali",
        heroMediaP1:
          "Daven's affianca team prodotto, marketing e direzione nella messa in scena delle loro esperienze tecnologiche: piattaforme SaaS, siti di lancio, strumenti interni.",
        heroMediaP2:
          "Combiniamo strategia, design e sviluppo per creare interfacce chiare, veloci e ambiziose, pensate per il lungo termine.",
        approachEyebrow: "Approccio",
        approachTitle: "Dall'idea alla piattaforma online",
        approachText:
          "Ogni progetto inizia con un'immersione nel tuo contesto: pubblico, obiettivi di business, vincoli tecnici. Traduciamo poi questa visione in assistenti IA, interfacce cloud e strumenti interni centrati sui tuoi flussi di dati.",
        approachList1: "Immersione e inquadramento strategico con i tuoi team.",
        approachList2: "Design di interfaccia e prototipazione interattiva.",
        approachList3:
          "Sviluppo, integrazione e supporto al lancio.",
        typesDeliverablesLabel: "Tipi di deliverable",
        typesDeliverablesValue:
          "Siti vetrina, applicazioni web (e-commerce, e-learning, ecc.), software business, soluzioni IA, automazione, analisi dati, big data, piattaforme SaaS, strumenti interni, landing page",
        industriesLabel: "Settori",
        industriesValue: "Tech, fintech, educazione, sanità, industria",
        useCasesEyebrow: "Casi d'uso tipici",
        useCasesTitle: "Come applichiamo IA, cloud e dati",
        useCasesText:
          "Alcuni esempi di situazioni in cui interveniamo per trasformare idee in prodotti digitali concreti.",
        case1Tag: "Supporto clienti IA",
        case1Client: "Assistenti & copiloti",
        case1Title:
          "Aiutare i tuoi team di supporto con risposte assistite dall'IA",
        case1Roles:
          "Analisi della conoscenza · Interfacce conversazionali",
        case2Tag: "Portali cloud",
        case2Client: "Area clienti",
        case2Title: "Portali sicuri per i tuoi clienti o partner",
        case2Roles: "Autenticazione · Dashboard · Integrazioni API",
        case3Tag: "Strumenti dati interni",
        case3Client: "Team business",
        case3Title: "Consolidare e visualizzare i tuoi dati business chiave",
        case3Roles: "Design workflow · Data-viz · Automazione",
        case4Tag: "Big Data & Analytics",
        case4Client: "Data scientist",
        case4Title:
          "Sfruttare grandi volumi di dati per l'analisi predittiva",
        case4Roles: "Pipeline ETL · Machine Learning · Reporting avanzato",
        architectsEyebrow: "Architetti di soluzioni",
        architectsTitle: "Progettare l'architettura dei tuoi prodotti digitali",
        architectsText:
          "Interveniamo a monte dei progetti per chiarire l'architettura target: quali componenti tecnici, quali integrazioni, quali percorsi utente. L'obiettivo è trasformare le tue idee in uno schema chiaro, realistico e scalabile.",
        architectsList1:
          "Mappatura dell'esistente e dei vincoli business.",
        architectsList2:
          "Scelta dei componenti cloud, data e IA adatti.",
        architectsList3:
          "Definizione dei percorsi e dell'architettura funzionale.",
        architectsDeliverablesLabel: "Deliverable tipici",
        architectsDeliverablesValue:
          "Schemi di architettura, backlog iniziale, raccomandazioni tech, capitolato, specifiche funzionali, mockup interattivi, prototipi, wireframe, design system, identità visiva, roadmap prodotto, piano di migrazione, benchmark tecnologico, analisi rischi, stima budget, planning, definizione KPI, modello dati, specifiche API, piano test, strategia hosting, raccomandazioni sicurezza, piano deployment, documentazione tecnica, guide integrazione, supporto post-lancio",
        deliveryEyebrow: "Erogazione progetti",
        deliveryTitle: "Guidare e consegnare i tuoi progetti tecnologici",
        deliveryText:
          "Daven's gestisce l'implementazione completa: definizione scope, design, sviluppo, test e messaggio in produzione. Lavoriamo in cicli brevi con demo regolari per garantire ogni fase.",
        deliveryList1:
          "Project management prodotto e coordinamento stakeholder.",
        deliveryList2:
          "Design interfaccia, componenti riutilizzabili e design system.",
        deliveryList3:
          "Sviluppo web & mobile, integrazioni API, deployment.",
        deliveryFormatsLabel: "Formati di missione",
        deliveryFormatsValue:
          "Progetti a prezzo fisso, staff aumentato, team dedicato, consulenza strategica, audit tecnico, workshop design, sprint prototipazione, supporto lancio, supporto tecnico, formazione team, revisione codice, competenza IA & data, upgrade architettura, ottimizzazione performance, migrazione cloud, integrazioni API, sviluppo su misura, manutenzione applicativa, miglioramento continuo, coaching prodotto, monitoraggio tecnologico, assistenza tecnica, guida progetto, gestione roadmap, analisi esistente, raccomandazioni soluzioni, definizione budget, piano trasformazione",
        followEyebrow: "Supporto continuativo",
        followTitle: "Supportare i tuoi team nel tempo",
        followText:
          "Una volta che la piattaforma è online, rimaniamo al tuo fianco per far evolvere il prodotto: nuove funzionalità, ottimizzazioni performance, miglioramento continuo dell'esperienza.",
        followList1:
          "Roadmap prodotto condivisa e priorizzazione evoluzioni.",
        followList2:
          "Monitoraggio performance, analytics e feedback utenti.",
        followList3:
          "Supporto per i tuoi team interni (marketing, prodotto, tech).",
        followTypeLabel: "Tipi di supporto",
        followTypeValue:
          "Supporto mensile, sprint miglioramento, interventi mirati",
      },
      work: {
        eyebrow: "Work",
        title: "Progetti Selezionati",
        subtitle: "Una selezione di piattaforme, prodotti ed esperienze create per i nostri clienti. Ogni progetto è progettato come collaborazione strategica a lungo termine.",
        filters: {
          all: "Tutti",
          saas: "SaaS",
          mobile: "Mobile",
          branding: "Branding",
          ecommerce: "E-commerce",
          ai: "AI"
        },
        projects: {
          novastack: {
            tag: "Piattaforma SaaS",
            client: "NovaStack",
            title: "Redesign completo piattaforma B2B",
            roles: "Strategia prodotto · UX/UI · Web app",
            stats: {
              conversion: "+45% conversione",
              users: "200K+ utenti",
              rating: "4.8★ valutazione",
              revenue: "€2M+ ricavi"
            }
          },
          auralink: {
            tag: "Marchio tech",
            client: "Auralink",
            title: "Identità digitale & sito di lancio",
            roles: "Branding · Website · Motion",
            stats: {
              traffic: "+320% traffico",
              engagement: "8min sessione",
              bounce: "-25% rimbalzo",
              leads: "+150% lead"
            }
          },
          pulseone: {
            tag: "Prodotto mobile",
            client: "PulseOne",
            title: "App companion per IoT",
            roles: "Design sistema · iOS · Android",
            stats: {
              downloads: "500K+ download",
              retention: "78% retention",
              crashes: "-90% crash",
              rating: "4.7★ valutazione"
            }
          },
          dataflow: {
            tag: "Data Platform",
            client: "DataFlow",
            title: "Dashboard analytics in tempo reale",
            roles: "Data viz · Backend · Cloud",
            stats: {
              latency: "<100ms latenza",
              uptime: "99.9% uptime",
              queries: "1M+ query/giorno",
              accuracy: "99.5% accuratezza"
            }
          },
          fintech: {
            tag: "Fintech",
            client: "PaySecure",
            title: "Infrastruttura pagamenti next-gen",
            roles: "Security · API · Blockchain",
            stats: {
              transactions: "€50M+ transazioni",
              fraud: "-85% frodi",
              speed: "2s validazione",
              compliance: "100% conformità"
            }
          },
          healthtech: {
            tag: "HealthTech",
            client: "MediCare",
            title: "Piattaforma telemedicina",
            roles: "HIPAA · Video · Mobile",
            stats: {
              consultations: "100K+ consulenze",
              wait: "-70% tempo attesa",
              satisfaction: "96% soddisfazione",
              savings: "30% risparmi"
            }
          }
        },
        impact: {
          eyebrow: "Impact",
          title: "Risultati Misurabili",
          subtitle: "Il nostro approccio data-driven trasforma le ambizioni business in performance concrete. Ogni progetto ottimizzato genera ROI quantificabile.",
          metrics: {
            roi: {
              value: "4.2x",
              label: "ROI medio su 24 mesi",
              detail: "Misurato su 45+ progetti scaling"
            },
            retention: {
              value: "87%",
              label: "Tasso retention clienti",
              detail: "Partenariati long-term stabiliti"
            },
            acquisition: {
              value: "-42%",
              label: "Costo acquisizione clienti",
              detail: "Ottimizzazione conversione e funnel"
            },
            traffic: {
              value: "3.8x",
              label: "Crescita traffico organico",
              detail: "SEO e performance tecnica"
            },
            satisfaction: {
              value: "96%",
              label: "Soddisfazione utenti",
              detail: "Net Promoter Score medio"
            },
            cart: {
              value: "62%",
              label: "Aumento carrello medio",
              detail: "E-commerce e UX ottimizzazione"
            }
          }
        },
        services: {
          eyebrow: "Servizi AI & Cloud",
          title: "Cosa costruiamo concretamente",
          subtitle: "Interveniamo su progetti dove AI, cloud e dati portano vantaggi concreti: automazione, migliore esperienza cliente, gestione più fine dell'attività.",
          assistants: {
            label: "Assistenti AI",
            value: "Copilot per i tuoi team, bot supporto, supporto decisionale"
          },
          platforms: {
            label: "Piattaforme cloud",
            value: "Portali clienti, back‑offices, strumenti interni scalabili"
          },
          data: {
            label: "Prodotti data",
            value: "Dashboard, reporting avanzato, consolidamento dati"
          },
          automation: {
            label: "Automazione",
            value: "Integrazioni API, workflow no/low‑code, script dedicati"
          }
        },
        process: {
          eyebrow: "Come lavoriamo",
          title: "Cicli brevi, visione long-term",
          subtitle: "Strutturiamo i progetti in cicli brevi per mostrarvi risultati tangibili velocemente: prototipi cliccabili, prime versioni online, test utenti. Ogni iterazione alimenta la roadmap prodotto.",
          list1: "Kick-off e definizione funzionale con stakeholder.",
          list2: "Mockup interattivi, design system e guidelines.",
          list3: "Sprint sviluppo con demo regolari."
        },
        technologies: {
          eyebrow: "Tecnologie",
          title: "Il nostro tech stack",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            ai: "AI & Data",
            mobile: "Mobile",
            testing: "Testing & Quality",
            security: "Security & Auth",
            api: "API & Integration"
          }
        },
        industries: {
          eyebrow: "Settori di Intervento",
          title: "Expertise di Business Specializzata",
          subtitle: "Comprensione approfondita delle sfide specifiche di ogni settore per soluzioni tailor-made e performanti.",
          sectors: {
            startups: {
              title: "Startup & Innovazione",
              description: "Accelerazione go-to-market, MVP scalabili, fundraising. Dall'idea alla prima traction in tempo record.",
              metrics: ["Supporto completo", "Soluzioni evolutive"]
            },
            fintech: {
              title: "Financial Technology",
              description: "Infrastruttura pagamenti, wealth management, trading algoritmico. Sicurezza e conformità regolamentare garantite.",
              metrics: ["Alta sicurezza", "Conformità rigorosa"]
            },
            edtech: {
              title: "Education Technology",
              description: "Piattaforme LMS next-gen, adaptive learning, sistemi valutazione. Esperienze pedagogiche coinvolgenti e misurabili.",
              metrics: ["Pedagogia innovativa", "Risultati misurabili"]
            },
            health: {
              title: "Sanità & MedTech",
              description: "Soluzioni telemedicina, cartelle pazienti intelligenti, AI diagnostica. Conformità HIPAA e GDPR integrata.",
              metrics: ["Massima riservatezza", "Tecnologie avanzate"]
            },
            industry: {
              title: "Industria 4.0",
              description: "IoT industriale, manutenzione predittiva, digital twins. Ottimizzazione operazioni e riduzione costi.",
              metrics: ["Ottimizzazione continua", "Innovazione IoT"]
            },
            retail: {
              title: "Lusso & Retail",
              description: "E-commerce omnicanale, esperienza cliente premium, gestione inventario AI. Trasformazione digitale preservando l'esclusività.",
              metrics: ["Esperienza premium", "Innovazione digitale"]
            }
          }
        },
        methodology: {
          eyebrow: "Processo",
          title: "La nostra metodologia in 5 fasi",
          phases: {
            discovery: {
              title: "Discovery",
              description: "Analisi dei tuoi bisogni, audit tecnico, workshop con i team."
            },
            strategy: {
              title: "Strategia",
              description: "Definizione roadmap, scelte tecnologiche, planning progetto."
            },
            design: {
              title: "Design",
              description: "Wireframe, mockup, design system, prototipi interattivi."
            },
            development: {
              title: "Sviluppo",
              description: "Sprint agili, demo regolari, test automatizzati, integrazione continua."
            },
            launch: {
              title: "Lancio & Supporto",
              description: "Deploy produzione, monitoring, formazione, evoluzione continua."
            }
          }
        },
        studio: {
          about: {
            eyebrow: "Chi siamo",
            lead: "Daven's è uno studio di progetti tecnologici che progetta e guida prodotti digitali potenziati da IA e cloud per marchi che vogliono fare le cose in modo diverso. Lavoriamo con team di marketing, prodotto e management per trasformare sfide complesse in esperienze chiare e ambiziose.",
            sideLabel: "Conosci meglio Daven's",
            sideText1: "Collaboriamo principalmente con startup, PMI e team innovazione che hanno bisogno di partner capaci di comprendere sia la visione business, i vincoli tecnici che la realtà sul campo.",
            sideText2: "Con base in Europa e organizzati in remote-first, mettiamo in squadra un team ristretto attorno a ogni progetto per mantenere velocità senza sacrificare qualità."
          },
          team: {
            eyebrow: "Team & organizzazione",
            description1: "Lavoriamo in un nucleo ristretto e dedicato per ogni progetto: un unico punto di contatto lato Daven's, circondato da profili specializzati (UX, UI, sviluppo front/back, integrazione).",
            description2: "Gli scambi avvengono in videoconferenza e tramite strumenti collaborativi (Figma, Notion, Slack) per mantenere un ritmo fluido senza riunioni inutili."
          },
          methodology: {
            eyebrow: "Metodologia",
            title: "Un quadro chiaro in cinque fasi",
            description: "Strutturiamo i progetti per mantenere la rotta lasciando spazio agli aggiustamenti: sai sempre dove siamo e cosa arriva dopo.",
            steps: {
              discovery: "Discovery: comprensione del contesto, dei dati e delle sfide.",
              design: "Design: percorsi utente, mockup, prototipi e design system.",
              data: "Data & IA: preparazione dati, scelta dei componenti IA.",
              build: "Build: sviluppo, integrazioni, test e messa online.",
              run: "Run: monitoraggio, iterazioni e miglioramento continuo del prodotto."
            }
          }
        }
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        work: "Trabajos",
        studio: "Estudio",
        contact: "Contacto",
      },
      cta: {
        startProject: "Iniciar proyecto",
      },
      footer: {
        baseline:
          "Estudio tecnológico para experiencias digitales ambiciosas y duraderas.",
        nav: {
          label: "Navegación",
          home: "Inicio",
          work: "Trabajos",
          studio: "Estudio",
          contact: "Contacto",
        },
        services: {
          label: "Servicios",
          branding: "Branding & Identidad",
          web: "Diseño Web",
          motion: "Motion Design",
          photo: "Fotografía & Video",
          strategy: "Estrategia Digital",
        },
        contact: {
          label: "Contacto",
          address: "Lomé-TOGO",
        },
        social: {
          label: "Social",
          linkedin: "LinkedIn",
          instagram: "Instagram",
          behance: "Behance",
          github: "GitHub",
        },
        legal: {
          label: "Legal",
          privacy: "Privacidad",
          terms: "Términos de Servicio",
          cookies: "Cookies",
        },
        newsletter: {
          label: "Boletín",
          placeholder: "Ingresa tu email",
          aria: "Email boletín",
          submit: "Suscribirse",
        },
        copyright: "Todos los derechos reservados.",
        cookies: "Usamos cookies",
      },
      contact: {
        eyebrow: "Contacto",
        title: "Hablemos de tu próximo proyecto",
        lead: "Describe brevemente tu contexto y objetivos. Te responderemos en 24-48 horas con una evaluación inicial y opciones de apoyo.",
        methods: {
          email: {
            label: "Email profesional",
            value: "lionesspretty7@gmail.com"
          },
          whatsapp: {
            label: "WhatsApp Business",
            value: "+228 91 59 67 88"
          }
        },
        availability: {
          badge: "Disponible para nuevos proyectos",
          text: "Respuesta en 24-48h · Consulta inicial gratuita"
        },
        form: {
          name: {
            label: "Nombre completo",
            placeholder: "Tu nombre"
          },
          email: {
            label: "Email",
            placeholder: "tu@empresa.com"
          },
          projectType: {
            label: "Tipo de proyecto",
            placeholder: "Plataforma, sitio, producto..."
          },
          message: {
            label: "Resumen del proyecto",
            placeholder: "Cuéntanos sobre tu contexto, objetivos, plazos..."
          },
          submit: "Enviar solicitud",
          note: "Este formulario es una demo front-end: conexión a tu CRM o herramienta de email por definir."
        }
      },
      services: {
        branding: { title: "Branding & Identidad", subtitle: "Creamos marcas memorables", intro: "De la estrategia de marca a la identidad visual completa.", processTitle: "Nuestro proceso", processList: ["Auditoría de marca", "Plataforma de marca", "Identidad visual", "Directrices", "Despliegue"], whyTitle: "Por qué elegirnos", whyText: "Con más de 50 identidades creadas, transformamos tu visión en una marca." },
        web: { title: "Diseño Web", subtitle: "Experiencias digitales que convierten", intro: "Diseñamos sitios web que combinan estética, rendimiento y UX.", expertiseTitle: "Nuestra experiencia", expertiseList: ["Diseño UI/UX", "Desarrollo responsive", "Optimización", "Integración CMS", "Mantenimiento"], techTitle: "Tecnologías", techText: "React, Next.js, TypeScript, Tailwind CSS, Node.js." },
        motion: { title: "Motion Design", subtitle: "Da vida a tus ideas", intro: "El motion design transforma mensajes en experiencias visuales.", servicesTitle: "Nuestros servicios", servicesList: ["Animaciones de logo", "Videos explicativos", "Animaciones social", "Motion graphics", "Video branding"], approachTitle: "Nuestro enfoque", approachText: "Combinamos creatividad artística y estrategia de comunicación." },
        photo: { title: "Fotografía & Video", subtitle: "Captura la esencia de tu marca", intro: "Visuales profesionales que cuentan tu historia.", servicesTitle: "Nuestros servicios", servicesList: ["Fotografía de productos", "Reportajes corporativos", "Retratos profesionales", "Videos promocionales", "Contenido social"], qualityTitle: "Calidad profesional", qualityText: "Equipo de alta gama y post-producción cuidadosa." },
        strategy: { title: "Estrategia Digital", subtitle: "Transforma tu presencia online", intro: "Una estrategia digital efectiva es la clave del éxito.", servicesTitle: "Nuestro apoyo", servicesList: ["Auditoría digital", "Estrategia de contenido", "Optimización SEO", "Estrategia social", "Analytics"], resultsTitle: "Resultados medibles", resultsText: "Establecemos KPIs claros para medir el impacto." }
      },
      legal: {
        privacy: { title: "Política de Privacidad", lastUpdated: "Última actualización", intro: "Tomamos muy en serio la protección de tus datos personales.", sections: { collection: { title: "Recopilación de datos", content: "Solo recopilamos datos necesarios con tu consentimiento." }, usage: { title: "Uso de datos", content: "Tus datos se utilizan exclusivamente para nuestros servicios." }, rights: { title: "Tus derechos", content: "Tienes derecho a acceder, rectificar y eliminar datos." }, security: { title: "Seguridad", content: "Implementamos medidas de seguridad para proteger tus datos." } } },
        terms: { title: "Términos de Servicio", lastUpdated: "Última actualización", intro: "Al usar nuestros servicios, aceptas estos términos.", sections: { services: { title: "Servicios", content: "Ofrecemos servicios de diseño, desarrollo y soporte." }, obligations: { title: "Obligaciones del cliente", content: "El cliente proporciona la información necesaria." }, payment: { title: "Condiciones de pago", content: "Las condiciones de pago se definen en cada presupuesto." }, liability: { title: "Responsabilidad", content: "Nuestra responsabilidad está limitada al importe de los servicios." } } },
        cookies: { title: "Política de Cookies", lastUpdated: "Última actualización", intro: "Este sitio utiliza cookies para mejorar la experiencia.", sections: { what: { title: "¿Qué es una cookie?", content: "Una cookie es un pequeño archivo de texto en tu dispositivo." }, types: { title: "Tipos de cookies", content: "Utilizamos cookies esenciales, analíticas y de preferencia." }, control: { title: "Control de cookies", content: "Puedes controlar las cookies a través de la configuración del navegador." }, thirdParty: { title: "Cookies de terceros", content: "Utilizamos Google Analytics." } } }
      },
      home: {
        heroBrand: "Daven's Studio",
        heroEyebrow: "Estudio de proyectos tecnológicos",
        heroTitleLine1: "Orquestr",
        heroTitleLine2: "amos tus",
        heroTitleLine3: "proyectos",
        heroTitleLine4: "digitales.",
        heroText:
          "Daven's diseña, dirige y despliega productos digitales impulsados por IA y nube para marcas que buscan una presencia online audaz, coherente y basada en datos.",
        heroCtaLink: "Descubre nuestros trabajos",
        heroCtaNote: "Disponibilidad limitada para 2025.",
        heroSideLabel: "Lo que hacemos",
        heroSideText:
          "Estrategia de producto, IA aplicada, arquitecturas nube, diseño de interfaz, desarrollo web & móvil y soporte a largo plazo. Un equipo compacto dedicado a tus desafíos.",
        heroBarItem1: "Daven's · Estudio de proyectos tecnológicos",
        heroBarItem2: "Discovery · Design · Delivery",
        heroBarItem3: "Basado en África · Clientes internacionales",
        heroMediaP1:
          "Daven's acompaña a equipos producto, marketing y dirección en la puesta en escena de sus experiencias tecnológicas: plataformas SaaS, sitios de lanzamiento, herramientas internas.",
        heroMediaP2:
          "Combinamos estrategia, diseño y desarrollo para crear interfaces claras, rápidas y ambiciosas, pensadas para el largo plazo.",
        approachEyebrow: "Enfoque",
        approachTitle: "De la idea a la plataforma online",
        approachText:
          "Cada proyecto comienza con una inmersión en tu contexto: audiencias, objetivos de negocio, restricciones técnicas. Luego traducimos esta visión en asistentes IA, interfaces nube y herramientas internos centrados en tus flujos de datos.",
        approachList1: "Inmersión y encuadre estratégico con tus equipos.",
        approachList2: "Diseño de interfaz y prototipado interactivo.",
        approachList3:
          "Desarrollo, integración y soporte de lanzamiento.",
        typesDeliverablesLabel: "Tipos de entregables",
        typesDeliverablesValue:
          "Sitios web, aplicaciones web (e-commerce, e-learning, etc.), software empresarial, soluciones IA, automatización, análisis de datos, big data, plataformas SaaS, herramientas internas, landing pages",
        industriesLabel: "Industrias",
        industriesValue: "Tecnología, fintech, educación, salud, industria",
        useCasesEyebrow: "Casos de uso típicos",
        useCasesTitle: "Cómo aplicamos IA, nube y datos",
        useCasesText:
          "Algunos ejemplos de situaciones donde intervenimos para transformar ideas en productos digitales concretos.",
        case1Tag: "Soporte clientes IA",
        case1Client: "Asistentes & copilotos",
        case1Title:
          "Ayudar a tus equipos de soporte con respuestas asistidas por IA",
        case1Roles:
          "Análisis de conocimiento · Interfaces conversacionales",
        case2Tag: "Portales nube",
        case2Client: "Espacio clientes",
        case2Title: "Portales seguros para tus clientes o socios",
        case2Roles: "Autenticación · Dashboards · Integraciones API",
        case3Tag: "Herramientas datos internas",
        case3Client: "Equipos negocio",
        case3Title: "Consolidar y visualizar tus datos negocio clave",
        case3Roles: "Diseño workflow · Data-viz · Automatización",
        case4Tag: "Big Data & Analytics",
        case4Client: "Científicos de datos",
        case4Title:
          "Aprovechar grandes volúmenes de datos para análisis predictivo",
        case4Roles: "Pipeline ETL · Machine Learning · Reporting avanzado",
        architectsEyebrow: "Arquitectos de soluciones",
        architectsTitle: "Diseñar la arquitectura de tus productos digitales",
        architectsText:
          "Intervenimos aguas arriba de los proyectos para clarificar la arquitectura objetivo: qué componentes técnicos, qué integraciones, qué recorridos usuario. El objetivo es transformar tus ideas en un esquema claro, realista y escalable.",
        architectsList1:
          "Mapeo del existente y restricciones negocio.",
        architectsList2:
          "Elección de componentes nube, data e IA adecuados.",
        architectsList3:
          "Definición de recorridos y arquitectura funcional.",
        architectsDeliverablesLabel: "Entregables típicos",
        architectsDeliverablesValue:
          "Diagramas arquitectura, backlog inicial, recomendaciones tech, pliego, especificaciones funcionales, mockups interactivos, prototipos, wireframes, design system, identidad visual, roadmap producto, plan migración, benchmark tecnológico, análisis riesgos, estimación presupuesto, planificación, definición KPI, modelo datos, especificaciones API, plan pruebas, estrategia hosting, recomendaciones seguridad, plan despliegue, documentación técnica, guías integración, soporte post-lanzamiento",
        deliveryEyebrow: "Entrega proyectos",
        deliveryTitle: "Dirigir y entregar tus proyectos tecnológicos",
        deliveryText:
          "Daven's gestiona la implementación completa: definición alcance, diseño, desarrollo, pruebas y puesta en producción. Trabajamos en ciclos cortos con demos regulares para asegurar cada fase.",
        deliveryList1:
          "Gestión proyecto producto y coordinación stakeholders.",
        deliveryList2:
          "Diseño interfaz, componentes reutilizables y design system.",
        deliveryList3:
          "Desarrollo web & móvil, integraciones API, despliegue.",
        deliveryFormatsLabel: "Formatos misión",
        deliveryFormatsValue:
          "Proyectos precio fijo, staff aumentado, equipo dedicado, asesoramiento estratégico, auditoría técnica, taller diseño, sprint prototipado, soporte lanzamiento, soporte técnico, formación equipos, revisión código, experiencia IA & data, actualización arquitectura, optimización rendimiento, migración nube, integraciones API, desarrollo a medida, mantenimiento aplicativo, mejora continua, coaching producto, vigilancia tecnológica, asistencia técnica, dirección proyecto, gestión roadmap, análisis existente, recomendaciones soluciones, definición presupuesto, plan transformación",
        followEyebrow: "Soporte continuo",
        followTitle: "Acompañar a tus equipos en el tiempo",
        followText:
          "Una vez que la plataforma está online, permanecemos a tu lado para hacer evolucionar el producto: nuevas funcionalidades, optimizaciones rendimiento, mejora continua de la experiencia.",
        followList1:
          "Roadmap producto compartida y priorización evoluciones.",
        followList2:
          "Monitorización rendimiento, analytics y feedback usuarios.",
        followList3:
          "Soporte para tus equipos internos (marketing, producto, tech).",
        followTypeLabel: "Tipos de soporte",
        followTypeValue:
          "Soporte mensual, sprints mejora, intervenciones específicas",
      },
      work: {
        eyebrow: "Work",
        title: "Proyectos Seleccionados",
        subtitle: "Una selección de plataformas, productos y experiencias creadas para nuestros clientes. Cada proyecto está diseñado como colaboración estratégica a largo plazo.",
        filters: {
          all: "Todos",
          saas: "SaaS",
          mobile: "Mobile",
          branding: "Branding",
          ecommerce: "E-commerce",
          ai: "AI"
        },
        projects: {
          novastack: {
            tag: "Plataforma SaaS",
            client: "NovaStack",
            title: "Rediseño completo plataforma B2B",
            roles: "Estrategia producto · UX/UI · Web app",
            stats: {
              conversion: "+45% conversión",
              users: "200K+ usuarios",
              rating: "4.8★ valoración",
              revenue: "€2M+ ingresos"
            }
          },
          auralink: {
            tag: "Marca tech",
            client: "Auralink",
            title: "Identidad digital & sitio lanzamiento",
            roles: "Branding · Website · Motion",
            stats: {
              traffic: "+320% tráfico",
              engagement: "8min sesión",
              bounce: "-25% rebote",
              leads: "+150% leads"
            }
          },
          pulseone: {
            tag: "Producto móvil",
            client: "PulseOne",
            title: "App companion para IoT",
            roles: "Design sistema · iOS · Android",
            stats: {
              downloads: "500K+ descargas",
              retention: "78% retención",
              crashes: "-90% crashes",
              rating: "4.7★ valoración"
            }
          },
          dataflow: {
            tag: "Data Platform",
            client: "DataFlow",
            title: "Dashboard analytics tiempo real",
            roles: "Data viz · Backend · Cloud",
            stats: {
              latency: "<100ms latencia",
              uptime: "99.9% uptime",
              queries: "1M+ consultas/día",
              accuracy: "99.5% precisión"
            }
          },
          fintech: {
            tag: "Fintech",
            client: "PaySecure",
            title: "Infraestructura pagamentos next-gen",
            roles: "Security · API · Blockchain",
            stats: {
              transactions: "€50M+ transacciones",
              fraud: "-85% fraude",
              speed: "2s validación",
              compliance: "100% conformidad"
            }
          },
          healthtech: {
            tag: "HealthTech",
            client: "MediCare",
            title: "Plataforma telemedicina",
            roles: "HIPAA · Video · Mobile",
            stats: {
              consultations: "100K+ consultas",
              wait: "-70% tiempo espera",
              satisfaction: "96% satisfacción",
              savings: "30% ahorros"
            }
          }
        },
        impact: {
          eyebrow: "Impact",
          title: "Resultados Medibles",
          subtitle: "Nuestro enfoque data-driven transforma ambiciones business en rendimiento concreto. Cada proyecto optimizado genera ROI cuantificable.",
          metrics: {
            roi: {
              value: "4.2x",
              label: "ROI medio sobre 24 meses",
              detail: "Medido en 45+ proyectos scaling"
            },
            retention: {
              value: "87%",
              label: "Tasa retención clientes",
              detail: "Asociaciones long-term establecidas"
            },
            acquisition: {
              value: "-42%",
              label: "Costo adquisición clientes",
              detail: "Optimización conversión y funnels"
            },
            traffic: {
              value: "3.8x",
              label: "Crecimiento tráfico orgánico",
              detail: "SEO y rendimiento técnico"
            },
            satisfaction: {
              value: "96%",
              label: "Satisfacción usuarios",
              detail: "Net Promoter Score medio"
            },
            cart: {
              value: "62%",
              label: "Aumento carrito medio",
              detail: "E-commerce y UX optimización"
            }
          }
        },
        services: {
          eyebrow: "Servicios AI & Cloud",
          title: "Qué construimos concretamente",
          subtitle: "Intervenimos en proyectos donde AI, cloud y datos aportan ventajas concretas: automatización, mejor experiencia cliente, gestión más fina de la actividad.",
          assistants: {
            label: "Asistentes AI",
            value: "Copilotos para tus equipos, bots soporte, ayudas decisión"
          },
          platforms: {
            label: "Plataformas cloud",
            value: "Portales clientes, back‑offices, herramientas internas escalables"
          },
          data: {
            label: "Productos data",
            value: "Dashboards, reporting avanzado, consolidación datos"
          },
          automation: {
            label: "Automatización",
            value: "Integraciones API, workflows no/low‑code, scripts dedicados"
          }
        },
        process: {
          eyebrow: "Cómo trabajamos",
          title: "Ciclos cortos, visión long-term",
          subtitle: "Estructuramos proyectos en ciclos cortos para mostrar resultados tangibles rápidamente: prototipos clicables, primeras versiones online, tests usuarios. Cada iteración alimenta la roadmap producto.",
          list1: "Kick-off y definición funcional con stakeholders.",
          list2: "Mockups interactivos, design system y guidelines.",
          list3: "Sprints desarrollo con demos regulares."
        },
        technologies: {
          eyebrow: "Tecnologías",
          title: "Nuestro tech stack",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & DevOps",
            ai: "AI & Data",
            mobile: "Mobile",
            testing: "Testing & Quality",
            security: "Security & Auth",
            api: "API & Integration"
          }
        },
        industries: {
          eyebrow: "Sectores Intervención",
          title: "Expertise Business Especializada",
          subtitle: "Comprensión profunda de desafíos específicos de cada sector para soluciones tailor-made y performantes.",
          sectors: {
            startups: {
              title: "Startups & Innovación",
              description: "Aceleración go-to-market, MVP escalables, fundraising. De la idea a la primera traction en tiempo record.",
              metrics: ["Soporte completo", "Soluciones evolutivas"]
            },
            fintech: {
              title: "Financial Technology",
              description: "Infraestructura pagos, gestión patrimonio, trading algorítmico. Seguridad y conformidad regulatoria garantizada.",
              metrics: ["Alta seguridad", "Conformidad estricta"]
            },
            edtech: {
              title: "Education Technology",
              description: "Plataformas LMS next-gen, adaptive learning, sistemas evaluación. Experiencias pedagógicas atractivas y medibles.",
              metrics: ["Pedagogía innovadora", "Resultados medibles"]
            },
            health: {
              title: "Salud & MedTech",
              description: "Soluciones telemedicina, historiales pacientes inteligentes, IA diagnóstica. Conformidad HIPAA y GDPR integrada.",
              metrics: ["Máxima confidencialidad", "Tecnologías avanzadas"]
            },
            industry: {
              title: "Industria 4.0",
              description: "IoT industrial, mantenimiento predictivo, digital twins. Optimización operaciones y reducción costos.",
              metrics: ["Optimización continua", "Innovación IoT"]
            },
            retail: {
              title: "Lujo & Retail",
              description: "E-commerce omnicanal, experiencia cliente premium, gestión inventario AI. Transformación digital preservando exclusividad.",
              metrics: ["Experiencia premium", "Innovación digital"]
            }
          }
        },
        methodology: {
          eyebrow: "Proceso",
          title: "Nuestra metodología en 5 fases",
          phases: {
            discovery: {
              title: "Discovery",
              description: "Análisis de tus necesidades, auditoría técnica, workshops con equipos."
            },
            strategy: {
              title: "Estrategia",
              description: "Definición roadmap, elecciones tecnológicas, planning proyecto."
            },
            design: {
              title: "Design",
              description: "Wireframes, mockups, design system, prototipos interactivos."
            },
            development: {
              title: "Desarrollo",
              description: "Sprints ágiles, demos regulares, tests automatizados, integración continua."
            },
            launch: {
              title: "Lanzamiento & Soporte",
              description: "Despliegue producción, monitorización, formación, evolución continua."
            }
          }
        },
        studio: {
          about: {
            eyebrow: "Acerca de",
            lead: "Daven's es un estudio de proyectos tecnológicos que diseña y conduce productos digitales impulsados por IA y cloud para marcas que quieren hacer las cosas de manera diferente. Trabajamos con equipos de marketing, producto y dirección para transformar desafíos complejos en experiencias claras y ambiciosas.",
            sideLabel: "Conócenos mejor",
            sideText1: "Colaboramos principalmente con startups, PYMEs y equipos de innovación que necesitan socios capaces de entender tanto la visión business, las restricciones técnicas y la realidad del terreno.",
            sideText2: "Con base en Europa y organizados como remote-first, ponemos en marcha un equipo ajustado alrededor de cada proyecto para mantener velocidad sin sacrificar calidad."
          },
          team: {
            eyebrow: "Equipo & organización",
            description1: "Trabajamos en un núcleo pequeño dedicado a cada proyecto: un único punto de contacto lado Daven's, rodeado de perfiles especializados (UX, UI, desarrollo front/back, integración).",
            description2: "Los intercambios se hacen por videoconferencia y vía herramientas colaborativas (Figma, Notion, Slack) para mantener un ritmo fluido sin reuniones innecesarias."
          },
          methodology: {
            eyebrow: "Metodología",
            title: "Un marco claro en cinco pasos",
            description: "Estructuramos los proyectos para mantener el rumbo dejando espacio para ajustes: sabes siempre dónde estamos y qué viene después.",
            steps: {
              discovery: "Discovery: comprensión del contexto, datos y desafíos.",
              design: "Design: recorridos usuario, maquetas, prototipos y design system.",
              data: "Data & IA: preparación datos, elección de componentes IA.",
              build: "Build: desarrollo, integraciones, tests y puesta online.",
              run: "Run: seguimiento, iteraciones y mejora continua del producto."
            }
          }
        }
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
  },
});

export default i18n;
