import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import s from './styles';

const MenuButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={s.button}>
      <Text style={s.buttonText}>Меню</Text>
    </TouchableOpacity>
  );
};

export default MenuButton;
