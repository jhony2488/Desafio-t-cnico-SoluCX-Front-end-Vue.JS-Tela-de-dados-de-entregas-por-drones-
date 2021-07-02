const puppeteerModes = ['acceptance', 'integration']
const { TEST_MODE } = process.env
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PUPPETEER_MODE = puppeteerModes.includes(TEST_MODE)

module.exports = {
  preset: PUPPETEER_MODE
    ? 'jest-puppeteer'
    : '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  globals: {
    URL: 'http://localhost:8080',
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './tests/coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost:8080',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  snapshotSerializers: ['jest-serializer-vue'],
}
