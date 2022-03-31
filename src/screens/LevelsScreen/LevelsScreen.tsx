import React from 'react';
import { View, Text, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Levels Screen</Text>
      <Button
        title="Back to Menu"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default MenuScreen;
