const nxPreset = require('@nrwl/jest/preset').default

module.exports = {
  ...nxPreset,
  clearMocks: true,
  coverageReporters: ['text', 'html', 'cobertura'],
  reporters: ['default'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      statements: 100,
      lines: 100
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*.mocks.ts',
    '!src/**/*.types.ts',
    '!src/**/index.ts'
  ],
  modulePaths: ['<rootDir>/src/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
