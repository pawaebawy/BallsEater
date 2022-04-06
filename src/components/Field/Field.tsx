import React, { useEffect, useState } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Cell from '@components/Cell/Cell';
import { Unit, ICoordsData } from '@components/Unit/Unit';

import { fieldData, IFieldData } from './data';

const Field = () => {
  const [currentUnitId, setCurrentUnitId] = useState<string>();
  // const [next, setNext] = useState<string>();
  const [field, setField] = useState<IFieldData[]>([]);
  const ROWS = 4;

  useEffect(() => {
    setField(fieldData);
  }, []);

  const handleUnitPress = (e: GestureResponderEvent, coords: ICoordsData, id: string) => {
    setCurrentUnitId(id);
  }

  const handleCellPress = (cell: IFieldData) => {
    if (field && currentUnitId) { // Есть данные поля, есть текущий выбранный unit, ячейка на которую ставим не заполненна
      const pickedUnit = field.find(item => item.id === currentUnitId);

      // const nextCell = field.find(item => item.id === cell.id);

      if (pickedUnit && pickedUnit.x && pickedUnit.y && cell.x && cell.y) {
        const availableRangeY = [pickedUnit.y - 2, pickedUnit.y + 2];
        const availableRangeX = [pickedUnit.x - 2, pickedUnit.x + 2];

        if (pickedUnit.y === cell.y && availableRangeX.includes(cell.x)) { // Check Y axis equality and enter X range
          const removableUnit = field.find(item => {
            if (
              item.y === cell.y &&
              item.x === (pickedUnit.x! > cell.x! ? cell.x! + 1 : cell.x! - 1)
            ) {
              return true;
            }
          });

          if (removableUnit && removableUnit.isFilled) {
            removableUnit.isFilled = false;
            pickedUnit.isFilled = false; // Make the first choosen cell empty
            cell.isFilled = true; // Make the next cell filled

            setCurrentUnitId(undefined);
          }
        }

        if (pickedUnit.x === cell.x && availableRangeY.includes(cell.y)) { // Check X axis equality and enter Y range
          const removableUnit = field.find(item => {
            if (
              item.x === cell.x &&
              item.y === (pickedUnit.y! > cell.y! ? cell.y! + 1 : cell.y! - 1)
            ) {
              return true;
            }
          });

          if (removableUnit && removableUnit.isFilled) {
            removableUnit.isFilled = false;
            pickedUnit.isFilled = false; // Make the first choosen cell empty
            cell.isFilled = true; // Make the next cell filled

            setCurrentUnitId(undefined);
          }
        }
      }
    };
  };

  const checkRange = (y: number, x: number) => { // Check what a cell we should insert into a current row
    if (
      (x + 1 > (ROWS * (y + 1)) - ROWS) && // For example x from 1 to 4, then from 5 to 8 and so on
      (x + 1 <= (ROWS * (y + 1)))
    ) {
      return true;
    } else {
      return false;
    }
  };

  const renderField = () => (
    new Array(ROWS).fill(0).map(renderRow)
  );

  const renderRow = (_: number, y: number) => (
    <View style={EStyleSheet.child(styles, 'row', y, field.length / ROWS)} key={y}>
      {
        field.filter((_, x) => checkRange(y, x)).map(renderCell.bind({}, y))
      }
    </View>
  );

  const renderCell = (y: number, cell: IFieldData, x: number) => {
    cell.x = x + 1; // Save the coordinates and increment by 1 because loop starts from 0 value
    cell.y = y + 1;

    return (
      <Cell
        style={[EStyleSheet.child(styles, 'cell', x, ROWS + 1), currentUnitId === cell.id ? styles.cellActive : null]}
        cell={cell}
        onPress={cell.isExists && !cell.isFilled ? handleCellPress : undefined} // Dont need a handler if it doesn't exist
        key={cell.id}
      >
        {
          cell.isFilled && (
            <Unit
              id={cell.id}
              style={styles.unit}
              onPress={cell.isExists ? handleUnitPress : undefined}
            />
          )
        }
        {/* <View style={styles.coords}>{`y:${cell.y} x:${cell.x}`}</View> */}
      </Cell>
    );
  };

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
  coords: {
    color: 'white',
    position: 'absolute',
  },
  'cell:last-child': {
    marginRight: 0,
  },
  cellActive: {
    backgroundColor: '#ab92c3',
  },
  unit: {
    position: 'absolute',
  }
});
