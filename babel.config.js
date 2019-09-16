module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  pluggins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
