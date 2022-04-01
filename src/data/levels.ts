import { ILevelData } from '@components/LevelCard/types';

const levels: ILevelData[] = [
    {
        id: 1,
        isClosed: false,
        isCompleted: true,
        time: 300,
        rating: 3
    },
    {
        id: 2,
        isClosed: false,
        isCompleted: true,
        time: 12,
        rating: 3
    },
    {
        id: 3,
        isClosed: false,
        isCompleted: true,
        time: 399,
        rating: 1
    },
    {
        id: 4,
        isClosed: true,
        isCompleted: false,
        time: null,
        rating: null
    },
    {
        id: 5,
        isClosed: true,
        isCompleted: false,
        time: null,
        rating: null
    },
    {
        id: 6,
        isClosed: true,
        isCompleted: false,
        time: null,
        rating: null
    },
    {
        id: 7,
        isClosed: true,
        isCompleted: false,
        time: null,
        rating: null
    },
]

export { levels };
