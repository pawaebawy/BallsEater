import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const LoadingScreen = () => {
  return (
    <View style={s.container}>
      <Text style={s.loadingBlock}>Идет загрузка</Text>
    </View>
  );
};

export default LoadingScreen;
