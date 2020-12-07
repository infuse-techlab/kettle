export interface IScriptHandler {
  getName(): string;
  run(): Promise<void>;
}
