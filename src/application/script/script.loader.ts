import { Container, Service } from 'typedi';
import { ScriptHelloWorld } from './script.hello-world';

@Service()
export class ScriptLoader {
  public static load = (): ScriptHelloWorld[] => {
    return [Container.get(ScriptHelloWorld)];
  };
}
