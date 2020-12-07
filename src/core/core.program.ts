import { Service } from 'typedi';
import { name, version } from '../../package.json';
import { ApplicationAbstract } from '../application/application.abstract';
import { ApplicationLoader } from '../application/application.loader';
import { CoreCommand } from './core.command';

@Service()
export class CoreProgram {
  constructor(private readonly command: CoreCommand) {
    this.init();
  }

  private init = (): void => {
    this.command.name(name);
    this.command.version(version, '-v, --version', 'output the current version');
    this.command.allowUnknownOption();
    this.command.option('-t, --type <application_type>', 'run a specific application type');
    this.command.parse();
  };

  private loadApplications = (): ApplicationAbstract[] => {
    return ApplicationLoader.load();
  };

  public run = async (): Promise<void> => {
    const { type } = this.command.opts();
    const applications: ApplicationAbstract[] = this.loadApplications().filter(
      (application) => type === application.getType(),
    );
    if (applications.length === 0) {
      return this.command.help();
    }
    return applications[0].run();
  };
}
