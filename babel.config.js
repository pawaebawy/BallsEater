module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@components": "./src/components",
            "@data": "./src/data"
          }
        },
      ],
      'react-native-reanimated/plugin'
    ],
  };
};