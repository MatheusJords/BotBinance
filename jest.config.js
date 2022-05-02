module.exports = {
  roots: ['<rootDir>/test'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/config/',
    '!<rootDir>/src/server.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  preset: 'ts-jest'
}
