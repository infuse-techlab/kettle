import { Container, Service } from 'typedi';
import { ScriptAbstract } from '@application/script/script.abstract';
import { ScriptHelloWorld } from '@application/script/script.hello-world';

@Service()
export class ScriptLoader {
  public static load = (): ScriptAbstract[] => {
    return [Container.get(ScriptHelloWorld)];
  };
}
