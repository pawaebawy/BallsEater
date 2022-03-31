import React from 'react';
import { View, StyleSheet } from 'react-native';

import Cell from '@components/Cell/Cell';

import { fieldData } from './data';

const Field = () => {
  const cellsQty = fieldData.length;

  return (
    <View style={styles.root}>
      {
        fieldData.map((column) => {
          return (
            <View style={styles.column}>
              {
                column.map((cell) => {
                  return <Cell isExist={cell.isExists} />;
                })
              }
            </View>
          )
        })
      }
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#a09e84',
  },
  column: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});