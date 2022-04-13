// Settings: FORMAT ON SAVE
import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DraxProvider, DraxView } from 'react-native-drax';

import Cell from '@components/Cell/Cell';
import { Unit } from '@components/Unit/Unit';

import { fieldData, IFieldData } from './data';

const ROWS = 4;

const Field = () => {
  const [currentUnitId, setCurrentUnitId] = useState<string>();
  const [field, setField] = useState<IFieldData[]>([]);
  const [currentRow, setCurrentRow] = useState<number>();

  const { width } = Dimensions.get('screen');
  const PADDING = 15;
  const UNIT_WIDTH = (width - PADDING * 2) / ROWS;
  const UNIT_HEIGHT = UNIT_WIDTH; // The same sides = square

  useEffect(() => {
    // console.log(width);

    setField(fieldData);
  }, []);

  const handleCellPress = (cell: IFieldData) => {
    if (cell.isFilled) {
      setCurrentUnitId(cell.id);
    } else {
      if (field && currentUnitId) { // Есть данные поля, есть текущий выбранный unit, ячейка на которую ставим не заполненна
        const pickedUnit = field.find(item => item.id === currentUnitId);

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
              removableUnit.isFilled = false; // Remove unit between pickedUnit and choosenCell
              pickedUnit.isFilled = false; // Make the first choosen cell empty
              cell.isFilled = true; // Make the next cell filled

              setCurrentUnitId(undefined);
            }
          }
        }
      };
    }
  };

  const renderField = () => {
    let y = 0;

    return field.map((cell, i) => {
      let x = i % ROWS;

      if (x === 0 && i !== 0) y++;

      // console.log(`y:${y}`, `x:${x}`);

      return (
        <Cell
          style={[
            styles.cell,
            currentUnitId === cell.id ? styles.cellActive : null,
            {
              width: UNIT_WIDTH,
              height: UNIT_HEIGHT,
              top: UNIT_WIDTH * y,
              left: UNIT_WIDTH * x
            }
          ]}
          cell={cell}
          key={cell.id}
          onPress={cell.isExists ? handleCellPress : undefined} // Dont need a handler if it doesn't exist
        />
      );
    });
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
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: 600,
  },
  cell: {
    position: 'absolute',
    // zIndex: 1,
    // flex: 1,
    // padding: 3,
    // width: '100%',
    // height: 87,
    // borderWidth: 1,
    // marginRight: 5,
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
});