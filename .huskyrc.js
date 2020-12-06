module.exports = {
  hooks: {
    'pre-commit': 'yarn lint && yarn cover && yarn quality',
  },
};
