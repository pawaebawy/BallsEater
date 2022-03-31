import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import s from './styles';

const PlayButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Play')} style={s.button}>
      <Text style={s.buttonText}>Играть</Text>
    </TouchableOpacity>
  );
};

export default PlayButton;
