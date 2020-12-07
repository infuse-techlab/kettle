export interface IApplicationHandler {
  getType(): string;
  run(): Promise<void>;
}
