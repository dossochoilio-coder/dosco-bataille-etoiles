import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dosco.bataille.etoiles',
  appName: 'DOSCO',
  webDir: 'dist',
  // Pas de bundledWebRuntime — on utilise notre propre React bundlé
  bundledWebRuntime: false,
  android: {
    // Autoriser le contenu mixte pour les assets locaux
    allowMixedContent: true,
    // Garder l'écran allumé pendant le jeu
    keepScreenOn: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#03040a',
      showSpinner: false,
    },
  },
};

export default config;
