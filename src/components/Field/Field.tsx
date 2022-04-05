import React, { useEffect, useState } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Cell from '@components/Cell/Cell';
import { Unit, ICoordsData } from '@components/Unit/Unit';

import { fieldData, IFieldData } from './data';

const Field = () => {
  const [currentUnitId, setCurrentUnitId] = useState<string>();
  const [next, setNext] = useState<string>();
  const [field, setField] = useState<IFieldData[]>([]);
  const ROWS = 4;

  useEffect(() => {
    setField(fieldData);
  }, []);

  const handleUnitPress = (e: GestureResponderEvent, coords: ICoordsData, id: string) => {
    setCurrentUnitId(id);
  }

  const handleCellPress = (cell: IFieldData) => {
    if (currentUnitId && field && !cell.isFilled) {
      const pickedUnit = field.find(item => item.id === currentUnitId);
      // const nextCell = field.find(item => item.id === cell.id);

      if (pickedUnit) {
        pickedUnit.isFilled = false; // Make the first choosen cell empty
        cell.isFilled = true; // Make the next cell filled

        setNext(cell.id);
      }
    };
  };

  const checkRange = (i: number, j: number) => { // Check what a cell we should insert into a current row
    if (
      (j + 1 > (ROWS * (i + 1)) - ROWS) && // For example j from 1 to 4, then from 5 to 8 and so on
      (j + 1 <= (ROWS * (i + 1)))
    ) {
      return true;
    } else {
      return false;
    }
  };

  const renderField = () => {
    return new Array(ROWS).fill(0).map(renderRow);
  };

  const renderRow = (_: number, i: number) => (
    <View style={EStyleSheet.child(styles, 'row', i, field.length / ROWS)} key={i}>
      {
        field.filter((_, j) => checkRange(i, j)).map(renderCell)
      }
    </View>
  );

  const renderCell = (cell: IFieldData, i: number) => (
    <Cell style={EStyleSheet.child(styles, 'cell', i, ROWS)} cell={cell} onPress={handleCellPress} key={cell.id} >
      {
        cell.isFilled && <Unit id={cell.id} style={[styles.unit,]} onPress={handleUnitPress} />
      }
    </Cell>
  );

  return (
    <View style={styles.root}>
      {
        field ? <View style={styles.field}>{renderField()}</View> : <View>Loading...</View>
      }
    </View>
  );
};

export default Field;

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  field: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  row: {
    marginBottom: 5,
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  'row:last-child': {
    marginBottom: 0
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 87,
    backgroundColor: '#a09e84',
    marginRight: 5,
  },
  'cell:last-child': {
    marginRight: 0,
  },
  unit: {
    position: 'absolute',
  }
});
