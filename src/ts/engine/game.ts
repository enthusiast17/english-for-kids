import { correctAudioSrc, errorAudioSrc } from '../data';
import { ICard } from '../interfaces';
import gameState from '../state/game_state';
import { playAudio } from '../ui/utils';
import randomizer from './randomizer';

const startGame = (cards: ICard[]): void => {
    gameState.set({
        isStarted: true,
        currentIndex: 0,
        cards: randomizer(cards).map((card) => ({ wrongCount: 0, card })),
    });
};

const playCardAudio = (ms: number = 0): void => {
    setTimeout(() => {
        if (gameState.cards[gameState.currentIndex] === undefined) return;
        playAudio(gameState.cards[gameState.currentIndex].card.audioSrc);
    }, ms);
};

const correctClick = (): void => {
    gameState.currentIndex += 1;
    playAudio(correctAudioSrc);
};

const wrongClick = (): void => {
    if (gameState.cards[gameState.currentIndex] === undefined) return;
    const currentCard = gameState.cards[gameState.currentIndex];
    currentCard.wrongCount += 1;
    playAudio(errorAudioSrc);
};

const isGameOver = (): boolean => {
    if (gameState.cards.length === 0) return false;
    return gameState.currentIndex >= gameState.cards.length;
};

const isSuccess = (): boolean => gameState.cards.reduce((res, element) => {
    const add = res + element.wrongCount;
    return add;
}, 0) === 0;

const isCorrectClick = (cardTitle: string): boolean => {
    if (gameState.cards[gameState.currentIndex] === undefined) return false;
    const currentCard = gameState.cards[gameState.currentIndex];
    return currentCard.card.word === cardTitle;
};

export {
    startGame,
    isGameOver,
    isCorrectClick,
    playCardAudio,
    correctClick,
    wrongClick,
    isSuccess,
};
