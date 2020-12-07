import { Service } from 'typedi';
import { CoreCommand } from '../../core/core.command';
import { ScriptAbstract } from './script.abstract';

@Service()
export class ScriptHelloWorld extends ScriptAbstract {
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
