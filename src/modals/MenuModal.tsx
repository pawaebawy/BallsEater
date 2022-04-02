import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MenuModal = ({ navigation }) => {
  return (
    <View>
      <Text>Модалка меню</Text>
      <TouchableOpacity
        onPress={
          () => {
            navigation.navigate('Home')
          }
        }
      >
        <Text>Меню</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Levels')}>
        <Text>Уровни</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuModal;
