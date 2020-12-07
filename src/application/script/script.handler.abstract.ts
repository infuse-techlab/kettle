import { IScriptHandler } from './script.handler.interface';

export abstract class ScriptHandlerAbstract implements IScriptHandler {
  protected abstract init: () => void;
  public abstract getName: () => string;
  public abstract run: () => Promise<void>;
}
