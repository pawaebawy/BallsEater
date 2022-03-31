import React from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles'

const MenuScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>Levels Screen</Text>
      <Button
        title="Back to Menu"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default MenuScreen;
