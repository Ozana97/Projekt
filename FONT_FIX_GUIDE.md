# Fix for Playfair Font Not Working on Android

## Problem
The Playfair font is not displaying correctly on Android devices, even though it's configured in both `app.config.js` and `tailwind.config.js`.

## Root Causes
1. **Font name mismatch**: Android requires exact font file names (without extension) in font family declarations
2. **Missing font loading**: Fonts may not be properly loaded before use
3. **Incorrect Tailwind configuration**: Font family mapping doesn't match the actual font names

## Solution

### 1. Update app.config.js
```javascript
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
    ],
  },
};
```

### 2. Update tailwind.config.js
```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Use exact font file names without extension for Android compatibility
        playfair: ['PlayfairDisplay-Regular', 'serif'],
        'playfair-medium': ['PlayfairDisplay-Medium', 'serif'],
        'playfair-bold': ['PlayfairDisplay-Bold', 'serif'],
      },
    },
  },
};
```

### 3. Load fonts explicitly in your component
```javascript
import { useFonts } from 'expo-font';

export default function YourComponent() {
  const [fontsLoaded] = useFonts({
    'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'PlayfairDisplay-Medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
    'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or loading component
  }

  return (
    <Text className="font-playfair text-3xl">
      Your text here
    </Text>
  );
}
```

### 4. Alternative: Use style prop as fallback
```javascript
<Text 
  className="text-3xl"
  style={{ fontFamily: 'PlayfairDisplay-Regular' }}
>
  Your text here
</Text>
```

## Key Points for Android Font Loading

1. **Font names must match exactly**: Use the exact font file name without the `.ttf` extension
2. **Case sensitivity**: Font names are case-sensitive on Android
3. **Font loading**: Always ensure fonts are loaded before use with `useFonts` hook
4. **Fallback fonts**: Include fallback fonts in your font family stack
5. **Rebuild required**: After changing font configuration, you need to rebuild your app

## Testing
1. Clear Metro cache: `npx expo start --clear`
2. Rebuild the app completely
3. Test on a physical Android device or emulator
4. Check if fonts are loaded in the component before rendering

## Troubleshooting
- If fonts still don't work, try using the style prop directly with `fontFamily`
- Ensure font files exist in the correct path
- Check that font files are not corrupted
- Verify that the font names in Tailwind config match the font file names exactly