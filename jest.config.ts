import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  setupFilesAfterEnv: ['dotenv/config'],
  roots: ['src', 'test'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '.*\\.(test|spec)\\.(t|j)s$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.(t|j)s',
    '!**/*.spec.ts',
    '!**/*.e2e-spec.ts',
    '!**/*.dto.ts',
    '!**/index.ts',
    '!**/*.entity.ts',
    '!**/*.module.ts',
    '!**/main.ts',
    '!**/*.mock.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  verbose: true,
  coverageReporters: ['cobertura', 'text', 'text-summary', 'html'],
  reporters: ['default'],
  // TODO: Set threshhold to 90
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  detectOpenHandles: true,
  forceExit: true,
  setupFiles: ['dotenv/config'],
  testTimeout: 10000,
};
export default config;
