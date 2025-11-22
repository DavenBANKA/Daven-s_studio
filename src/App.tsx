import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  useEffect(() => {
    // Toggle nav class for mobile
    const nav = document.querySelector('.nav');
    if (nav) {
      if (isNavOpen) {
        nav.classList.add('nav--open');
        document.body.classList.add('nav-open');
      } else {
        nav.classList.remove('nav--open');
        document.body.classList.remove('nav-open');
      }
    }
  }, [isNavOpen]);
  
  useEffect(() => {
    const cursorOrb = document.querySelector<HTMLElement>(".cursor-orb");
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let orbX = pointerX;
    let orbY = pointerY;
    let frameId: number | null = null;
    let pointerMoveHandler: ((event: PointerEvent) => void) | null = null;

    const mediaFine = window.matchMedia?.("(pointer: fine)");

    if (cursorOrb && (!mediaFine || mediaFine.matches)) {
      pointerMoveHandler = (event: PointerEvent) => {
        pointerX = event.clientX;
        pointerY = event.clientY;
      };

      window.addEventListener("pointermove", pointerMoveHandler);

      const loop = () => {
        const ease = 0.12;
        orbX += (pointerX - orbX) * ease;
        orbY += (pointerY - orbY) * ease;
        const offsetX = orbX - cursorOrb.offsetWidth / 2;
        const offsetY = orbY - cursorOrb.offsetHeight / 2;
        cursorOrb.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
        frameId = window.requestAnimationFrame(loop);
      };

      frameId = window.requestAnimationFrame(loop);
    } else if (cursorOrb) {
      cursorOrb.style.display = "none";
    }

    const animatedElements = document.querySelectorAll<HTMLElement>("[data-animate]");

    if ("IntersectionObserver" in window && animatedElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.22 }
      );

      animatedElements.forEach((el) => observer.observe(el));

      const navLinks = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(".nav__link")
      );

      const sectionData = navLinks
        .map((link) => {
          const href = link.getAttribute("href");
          if (!href || !href.startsWith("#")) return null;
          const id = href.slice(1);
          const section = document.getElementById(id);
          if (!section) return null;
          return { link, section };
        })
        .filter(
          (
            item
          ): item is { link: HTMLAnchorElement; section: HTMLElement } => item !== null
        );

      const handleScroll = () => {
        const scrollPos = window.scrollY;
        const viewportHeight = window.innerHeight;
        const midpoint = scrollPos + viewportHeight / 2;

        sectionData.forEach(({ link, section }) => {
          const rect = section.getBoundingClientRect();
          const top = rect.top + scrollPos;
          const bottom = top + rect.height;
          const isActive = midpoint >= top && midpoint < bottom;
          if (isActive) {
            navLinks.forEach((navLink) =>
              navLink.classList.remove("nav__link--active")
            );
            link.classList.add("nav__link--active");
          }
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => {
        if (pointerMoveHandler) {
          window.removeEventListener("pointermove", pointerMoveHandler);
        }
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    } else {
      animatedElements.forEach((el) => el.classList.add("is-visible"));
    }
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="background-layer background-layer--gradient" />
      <div className="background-layer background-layer--glow" />
      <div className="cursor-orb" />

      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand">
            <a href="#home" className="brand__mark">
              DAVEN'S
            </a>
          </div>
          <button
            className={`nav-toggle ${isNavOpen ? "nav-toggle--open" : ""}`}
            type="button"
            aria-label={isNavOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsNavOpen((prev: boolean) => !prev)}
          >
            <span />
            <span />
          </button>
          <nav className="nav">
            <a href="#home" className="nav__link nav__link--active" onClick={() => setIsNavOpen(false)}>
              Home
            </a>
            <a href="#work" className="nav__link" onClick={() => setIsNavOpen(false)}>
              Work
            </a>
            <a href="#studio" className="nav__link" onClick={() => setIsNavOpen(false)}>
              Studio
            </a>
            <a href="#contact" className="nav__link" onClick={() => setIsNavOpen(false)}>
              Contact
            </a>
          </nav>
          <div className="header-actions">
            <button className="pill pill--ghost" type="button">
              FR
            </button>
            <a href="#contact" className="pill pill--primary">
              <span>Démarrer un projet</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="section section--hero" data-animate>
          <div className="section__inner section__inner--hero">
            <div className="hero__copy">
              <p className="eyebrow">Studio de projets technologiques</p>
              <h1 className="hero__title">
                <span>Nous orchestrons</span>
                <span>vos projets</span>
                <span>technologiques.</span>
              </h1>
              <p className="hero__text">
                Daven&apos;s conçoit, pilote et déploie des produits digitaux pour les
                marques qui veulent une présence en ligne audacieuse, cohérente et
                techniquement solide.
              </p>
              <div className="hero__cta">
                <a href="#work" className="link-underline">
                  Découvrir nos projets
                </a>
                <span className="hero__note">
                  Disponibilités limitées pour 2025.
                </span>
              </div>
            </div>
            <aside className="hero__side">
              <p className="hero__side-label">Ce que nous faisons</p>
              <p className="hero__side-text">
                Stratégie produit, design d’interface, développement web & mobile,
                accompagnement long terme. Une équipe resserrée, dédiée à vos
                enjeux.
              </p>
            </aside>
          </div>
          <div className="hero-bar">
            <div className="hero-bar__inner">
              <span className="hero-bar__item">Daven&apos;s · Studio de projets technologiques</span>
              <span className="hero-bar__item">Discovery · Design · Delivery</span>
              <span className="hero-bar__item">Basé en Europe · Clients internationaux</span>
            </div>
          </div>
        </section>

        <section className="section section--hero-media" data-animate>
          <div className="section__inner section__inner--split">
            <div className="hero-media__copy">
              <p>
                Daven&apos;s accompagne les équipes produit, marketing et direction
                dans la mise en scène de leurs expériences technologiques :
                plateformes SaaS, sites de lancement, outils internes.
              </p>
              <p>
                Nous combinons stratégie, design et développement pour créer des
                interfaces claires, rapides et ambitieuses, pensées pour le long
                terme.
              </p>
            </div>
            <div className="hero-media__grid">
              <div className="hero-media__item">
                <video
                  src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_30fps.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="hero-media__item">
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Interface de projet technologique"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section section--work" data-animate>
          <div className="section__inner">
            <header className="section-heading">
              <p className="eyebrow">Work</p>
              <h2>Projets sélectionnés</h2>
              <p className="section-heading__text">
                Une sélection de plateformes, produits et expériences créées pour
                nos clients. Chaque projet est pensé comme une collaboration
                stratégique sur le long terme.
              </p>
            </header>

            <div className="work-grid">
              <article className="case-card case-card--feature" data-animate>
                <div className="case-card__media case-card__media--primary">
                  <div className="case-card__tag">Plateforme SaaS</div>
                </div>
                <div className="case-card__meta">
                  <p className="case-card__client">NovaStack</p>
                  <p className="case-card__title">
                    Refonte complète d’une plateforme B2B
                  </p>
                  <p className="case-card__roles">
                    Product strategy · UX/UI · Web app
                  </p>
                </div>
              </article>

              <article className="case-card" data-animate>
                <div className="case-card__media">
                  <div className="case-card__tag">Marque tech</div>
                </div>
                <div className="case-card__meta">
                  <p className="case-card__client">Auralink</p>
                  <p className="case-card__title">
                    Identité digitale &amp; site de lancement
                  </p>
                  <p className="case-card__roles">Branding · Website · Motion</p>
                </div>
              </article>

              <article className="case-card" data-animate>
                <div className="case-card__media">
                  <div className="case-card__tag">Produit mobile</div>
                </div>
                <div className="case-card__meta">
                  <p className="case-card__client">PulseOne</p>
                  <p className="case-card__title">
                    Application companion pour IoT
                  </p>
                  <p className="case-card__roles">
                    Design système · iOS · Android
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="studio" className="section section--studio" data-animate>
          <div className="section__inner section__inner--split">
            <div className="studio__copy">
              <p className="eyebrow">Studio</p>
              <h2>Une équipe dédiée à vos projets technologiques</h2>
              <p>
                Daven&apos;s réunit des profils stratégiques, designers et
                développeurs qui comprennent autant vos contraintes business que
                vos enjeux techniques.
              </p>
              <p>
                Nous intervenons de l’idée au déploiement, en restant à vos côtés
                pour faire évoluer le produit au fil du temps.
              </p>
              <ul className="studio-list">
                <li>Conception de produits digitaux end‑to‑end</li>
                <li>Design systems robustes et scalables</li>
                <li>Développements web et mobile modernes</li>
                <li>Accompagnement produit sur la durée</li>
              </ul>
            </div>
            <aside className="studio__facts">
              <div className="studio-pill">
                <span className="studio-pill__label">Type de clients</span>
                <span className="studio-pill__value">
                  Startups, PME &amp; directions innovation
                </span>
              </div>
              <div className="studio-pill">
                <span className="studio-pill__label">Formats</span>
                <span className="studio-pill__value">
                  Missions ponctuelles ou équipes dédiées
                </span>
              </div>
              <div className="studio-pill">
                <span className="studio-pill__label">Localisation</span>
                <span className="studio-pill__value">
                  Remote‑first, fuseau horaire Europe
                </span>
              </div>
            </aside>
          </div>
        </section>

        <section id="contact" className="section section--contact" data-animate>
          <div className="section__inner section__inner--split">
            <div className="contact__copy">
              <p className="eyebrow">Contact</p>
              <h2>Parlons de votre prochain projet</h2>
              <p>
                Décrivez‑nous brièvement votre contexte et vos objectifs. Nous
                revenons vers vous sous 24 à 48h avec une première lecture et des
                pistes d’accompagnement.
              </p>
              <div className="contact__details">
                <p>Vous pouvez aussi nous écrire directement :</p>
                <a
                  href="mailto:contact@davens.studio"
                  className="link-underline"
                >
                  contact@davens.studio
                </a>
              </div>
            </div>
            <form className="contact-form" autoComplete="on">
              <div className="form-row">
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">E‑mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@entreprise.com"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="project-type">Type de projet</label>
                <input
                  id="project-type"
                  name="project-type"
                  type="text"
                  placeholder="Plateforme, site, produit..."
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">Résumé du projet</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Parlez‑nous de votre contexte, vos objectifs, vos délais..."
                  required
                />
              </div>
              <button type="submit" className="pill pill--primary pill--full">
                Envoyer la demande
              </button>
              <p className="form-note">
                Ce formulaire est une démo front‑end : branchement à votre CRM ou
                outil d’e‑mailing à définir.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>© {currentYear} Daven&apos;s Studio.</span>
          <span>Construisons ensemble des expériences digitales ambitieuses.</span>
        </div>
      </footer>
    </>
  );
};

export default App;
