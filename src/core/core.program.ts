import { Service } from 'typedi';
import { name, version } from '../../package.json';
import { CoreCommand } from './core.command';

@Service()
export class CoreProgram {
  constructor(private readonly command: CoreCommand) {
    this.init();
  }

  private init = () => {
    this.command.name(name);
    this.command.version(version, '-v, --version', 'output the current version');
    this.command.parse();
  };

  // noinspection JSUnusedGlobalSymbols
  public run = async (): Promise<void> => {
    console.log('Hello world!');
  };
}
