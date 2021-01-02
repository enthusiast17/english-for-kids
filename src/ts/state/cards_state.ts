import { ICard, ICardsState } from '../interfaces';

const cardsState: ICardsState = {
    category: '',
    cards: [],
    set: (props: { category?: string, cards?: ICard[] }): void => {
        cardsState.category = props.category || cardsState.category;
        cardsState.cards = props.cards || cardsState.cards;
    },
    restart: (): void => {
        cardsState.category = '';
        cardsState.cards = [];
    },
};

export default cardsState;
