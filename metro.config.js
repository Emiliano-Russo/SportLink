const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'ttf'], // Asegúrate de que Metro reconozca los archivos de fuentes (.ttf)
  },
  watchFolders: ['./node_modules/react-native-vector-icons'], // Agrega la carpeta de íconos como carpeta observada
};

module.exports = mergeConfig(defaultConfig, config);
