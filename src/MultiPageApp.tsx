import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";

// Import images and videos - Vite will optimize them
import homeMainVideo from "../videos/854182-hd_1920_1080_25fps.mp4";
import workProcessVideo from "../videos/12992536_1920_1080_24fps.mp4";
import aiRobotImg from "../images/vecteezy_ai-artificial-intelligence-robotics-head-and-face-with_6710557.jpg";
import binaryBackgroundImg from "../images/vecteezy_binary-code-background-abstract-technology-digital-binary_4525039.jpg";
import cloudTechImg from "../images/vecteezy_cloud-computing-technology-internet-storage-network_6710552.jpg";
import eyeInterfaceImg from "../images/vecteezy_close-up-view-of-eye-with-digital-interface-3d-rendering_33118517.jpg";
import robotHandImg from "../images/vecteezy_hand-of-robotics-connecting-to-industrial-network-connection_7019207.jpg";
import businessCloudImg from "../images/vecteezy_businessman-hand-click-on-cloud-computing-technology_5733652.jpg";
import cloudDataImg from "../images/vecteezy_cloud-computing-technology-data-information-on-cloud-to_6532519.jpg";
import eyeCircuitImg from "../images/vecteezy_eye-cyber-circuit-future-technology-concept-background_7883011.jpg";

