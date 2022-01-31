/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  slowTestThreshold: 10,
  testEnvironment: 'node',
  testTimeout: 10000,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}
