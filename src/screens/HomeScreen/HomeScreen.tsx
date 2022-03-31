import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { Logo, PlayButton } from '../../components';
import s from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Logo />
        <View>Звук</View>
      </View>
      <View style={s.homeBlock}>
        <PlayButton navigation={navigation} />
        <TouchableOpacity onPress={() => navigation.navigate('Levels')} style={s.button}>
          <Text style={s.buttonText}>Уровни</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
