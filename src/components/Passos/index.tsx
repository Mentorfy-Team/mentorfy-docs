import React from 'react';

import styles from './styles.module.css';

/**
 * The step by step of a guide page: one action per step, numbered big enough to find the
 * place again after looking away at the app.
 */
export function Passos({children}: {children: React.ReactNode}): JSX.Element {
  return <ol className={styles.passos}>{children}</ol>;
}

export function Passo({titulo, children}: {titulo: React.ReactNode; children?: React.ReactNode}): JSX.Element {
  return (
    <li className={styles.passo}>
      <div className={styles.body}>
        <p className={styles.titulo}>{titulo}</p>
        {children ? <div className={styles.detalhe}>{children}</div> : null}
      </div>
    </li>
  );
}
