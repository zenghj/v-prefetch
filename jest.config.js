module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverage: true
}
