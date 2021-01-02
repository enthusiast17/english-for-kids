import { getCards } from '../engine/storage';
import { ICategory, IContentElement, IElement } from '../interfaces';
import cardsState from '../state/cards_state';
import gameState from '../state/game_state';
import { menuAction } from './burger_menu_ui';
import categoriesUI from './categories_ui';
import playUI from './play_ui';
import statisticsUI, { resetColumnNames } from './statistics_ui';
import trainUI from './train_ui';
import {
    createContentElement,
    createElement,
    makeMenuItemActive,
    replaceChildren,
} from './utils';

const createMenuItem = (content: IContentElement,
    child: IElement): HTMLElement => createContentElement({
    type: content.type,
    attributes: { className: content.attributes.className },
    children: [
        createElement({
            type: child.type,
            attributes: {
                className: child.attributes.className,
                textContent: child.attributes.textContent,
                eventListener: child.attributes.eventListener,
            },
        }),
    ],
});

const menuUI = (categories: ICategory[]): HTMLElement => {
    const menuElement = document.createElement('div');
    menuElement.className = 'menu';
    menuElement.append(
        createContentElement({
            type: 'ul',
            attributes: {
                className: `${menuElement.className}__list`,
            },
            children: [
                createMenuItem({
                    type: 'li',
                    attributes: { className: `${menuElement.className}__list-item` },
                },
                {
                    type: 'span',
                    attributes: {
                        className: `${menuElement.className}__list-item-link menu__list-item-link_active`,
                        textContent: 'Main page',
                        eventListener: ['click', () => {
                            replaceChildren('.main', [
                                categoriesUI(categories),
                            ]);
                            makeMenuItemActive('Main page');
                            menuAction();
                            cardsState.restart();
                            gameState.restart();
                        }],
                    },
                }),
                ...categories.map((category) => createMenuItem({
                    type: 'li',
                    attributes: { className: `${menuElement.className}__list-item` },
                },
                {
                    type: 'span',
                    attributes: {
                        className: `${menuElement.className}__list-item-link`,
                        textContent: category.title,
                        eventListener: ['click', () => {
                            const toggleTitleElement = document.querySelector('.toggle__title');
                            if (toggleTitleElement?.textContent === 'Play') {
                                replaceChildren('.main', [
                                    playUI(category.cards.map((card) => ({
                                        title: card.word,
                                        imgSrc: card.image,
                                    }))),
                                ]);
                            } else {
                                replaceChildren('.main', [
                                    trainUI(category.cards.map((card) => ({
                                        title: card.word,
                                        translatedTitle: card.translation,
                                        imgSrc: card.image,
                                        audioSrc: card.audioSrc,
                                    }))),
                                ]);
                            }
                            makeMenuItemActive(category.title);
                            menuAction();
                            cardsState.set({ category: category.title, cards: category.cards });
                            gameState.restart();
                        }],
                    },
                })),
                createMenuItem({
                    type: 'li',
                    attributes: { className: `${menuElement.className}__list-item` },
                },
                {
                    type: 'span',
                    attributes: {
                        className: `${menuElement.className}__list-item-link`,
                        textContent: 'Statistics',
                        eventListener: ['click', () => {
                            resetColumnNames();
                            replaceChildren('.main', [
                                statisticsUI(getCards()),
                            ]);
                            makeMenuItemActive('Statistics');
                            menuAction();
                            cardsState.restart();
                            gameState.restart();
                        }],
                    },
                }),
            ],
        }),
    );
    return menuElement;
};

export default menuUI;
