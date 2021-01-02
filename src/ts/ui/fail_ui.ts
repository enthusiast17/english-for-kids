import { failureAudioSrc } from '../data';
import cardsState from '../state/cards_state';
import categoriesUIState from '../state/categories_ui_state';
import gameState from '../state/game_state';
import { createElement, playAudio, replaceChildren } from './utils';

const failUI = (): HTMLElement => {
    const failElement = document.createElement('div');
    failElement.className = 'fail';
    failElement.append(
        createElement({
            type: 'img',
            attributes: {
                className: `${failElement.className}__img`,
                src: './src/assets/data/img/pepe_crying.png',
                alt: 'fail',
            },
        }),
        createElement({
            type: 'h2',
            attributes: {
                className: `${failElement.className}__message`,
                textContent: `${gameState.cards.reduce((res, element) => res + element.wrongCount, 0)} incorrect answers`,
            },
        }),
    );
    playAudio(failureAudioSrc);
    setTimeout(() => {
        if (categoriesUIState.element) {
            replaceChildren('.main', [
                categoriesUIState.element,
            ]);
            cardsState.restart();
            gameState.restart();
        }
    }, 5000);
    return failElement;
};

export default failUI;
