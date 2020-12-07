import 'reflect-metadata';
import './module.alias';

import { Container } from 'typedi';
import { CoreProgram } from '@core/core.program';

(async () => {
  await Container.get(CoreProgram).run();
})();
