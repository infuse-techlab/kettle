import { Container, Service } from 'typedi';
import { ScriptHandler } from './script/script.handler';

@Service()
export class ApplicationHandler {
  public static load = (): ScriptHandler[] => {
    return [Container.get(ScriptHandler)];
  };
}
