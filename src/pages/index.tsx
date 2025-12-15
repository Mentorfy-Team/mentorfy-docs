import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          Documentação Mentorfy
        </h1>
        <p className={styles.heroSubtitle}>
          De mentores para mentores.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Explore a Documentação
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://help.mentorfy.io">
            Fale com o Suporte
          </Link>
        </div>
      </div>
    </header>
  );
}



export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Início`}
      description="Documentação oficial da Mentorfy. Guia do mentor, API e suporte.">
      <HomepageHeader />
      <main>
        {/* User requested removal of "Por onde começar" section */}
      </main>
    </Layout>
  );
}
