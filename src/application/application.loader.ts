import { ApplicationAbstract } from '@application/application.abstract';
import { RestHandler } from '@application/rest/rest.handler';
import { ScriptHandler } from '@application/script/script.handler';
import { Container, Service } from 'typedi';

@Service()
export class ApplicationLoader {
  public static load = (): ApplicationAbstract[] => {
    return [Container.get(ScriptHandler), Container.get(RestHandler)];
  };
}
