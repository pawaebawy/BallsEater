import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalContext from '../context/context';
import s from './styles';

const MenuModal = ({ navigation }) => {
  const { isModalVisible, setModalVisible } = useContext(ModalContext)

  return (
    <View>
      <Text style={s.modalTitle}>Модалка меню</Text>
      <TouchableOpacity
        onPress={
          () => {
            setModalVisible(false);
            navigation.navigate('Home');
          }
        }
      >
        <Text>Меню</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={
        () => {
          setModalVisible(false);
          navigation.navigate('Levels');
        }
      }
      >
        <Text>Уровни</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuModal;
