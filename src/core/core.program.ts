import { Service } from 'typedi';
import { name, version } from '../../package.json';
import { ApplicationHandler } from '../application/application.handler';
import { ScriptHandler } from '../application/script/script.handler';
import { CoreCommand } from './core.command';

@Service()
export class CoreProgram {
  private applications: ScriptHandler[] = [];

  constructor(private readonly command: CoreCommand) {
    this.init();
  }

  private init = (): void => {
    this.command.name(name);
    this.command.version(version, '-v, --version', 'output the current version');
    this.command.allowUnknownOption();
    this.command.option('-t, --type <application_type>', 'run a specific application type');
    this.applications = this.loadApplications();
    this.command.parse();
  };

  private loadApplications = (): ScriptHandler[] => {
    return ApplicationHandler.load();
  };

  public run = async (): Promise<void> => {
    const { type } = this.command.opts();
    const applications = this.applications.filter((application) => type === application.getType());
    if (applications.length === 0) {
      return this.command.help();
    }
    return applications[0].run();
  };
}
