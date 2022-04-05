import React, { FC, useContext } from 'react';
import { Modal, View, Image, Pressable, TouchableOpacity } from 'react-native';
import ModalContext from '../../context/context';
import s from './styles';

interface IGameModalProps {
  navigation?: any;
}

const GameModal: FC<IGameModalProps> = (props) => {
  const { navigation, children } = props;
  const { isModalVisible, setModalVisible } = useContext(ModalContext);

  const handlerCloseModal = () => {
    setModalVisible(false);
  }

  return (
    <View>
      <Modal
        animationType='none'
        transparent={true}
        visible={isModalVisible}
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
            <View style={s.modalContent}>
              { children }
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default GameModal;
