import React from 'react';
import { View, ScrollView } from 'react-native';
import { HomeButton, LevelCard } from '../../components';
import { levels } from '@data/levels';
import s from './styles';

const LevelsScreen = ({ navigation }) => {
  const renderLevel = () => {
    return levels.map(level => {
      return (
        <LevelCard
          navigation={navigation}
          id={level.id}
          isClosed={level.isClosed}
          isCompleted={level.isCompleted}
          time={level.time}
          rating={level.rating}
        />
      )
    })
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        <HomeButton navigation={navigation} />
      </View>
      <ScrollView style={s.content}>
        {
          renderLevel()
        }
      </ScrollView>
    </View>
  );
};

export default LevelsScreen;
