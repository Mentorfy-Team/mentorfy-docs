import MDXComponents from '@theme-original/MDXComponents';

import Aula from '@site/src/components/Aula';
import CartoesAula from '@site/src/components/CartoesAula';
import {Passo, Passos} from '@site/src/components/Passos';
import ProximoPasso from '@site/src/components/ProximoPasso';

// The guide page building blocks, available in every .mdx page without an import.
export default {
  ...MDXComponents,
  Aula,
  CartoesAula,
  Passos,
  Passo,
  ProximoPasso,
};
