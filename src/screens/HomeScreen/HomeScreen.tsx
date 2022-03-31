import React from 'react';
import { View, Text, Button } from 'react-native';
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
        <Button
          title="Levels"
          onPress={() => navigation.navigate('Levels')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
