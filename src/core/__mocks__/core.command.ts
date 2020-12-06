export class CoreCommand {
  // https://www.npmjs.com/package/commander#usage-and-name
  public name = jest.fn();
  // https://www.npmjs.com/package/commander#version-option
  public version = jest.fn();
  // https://www.npmjs.com/package/commander#parse-and-parseasync
  public parse = jest.fn();
}
