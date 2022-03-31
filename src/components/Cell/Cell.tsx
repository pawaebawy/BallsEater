import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  isExist?: boolean
}

const Cell: React.FC<Props> = props => {
  const isExist = props.isExist;

  return (
    <View style={[
      styles.root,
      !isExist ? styles.notExist : null
    ]}></View>
  )
};

export default Cell;

const styles = StyleSheet.create({
  root: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  notExist: {
    opacity: 0,
  }
});