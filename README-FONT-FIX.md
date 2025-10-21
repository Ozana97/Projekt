# Playfair Font Fix for Android

## Problem
The Playfair Display font was not working properly on Android devices, even though it was configured in `app.config.js` and `tailwind.config.js`.

## Root Causes
1. **Font Weight Issues**: Android doesn't handle `font-weight` with custom fonts the same way as iOS
2. **Font Family Naming**: Android requires exact font family names that match the font file names
3. **Font Loading**: Fonts need to be properly loaded before use

## Solutions Implemented

### 1. Updated `app.config.js`
- Properly configured expo-font plugin with correct font paths
- Removed commented variable font (which can cause issues on Android)

### 2. Updated `tailwind.config.js`
- Added separate font families for different weights
- Used exact font family names that match the file names

### 3. Created Font Loading Utility (`src/utils/fonts.js`)
- Proper font loading with expo-font
- Font loading status checking
- Consistent font family name constants

### 4. Platform-Specific Component (`src/components/PinTitle.jsx`)
- Different font handling for Android vs iOS
- Avoids using `fontWeight` with custom fonts on Android
- Uses specific font files for different weights

### 5. Proper App Initialization (`App.js`)
- Ensures fonts are loaded before rendering
- Shows loading state while fonts are being loaded
- Error handling for font loading failures

## Key Android Font Guidelines

1. **Use Exact Font Family Names**: The font family name should match the font file name without extension
2. **Avoid fontWeight with Custom Fonts**: Use separate font files for different weights instead
3. **Load Fonts Explicitly**: Always load fonts before using them
4. **Platform-Specific Handling**: Use Platform.OS to handle differences between Android and iOS

## Usage Example

```jsx
// Instead of relying only on Tailwind classes
<Text className="font-playfair font-bold">Text</Text>

// Use platform-specific styles
<Text 
  className="font-playfair"
  style={Platform.OS === 'android' ? 
    { fontFamily: 'PlayfairDisplay-Bold' } : 
    { fontFamily: 'PlayfairDisplay-Regular', fontWeight: 'bold' }
  }
>
  Text
</Text>
```

## Testing
1. Run the app on Android device/emulator
2. Verify that Playfair font is displayed correctly
3. Test different font weights (Regular, Medium, Bold)
4. Ensure no font fallback to system fonts occurs