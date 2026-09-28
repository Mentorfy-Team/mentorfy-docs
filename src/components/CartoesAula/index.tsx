import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {Play} from 'lucide-react';

import aulas from '@site/src/data/aulas.json';
import {PAGINA_DA_AULA} from '@site/src/data/paginas';
import {coverUrl, formatDuration, type AulaData} from '@site/src/components/Aula';

import styles from './styles.module.css';

function Cartao({aula}: {aula: AulaData}): JSX.Element {
  return (
    <Link to={PAGINA_DA_AULA[aula.slug] ?? '/docs/comece/todas-as-aulas'} className={styles.cartao}>
      <span className={styles.thumb}>
        <img src={coverUrl(aula.guid)} alt="" loading="lazy" />
        <span className={styles.play}>
          <Play aria-hidden />
        </span>
        <span className={styles.tempo}>{formatDuration(aula.durationSec)}</span>
      </span>
      <span className={styles.texto}>
        <span className={styles.titulo}>{aula.title}</span>
        {aula.description ? <span className={styles.descricao}>{aula.description}</span> : null}
      </span>
    </Link>
  );
}

/**
 * A grid of lesson cards. Pass `slugs` for a hand-picked list (a section overview), `trilha`
 * for one track of the course, or nothing for the whole library grouped by track.
 */
export default function CartoesAula({slugs, trilha}: {slugs?: string[]; trilha?: string}): JSX.Element {
  if (slugs) {
    const lista = slugs
      .map((s) => aulas.lessons.find((l) => l.slug === s))
      .filter((l): l is AulaData => Boolean(l));
    return (
      <div className={styles.grade}>
        {lista.map((aula) => (
          <Cartao key={aula.slug} aula={aula} />
        ))}
      </div>
    );
  }

  const trilhas = aulas.tracks.filter((t) => !trilha || t.key === trilha);
  return (
    <div className={styles.trilhas}>
      {trilhas.map((t) => {
        const lista = aulas.lessons.filter((l) => l.track === t.key);
        const minutos = Math.max(1, Math.round(lista.reduce((s, l) => s + l.durationSec, 0) / 60));
        return (
          <section key={t.key} className={styles.trilha}>
            <h3 className={styles.trilhaTitulo}>
              {t.title}
              <span className={styles.trilhaMeta}>
                <Translate id="aulas.trackMeta" values={{count: lista.length, minutes: minutos}}>
                  {'{count} aulas · {minutes} min'}
                </Translate>
              </span>
            </h3>
            <div className={styles.grade}>
              {lista.map((aula) => (
                <Cartao key={aula.slug} aula={aula} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
