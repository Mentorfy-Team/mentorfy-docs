/**
 * Which guide page teaches each video lesson (slug from src/data/aulas.json).
 *
 * The cards in the video library and on the home page link here. A lesson without a page
 * of its own (the Integrations ones: that section is maintained apart) points to the page
 * that covers the subject.
 */
export const PAGINA_DA_AULA: Record<string, string> = {
  // Alunos
  'cadastrar-aluno': '/docs/alunos/cadastrar-aluno',
  'clientes-p2-importar': '/docs/alunos/importar-alunos',
  'clientes-p3-acesso': '/docs/alunos/acesso-em-massa',
  mensagens: '/docs/alunos/mensagens/central-de-atendimento',
  'mensagens-p2-configurar': '/docs/alunos/mensagens/configurar-atendimento',
  'mensagens-p3-respostas': '/docs/alunos/mensagens/respostas-rapidas-e-ia',
  'visao-geral': '/docs/alunos/acompanhar/visao-geral',
  acompanhamento: '/docs/alunos/acompanhar/acompanhamento',
  'acompanhamento-p2-excel': '/docs/alunos/acompanhar/exportar-excel',
  notificacoes: '/docs/alunos/notificacoes/avisar-alunos',
  'notificacoes-p2-agendar': '/docs/alunos/notificacoes/agendar-envio',

  // Mentorias e cursos
  'minhas-mentorias': '/docs/cursos/mentorias/criar-mentoria',
  'mentorias-p2-modulos': '/docs/cursos/mentorias/modulos-e-aulas',
  'mentorias-p3-ia': '/docs/cursos/mentorias/modulo-com-ia',
  armazenamento: '/docs/cursos/armazenamento/subir-videos',
  'armazenamento-p2-pastas': '/docs/cursos/armazenamento/organizar-em-pastas',
  certificados: '/docs/cursos/certificados/certificados-automaticos',
  'certificados-p2-marca': '/docs/cursos/certificados/marca-e-emitidos',
  'certificados-p3-arte': '/docs/cursos/certificados/minha-arte-e-padrao',
  'banco-questoes': '/docs/cursos/banco-de-questoes/guardar-perguntas',
  'banco-p2-aula': '/docs/cursos/banco-de-questoes/usar-numa-aula',
  'categorias-vitrine': '/docs/cursos/vitrine/organizar-em-categorias',
  'categorias-p2-visibilidade': '/docs/cursos/vitrine/controlar-o-que-aparece',
  dominio: '/docs/cursos/dominio-proprio',

  // Grupos e equipe
  grupos: '/docs/grupos-e-equipe/grupos/criar-grupo',
  'grupos-p2-kanban': '/docs/grupos-e-equipe/grupos/monte-o-processo',
  'grupos-p3-organizar': '/docs/grupos-e-equipe/grupos/organizar-o-time',
  'grupos-p4-quadros': '/docs/grupos-e-equipe/grupos/varios-quadros',
  'grupos-p5-reunioes': '/docs/grupos-e-equipe/grupos/reunioes-contam-como-contato',
  'meus-times': '/docs/grupos-e-equipe/meu-time/montar-equipe',
  'times-p2-permissoes': '/docs/grupos-e-equipe/meu-time/permissoes',
  'times-p3-distribuir': '/docs/grupos-e-equipe/meu-time/produtos-e-alunos',
  reunioes: '/docs/grupos-e-equipe/reunioes/criar-reuniao',
  'reunioes-p2-gravacoes': '/docs/grupos-e-equipe/reunioes/gravacoes',

  // Marca e IA
  'brand-studio': '/docs/marca-e-ia/brand-studio/sua-marca',
  'brand-studio-p2-login': '/docs/marca-e-ia/brand-studio/login-e-banner',
  'ai-studio': '/docs/marca-e-ia/ai-studio/capa-com-ia',
  'ai-studio-p2-audio': '/docs/marca-e-ia/ai-studio/narracao',
  'ai-studio-p3-podcast': '/docs/marca-e-ia/ai-studio/podcast',
  copiloto: '/docs/marca-e-ia/copiloto/perguntar',
  'copiloto-p2-executar': '/docs/marca-e-ia/copiloto/pedir-e-executar',
  'copiloto-p3-templates': '/docs/marca-e-ia/copiloto/perguntas-prontas',
  'copiloto-aluno': '/docs/marca-e-ia/copiloto-do-aluno/ativar',
  'copiloto-aluno-p2-base': '/docs/marca-e-ia/copiloto-do-aluno/base-de-conhecimento',
  'copiloto-aluno-p3-limites': '/docs/marca-e-ia/copiloto-do-aluno/limites-e-consumo',

  // Conta
  'minha-conta': '/docs/conta/plano-e-creditos',

  // Integrações: section maintained apart, the lessons point to its overview.
  integracoes: '/docs/integracoes/intro',
  'integracoes-p2-automacao': '/docs/integracoes/intro',
  'integracoes-p3-conectar': '/docs/integracoes/intro',
};

/** Where "Abrir no Mentorfy" sends the reader: the app screen the lesson teaches. */
export const APP_URL = 'https://mentorfy.io';
