import React, { FC, ReactNode, useState } from 'react';
import { Modal, View, Image, Pressable, Text, TouchableOpacity } from 'react-native';
import s from './styles';

interface IGameModalProps {
  navigation?: any;
}

const GameModal: FC<IGameModalProps> = (props) => {
  const { navigation, children } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const handlerCloseModal = () => {
    setModalVisible(false);
  }

  return (
    <View>
      <Pressable
        onPress={() => {setModalVisible(true)}}
      >
        <Image
          source={require('@assets/images/menu.svg')}
          style={s.modalImage}
        />
      </Pressable>
      <Modal
        animationType='none'
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={handlerCloseModal}
      >
        <TouchableOpacity
          style={s.modalBlockBG}
          activeOpacity={1}
          onPressOut={handlerCloseModal}
        >
          <View style={s.modalBlock}>
            <Pressable
              onPress={handlerCloseModal}
              style={s.modalClose}
            >
              <Image
                source={require('@assets/images/close.svg')}
                style={s.modalCloseImage}
              />
            </Pressable>
            <View>
              { children }
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default GameModal;
