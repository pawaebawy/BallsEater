import { Unit } from '@components/Unit/Unit';
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { DraxProvider, DraxView } from 'react-native-drax';


import { IFieldData, ICellData, CellStyle } from '../Field/data';

interface Props {
  isActive?: boolean,
  cell: ICellData,
  style?: object,
  handleCellPull?: (y: number) => void,
  onPress?: (cell: ICellData) => void,
  onStartDragging?: (cell: ICellData) => void,
  onFinishDragging?: () => void,
}

const Cell: React.FC<Props> = props => {
  const { cell, style, children, onPress, isActive, handleCellPull, onFinishDragging, onStartDragging } = props;
  const isExists = cell?.isExists;
  const x = cell?.x;
  const y = cell?.y;
  const id = cell?.id;

  // const onPressHandler = () => {
  //   if (onPress && cell) onPress(cell);
  // };

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const myIndex = useSharedValue(-1);

  const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { myIndex: number, startX: number, startY: number }>({
    onStart: (_, ctx) => {
      ctx.myIndex = myIndex.value;
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;

      // handleCellPull && y && handleCellPull(y);

      if (cell && onStartDragging) onStartDragging(cell);
    },
    onActive: (event, ctx) => {
      myIndex.value = ctx.myIndex + 1;
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      setTimeout(() => myIndex.value = -1, 500);

      if (onFinishDragging) onFinishDragging();
    },
  });

  const animatedTransformStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const animatedLayerStyle = useAnimatedStyle(() => {
    return {
      zIndex: myIndex.value,
    };
  });


  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.root, !isExists ? styles.notExist : null, style, animatedLayerStyle]}>
        <View style={[styles.inner, isActive ? styles.active : null, cell?.style === CellStyle.Accepted ? styles.accepted : null]}>
          {cell.isFilled && (
            <Animated.View style={[animatedTransformStyle, { width: "100%", height: "100%" }]}>
              <Unit id={cell.id} />

            </Animated.View>
          )}
          <Text style={styles.coords}>{`x:${x + ';y:' + y}`}</Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
  // return (
  //   <View style={[styles.root, !isExists ? styles.notExist : null, style]}>

  //     <DraxProvider>
  //       <View style={styles.inner}>
  //         {cell.isFilled && (

  //           <DraxView style={[{ width: "100%", height: "100%" }]}
  //             dragPayload={'R'}
  //             longPressDelay={0}
  //             onDragStart={() => { console.log('start drag'); }}
  //           >
  //             <Unit id={cell.id} />
  //           </DraxView>

  //         )}
  //       </View>
  //     </DraxProvider>
  //   </View>
  // );
};

export default Cell;

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    padding: 3,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#a09e84',
  },
  notExist: {
    opacity: 0,
  },
  accepted: {
    backgroundColor: '#89d48e',
  },
  active: {
    backgroundColor: '#ab92c3',
  },
  coords: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{
      translateX: '-50%',
      translateY: '-50%',
    }],
    color: 'white',
    fontWeight: 600,
  }
});