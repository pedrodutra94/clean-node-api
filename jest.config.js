module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*protocols.ts',
    '!<rootDir>/src/main/**'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    'index.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
