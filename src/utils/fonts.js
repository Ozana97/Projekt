import * as Font from 'expo-font';

// Font family names that match the file names (without extension)
export const FONT_FAMILIES = {
  PLAYFAIR_REGULAR: 'PlayfairDisplay-Regular',
  PLAYFAIR_MEDIUM: 'PlayfairDisplay-Medium',
  PLAYFAIR_BOLD: 'PlayfairDisplay-Bold',
};

// Load custom fonts
export const loadFonts = async () => {
  await Font.loadAsync({
    [FONT_FAMILIES.PLAYFAIR_REGULAR]: require('../../assets/fonts/PlayfairDisplay-Regular.ttf'),
    [FONT_FAMILIES.PLAYFAIR_MEDIUM]: require('../../assets/fonts/PlayfairDisplay-Medium.ttf'),
    [FONT_FAMILIES.PLAYFAIR_BOLD]: require('../../assets/fonts/PlayfairDisplay-Bold.ttf'),
  });
};

// Check if fonts are loaded
export const areFontsLoaded = () => {
  return Font.isLoaded(FONT_FAMILIES.PLAYFAIR_REGULAR) &&
         Font.isLoaded(FONT_FAMILIES.PLAYFAIR_MEDIUM) &&
         Font.isLoaded(FONT_FAMILIES.PLAYFAIR_BOLD);
};