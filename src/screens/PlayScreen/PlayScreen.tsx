import React from 'react';
import { View, Text } from 'react-native';
import { GameModal } from '@components/index';
import ResultModal from '../../modals/ResultModal';
import Field from '@components/Field/Field';

import s from './styles'

const PlayScreen = ({ route, navigation }) => {
  const { idLevel } = route.params;

  return (
    <View style={s.container}>
      <View style={s.header}>
        <GameModal navigation={navigation}>
          <ResultModal />
        </GameModal>
      </View>
      <View style={s.content}>
        <Text>Уровень { idLevel }</Text>
        <Field />
      </View>
    </View>
  );
};

export default PlayScreen;
