import { Container, Service } from 'typedi';
import { ApplicationHandlerAbstract } from './application.handler.abstract';
import { RestHandler } from './rest/rest.handler';
import { ScriptHandler } from './script/script.handler';

@Service()
export class ApplicationLoader {
  public static load = (): ApplicationHandlerAbstract[] => {
    return [Container.get(ScriptHandler), Container.get(RestHandler)];
  };
}
