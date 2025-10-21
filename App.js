import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { loadFonts, areFontsLoaded } from './src/utils/fonts';
import PinTitle from './src/components/PinTitle';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const initializeFonts = async () => {
      try {
        if (!areFontsLoaded()) {
          await loadFonts();
        }
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
        // Set to true anyway to prevent infinite loading
        setFontsLoaded(true);
      }
    };

    initializeFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <PinTitle 
        step="PIN" 
        t={(key) => key === 'pin.title' ? 'Enter PIN' : 'Repeat PIN'}
        PinStep={{ PIN: 'PIN' }}
      />
    </View>
  );
}