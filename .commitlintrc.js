module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore'],
    'subject-case': [2, 'always', ['sentence-case']],
  },
};
