exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['iPlayerProgrammesListFeature.js'],
  capabitlities: {
    browserName: 'chrome'
  }
}
