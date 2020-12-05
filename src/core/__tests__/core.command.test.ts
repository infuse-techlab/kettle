import { Command } from 'commander';
import { CoreCommand } from '../core.command';

describe('CoreCommand', () => {
  it('should set command version', () => {
    const coreCommand = new CoreCommand();
    expect(coreCommand).toBeInstanceOf(CoreCommand);
    const command = new Command();
    expect(JSON.stringify(coreCommand)).toStrictEqual(JSON.stringify(command));
  });
  it('should have no regression', () => {
    const coreCommand = new CoreCommand();
    expect(coreCommand).toMatchSnapshot();
  });
});
