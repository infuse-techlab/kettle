const TSModuleAlias = require('@momothepug/tsmodule-alias');

TSModuleAlias.use({
  '@application': __dirname + '/application',
  '@core': __dirname + '/core',
  '@domain': __dirname + '/domain',
  '@infrastructure': __dirname + '/infrastructure',
  '@root': __dirname + '/../..',
});
