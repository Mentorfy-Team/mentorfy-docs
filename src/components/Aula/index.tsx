import React, {useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ArrowUpRight, Clock, Play} from 'lucide-react';

import aulas from '@site/src/data/aulas.json';
import {APP_URL} from '@site/src/data/paginas';

import styles from './styles.module.css';

export type AulaData = (typeof aulas.lessons)[number];

export function findAula(slug: string): AulaData | undefined {
  return aulas.lessons.find((l) => l.slug === slug);
}

export function formatDuration(sec: number): string {
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
}

export function coverUrl(guid: string): string {
  return `https://${aulas.cdnHostname}/${guid}/thumbnail.jpg`;
}

/**
 * A lesson video at the top of a guide page.
 *
 * Shows the cover with a play button and only loads the Bunny player on click: a page with
 * the iframe mounted up front downloads the player before anyone asked for it. The guid comes
 * from src/data/aulas.json, synced from the app's catalog, so a re-recorded lesson updates here.
 */
export default function Aula({slug}: {slug: string}): JSX.Element {
  const aula = findAula(slug);
  const [playing, setPlaying] = useState(false);
  const {i18n} = useDocusaurusContext();

  if (!aula) {
    throw new Error(`<Aula slug="${slug}"> not found in src/data/aulas.json — run scripts/sync-aulas.mjs`);
  }

  const notPortuguese = i18n.currentLocale !== 'pt';
  const embed = `https://iframe.mediadelivery.net/embed/${aulas.libraryId}/${aula.guid}?autoplay=true&preload=true&responsive=true`;

  return (
    <figure className={styles.aula}>
      <div className={styles.frame}>
        {playing ? (
          <iframe
            src={embed}
            title={aula.title}
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className={styles.iframe}
          />
        ) : (
          <button
            type="button"
            className={styles.cover}
            onClick={() => setPlaying(true)}
            aria-label={translate(
              {id: 'aula.play', message: 'Assistir: {title}'},
              {title: aula.title},
            )}
          >
            <img src={coverUrl(aula.guid)} alt="" loading="lazy" className={styles.coverImg} />
            <span className={styles.playButton}>
              <Play className={styles.playIcon} aria-hidden />
            </span>
            <span className={styles.duration}>
              <Clock className={styles.durationIcon} aria-hidden />
              {formatDuration(aula.durationSec)}
            </span>
          </button>
        )}
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.title}>{aula.title}</span>
        <span className={styles.actions}>
          {notPortuguese ? (
            <span className={styles.badge}>
              <Translate id="aula.portugueseOnly">Vídeo em português</Translate>
            </span>
          ) : null}
          <a
            href={`${APP_URL}${aula.route}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.openApp}
          >
            <Translate id="aula.openApp">Abrir no Mentorfy</Translate>
            <ArrowUpRight className={styles.openIcon} aria-hidden />
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
