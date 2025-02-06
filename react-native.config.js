module.exports = {
    project: {
      ios: {},
      android: {},
    },
    "react-native-vector-icons": {
      platforms: {
        ios: null,
      },
    },
    dependencies: {
      'react-native-mmkv': {
        platforms: {
          android: null, // Disable Android auto-linking
          ios: null      // Disable iOS auto-linking
        }
      }
    },

    assets: ["./src/assets/fonts/"],
    getTransformModulePath() {
      return require.resolve("react-native-typescript-transformer");
    },
    getSourceExts() {
      return ["ts", "tsx"];
    },
  };