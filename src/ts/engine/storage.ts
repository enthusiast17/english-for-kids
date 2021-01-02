import { cards, categories } from '../data';
import { ICard, ICardStorage } from '../interfaces';

const storeCard = (props: ICardStorage): void => {
    const card = localStorage.getItem(props.word);
    if (card) {
        const cardObject: ICardStorage = JSON.parse(card);
        cardObject.trained += props.trained;
        cardObject.correct += props.correct;
        cardObject.incorrect += props.incorrect;
        if (cardObject.correct > 0 || cardObject.incorrect > 0) {
            const percentage = (
                (100 / (cardObject.correct + cardObject.incorrect)) * cardObject.incorrect
            );
            cardObject.percentage = parseFloat(percentage.toFixed(2));
        }
        localStorage.setItem(props.word, JSON.stringify(cardObject));
    } else {
        const propsCopy = { ...props };
        if (propsCopy.correct > 0 || propsCopy.incorrect > 0) {
            const percentage = (
                (100 / (propsCopy.correct + propsCopy.incorrect)) * propsCopy.incorrect
            );
            propsCopy.percentage = parseFloat(percentage.toFixed(2));
        }
        localStorage.setItem(props.word, JSON.stringify(propsCopy));
    }
};

const getCards = (): ICardStorage[] => {
    const cardObjects: ICard[] = cards.reduce((res, card) => [...res, ...card], []);
    let categoryIndex = 0;
    return cardObjects.map((card, index) => {
        if (index !== 0 && index % 8 === 0) categoryIndex += 1;
        const storedCard = localStorage.getItem(card.word);
        if (storedCard) {
            return {
                category: categories[categoryIndex],
                ...JSON.parse(storedCard),
            };
        }
        return {
            category: categories[categoryIndex],
            word: card.word,
            translation: card.translation,
            trained: 0,
            correct: 0,
            incorrect: 0,
            percentage: 0,
        };
    });
};

const getDifficultCards = (): ICard[] => {
    const cardObjects: ICard[] = cards.reduce((res, card) => [...res, ...card], []);
    const storedCards = getCards().filter((card) => card.percentage > 0).sort((a, b): number => {
        if (a.percentage > b.percentage) {
            return -1;
        }
        if (a.percentage < b.percentage) {
            return 1;
        }
        return 0;
    });
    const eightCard = storedCards.slice(0, 8);
    return cardObjects.filter((card) => eightCard.some((element) => element.word === card.word));
};

export {
    storeCard,
    getCards,
    getDifficultCards,
};
