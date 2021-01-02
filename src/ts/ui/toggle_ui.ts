import cardsState from '../state/cards_state';
import gameState from '../state/game_state';
import playUI from './play_ui';
import trainUI from './train_ui';
import { createElement, replaceChildren } from './utils';

const toggleUI = (): HTMLElement => {
    const toggleElement = document.createElement('div');
    toggleElement.className = 'toggle';
    toggleElement.append(
        createElement({
            type: 'input',
            attributes: {
                type: 'checkbox',
                className: `${toggleElement.className}__button`,
                eventListener: ['click', (event) => {
                    const label = (event.target as HTMLElement).parentElement?.children[1];
                    if (label) {
                        if ((event.target as HTMLInputElement).checked) {
                            label.textContent = 'Play';
                            if (document.querySelector('.train') && cardsState.cards && cardsState.cards.length !== 0) {
                                replaceChildren('.main', [
                                    playUI(cardsState.cards.map((card) => ({
                                        title: card.word,
                                        imgSrc: card.image,
                                    }))),
                                ]);
                            }
                        } else {
                            label.textContent = 'Train';
                            if (document.querySelector('.play') && cardsState.cards && cardsState.cards.length !== 0) {
                                replaceChildren('.main', [
                                    trainUI(cardsState.cards.map((card) => ({
                                        title: card.word,
                                        translatedTitle: card.translation,
                                        imgSrc: card.image,
                                        audioSrc: card.audioSrc,
                                    }))),
                                ]);
                            }
                            gameState.restart();
                        }
                    }
                }],
            },
        }),
        createElement({
            type: 'label',
            attributes: {
                for: `${toggleElement.className}__button`,
                className: `${toggleElement.className}__title`,
                textContent: 'Train',
            },
        }),
    );
    return toggleElement;
};

export default toggleUI;
