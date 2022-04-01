import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { IGameButtonProps } from './types';
import s from './styles';

const GameButton: FC<IGameButtonProps> = (props) => {
    const { id, title, size, icon, darkMode, path, navigation } = props;

    return (
        <TouchableOpacity
            key={id}
            onPress={() => navigation.navigate('Play', {
                idLevel: id
            })}
            style={[
                s.button,
                darkMode ? s.darkBG : s.lightBG
            ]}
        >
            <Text
                style={[
                    s.buttonText,
                    darkMode ? s.darkText : s.lightText
                ]}
            >{ title }</Text>
        </TouchableOpacity>
    );
};

export default GameButton;
