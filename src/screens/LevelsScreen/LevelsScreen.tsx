import React, { useContext } from 'react';
import { View, ScrollView, Button, Pressable, Image } from 'react-native';
import { LevelCard, GameModal } from '../../components';
import { levels } from '@data/levels';
import { player } from '@data/player';
import MenuModal from '../../modals/MenuModal';
import ModalContext from '../../context/context';
import s from './styles';

const LevelsScreen = ({ navigation }) => {
  const { isModalVisible, setModalVisible } = useContext(ModalContext);

  const renderLevel = () => {
    return levels.map(level => {
      return (
        <LevelCard
          navigation={navigation}
          player={player}
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
        <Pressable
          onPress={() => {setModalVisible(true)}}
        >
          <Image
            source={require('@assets/images/menu.svg')}
            style={s.modalImage}
          />
        </Pressable>
        <GameModal navigation={navigation}>
          <MenuModal navigation={navigation} />
        </GameModal>
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
