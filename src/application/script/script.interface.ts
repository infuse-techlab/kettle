export interface IScript {
  getName(): string;
  run(): Promise<void>;
}
