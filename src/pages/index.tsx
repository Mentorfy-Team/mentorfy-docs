import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { ArrowUpRight } from "lucide-react";
import HeroSearch from "@site/src/components/SearchBar/HeroSearch";
import HomeGuia from "@site/src/components/HomeGuia";

import styles from "./index.module.css";

function HomeHero() {
  return (
    <section className={clsx(styles.heroBanner)}>
      <div className={styles.gridOverlay}>
        <div className={styles.grid}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>

      <div className={styles.heroContent}>
        <HeroSearch />

        <h1 className={styles.heroTitle}>
          <Translate id="homepage.hero.title">Documentação Mentorfy</Translate>
        </h1>

        <p className={styles.heroSubtitle}>
          <Translate id="homepage.hero.subtitle">
            Aprenda a usar a Mentorfy com aulas de menos de 1 minuto e passo a
            passo curto. Do primeiro aluno às integrações.
          </Translate>
        </p>

        <div className={styles.heroActions}>
          <Link to="/docs/comece/bem-vindo" className={styles.heroButton}>
            <span className={styles.heroButtonLabel}>
              <Translate id="homepage.hero.cta.explore">
                Começar pelo guia
              </Translate>
            </span>
            <span className={styles.heroButtonIcon}>
              <ArrowUpRight className={styles.arrowDefault} />
              <ArrowUpRight className={styles.arrowHover} />
            </span>
          </Link>

          <Link
            to="/docs/comece/todas-as-aulas"
            className={styles.heroSecondaryLink}
          >
            <Translate id="homepage.hero.cta.videos">
              Ver as aulas em vídeo
            </Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({
        id: "homepage.layout.title",
        message: "Início",
      })}
      description={translate({
        id: "homepage.layout.description",
        message:
          "Guia oficial da Mentorfy: aulas em vídeo e passo a passo para mentores.",
      })}
    >
      <HomeHero />
      <HomeGuia />
    </Layout>
  );
}
