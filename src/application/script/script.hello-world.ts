import { Service } from 'typedi';
import { CoreCommand } from '../../core/core.command';

@Service()
export class ScriptHelloWorld {
  public static Name = 'hello-world';

  constructor(private readonly command: CoreCommand) {
    this.init();
  }

  private init = (): void => {
    this.command.option('-u, --username <your_name>', 'show a "Hello <your_name>!" message');
    this.command.parse();
    return;
  };

  public run = async (): Promise<void> => {
    const { username } = this.command.opts();
    console.log(`Hello ${username || 'World'}!`);
  };
}
