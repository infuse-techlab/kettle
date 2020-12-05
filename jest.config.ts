export default {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/index.ts',
    '!src/**/*.index.ts',
    '!src/**/*.mock.ts',
    '!src/**/*.mock.*.ts',
  ],
  coveragePathIgnorePatterns: ['node_modules', 'src/index.ts'],
  coverageDirectory: 'coverage/',
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50,
    },
  },
  coverageProvider: 'v8',
  coverageReporters: ['json-summary', 'text', 'lcov', 'cobertura'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
