import 'reflect-metadata';

import { CoreProgram } from './core/core.program';
import { Container } from 'typedi';

(async () => {
  await Container.get(CoreProgram).run();
})();
