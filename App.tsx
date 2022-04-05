import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import EStyleSheet from 'react-native-extended-stylesheet';

import { LoadingScreen } from './src/screens';
import Routes from './src/navigation';

const fetchLoading = async () => {
  const fetchFonts = () => {
    return Font.loadAsync({
      'Montserrat-Bold': require('./src/assets/fonts/MontserratAlternates-Bold.ttf'),
      'Montserrat-Regular': require('./src/assets/fonts/MontserratAlternates-Regular.ttf')
    });
  }

  await fetchFonts();

  await new Promise((resolve) => setTimeout(resolve, 500));

  return;
};

EStyleSheet.build(); // Important expression to use Extended Style Sheet 

const App = () => {
  const [appLoaded, setAppLoaded] = useState(false);

  const prepare = async () => {
    await fetchLoading();
    setAppLoaded(true);
  };

  useEffect(() => {
    prepare();
  }, []);

  if (!appLoaded) {
    return (
      <SafeAreaProvider>
        <LoadingScreen />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}

export default App;
