import { IGameState, ICard } from '../interfaces';

const gameState: IGameState = {
    isStarted: false,
    currentIndex: 0,
    cards: [],
    set: (props: {
        isStarted?: boolean,
        currentIndex?: number,
        cards?: { wrongCount: number, card: ICard }[]
    }): void => {
        if (props.isStarted !== undefined) gameState.isStarted = props.isStarted;
        if (props.currentIndex !== undefined) gameState.currentIndex = props.currentIndex;
        if (props.cards !== undefined) gameState.cards = props.cards;
    },
    restart: () => {
        gameState.isStarted = false;
        gameState.currentIndex = 0;
        gameState.cards = [];
    },
};

export default gameState;
