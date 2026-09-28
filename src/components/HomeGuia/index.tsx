import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {
  ArrowRight,
  BookOpen,
  CreditCard,
  Flag,
  GraduationCap,
  Plug,
  Sparkles,
  UserPlus,
  Users,
} from 'lucide-react';

import aulas from '@site/src/data/aulas.json';
import {PAGINA_DA_AULA} from '@site/src/data/paginas';
import CartoesAula from '@site/src/components/CartoesAula';

import styles from './styles.module.css';

/** How many lessons live under a guide block (by the page each lesson points to). */
function aulasEm(prefixo: string): number {
  return aulas.lessons.filter((l) => PAGINA_DA_AULA[l.slug]?.startsWith(prefixo)).length;
}

const COMECE = [
  {
    to: '/docs/comece/roteiro-do-teste',
    icon: Flag,
    title: translate({id: 'home.start.trial.title', message: 'Roteiro do teste grátis'}),
    text: translate({id: 'home.start.trial.text', message: 'As primeiras missões, na ordem certa.'}),
  },
  {
    to: '/docs/alunos/cadastrar-aluno',
    icon: UserPlus,
    title: translate({id: 'home.start.student.title', message: 'Cadastre um aluno'}),
    text: translate({id: 'home.start.student.text', message: 'Coloque quem comprou lá dentro.'}),
  },
  {
    to: '/docs/cursos/mentorias/criar-mentoria',
    icon: BookOpen,
    title: translate({id: 'home.start.course.title', message: 'Crie a sua mentoria'}),
    text: translate({id: 'home.start.course.text', message: 'Monte o que você vende, com módulos e aulas.'}),
  },
];

const BLOCOS = [
  {
    to: '/docs/cursos',
    prefixo: '/docs/cursos',
    icon: GraduationCap,
    title: translate({id: 'home.block.courses.title', message: 'Mentorias e cursos'}),
    text: translate({id: 'home.block.courses.text', message: 'Aulas, vídeos, certificados, perguntas e como tudo aparece para o aluno.'}),
  },
  {
    to: '/docs/alunos',
    prefixo: '/docs/alunos',
    icon: UserPlus,
    title: translate({id: 'home.block.students.title', message: 'Alunos'}),
    text: translate({id: 'home.block.students.text', message: 'Cadastrar, dar acesso, atender e acompanhar o progresso.'}),
  },
  {
    to: '/docs/grupos-e-equipe',
    prefixo: '/docs/grupos-e-equipe',
    icon: Users,
    title: translate({id: 'home.block.teams.title', message: 'Grupos e equipe'}),
    text: translate({id: 'home.block.teams.text', message: 'Organize turmas e empresas, sua equipe e as reuniões ao vivo.'}),
  },
  {
    to: '/docs/marca-e-ia',
    prefixo: '/docs/marca-e-ia',
    icon: Sparkles,
    title: translate({id: 'home.block.ai.title', message: 'Marca e IA'}),
    text: translate({id: 'home.block.ai.text', message: 'Sua marca na área do aluno, capas, áudios e os Copilotos.'}),
  },
  {
    to: '/docs/integracoes/intro',
    prefixo: '/docs/integracoes',
    icon: Plug,
    title: translate({id: 'home.block.integrations.title', message: 'Integrações'}),
    text: translate({id: 'home.block.integrations.text', message: 'Libere o acesso sozinho quando alguém compra, e conecte Zoom, Meet e mais.'}),
  },
  {
    to: '/docs/conta/plano-e-creditos',
    prefixo: '/docs/conta',
    icon: CreditCard,
    title: translate({id: 'home.block.account.title', message: 'Conta e suporte'}),
    text: translate({id: 'home.block.account.text', message: 'Seu plano, seus créditos e como falar com a gente.'}),
  },
];

/** The four shortest lessons: the easiest first win for someone who just arrived. */
const RAPIDAS = [...aulas.lessons]
  .filter((l) => !PAGINA_DA_AULA[l.slug]?.startsWith('/docs/integracoes'))
  .sort((a, b) => a.durationSec - b.durationSec)
  .slice(0, 4)
  .map((l) => l.slug);

export default function HomeGuia(): JSX.Element {
  return (
    <main className={styles.guia}>
      <section className={styles.secao}>
        <h2 className={styles.titulo}>
          <Translate id="home.start.heading">Comece por aqui</Translate>
        </h2>
        <div className={styles.comece}>
          {COMECE.map(({to, icon: Icon, title, text}) => (
            <Link key={to} to={to} className={styles.comeceCard}>
              <span className={styles.icone}>
                <Icon aria-hidden />
              </span>
              <span className={styles.textos}>
                <span className={styles.cardTitulo}>{title}</span>
                <span className={styles.cardTexto}>{text}</span>
              </span>
              <ArrowRight className={styles.seta} aria-hidden />
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.secao}>
        <h2 className={styles.titulo}>
          <Translate id="home.blocks.heading">O guia</Translate>
        </h2>
        <div className={styles.blocos}>
          {BLOCOS.map(({to, prefixo, icon: Icon, title, text}) => {
            const total = aulasEm(prefixo);
            return (
              <Link key={to} to={to} className={styles.bloco}>
                <span className={styles.icone}>
                  <Icon aria-hidden />
                </span>
                <span className={styles.cardTitulo}>{title}</span>
                <span className={styles.cardTexto}>{text}</span>
                {total > 0 ? (
                  <span className={styles.meta}>
                    <Translate id="home.blocks.lessons" values={{count: total}}>
                      {'{count} aulas em vídeo'}
                    </Translate>
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.secao}>
        <div className={styles.tituloLinha}>
          <h2 className={styles.titulo}>
            <Translate id="home.quick.heading">Aulas de menos de 1 minuto</Translate>
          </h2>
          <Link to="/docs/comece/todas-as-aulas" className={styles.verTodas}>
            <Translate id="home.quick.all" values={{count: aulas.lessons.length}}>
              {'Ver as {count} aulas'}
            </Translate>
            <ArrowRight aria-hidden />
          </Link>
        </div>
        <CartoesAula slugs={RAPIDAS} />
      </section>
    </main>
  );
}
