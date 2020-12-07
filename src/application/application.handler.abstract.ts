import { IApplicationHandler } from './application.handler.interface';

export abstract class ApplicationHandlerAbstract implements IApplicationHandler {
  protected abstract init: () => void;
  public abstract getType: () => string;
  public abstract run: () => Promise<void>;
}
