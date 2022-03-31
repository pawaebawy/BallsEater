import React from 'react';
import { View, Text } from 'react-native';
import { HomeButton } from '../../components';
import s from './styles'

const PlayScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <HomeButton navigation={navigation} />
      </View>
      <View style={s.content}>
        <Text>Контент игры</Text>
      </View>
    </View>
  );
};

export default PlayScreen;
