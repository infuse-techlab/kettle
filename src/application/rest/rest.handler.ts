import { Service } from 'typedi';
import { CoreCommand } from '../../core/core.command';
import { ApplicationHandlerAbstract } from '../application.handler.abstract';
import { IApplicationHandler } from '../application.handler.interface';

@Service()
export class RestHandler extends ApplicationHandlerAbstract implements IApplicationHandler {
  public static TYPE = 'rest';
  public static DEFAULT_PORT = 3000;

  constructor(private readonly command: CoreCommand) {
    super();
    this.init();
  }

  protected init = (): void => {
    this.command.option('-p, --port <port_number>', 'REST server port');
    this.command.parse();
    return;
  };

  public getType = (): string => {
    return RestHandler.TYPE;
  };

  public run = async (): Promise<void> => {
    const { port = RestHandler.DEFAULT_PORT } = this.command.opts();
    console.log(`REST should run on port ${port}...`);
  };
}
