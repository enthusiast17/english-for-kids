import { successAudioSrc } from '../data';
import cardsState from '../state/cards_state';
import categoriesUIState from '../state/categories_ui_state';
import gameState from '../state/game_state';
import { createElement, playAudio, replaceChildren } from './utils';

const successUI = (): HTMLElement => {
    const successElement = document.createElement('div');
    successElement.className = 'success';
    successElement.append(
        createElement({
            type: 'img',
            attributes: {
                className: `${successElement.className}__img`,
                src: './src/assets/data/img/pepe_happy.png',
                alt: 'success',
            },
        }),
    );
    playAudio(successAudioSrc);
    setTimeout(() => {
        if (categoriesUIState.element) {
            replaceChildren('.main', [
                categoriesUIState.element,
            ]);
            cardsState.restart();
            gameState.restart();
        }
    }, 3000);
    return successElement;
};

export default successUI;
