import React from 'react';
import { Text, Platform } from 'react-native';

const PinTitle = ({ step, t, PinStep }) => {
  // For Android, we need to be more explicit about font loading
  const getFontStyle = () => {
    if (Platform.OS === 'android') {
      return {
        fontFamily: 'PlayfairDisplay-Bold', // Use the exact font family name
        fontWeight: 'normal', // Don't use fontWeight with custom fonts on Android
      };
    } else {
      // iOS can handle font-weight with custom fonts better
      return {
        fontFamily: 'PlayfairDisplay-Regular',
        fontWeight: 'bold',
      };
    }
  };

  return (
    <Text 
      className="text-typography-800 text-3xl leading-[1.2] font-playfair"
      style={getFontStyle()}
    >
      {step === PinStep.PIN ? t('pin.title') : t('pin.repeatPin')}
    </Text>
  );
};

export default PinTitle;