export interface ILevelData {
    /**
     * Идентификатор уровня.
     */
    id: number;
    /**
     * Состояние, определяющее закрытость уровня.
     */
    isClosed: boolean;
    /**
     * Состояние, определяющее пройденость уровня.
     */
    isCompleted: boolean;
    /**
     * Время прохождения уровня.
     */
    time: number | null;
    /**
     * Рейтинг прохождения уровня.
     */
    rating: number | null;
}

export interface ILevelNeedToComplete extends ILevelData {
    /**
     * Нужно точек для завершения уровня.
     */
    needPointsToComplete: number;
    /**
     * Нужно времени для завершения уровня.
     */
    needTimeToComplete: number;
}

export interface ILevelCardProps extends ILevelData {
    navigation: any;
}