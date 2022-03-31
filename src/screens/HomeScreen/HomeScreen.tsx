import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Button } from 'react-native';
import s from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.homeBlock}>
        <Text style={s.homeBlockTitle}>Home Screen</Text>
        <Button
          title="Play"
          onPress={() => navigation.navigate('Play')}
        />
        <Button
          title="Levels"
          onPress={() => navigation.navigate('Levels')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
