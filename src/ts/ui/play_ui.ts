import {
    correctClick,
    isCorrectClick,
    isGameOver,
    isSuccess,
    playCardAudio,
    startGame,
    wrongClick,
} from '../engine/game';
import { storeCard } from '../engine/storage';
import { IPlay } from '../interfaces';
import cardsState from '../state/cards_state';
import gameState from '../state/game_state';
import failUI from './fail_ui';
import playCardUI from './play_card_ui';
import { addStar, progressUI } from './progress_ui';
import repeatBtnUI from './repeat_btn_ui';
import startGameBtnUI from './start_game_btn_ui';
import successUI from './success_ui';
import { createContentElement, makeMenuItemActive, replaceChildren } from './utils';

const playUI = (playCards: IPlay[]): HTMLElement => {
    const playElement = document.createElement('div');
    playElement.className = 'play';
    playElement.append(
        progressUI(),
        createContentElement({
            type: 'div',
            attributes: { className: `${playElement.className}__card-container` },
            children: playCards.map((card) => playCardUI({
                className: `${playElement.className}__card`,
                img: { src: card.imgSrc, alt: card.title },
                onClick: (event) => {
                    const currentPlayCard = (event.currentTarget as HTMLElement);
                    if (!gameState.isStarted || currentPlayCard.classList.contains('card_correct')) return;
                    if (isCorrectClick(card.title)) {
                        currentPlayCard.classList.add('card_correct');
                        correctClick();
                        playCardAudio(1000);
                        addStar(true);
                    } else {
                        wrongClick();
                        addStar(false);
                    }

                    if (isGameOver()) {
                        gameState.cards.forEach((element) => storeCard({
                            word: element.card.word,
                            translation: element.card.translation,
                            trained: 0,
                            correct: 1,
                            incorrect: element.wrongCount,
                            percentage: 0,
                        }));
                        if (isSuccess()) {
                            replaceChildren('.main', [
                                successUI(),
                            ]);
                        } else {
                            replaceChildren('.main', [
                                failUI(),
                            ]);
                        }
                        makeMenuItemActive('Main page');
                    }
                },
            })),
        }),
        createContentElement({
            type: 'div',
            attributes: { className: `${playElement.className}__btn-container` },
            children: [
                startGameBtnUI({
                    className: `${playElement.className}__start-game-btn`,
                    onClick: (event) => {
                        const startGameBtnElement = event.target as HTMLElement;
                        const repeatBtnElement = document.querySelector(`.${playElement.className}__repeat-btn`);
                        if (!repeatBtnElement) return;
                        startGame(cardsState.cards);
                        playCardAudio();
                        startGameBtnElement.classList.add('hide_btn');
                        repeatBtnElement.classList.add('show_btn');
                    },
                }),
                repeatBtnUI({
                    className: `${playElement.className}__repeat-btn`,
                    onClick: () => {
                        playCardAudio();
                    },
                }),
            ],
        }),
    );
    return playElement;
};

export default playUI;
