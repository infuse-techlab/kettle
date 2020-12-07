import { IApplication } from '@application/application.interface';

export abstract class ApplicationAbstract implements IApplication {
  protected abstract init: () => void;
  public abstract getType: () => string;
  public abstract run: () => Promise<void>;
}
