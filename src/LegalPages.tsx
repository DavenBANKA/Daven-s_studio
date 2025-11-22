import React from "react";
import { useTranslation } from "react-i18next";

export const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section--legal" data-animate>
      <div className="section__inner">
        <div className="legal__content">
          <h1>{t('legal.privacy.title')}</h1>
          <p className="legal__date">{t('legal.privacy.lastUpdated')}: 22/11/2025</p>
          <p>{t('legal.privacy.intro')}</p>
          
          <h2>{t('legal.privacy.sections.collection.title')}</h2>
          <p>{t('legal.privacy.sections.collection.content')}</p>
          
          <h2>{t('legal.privacy.sections.usage.title')}</h2>
          <p>{t('legal.privacy.sections.usage.content')}</p>
          
          <h2>{t('legal.privacy.sections.rights.title')}</h2>
          <p>{t('legal.privacy.sections.rights.content')}</p>
          
          <h2>{t('legal.privacy.sections.security.title')}</h2>
          <p>{t('legal.privacy.sections.security.content')}</p>
        </div>
      </div>
    </section>
  );
};

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section--legal" data-animate>
      <div className="section__inner">
        <div className="legal__content">
          <h1>{t('legal.terms.title')}</h1>
          <p className="legal__date">{t('legal.terms.lastUpdated')}: 22/11/2025</p>
          <p>{t('legal.terms.intro')}</p>
          
          <h2>{t('legal.terms.sections.services.title')}</h2>
          <p>{t('legal.terms.sections.services.content')}</p>
          
          <h2>{t('legal.terms.sections.obligations.title')}</h2>
          <p>{t('legal.terms.sections.obligations.content')}</p>
          
          <h2>{t('legal.terms.sections.payment.title')}</h2>
          <p>{t('legal.terms.sections.payment.content')}</p>
          
          <h2>{t('legal.terms.sections.liability.title')}</h2>
          <p>{t('legal.terms.sections.liability.content')}</p>
        </div>
      </div>
    </section>
  );
};

export const CookiesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="section section--legal" data-animate>
      <div className="section__inner">
        <div className="legal__content">
          <h1>{t('legal.cookies.title')}</h1>
          <p className="legal__date">{t('legal.cookies.lastUpdated')}: 22/11/2025</p>
          <p>{t('legal.cookies.intro')}</p>
          
          <h2>{t('legal.cookies.sections.what.title')}</h2>
          <p>{t('legal.cookies.sections.what.content')}</p>
          
          <h2>{t('legal.cookies.sections.types.title')}</h2>
          <p>{t('legal.cookies.sections.types.content')}</p>
          
          <h2>{t('legal.cookies.sections.control.title')}</h2>
          <p>{t('legal.cookies.sections.control.content')}</p>
          
          <h2>{t('legal.cookies.sections.thirdParty.title')}</h2>
          <p>{t('legal.cookies.sections.thirdParty.content')}</p>
        </div>
      </div>
    </section>
  );
};
