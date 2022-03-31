import React from 'react';
import { View, Text } from 'react-native';
import { HomeButton } from '../../components';
import s from './styles'

const LevelsScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <HomeButton navigation={navigation} />
      </View>
      <View style={s.content}>
        <Text>Уровни</Text>
      </View>
    </View>
  );
};

export default LevelsScreen;
