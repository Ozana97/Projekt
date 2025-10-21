export default {
  expo: {
    // ... other config
    plugins: [
      [
        'expo-font',
        {
          fonts: [
            './assets/fonts/PlayfairDisplay-Regular.ttf',
            './assets/fonts/PlayfairDisplay-Medium.ttf',
            './assets/fonts/PlayfairDisplay-Bold.ttf',
          ],
        },
      ],
      // ... other plugins
    ],
  },
};