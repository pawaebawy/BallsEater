import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { IFieldData } from '../Field/data';

interface Props {
  cell?: IFieldData,
  style?: object,
  onPress?: (cell: IFieldData) => void,
}

const Cell: React.FC<Props> = props => {
  const { cell, style, children, onPress } = props;
  const isExists = cell?.isExists;
  const x = cell?.x;
  const y = cell?.y;
  const id = cell?.id;

  const onPressHandler = () => {
    if (onPress && cell) onPress(cell);
  };

  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <View style={[styles.root, !isExists ? styles.notExist : null, style]}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
};

export default Cell;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  notExist: {
    opacity: 0,
  }
});