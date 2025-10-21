import React from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function ExampleComponent({ step, t, PinStep }) {
  // Load fonts explicitly (recommended for better control)
  const [fontsLoaded] = useFonts({
    'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'PlayfairDisplay-Medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
    'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or a loading component
  }

  return (
    <View>
      {/* Method 1: Using Tailwind classes (recommended) */}
      <Text className="text-typography-800 text-3xl font-bold leading-[1.2] font-playfair">
        {step === PinStep.PIN ? t('pin.title') : t('pin.repeatPin')}
      </Text>
      
      {/* Method 2: Using style prop as fallback */}
      <Text 
        className="text-typography-800 text-3xl font-bold leading-[1.2]"
        style={{ fontFamily: 'PlayfairDisplay-Regular' }}
      >
        {step === PinStep.PIN ? t('pin.title') : t('pin.repeatPin')}
      </Text>
      
      {/* Method 3: Different font weights */}
      <Text className="text-typography-800 text-2xl font-playfair-medium">
        Medium Weight Text
      </Text>
      
      <Text className="text-typography-800 text-xl font-playfair-bold">
        Bold Weight Text
      </Text>
    </View>
  );
}