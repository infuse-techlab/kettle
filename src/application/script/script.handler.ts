import { Service } from 'typedi';
import { CoreCommand } from '../../core/core.command';
import { ApplicationHandlerAbstract } from '../application.handler.abstract';
import { IApplicationHandler } from '../application.handler.interface';
import { ScriptHelloWorld } from './script.hello-world';
import { ScriptLoader } from './script.loader';

@Service()
export class ScriptHandler extends ApplicationHandlerAbstract implements IApplicationHandler {
  public static TYPE = 'script';

  constructor(private readonly command: CoreCommand) {
    super();
    this.init();
  }

  protected init = (): void => {
    return;
  };

  public getType = (): string => {
    return ScriptHandler.TYPE;
  };

  private loadScripts = (): ScriptHelloWorld[] => {
    return ScriptLoader.load();
  };

  public run = async (): Promise<void> => {
    console.log('Script should run...');
    const [name] = this.command.args;
    const scripts: ScriptHelloWorld[] = this.loadScripts().filter((script) => name === script.getName());
    if (scripts.length === 0) {
      return this.command.help();
    }
    return scripts[0].run();
  };
}
