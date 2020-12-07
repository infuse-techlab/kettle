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
  coverageReporters: ['json', 'text', 'lcov'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@application/(.*)': '<rootDir>/src/application/$1',
    '^@core/(.*)': '<rootDir>/src/core/$1',
    '^@domain/(.*)': '<rootDir>/src/domain/$1',
    '^@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
    '^@root/(.*)': '<rootDir>/$1',
  },
};
