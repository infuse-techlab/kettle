import { name, version } from '../../../package.json';
import { CoreCommand } from '../core.command';
import { CoreProgram } from '../core.program';

jest.mock('../core.command');

describe('CoreProgram', () => {
  it('should set be instantiated', () => {
    const mockCoreCommand = new CoreCommand();
    const coreProgram = new CoreProgram(mockCoreCommand);
    expect(coreProgram).toBeInstanceOf(CoreProgram);
  });

  it('should set program name', () => {
    const mockCoreCommand = new CoreCommand();
    new CoreProgram(mockCoreCommand);
    expect(mockCoreCommand.name).toBeCalledTimes(1);
    expect(mockCoreCommand.name).toBeCalledWith(name);
  });

  it('should set command version', () => {
    const mockCoreCommand = new CoreCommand();
    new CoreProgram(mockCoreCommand);
    expect(mockCoreCommand.version).toBeCalledTimes(1);
    expect(mockCoreCommand.version).toBeCalledWith(version, '-v, --version', 'output the current version');
  });

  it('should parse arguments', () => {
    const mockCoreCommand = new CoreCommand();
    new CoreProgram(mockCoreCommand);
    expect(mockCoreCommand.parse).toBeCalledTimes(1);
    expect(mockCoreCommand.parse).toBeCalledWith();
  });

  it('should run the app', () => {
    const mockCoreCommand = new CoreCommand();
    const coreProgram = new CoreProgram(mockCoreCommand);
    coreProgram.run();
  });

  it(`should console.log "Hello world!" the app`, () => {
    const mockCoreCommand = new CoreCommand();
    const coreProgram = new CoreProgram(mockCoreCommand);
    const spyConsoleLog = jest.spyOn(console, 'log');
    coreProgram.run();
    expect(spyConsoleLog).toBeCalledTimes(1);
    expect(spyConsoleLog).toBeCalledWith('Hello world!');
    spyConsoleLog.mockRestore();
  });

  it('should have no regression', () => {
    const coreProgram = new CoreCommand();
    expect(coreProgram).toMatchSnapshot();
  });
});
