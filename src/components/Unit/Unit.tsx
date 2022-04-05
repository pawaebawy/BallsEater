import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, LayoutChangeEvent, GestureResponderEvent } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface ICoordsData {
  top: number,
  left: number,
  data: any,
}

interface IUnitProps {
  id: string,
  style?: object,
  onPress?: (e: GestureResponderEvent, coords: ICoordsData, id: string) => void,
}

const Unit: React.FC<IUnitProps> = props => {
  const { id, style, onPress } = props;

  const [coords, setCoords] = useState<ICoordsData>();

  const layoutHandler = (e: any) => {
    const top = e.nativeEvent.layout.top;
    const left = e.nativeEvent.layout.left;

    setCoords({ top, left, data: e.nativeEvent });
  };

  const onPressHandler = (e: GestureResponderEvent) => {
    if (coords && onPress) onPress(e, coords, id);
  }

  return (
    <TouchableWithoutFeedback onPress={coords ? onPressHandler : undefined} onLayout={layoutHandler} >
      <View style={[
        styles.root,
        style,
        {
          position: 'absolute',
          top: coords?.data.x,
          left: coords?.data.y,
        }
      ]}>
        <View style={styles.inner}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export {
  Unit,
  ICoordsData
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