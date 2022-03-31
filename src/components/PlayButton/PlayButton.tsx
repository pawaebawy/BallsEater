import React from 'react';
import { Text } from 'react-native';
import s from './styles';

const PlayButton = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.navigate('Play')} style={s.playButton}>Играть</Text>
  );
};

export default PlayButton;
