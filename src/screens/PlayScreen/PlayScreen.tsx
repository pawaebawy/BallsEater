import React, { useContext } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { GameModal } from '@components/index';
import ResultModal from '../../modals/ResultModal';
import ModalContext from '../../context/context';
import Field from '@components/Field/Field';
import s from './styles'

const PlayScreen = ({ route, navigation }) => {
  const { isModalVisible, setModalVisible } = useContext(ModalContext);

  const { idLevel } = route.params;

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
