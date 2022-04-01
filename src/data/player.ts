export interface IPlayer {
    /**
     * Идентификатор игрока.
     */
    id: number;
    /**
     * Текущий уровень игрока.
     */
    currentLevel: number;
}

const player: IPlayer = {
    id: 1,
    currentLevel: 3
}

export { player };