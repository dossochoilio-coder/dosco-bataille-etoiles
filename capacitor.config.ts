/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'com.dosco.bataille.etoiles',
  appName: 'DOSCO',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#03040a',
      showSpinner: false,
    },
  },
};

module.exports = config;
