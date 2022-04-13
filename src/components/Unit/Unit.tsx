import React from 'react';
import { View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions.get('screen');
const ROWS = 4;
const UNIT_WIDTH = width / ROWS;
const UNIT_HEIGHT = width;

interface IUnitProps {
  id?: string,
  style?: object,
}

const Unit: React.FC<IUnitProps> = props => {
  const { id, style } = props;

  return (
    <View style={[styles.root, style]}>
      <View style={styles.inner}></View>
    </View>
  );
};

export {
  Unit
};

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: '10%',
  },
  inner: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#4b443d',
    borderRadius: '50%',
  }
});