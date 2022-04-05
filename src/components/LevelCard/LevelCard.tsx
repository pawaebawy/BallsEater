import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { GameButton } from '@components/index'
import { ILevelCardProps } from './types';
import s from './styles';

const secondsToMinutes = (time: number) => {
    if (time) {
        let seconds: number | string = time % 60;
        if (seconds === 0) seconds = '00'
        let minutes = time > 60 ? Math.trunc(time / 60) : 0;
        return minutes + ':' + seconds
    }
}

const LevelCard: FC<ILevelCardProps> = (props) => {
    const { navigation, player, id, isClosed, isCompleted, time, rating } = props;

    const checkCurrentLevel = () => {
        if (id === player.currentLevel) {
            return (
                <GameButton
                    id={id}
                    title={'Играть'}
                    size={'small'}
                    darkMode={true}
                    path={'Play'}
                    navigation={navigation}
                />
            )
        } else {
            return (
                <GameButton
                    id={id}
                    title={'Повторить'}
                    size={'small'}
                    darkMode={true}
                    path={'Play'}
                    navigation={navigation}
                />
            )
        }
    }

    const checkLevel = () => {
        if (isCompleted) {
            if (time && rating) {
                return (
                    <View>
                        <Text style={s.levelCardInfo}>Время: {secondsToMinutes(time)}</Text>
                        <Text style={s.levelCardInfo}>Рейтинг: {rating}</Text>
                    </View>
                )
            }
        } else {
            if (isClosed) {
                return (
                    <Text style={s.levelCardInfo}>Уровень закрыт</Text>
                )
            }
        }
    }

    return (
        <View key={id} style={s.levelCard}>
            <Text style={s.levelCardInfo}>Уровень {id}</Text>
            {checkLevel()}
            {!isClosed && checkCurrentLevel()}
        </View>
    );
};

export default LevelCard;
