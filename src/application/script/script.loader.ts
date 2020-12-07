import { Container, Service } from 'typedi';
import { ScriptAbstract } from './script.abstract';
import { ScriptHelloWorld } from './script.hello-world';

@Service()
export class ScriptLoader {
  public static load = (): ScriptAbstract[] => {
    return [Container.get(ScriptHelloWorld)];
  };
}
