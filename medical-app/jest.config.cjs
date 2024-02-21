// jest.config.js
module.exports = {
    moduleNameMapper: {
      '\\.css$': '<rootDir>/styleMock.js',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  