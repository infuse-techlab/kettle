export interface IApplication {
  getType(): string;
  run(): Promise<void>;
}