type Language = "fr" | "en" | "de" | "zh" | "it" | "es";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="home" className="section section--hero" data-animate>
        <p className="hero__brand">{t("home.heroBrand")}</p>
        <div className="section__inner section__inner--hero">
          <div className="hero__copy">
            <p className="eyebrow">{t("home.heroEyebrow")}</p>
            <h1 className="hero__title animate-typing">
              <span>
                {t("home.heroTitleLine1")}
                <br />
                {t("home.heroTitleLine2")}
              </span>
              <span>{t("home.heroTitleLine3")}</span>
              <span>{t("home.heroTitleLine4")}</span>
            </h1>
            <p className="hero__text">{t("home.heroText")}</p>
            <div className="hero__cta">
              <NavLink to="/work" className="link-underline">
                {t("home.heroCtaLink")}
              </NavLink>
              <span className="hero__note">{t("home.heroCtaNote")}</span>
            </div>
          </div>
          <aside className="hero__side">
            <p className="hero__side-label">{t("home.heroSideLabel")}</p>
            <p className="hero__side-text">{t("home.heroSideText")}</p>
            <div className="hero__side-frame">
              <video
                src={homeMainVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </aside>
        </div>
        <div className="hero-bar">
          <div className="hero-bar__inner">
            <span className="hero-bar__item">{t("home.heroBarItem1")}</span>
            <span className="hero-bar__item">{t("home.heroBarItem2")}</span>
            <span className="hero-bar__item">{t("home.heroBarItem3")}</span>
          </div>
        </div>
      </section>

      <section className="section section--hero-media" data-animate>
        <div className="section__inner section__inner--split">
          <div className="hero-media__copy">
            <p>{t("home.heroMediaP1")}</p>
            <p>{t("home.heroMediaP2")}</p>
          </div>
          <div className="hero-media__grid">
            <div className="hero-media__item">
              <video
                src={homeMainVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="hero-media__item">
              <img
                src={eyeInterfaceImg}
                alt="Interface de projet technologique"
               loading="lazy" decoding="async" />
            </div>
            <div className="hero-media__item">
              <img
                src={aiRobotImg}
                alt="Illustration d’intelligence artificielle et robotique"
               loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="section__inner section__inner--split">
          <div>
            <p className="eyebrow">{t("home.approachEyebrow")}</p>
            <h2>{t("home.approachTitle")}</h2>
            <p>{t("home.approachText")}</p>
            <ul className="home-detail__list">
              <li>{t("home.approachList1")}</li>
              <li>{t("home.approachList2")}</li>
              <li>{t("home.approachList3")}</li>
            </ul>
          </div>
          <aside className="home-metrics">
            <div className="studio-pill">
              <span className="studio-pill__label">
                {t("home.typesDeliverablesLabel")}
              </span>
              <span className="studio-pill__value">
                {t("home.typesDeliverablesValue")}
              </span>
            </div>
            <div className="studio-pill">
              <span className="studio-pill__label">
                {t("home.industriesLabel")}
              </span>
              <span className="studio-pill__value">
                {t("home.industriesValue")}
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="section__inner">
          <header className="section-heading">
            <p className="eyebrow">{t("home.useCasesEyebrow")}</p>
            <h2>{t("home.useCasesTitle")}</h2>
            <p className="section-heading__text">{t("home.useCasesText")}</p>
          </header>
          <div className="work-grid">
            <article className="case-card" data-animate>
              <div className="case-card__media">
                <video
                  src={workProcessVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="case-card__tag">{t("home.case1Tag")}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t("home.case1Client")}</p>
                <p className="case-card__title">{t("home.case1Title")}</p>
                <p className="case-card__roles">{t("home.case1Roles")}</p>
              </div>
            </article>
            <article className="case-card" data-animate>
              <div className="case-card__media">
                <img
                  src={businessCloudImg}
                  alt="Main interagissant avec une interface cloud"
                 loading="lazy" decoding="async" />
                <div className="case-card__tag">{t("home.case2Tag")}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t("home.case2Client")}</p>
                <p className="case-card__title">{t("home.case2Title")}</p>
                <p className="case-card__roles">{t("home.case2Roles")}</p>
              </div>
            </article>
            <article className="case-card" data-animate>
              <div className="case-card__media">
                <img
                  src={cloudDataImg}
                  alt="Données projetées dans un environnement cloud"
                 loading="lazy" decoding="async" />
                <div className="case-card__tag">{t("home.case3Tag")}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t("home.case3Client")}</p>
                <p className="case-card__title">{t("home.case3Title")}</p>
                <p className="case-card__roles">{t("home.case3Roles")}</p>
              </div>
            </article>
            <article className="case-card" data-animate>
              <div className="case-card__media">
                <img
                  src={binaryBackgroundImg}
                  alt="Arrière-plan binaire et code numérique"
                 loading="lazy" decoding="async" />
                <div className="case-card__tag">{t("home.case4Tag")}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t("home.case4Client")}</p>
                <p className="case-card__title">{t("home.case4Title")}</p>
                <p className="case-card__roles">{t("home.case4Roles")}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="section__inner section__inner--split">
          <div>
            <p className="eyebrow">{t("home.architectsEyebrow")}</p>
            <h2>{t("home.architectsTitle")}</h2>
            <p>{t("home.architectsText")}</p>
            <ul className="home-detail__list">
              <li>{t("home.architectsList1")}</li>
              <li>{t("home.architectsList2")}</li>
              <li>{t("home.architectsList3")}</li>
            </ul>
          </div>
          <aside className="home-metrics">
            <div className="studio-pill">
              <span className="studio-pill__label">
                {t("home.architectsDeliverablesLabel")}
              </span>
              <span className="studio-pill__value">
                {t("home.architectsDeliverablesValue")}
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="section__inner section__inner--split">
          <div>
            <p className="eyebrow">{t("home.deliveryEyebrow")}</p>
            <h2>{t("home.deliveryTitle")}</h2>
            <p>{t("home.deliveryText")}</p>
            <ul className="home-detail__list">
              <li>{t("home.deliveryList1")}</li>
              <li>{t("home.deliveryList2")}</li>
              <li>{t("home.deliveryList3")}</li>
            </ul>
          </div>
          <aside className="home-metrics">
            <div className="studio-pill">
              <span className="studio-pill__label">
                {t("home.deliveryFormatsLabel")}
              </span>
              <span className="studio-pill__value">
                {t("home.deliveryFormatsValue")}
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="section__inner section__inner--split">
          <div>
            <p className="eyebrow">{t("home.followEyebrow")}</p>
            <h2>{t("home.followTitle")}</h2>
            <p>{t("home.followText")}</p>
            <ul className="home-detail__list">
              <li>{t("home.followList1")}</li>
              <li>{t("home.followList2")}</li>
              <li>{t("home.followList3")}</li>
            </ul>
          </div>
          <aside className="home-metrics">
            <div className="studio-pill">
              <span className="studio-pill__label">
                {t("home.followTypeLabel")}
              </span>
              <span className="studio-pill__value">
                {t("home.followTypeValue")}
              </span>
            </div>
          </aside>
        </div>
      </section>
      <section className="section section--partners" data-animate>
        <div className="section__inner">
          <div className="partners-marquee">
            <div className="partners-marquee__track">
              <span className="partners-marquee__item">AWS</span>
              <span className="partners-marquee__item">Microsoft Azure</span>
              <span className="partners-marquee__item">Google Cloud</span>
              <span className="partners-marquee__item">Stripe</span>
              <span className="partners-marquee__item">HubSpot</span>
              <span className="partners-marquee__item">Salesforce</span>
              <span className="partners-marquee__item">Notion</span>
              <span className="partners-marquee__item">Figma</span>
              <span className="partners-marquee__item">AWS</span>
              <span className="partners-marquee__item">Microsoft Azure</span>
              <span className="partners-marquee__item">Google Cloud</span>
              <span className="partners-marquee__item">Stripe</span>
              <span className="partners-marquee__item">HubSpot</span>
              <span className="partners-marquee__item">Salesforce</span>
              <span className="partners-marquee__item">Notion</span>
              <span className="partners-marquee__item">Figma</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const WorkPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <section id="work" className="section section--work" data-animate>
        <div className="section__inner">
          <header className="section-heading">
            <p className="eyebrow">{t('work.eyebrow')}</p>
            <h2>{t('work.title')}</h2>
            <p className="section-heading__text">
              {t('work.subtitle')}
            </p>
          </header>

          <div className="work-filters">
            <button className="work-filter work-filter--active">{t('work.filters.all')}</button>
            <button className="work-filter">{t('work.filters.saas')}</button>
            <button className="work-filter">{t('work.filters.mobile')}</button>
            <button className="work-filter">{t('work.filters.branding')}</button>
            <button className="work-filter">{t('work.filters.ecommerce')}</button>
            <button className="work-filter">{t('work.filters.ai')}</button>
          </div>

          <div className="work-grid">
            <article className="case-card case-card--feature" data-animate>
              <div className="case-card__media case-card__media--primary">
                <video
                  src={homeMainVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="case-card__tag">{t('work.projects.novastack.tag')}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t('work.projects.novastack.client')}</p>
                <p className="case-card__title">
                  {t('work.projects.novastack.title')}
                </p>
                <p className="case-card__roles">
                  {t('work.projects.novastack.roles')}
                </p>
                <div className="case-card__stats">
                  <span>{t('work.projects.novastack.stats.conversion')}</span>
                  <span>{t('work.projects.novastack.stats.users')}</span>
                </div>
              </div>
            </article>

            <article className="case-card" data-animate>
              <div className="case-card__media">
                <img
                  src={aiRobotImg}
                  alt="Identité visuelle pour une marque technologique"
                 loading="lazy" decoding="async" />
                <div className="case-card__tag">{t('work.projects.auralink.tag')}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t('work.projects.auralink.client')}</p>
                <p className="case-card__title">
                  {t('work.projects.auralink.title')}
                </p>
                <p className="case-card__roles">{t('work.projects.auralink.roles')}</p>
                <div className="case-card__stats">
                  <span>{t('work.projects.auralink.stats.traffic')}</span>
                  <span>{t('work.projects.auralink.stats.engagement')}</span>
                </div>
              </div>
            </article>

            <article className="case-card" data-animate>
              <div className="case-card__media">
                <img
                  src={eyeCircuitImg}
                  alt="Détail d'interface mobile futuriste"
                 loading="lazy" decoding="async" />
                <div className="case-card__tag">{t('work.projects.pulseone.tag')}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t('work.projects.pulseone.client')}</p>
                <p className="case-card__title">{t('work.projects.pulseone.title')}</p>
                <p className="case-card__roles">{t('work.projects.pulseone.roles')}</p>
                <div className="case-card__stats">
                  <span>{t('work.projects.pulseone.stats.rating')}</span>
                  <span>{t('work.projects.pulseone.stats.downloads')}</span>
                </div>
              </div>
            </article>

            <article className="case-card" data-animate>
              <div className="case-card__media">
                <img
                  src={binaryBackgroundImg}
                  alt="Dashboard analytique"
                 loading="lazy" decoding="async" />
                <div className="case-card__tag">{t('work.projects.dataflow.tag')}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t('work.projects.dataflow.client')}</p>
                <p className="case-card__title">{t('work.projects.dataflow.title')}</p>
                <p className="case-card__roles">{t('work.projects.dataflow.roles')}</p>
                <div className="case-card__stats">
                  <span>{t('work.projects.dataflow.stats.queries')}</span>
                  <span>{t('work.projects.dataflow.stats.latency')}</span>
                </div>
              </div>
            </article>

            <article className="case-card" data-animate>
              <div className="case-card__media">
                <img
                  src={aiRobotImg}
                  alt="Site e-commerce premium"
                 loading="lazy" decoding="async" />
                <div className="case-card__tag">{t('work.projects.fintech.tag')}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t('work.projects.fintech.client')}</p>
                <p className="case-card__title">{t('work.projects.fintech.title')}</p>
                <p className="case-card__roles">{t('work.projects.fintech.roles')}</p>
                <div className="case-card__stats">
                  <span>{t('work.projects.fintech.stats.transactions')}</span>
                  <span>{t('work.projects.fintech.stats.speed')}</span>
                </div>
              </div>
            </article>

            <article className="case-card" data-animate>
              <div className="case-card__media">
                <img
                  src={eyeCircuitImg}
                  alt="Application financière"
                 loading="lazy" decoding="async" />
                <div className="case-card__tag">{t('work.projects.healthtech.tag')}</div>
              </div>
              <div className="case-card__meta">
                <p className="case-card__client">{t('work.projects.healthtech.client')}</p>
                <p className="case-card__title">{t('work.projects.healthtech.title')}</p>
                <p className="case-card__roles">{t('work.projects.healthtech.roles')}</p>
                <div className="case-card__stats">
                  <span>{t('work.projects.healthtech.stats.consultations')}</span>
                  <span>{t('work.projects.healthtech.stats.satisfaction')}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--work" data-animate>
        <div className="section__inner">
          <header className="section-heading">
            <p className="eyebrow">{t('work.impact.eyebrow')}</p>
            <h2>{t('work.impact.title')}</h2>
            <p className="section-heading__text">
              {t('work.impact.subtitle')}
            </p>
          </header>
          
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-number">{t('work.impact.metrics.roi.value')}</div>
              <div className="impact-label">{t('work.impact.metrics.roi.label')}</div>
              <div className="impact-detail">{t('work.impact.metrics.roi.detail')}</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">{t('work.impact.metrics.retention.value')}</div>
              <div className="impact-label">{t('work.impact.metrics.retention.label')}</div>
              <div className="impact-detail">{t('work.impact.metrics.retention.detail')}</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">{t('work.impact.metrics.acquisition.value')}</div>
              <div className="impact-label">{t('work.impact.metrics.acquisition.label')}</div>
              <div className="impact-detail">{t('work.impact.metrics.acquisition.detail')}</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">{t('work.impact.metrics.traffic.value')}</div>
              <div className="impact-label">{t('work.impact.metrics.traffic.label')}</div>
              <div className="impact-detail">{t('work.impact.metrics.traffic.detail')}</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">{t('work.impact.metrics.satisfaction.value')}</div>
              <div className="impact-label">{t('work.impact.metrics.satisfaction.label')}</div>
              <div className="impact-detail">{t('work.impact.metrics.satisfaction.detail')}</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">{t('work.impact.metrics.cart.value')}</div>
              <div className="impact-label">{t('work.impact.metrics.cart.label')}</div>
              <div className="impact-detail">{t('work.impact.metrics.cart.detail')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--work" data-animate>
        <div className="section__inner section__inner--split">
          <div>
            <p className="eyebrow">{t('work.services.eyebrow')}</p>
            <h2>{t('work.services.title')}</h2>
            <p>
              {t('work.services.subtitle')}
            </p>
          </div>
          <aside className="studio__facts">
            <div className="studio-pill">
              <span className="studio-pill__label">{t('work.services.assistants.label')}</span>
              <span className="studio-pill__value">
                {t('work.services.assistants.value')}
              </span>
            </div>
            <div className="studio-pill">
              <span className="studio-pill__label">{t('work.services.platforms.label')}</span>
              <span className="studio-pill__value">
                {t('work.services.platforms.value')}
              </span>
            </div>
            <div className="studio-pill">
              <span className="studio-pill__label">{t('work.services.data.label')}</span>
              <span className="studio-pill__value">
                {t('work.services.data.value')}
              </span>
            </div>
            <div className="studio-pill">
              <span className="studio-pill__label">{t('work.services.automation.label')}</span>
              <span className="studio-pill__value">
                {t('work.services.automation.value')}
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--work" data-animate>
        <div className="section__inner section__inner--split">
          <div>
            <p className="eyebrow">{t('work.process.eyebrow')}</p>
            <h2>{t('work.process.title')}</h2>
            <p>
              {t('work.process.subtitle')}
            </p>
            <ul className="home-detail__list">
              <li>{t('work.process.list1')}</li>
              <li>{t('work.process.list2')}</li>
              <li>{t('work.process.list3')}</li>
            </ul>
          </div>
          <div className="page-media">
            <div className="hero-media__item">
              <img
                src={binaryBackgroundImg}
                alt="Tableau de projets et données en arrière-plan"
               loading="lazy" decoding="async" />
            </div>
            <div className="hero-media__item">
              <video
                src={workProcessVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--work" data-animate>
        <div className="section__inner">
          <header className="section-heading">
            <p className="eyebrow">{t('work.technologies.eyebrow')}</p>
            <h2>{t('work.technologies.title')}</h2>
          </header>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3>{t('work.technologies.categories.frontend')}</h3>
              <div className="tech-items">
                <span className="tech-item">React</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">Tailwind CSS</span>
                <span className="tech-item">Vue.js</span>
                <span className="tech-item">Angular</span>
                <span className="tech-item">Svelte</span>
                <span className="tech-item">Vite</span>
                <span className="tech-item">Webpack</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{t('work.technologies.categories.backend')}</h3>
              <div className="tech-items">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">GraphQL</span>
                <span className="tech-item">Express.js</span>
                <span className="tech-item">Django</span>
                <span className="tech-item">Ruby on Rails</span>
                <span className="tech-item">Spring Boot</span>
                <span className="tech-item">Go</span>
                <span className="tech-item">MySQL</span>
                <span className="tech-item">Redis</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{t('work.technologies.categories.cloud')}</h3>
              <div className="tech-items">
                <span className="tech-item">AWS</span>
                <span className="tech-item">Vercel</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">Kubernetes</span>
                <span className="tech-item">CI/CD</span>
                <span className="tech-item">Google Cloud</span>
                <span className="tech-item">Azure</span>
                <span className="tech-item">Netlify</span>
                <span className="tech-item">Cloudflare</span>
                <span className="tech-item">Firebase</span>
                <span className="tech-item">GitHub Actions</span>
                <span className="tech-item">Jenkins</span>
                <span className="tech-item">Terraform</span>
                <span className="tech-item">Prometheus</span>
                <span className="tech-item">Grafana</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{t('work.technologies.categories.ai')}</h3>
              <div className="tech-items">
                <span className="tech-item">TensorFlow</span>
                <span className="tech-item">OpenAI API</span>
                <span className="tech-item">PyTorch</span>
                <span className="tech-item">Apache Spark</span>
                <span className="tech-item">MLflow</span>
                <span className="tech-item">Scikit-learn</span>
                <span className="tech-item">Hugging Face</span>
                <span className="tech-item">Pandas</span>
                <span className="tech-item">Jupyter</span>
                <span className="tech-item">Databricks</span>
                <span className="tech-item">Snowflake</span>
                <span className="tech-item">BigQuery</span>
                <span className="tech-item">Apache Kafka</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{t('work.technologies.categories.mobile')}</h3>
              <div className="tech-items">
                <span className="tech-item">React Native</span>
                <span className="tech-item">Flutter</span>
                <span className="tech-item">Swift</span>
                <span className="tech-item">Kotlin</span>
                <span className="tech-item">Ionic</span>
                <span className="tech-item">Expo</span>
                <span className="tech-item">Electron</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{t('work.technologies.categories.testing')}</h3>
              <div className="tech-items">
                <span className="tech-item">Jest</span>
                <span className="tech-item">Cypress</span>
                <span className="tech-item">Playwright</span>
                <span className="tech-item">Selenium</span>
                <span className="tech-item">Testing Library</span>
                <span className="tech-item">Storybook</span>
                <span className="tech-item">Lighthouse</span>
                <span className="tech-item">ESLint</span>
                <span className="tech-item">Prettier</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{t('work.technologies.categories.security')}</h3>
              <div className="tech-items">
                <span className="tech-item">Auth0</span>
                <span className="tech-item">Okta</span>
                <span className="tech-item">Firebase Auth</span>
                <span className="tech-item">JWT</span>
                <span className="tech-item">OAuth 2.0</span>
                <span className="tech-item">Vault</span>
                <span className="tech-item">bcrypt</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{t('work.technologies.categories.api')}</h3>
              <div className="tech-items">
                <span className="tech-item">REST</span>
                <span className="tech-item">GraphQL</span>
                <span className="tech-item">gRPC</span>
                <span className="tech-item">WebSocket</span>
                <span className="tech-item">RabbitMQ</span>
                <span className="tech-item">Redis</span>
                <span className="tech-item">Nginx</span>
                <span className="tech-item">Apache</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--work" data-animate>
        <div className="section__inner">
          <header className="section-heading">
            <p className="eyebrow">Secteurs d'intervention</p>
            <h2>Expertise métier spécialisée</h2>
            <p className="section-heading__text">
              Une compréhension approfondie des enjeux spécifiques à chaque secteur pour des solutions taillées sur mesure et performantes.
            </p>
          </header>
          
          <div className="industries-grid">
            <div className="industry-card">
              <h3>Startups & Innovation</h3>
              <p>Accélération go-to-market, MVP scalables, levées de fonds. De l'idée à la première traction en un temps record.</p>
              <div className="industry-metrics">
                <span>Accompagnement complet</span>
                <span>Solutions évolutives</span>
              </div>
            </div>
            
            <div className="industry-card">
              <h3>Financial Technology</h3>
              <p>Infrastructure de paiement, gestion patrimoine, trading algorithmique. Sécurité et conformité réglementaire garanties.</p>
              <div className="industry-metrics">
                <span>Haute sécurité</span>
                <span>Conformité stricte</span>
              </div>
            </div>
            
            <div className="industry-card">
              <h3>Education Technology</h3>
              <p>Plateformes LMS next-gen, adaptive learning, systèmes d'évaluation. Expériences pédagogiques engageantes et mesurables.</p>
              <div className="industry-metrics">
                <span>Pédagogie innovante</span>
                <span>Résultats mesurables</span>
              </div>
            </div>
            
            <div className="industry-card">
              <h3>Santé & MedTech</h3>
              <p>Solutions télémédecine, dossiers patients intelligents, IA diagnostique. Conformité HIPAA et RGPD intégrée.</p>
              <div className="industry-metrics">
                <span>Confidentialité maximale</span>
                <span>Technologies avancées</span>
              </div>
            </div>
            
            <div className="industry-card">
              <h3>Industrie 4.0</h3>
              <p>IoT industriel, maintenance prédictive, digital twins. Optimisation des opérations et réduction des coûts.</p>
              <div className="industry-metrics">
                <span>Optimisation continue</span>
                <span>Innovation IoT</span>
              </div>
            </div>
            
            <div className="industry-card">
              <h3>Luxue & Retail</h3>
              <p>E-commerce omnicanal, expérience client premium, gestion inventaire IA. Transformation digitale préservant l'exclusivité.</p>
              <div className="industry-metrics">
                <span>Expérience premium</span>
                <span>Innovation digitale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--work" data-animate>
        <div className="section__inner">
          <header className="section-heading">
            <p className="eyebrow">Processus</p>
            <h2>Notre méthodologie en 5 phases</h2>
          </header>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Découverte</h3>
                <p>Analyse de vos besoins, audit technique, workshops avec les équipes.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Stratégie</h3>
                <p>Définition de la roadmap, choix technologiques, planning projet.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Design</h3>
                <p>Wireframes, maquettes, design system, prototypes interactifs.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Développement</h3>
                <p>Sprints agiles, démos régulières, tests automatisés, intégration continue.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Lancement & Support</h3>
                <p>Déploiement production, monitoring, formations, évolution continue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const StudioPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const studioSections = document.querySelectorAll<HTMLElement>(
      ".section--studio[data-animate]"
    );
    studioSections.forEach((el) => el.classList.add("is-visible"));
  }, [i18n.language]);
  
  return (
    <>
      <section
        id="studio"
        className="section section--studio section--studio-about"
        data-animate
      >
        <div className="section__inner section__inner--split studio-about">
          <div className="studio-about__main">
            <p className="eyebrow">{t('work.studio.about.eyebrow')}</p>
            <p className="studio-about__lead">
              {t('work.studio.about.lead')}
            </p>
          </div>
          <aside className="studio-about__side">
            <p className="studio-about__side-label">{t('work.studio.about.sideLabel')}</p>
            <p className="studio-about__side-text">
              {t('work.studio.about.sideText1')}
            </p>
            <p className="studio-about__side-text">
              {t('work.studio.about.sideText2')}
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--studio" data-animate>
        <div className="section__inner section__inner--split">
          <div>
            <p className="eyebrow">{t('work.studio.team.eyebrow')}</p>
            <p>
              {t('work.studio.team.description1')}
            </p>
            <p>
              {t('work.studio.team.description2')}
            </p>
          </div>
          <div className="page-media">
            <div className="hero-media__item">
              <img
                src={cloudTechImg}
                alt="Vue abstraite d’infrastructure cloud"
               loading="lazy" decoding="async" />
            </div>
            <div className="hero-media__item">
              <img
                src={robotHandImg}
                alt="Main robotique connectée à un réseau industriel"
               loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--studio" data-animate>
        <div className="section__inner section__inner--split">
          <div>
            <p className="eyebrow">{t('work.studio.methodology.eyebrow')}</p>
            <h2>{t('work.studio.methodology.title')}</h2>
            <p>
              {t('work.studio.methodology.description')}
            </p>
          </div>
          <div>
            <ul className="home-detail__list">
              <li>{t('work.studio.methodology.steps.discovery')}</li>
              <li>{t('work.studio.methodology.steps.design')}</li>
              <li>{t('work.studio.methodology.steps.data')}</li>
              <li>{t('work.studio.methodology.steps.build')}</li>
              <li>{t('work.studio.methodology.steps.run')}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const whatsappNumber = "+22891596788";
  const whatsappMessage = encodeURIComponent("Bonjour Daven's, je souhaite discuter d'un projet.");
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappMessage}`;
  
  return (
    <section id="contact" className="section section--contact" data-animate>
      <div className="section__inner section__inner--split">
        <div className="contact__copy">
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2>{t('contact.title')}</h2>
          <p className="contact__lead">
            {t('contact.lead')}
          </p>
          
          <div className="contact__methods">
            <div className="contact__method">
              <div className="contact__method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact__method-content">
                <p className="contact__method-label">{t('contact.methods.email.label')}</p>
                <a href={`mailto:${t('contact.methods.email.value')}`} className="contact__method-value">
                  {t('contact.methods.email.value')}
                </a>
              </div>
            </div>
            
            <div className="contact__method">
              <div className="contact__method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact__method-content">
                <p className="contact__method-label">{t('contact.methods.whatsapp.label')}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__method-value">
                  {t('contact.methods.whatsapp.value')}
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact__availability">
            <div className="contact__availability-badge">
              <span className="contact__availability-dot"></span>
              <span>{t('contact.availability.badge')}</span>
            </div>
            <p className="contact__availability-text">
              {t('contact.availability.text')}
            </p>
          </div>
        </div>
        <form className="contact-form" autoComplete="on">
          <div className="form-row">
            <label htmlFor="name">{t('contact.form.name.label')}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t('contact.form.name.placeholder')}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">{t('contact.form.email.label')}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t('contact.form.email.placeholder')}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="project-type">{t('contact.form.projectType.label')}</label>
            <input
              id="project-type"
              name="project-type"
              type="text"
              placeholder={t('contact.form.projectType.placeholder')}
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">{t('contact.form.message.label')}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t('contact.form.message.placeholder')}
              required
            />
          </div>
          <button type="submit" className="pill pill--primary pill--full">
            {t('contact.form.submit')}
          </button>
          <p className="form-note">
            {t('contact.form.note')}
          </p>
        </form>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langSwitcherRef = useRef<HTMLDivElement | null>(null);

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

    return () => {
      if (pointerMoveHandler) {
        window.removeEventListener("pointermove", pointerMoveHandler);
      }
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLangOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        langSwitcherRef.current &&
        !langSwitcherRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLangOpen]);

  const location = useLocation();

  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>("[data-animate]");

    if (!("IntersectionObserver" in window)) {
      animatedElements.forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            obs.unobserve(target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  const currentYear = new Date().getFullYear();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link${isActive ? " nav__link--active" : ""}`;



  return (
    <>
      <div className="background-layer background-layer--gradient" />
      <div className="background-layer background-layer--glow" />
      <div className="cursor-orb" />

      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand">
            <NavLink to="/" className="brand__mark">
              DAVEN'S
            </NavLink>
          </div>
          {/* Mobile Language Button - Only visible on mobile */}
          <button
            className={`lang-toggle ${isLangOpen ? "lang-toggle--open" : ""}`}
            type="button"
            aria-label={isLangOpen ? "Fermer les langues" : "Changer de langue"}
            onClick={() => setIsLangOpen((prev) => !prev)}
          >
            {(i18n.language || "fr").toUpperCase()}
          </button>
          
          <button
            className={`nav-toggle ${isNavOpen ? "nav-toggle--open" : ""}`}
            type="button"
            aria-label={isNavOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>
          <nav className="nav">
            <NavLink to="/" end className={navLinkClass}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/work" className={navLinkClass}>
              {t("nav.work")}
            </NavLink>
            <NavLink to="/studio" className={navLinkClass}>
              {t("nav.studio")}
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              {t("nav.contact")}
            </NavLink>
          </nav>
          <div className="header-actions">
            <div className="lang-switcher" ref={langSwitcherRef}>
              <button
                className="pill pill--ghost"
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isLangOpen ? "true" : "false"}
              >
                {(i18n.language || "fr").toUpperCase()}
              </button>
              {isLangOpen && (
                <div className="lang-switcher__menu" role="listbox">
                  {(i18n.language || "fr") !== "fr" && (
                    <button
                      type="button"
                      className="pill pill--ghost lang-switcher__item"
                      role="option"
                      onClick={() => {
                        i18n.changeLanguage("fr");
                        setIsLangOpen(false);
                      }}
                    >
                      FR
                    </button>
                  )}
                  {(i18n.language || "fr") !== "en" && (
                    <button
                      type="button"
                      className="pill pill--ghost lang-switcher__item"
                      role="option"
                      onClick={() => {
                        i18n.changeLanguage("en");
                        setIsLangOpen(false);
                      }}
                    >
                      EN
                    </button>
                  )}
                  {(i18n.language || "fr") !== "de" && (
                    <button
                      type="button"
                      className="pill pill--ghost lang-switcher__item"
                      role="option"
                      onClick={() => {
                        i18n.changeLanguage("de");
                        setIsLangOpen(false);
                      }}
                    >
                      DE
                    </button>
                  )}
                  {(i18n.language || "fr") !== "zh" && (
                    <button
                      type="button"
                      className="pill pill--ghost lang-switcher__item"
                      role="option"
                      onClick={() => {
                        i18n.changeLanguage("zh");
                        setIsLangOpen(false);
                      }}
                    >
                      ZH
                    </button>
                  )}
                  {(i18n.language || "fr") !== "it" && (
                    <button
                      type="button"
                      className="pill pill--ghost lang-switcher__item"
                      role="option"
                      onClick={() => {
                        i18n.changeLanguage("it");
                        setIsLangOpen(false);
                      }}
                    >
                      IT
                    </button>
                  )}
                  {(i18n.language || "fr") !== "es" && (
                    <button
                      type="button"
                      className="pill pill--ghost lang-switcher__item"
                      role="option"
                      onClick={() => {
                        i18n.changeLanguage("es");
                        setIsLangOpen(false);
                      }}
                    >
                      ES
                    </button>
                  )}
                </div>
              )}
            </div>
            <NavLink to="/contact" className="pill pill--primary">
              <span>{t("cta.startProject")}</span>
            </NavLink>
          </div>
        </div>
      </header>
      
      {/* Mobile Language Menu Overlay */}
      <div className={`lang-overlay ${isLangOpen ? "lang-overlay--open" : ""}`} onClick={() => setIsLangOpen(false)}>
        <div className="lang-overlay__menu" onClick={(e) => e.stopPropagation()}>
          <div className="lang-overlay__header">
            <h3>Choisir une langue</h3>
            <button className="lang-overlay__close" onClick={() => setIsLangOpen(false)}>×</button>
          </div>
          <div className="lang-overlay__options">
            <button
              className={`lang-overlay__option ${(i18n.language || "fr") === "fr" ? "lang-overlay__option--active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("fr").then(() => {
                  setIsLangOpen(false);
                });
              }}
            >
              <span className="lang-overlay__flag">🇫🇷</span>
              <span className="lang-overlay__name">Français</span>
            </button>
            <button
              className={`lang-overlay__option ${(i18n.language || "fr") === "en" ? "lang-overlay__option--active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("en").then(() => {
                  setIsLangOpen(false);
                });
              }}
            >
              <span className="lang-overlay__flag">🇬🇧</span>
              <span className="lang-overlay__name">English</span>
            </button>
            <button
              className={`lang-overlay__option ${(i18n.language || "fr") === "de" ? "lang-overlay__option--active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("de").then(() => {
                  setIsLangOpen(false);
                });
              }}
            >
              <span className="lang-overlay__flag">🇩🇪</span>
              <span className="lang-overlay__name">Deutsch</span>
            </button>
            <button
              className={`lang-overlay__option ${(i18n.language || "fr") === "zh" ? "lang-overlay__option--active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("zh").then(() => {
                  setIsLangOpen(false);
                });
              }}
            >
              <span className="lang-overlay__flag">🇨🇳</span>
              <span className="lang-overlay__name">中文</span>
            </button>
            <button
              className={`lang-overlay__option ${(i18n.language || "fr") === "it" ? "lang-overlay__option--active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("it").then(() => {
                  setIsLangOpen(false);
                });
              }}
            >
              <span className="lang-overlay__flag">🇮🇹</span>
              <span className="lang-overlay__name">Italiano</span>
            </button>
            <button
              className={`lang-overlay__option ${(i18n.language || "fr") === "es" ? "lang-overlay__option--active" : ""}`}
              onClick={() => {
                i18n.changeLanguage("es").then(() => {
                  setIsLangOpen(false);
                });
              }}
            >
              <span className="lang-overlay__flag">🇪🇸</span>
              <span className="lang-overlay__name">Español</span>
            </button>
          </div>
        </div>
      </div>
      
      <div
        className={`nav-overlay ${isNavOpen ? "nav-overlay--open" : ""}`}
        onClick={() => setIsNavOpen(false)}
      >
        <nav
          className="nav-overlay__menu"
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            event.stopPropagation()
          }
        >
          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={() => setIsNavOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/work"
            className={navLinkClass}
            onClick={() => setIsNavOpen(false)}
          >
            Work
          </NavLink>
          <NavLink
            to="/studio"
            className={navLinkClass}
            onClick={() => setIsNavOpen(false)}
          >
            Studio
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClass}
            onClick={() => setIsNavOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/branding" element={<BrandingPage />} />
          <Route path="/services/web" element={<WebPage />} />
          <Route path="/services/motion" element={<MotionPage />} />
          <Route path="/services/photo" element={<PhotoPage />} />
          <Route path="/services/strategy" element={<StrategyPage />} />
          <Route path="/legal/privacy" element={<PrivacyPage />} />
          <Route path="/legal/terms" element={<TermsPage />} />
          <Route path="/legal/cookies" element={<CookiesPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="site-footer__hero">
          <span className="site-footer__hero-text">DAVEN'S</span>
        </div>
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <div className="brand__mark brand__mark--footer">DAVEN'S</div>
            <p className="site-footer__baseline">
              {t("footer.baseline")}
            </p>
          </div>
          <div className="site-footer__nav">
            <div className="site-footer__column">
              <p className="site-footer__label">{t("footer.nav.label")}</p>
              <ul className="site-footer__links">
                <li><NavLink to="/">{t("footer.nav.home")}</NavLink></li>
                <li><NavLink to="/work">{t("footer.nav.work")}</NavLink></li>
                <li><NavLink to="/studio">{t("footer.nav.studio")}</NavLink></li>
                <li><NavLink to="/contact">{t("footer.nav.contact")}</NavLink></li>
              </ul>
            </div>
            <div className="site-footer__column">
              <p className="site-footer__label">{t("footer.services.label")}</p>
              <ul className="site-footer__links">
                <li><a href="/services/branding">{t("footer.services.branding")}</a></li>
                <li><a href="/services/web">{t("footer.services.web")}</a></li>
                <li><a href="/services/motion">{t("footer.services.motion")}</a></li>
                <li><a href="/services/photo">{t("footer.services.photo")}</a></li>
                <li><a href="/services/strategy">{t("footer.services.strategy")}</a></li>
              </ul>
            </div>
            <div className="site-footer__column">
              <p className="site-footer__label">{t("footer.contact.label")}</p>
              <ul className="site-footer__links">
                <li><a href="mailto:lionesspretty7@gmail.com">lionesspretty7@gmail.com</a></li>
                <li><a href="tel:+22891596788">+228 91 59 67 88</a></li>
                <li><a href="#">{t("footer.contact.address")}</a></li>
              </ul>
            </div>
            <div className="site-footer__column">
              <p className="site-footer__label">{t("footer.social.label")}</p>
              <ul className="site-footer__links">
                <li><a href="#">{t("footer.social.linkedin")}</a></li>
                <li><a href="#">{t("footer.social.instagram")}</a></li>
                <li><a href="#">{t("footer.social.behance")}</a></li>
                <li><a href="#">{t("footer.social.github")}</a></li>
              </ul>
            </div>
            <div className="site-footer__column">
              <p className="site-footer__label">{t("footer.legal.label")}</p>
              <ul className="site-footer__links">
                <li><a href="/legal/privacy">{t("footer.legal.privacy")}</a></li>
                <li><a href="/legal/terms">{t("footer.legal.terms")}</a></li>
                <li><a href="/legal/cookies">{t("footer.legal.cookies")}</a></li>
              </ul>
            </div>
            <div className="site-footer__column">
              <p className="site-footer__label">{t("footer.newsletter.label")}</p>
              <form className="site-footer__newsletter">
                <input type="email" placeholder={t("footer.newsletter.placeholder")} aria-label={t("footer.newsletter.aria")} />
                <button type="submit" className="pill pill--primary">{t("footer.newsletter.submit")}</button>
              </form>
            </div>
          </div>
          <div className="site-footer__bottom">
            <p>&copy; 2025 DAVEN'S. {t("footer.copyright")}</p>
            <p>
              <NavLink to="/legal/cookies">{t("footer.cookies")}</NavLink>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

// Service Pages
const BrandingPage: React.FC = () => (
  <section className="section section--service" data-animate>
    <div className="section__inner">
      <div className="service__header">
        <h1 className="section__title">Branding &amp; Identité</h1>
        <p className="section__subtitle">Nous créons des marques qui marquent les esprits</p>
      </div>
      <div className="service__copy">
        <p>
          De la stratégie de marque à l’identité visuelle complète, nous accompagnons votre entreprise pour construire une image forte, cohérente et mémorable. Notre approche mêle créativité, psychologie du consommateur et excellence technique.
        </p>
        <h2>Notre processus</h2>
        <ul className="studio-list">
          <li>Audit de marque et analyse concurrentielle</li>
          <li>Définition de la plateforme de marque</li>
          <li>Création de l’identité visuelle (logo, couleurs, typographie)</li>
          <li>Développement des guidelines de marque</li>
          <li>Déploiement sur tous les supports</li>
        </ul>
        <h2>Pourquoi nous choisir</h2>
        <p>
          Avec plus de 50 identités créées, nous transformons votre vision en une marque qui raconte une histoire, connecte avec votre audience et se démarque sur le marché.
        </p>
      </div>
    </div>
  </section>
);

const WebPage: React.FC = () => (
  <section className="section section--service" data-animate>
    <div className="section__inner">
      <div className="service__header">
        <h1 className="section__title">Conception Web</h1>
        <p className="section__subtitle">Des expériences digitales qui convertissent</p>
      </div>
      <div className="service__copy">
        <p>
          Nous concevons des sites web qui allient esthétique exceptionnelle, performance technique et expérience utilisateur optimale. Chaque projet est une opportunité de repousser les limites du design web.
        </p>
        <h2>Notre expertise</h2>
        <ul className="studio-list">
          <li>Design UI/UX sur mesure</li>
          <li>Développement responsive et accessible</li>
          <li>Optimisation des performances</li>
          <li>Intégration CMS et e-commerce</li>
          <li>Maintenance et évolution</li>
        </ul>
        <h2>Technologies</h2>
        <p>
          React, Next.js, TypeScript, Tailwind CSS, Node.js, et les dernières standards web pour garantir des sites rapides, sécurisés et évolutifs.
        </p>
      </div>
    </div>
  </section>
);

const MotionPage: React.FC = () => (
  <section className="section section--service" data-animate>
    <div className="section__inner">
      <div className="service__header">
        <h1 className="section__title">Motion Design</h1>
        <p className="section__subtitle">Donnez vie à vos idées avec l’animation</p>
      </div>
      <div className="service__copy">
        <p>
          Le motion design transforme vos messages en expériences captivantes. Nous créons des animations fluides et percutantes pour renforcer votre communication et émouvoir votre audience.
        </p>
        <h2>Nos réalisations</h2>
        <ul className="studio-list">
          <li>Animations d’interface et micro-interactions</li>
          <li>Vidéos promotionnelles et publicitaires</li>
          <li>Motion branding et identités animées</li>
          <li>Explainers vidéo et tutoriels</li>
          <li>Effets spéciaux et post-production</li>
        </ul>
        <h2>Notre approche</h2>
        <p>
          Du story-board à la livraison finale, nous combinons sens artistique et maîtrise technique pour créer des animations qui servent votre stratégie.
        </p>
      </div>
    </div>
  </section>
);

const PhotoPage: React.FC = () => (
  <section className="section section--service" data-animate>
    <div className="section__inner">
      <div className="service__header">
        <h1 className="section__title">Photographie &amp; Vidéo</h1>
        <p className="section__subtitle">Capturons l’essence de votre marque</p>
      </div>
      <div className="service__copy">
        <p>
          Images et vidéos sont au cœur de votre communication. Nous réalisons des shootings photo et des productions vidéo qui subliment vos produits, racontent votre histoire et marquent les esprits.
        </p>
        <h2>Nos services</h2>
        <ul className="studio-list">
          <li>Shooting produits et e-commerce</li>
          <li>Portrait d’entreprise et corporate</li>
          <li>Événementiel et reportage</li>
          <li>Vidéos institutionnelles et publicitaires</li>
          <li>Drone et prises de vues aériennes</li>
        </ul>
        <h2>Équipement professionnel</h2>
        <p>
          Nous utilisons le meilleur matériel photographique et vidéo pour garantir des images de haute qualité, quelle que soit la complexité de votre projet.
        </p>
      </div>
    </div>
  </section>
);

const StrategyPage: React.FC = () => (
  <section className="section section--service" data-animate>
    <div className="section__inner">
      <div className="service__header">
        <h1 className="section__title">Stratégie Digitale</h1>
        <p className="section__subtitle">Accélérez votre croissance avec une stratégie sur mesure</p>
      </div>
      <div className="service__copy">
        <p>
          Une stratégie digitale solide est la fondation de votre succès en ligne. Nous analysons, planifions et exécutons des stratégies qui génèrent des résultats mesurables.
        </p>
        <h2>Notre approche stratégique</h2>
        <ul className="studio-list">
          <li>Audit digital et analyse de marché</li>
          <li>Définition des objectifs KPIs</li>
          <li>Stratégie de contenu et SEO</li>
          <li>Planification média et acquisition</li>
          <li>Analyse et optimisation continue</li>
        </ul>
        <h2>Résultats garantis</h2>
        <p>
          Nous nous engageons sur des objectifs clairs et mesurons notre succès par votre croissance. Nos clients voient en moyenne +45% de trafic organique en 6 mois.
        </p>
      </div>
    </div>
  </section>
);

// Legal Pages
const PrivacyPage: React.FC = () => (
  <section className="section section--legal" data-animate>
    <div className="section__inner">
      <h1 className="section__title">Politique de Confidentialité</h1>
      <div className="legal__content">
        <h2>Introduction</h2>
        <p>
          Chez DAVEN'S, nous nous engageons à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.
        </p>
        <h2>Données collectées</h2>
        <p>Nous collectons uniquement les informations nécessaires à nos services :</p>
        <ul className="studio-list">
          <li>Nom et coordonnées de contact</li>
          <li>Informations de navigation anonymisées</li>
          <li>Préférences et interactions avec notre contenu</li>
        </ul>
        <h2>Utilisation des données</h2>
        <p>Vos données servent exclusivement à :</p>
        <ul className="studio-list">
          <li>Fournir nos services et support client</li>
          <li>Améliorer nos produits et expérience utilisateur</li>
          <li>Communiquer avec vous (avec votre consentement)</li>
        </ul>
        <h2>Vos droits</h2>
        <p>Vous disposez d’un droit d’accès, de modification et de suppression de vos données personnelles. Contactez-nous pour exercer ces droits.</p>
        <p><strong>Contact :</strong> lionesspretty7@gmail.com</p>
      </div>
    </div>
  </section>
);

const TermsPage: React.FC = () => (
  <section className="section section--legal" data-animate>
    <div className="section__inner">
      <h1 className="section__title">Conditions Générales</h1>
      <div className="legal__content">
        <h2>Objet</h2>
        <p>
          Les présentes conditions régissent l’utilisation de nos services et la relation contractuelle entre DAVEN’S et ses clients.
        </p>
        <h2>Services</h2>
        <p>Nous proposons des services de création digitale incluant :</p>
        <ul className="studio-list">
          <li>Design et développement web</li>
          <li>Branding et identité visuelle</li>
          <li>Motion design et production vidéo</li>
          <li>Stratégie digitale et conseil</li>
        </ul>
        <h2>Devis et facturation</h2>
        <p>Tous nos devis sont détaillés et validés 30 jours. Les acomptes de 30% sont requis pour démarrer tout projet.</p>
        <h2>Propriété intellectuelle</h2>
        <p>Les créations restent notre propriété jusqu’au paiement final. Une fois soldé, vous disposez d’une licence d’utilisation complète.</p>
        <h2>Livraison et révisions</h2>
        <p>Les délais sont indicatifs. Nous incluons 3 tours de révisions standard dans nos prestations.</p>
      </div>
    </div>
  </section>
);

const CookiesPage: React.FC = () => (
  <section className="section section--legal" data-animate>
    <div className="section__inner">
      <h1 className="section__title">Politique Cookies</h1>
      <div className="legal__content">
        <h2>Qu’est-ce qu’un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite de notre site. Il nous permet d’améliorer votre expérience de navigation.
        </p>
        <h2>Types de cookies utilisés</h2>
        <ul className="studio-list">
          <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
          <li><strong>Cookies de performance :</strong> Anonymes, ils nous aident à améliorer le site</li>
          <li><strong>Cookies fonctionnels :</strong> Mémorisent vos préférences</li>
        </ul>
        <h2>Gestion des cookies</h2>
        <p>Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Notez que cela peut affecter certaines fonctionnalités du site.</p>
        <h2>Durée de conservation</h2>
        <p>Les cookies essentiels expirent après 1 an, les cookies de performance après 6 mois.</p>
        <p>Pour toute question : <a href="mailto:lionesspretty7@gmail.com">lionesspretty7@gmail.com</a></p>
      </div>
    </div>
  </section>
);

export default App;

