import { Service } from 'typedi';
import { CoreCommand } from '../../core/core.command';
import { ScriptHandlerAbstract } from './script.handler.abstract';
import { IScriptHandler } from './script.handler.interface';

@Service()
export class ScriptHelloWorld extends ScriptHandlerAbstract implements IScriptHandler {
  public static NAME = 'hello-world';

  constructor(private readonly command: CoreCommand) {
    super();
    this.init();
  }

  protected init = (): void => {
    this.command.option('-u, --username <your_name>', 'show a "Hello <your_name>!" message');
    this.command.parse();
    return;
  };

  public getName = (): string => {
    return ScriptHelloWorld.NAME;
  };

  public run = async (): Promise<void> => {
    const { username } = this.command.opts();
    console.log(`Hello ${username || 'World'}!`);
  };
}
