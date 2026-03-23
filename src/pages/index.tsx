import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { ArrowUpRight } from "lucide-react";

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
        <h1 className={styles.heroTitle}>Documentação Mentorfy</h1>

        <p className={styles.heroSubtitle}>
          De mentores para mentores. Guias, integrações e suporte em um só
          lugar.
        </p>

        <div className={styles.heroActions}>
          <Link to="/docs/intro" className={styles.heroButton}>
            <span className={styles.heroButtonLabel}>
              Explorar documentação
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
            Central de ajuda
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Início"
      description="Documentação oficial da Mentorfy. Guia do mentor, API e suporte."
    >
      <HomeHero />
      <main />
    </Layout>
  );
}
