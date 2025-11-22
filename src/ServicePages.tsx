import React from "react";
import { useTranslation } from "react-i18next";

// Service Pages
export const BrandingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section--service" data-animate>
      <div className="section__inner">
        <div className="service__header">
          <h1 className="section__title">{t('services.branding.title')}</h1>
          <p className="section__subtitle">{t('services.branding.subtitle')}</p>
        </div>
        <div className="service__copy">
          <p>{t('services.branding.intro')}</p>
          <h2>{t('services.branding.processTitle')}</h2>
          <ul className="studio-list">
            {(t('services.branding.processList', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>{t('services.branding.whyTitle')}</h2>
          <p>{t('services.branding.whyText')}</p>
        </div>
      </div>
    </section>
  );
};

export const WebPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section--service" data-animate>
      <div className="section__inner">
        <div className="service__header">
          <h1 className="section__title">{t('services.web.title')}</h1>
          <p className="section__subtitle">{t('services.web.subtitle')}</p>
        </div>
        <div className="service__copy">
          <p>{t('services.web.intro')}</p>
          <h2>{t('services.web.expertiseTitle')}</h2>
          <ul className="studio-list">
            {(t('services.web.expertiseList', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>{t('services.web.techTitle')}</h2>
          <p>{t('services.web.techText')}</p>
        </div>
      </div>
    </section>
  );
};

export const MotionPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section--service" data-animate>
      <div className="section__inner">
        <div className="service__header">
          <h1 className="section__title">{t('services.motion.title')}</h1>
          <p className="section__subtitle">{t('services.motion.subtitle')}</p>
        </div>
        <div className="service__copy">
          <p>{t('services.motion.intro')}</p>
          <h2>{t('services.motion.servicesTitle')}</h2>
          <ul className="studio-list">
            {(t('services.motion.servicesList', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>{t('services.motion.approachTitle')}</h2>
          <p>{t('services.motion.approachText')}</p>
        </div>
      </div>
    </section>
  );
};

export const PhotoPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section--service" data-animate>
      <div className="section__inner">
        <div className="service__header">
          <h1 className="section__title">{t('services.photo.title')}</h1>
          <p className="section__subtitle">{t('services.photo.subtitle')}</p>
        </div>
        <div className="service__copy">
          <p>{t('services.photo.intro')}</p>
          <h2>{t('services.photo.servicesTitle')}</h2>
          <ul className="studio-list">
            {(t('services.photo.servicesList', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>{t('services.photo.qualityTitle')}</h2>
          <p>{t('services.photo.qualityText')}</p>
        </div>
      </div>
    </section>
  );
};

export const StrategyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section--service" data-animate>
      <div className="section__inner">
        <div className="service__header">
          <h1 className="section__title">{t('services.strategy.title')}</h1>
          <p className="section__subtitle">{t('services.strategy.subtitle')}</p>
        </div>
        <div className="service__copy">
          <p>{t('services.strategy.intro')}</p>
          <h2>{t('services.strategy.servicesTitle')}</h2>
          <ul className="studio-list">
            {(t('services.strategy.servicesList', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>{t('services.strategy.resultsTitle')}</h2>
          <p>{t('services.strategy.resultsText')}</p>
        </div>
      </div>
    </section>
  );
};
