import { Service } from 'typedi';
import { CoreCommand } from './core.command';

@Service()
export class CoreProgram {
  constructor(private readonly command: CoreCommand) {
    this.init();
  }

  private init = () => {
    this.command.version('0.0.0');
  };

  // noinspection JSUnusedGlobalSymbols
  public run = async (): Promise<void> => {
    console.log('Hello world!');
  };
}
