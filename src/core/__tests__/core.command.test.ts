import { CoreCommand } from '@core/core.command';
import { Command } from 'commander';

describe('CoreCommand', () => {
  it('should set exacts same objects as commander.Command', () => {
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
