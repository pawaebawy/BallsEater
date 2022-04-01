import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { IButtonProps } from './types';
import s from './styles';

const Button: FC<IButtonProps> = (props) => {
    const { title, icon, color, navigation } = props;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={s.button}>
            <Text style={s.buttonText}>{ title }</Text>
        </TouchableOpacity>
    );
};

export default Button;
