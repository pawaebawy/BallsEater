import React from 'react';
import { View, ScrollView } from 'react-native';
import { HomeButton, LevelCard } from '../../components';
import { levels } from '@data/levels';
import { player } from '@data/player';
import s from './styles';

const LevelsScreen = ({ navigation }) => {
  const renderLevel = () => {
    return levels.map(level => (
      <LevelCard
        key={level.id}
        navigation={navigation}
        player={player}
        id={level.id}
        isClosed={level.isClosed}
        isCompleted={level.isCompleted}
        time={level.time}
        rating={level.rating}
      />
    )
    )
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
