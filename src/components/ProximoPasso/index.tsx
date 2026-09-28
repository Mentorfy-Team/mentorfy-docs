import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {ArrowRight} from 'lucide-react';

import styles from './styles.module.css';

/** The card at the end of a guide page: the one thing to do next. */
export default function ProximoPasso({
  para,
  titulo,
  children,
}: {
  para: string;
  titulo: React.ReactNode;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <Link to={para} className={styles.cartao}>
      <span className={styles.texto}>
        <span className={styles.kicker}>
          <Translate id="proximoPasso.kicker">Próximo passo</Translate>
        </span>
        <span className={styles.titulo}>{titulo}</span>
        {children ? <span className={styles.descricao}>{children}</span> : null}
      </span>
      <ArrowRight className={styles.seta} aria-hidden />
    </Link>
  );
}
