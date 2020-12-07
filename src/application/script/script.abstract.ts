import { IScript } from '@application/script/script.interface';

export abstract class ScriptAbstract implements IScript {
  protected abstract init: () => void;
  public abstract getName: () => string;
  public abstract run: () => Promise<void>;
}
