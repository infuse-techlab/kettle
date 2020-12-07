import { Container, Service } from 'typedi';
import { ApplicationAbstract } from './application.abstract';
import { RestHandler } from './rest/rest.handler';
import { ScriptHandler } from './script/script.handler';

@Service()
export class ApplicationLoader {
  public static load = (): ApplicationAbstract[] => {
    return [Container.get(ScriptHandler), Container.get(RestHandler)];
  };
}
