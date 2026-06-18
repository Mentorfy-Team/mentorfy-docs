import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { ArrowUpRight } from "lucide-react";
import HeroSearch from "@site/src/components/SearchBar/HeroSearch";

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
            De mentores para mentores. Guias, integrações e suporte em um só
            lugar.
          </Translate>
        </p>

        <div className={styles.heroActions}>
          <Link to="/docs/intro" className={styles.heroButton}>
            <span className={styles.heroButtonLabel}>
              <Translate id="homepage.hero.cta.explore">
                Explorar documentação
              </Translate>
            </span>
            <span className={styles.heroButtonIcon}>
              <ArrowUpRight className={styles.arrowDefault} />
              <ArrowUpRight className={styles.arrowHover} />
            </span>
          </Link>

          <Link
            href="https://help.mentorfy.io"
            className={styles.heroSecondaryLink}
          >
            <Translate id="homepage.hero.cta.help">Central de ajuda</Translate>
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
          "Documentação oficial da Mentorfy. Guia do mentor, API e suporte.",
      })}
    >
      <HomeHero />
      <main />
    </Layout>
  );
}
