import { Container, Service } from 'typedi';
import { CoreCommand } from '../../core/core.command';
import { ScriptHelloWorld } from './script.hello-world';

@Service()
export class ScriptHandler {
  public static Type = 'script';

  constructor(private readonly command: CoreCommand) {
    this.init();
  }

  private init = (): void => {
    return;
  };

  public getType = (): string => {
    return ScriptHandler.Type;
  };

  public run = async (): Promise<void> => {
    console.log('Script should run...');
    const [script] = this.command.args;
    switch (script) {
      case ScriptHelloWorld.Name:
        return Container.get(ScriptHelloWorld).run();
      default:
        return this.command.help();
    }
  };
}
