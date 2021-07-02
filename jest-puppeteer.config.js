const DEBUG_MODE = process.argv.includes('--debug')

module.exports = {
  launch: DEBUG_MODE
    ? {
        headless: true,
        slowMo: false,
        devtools: true,
      }
    : {},
}
