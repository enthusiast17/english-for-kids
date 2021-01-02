import { getCards, getDifficultCards } from '../engine/storage';
import { ICardStorage } from '../interfaces';
import cardsState from '../state/cards_state';
import gameState from '../state/game_state';
import playUI from './play_ui';
import trainUI from './train_ui';
import { createContentElement, createElement, replaceChildren } from './utils';

const columnNames = ['Category', 'Word', 'Translation', 'Trained', 'Correct', 'Incorrect', 'Percentage'];

export const resetColumnNames = (): void => {
    columnNames.forEach((name, index) => {
        if (name.includes('▲') || name.includes('▼')) {
            columnNames[index] = name.slice(0, name.length - 1);
        }
    });
};

const sortCardsAsc = (cards: ICardStorage[], key: string) => cards.sort(
    (a: any, b: any): number => {
        if (a[key.toLowerCase()] > b[key.toLowerCase()]) {
            return 1;
        }
        if (a[key.toLowerCase()] < b[key.toLowerCase()]) {
            return -1;
        }
        return 0;
    },
);

const sortCardsDesc = (cards: ICardStorage[], key: string) => cards.sort(
    (a: any, b: any): number => {
        if (a[key.toLowerCase()] > b[key.toLowerCase()]) {
            return -1;
        }
        if (a[key.toLowerCase()] < b[key.toLowerCase()]) {
            return 1;
        }
        return 0;
    },
);

const statisticsUI = (cards: ICardStorage[]): HTMLElement => {
    const statisticsElement = document.createElement('div');
    statisticsElement.className = 'statistics';
    statisticsElement.append(
        createContentElement({
            type: 'div',
            attributes: {
                className: `${statisticsElement.className}__btns`,
            },
            children: [
                createElement({
                    type: 'button',
                    attributes: {
                        className: `${statisticsElement.className}__train-difficult-btn`,
                        textContent: 'Train difficult',
                        eventListener: ['click', () => {
                            const toggleTitleElement = document.querySelector('.toggle__title');
                            const difficultCard = getDifficultCards();
                            if (toggleTitleElement?.textContent === 'Play') {
                                replaceChildren('.main', [
                                    playUI(difficultCard.map((card) => ({
                                        title: card.word,
                                        imgSrc: card.image,
                                    }))),
                                ]);
                            } else {
                                replaceChildren('.main', [
                                    trainUI(difficultCard.map((card) => ({
                                        title: card.word,
                                        translatedTitle: card.translation,
                                        imgSrc: card.image,
                                        audioSrc: card.audioSrc,
                                    }))),
                                ]);
                            }
                            cardsState.set({ category: 'Train difficult', cards: difficultCard });
                            gameState.restart();
                        }],
                    },
                }),
                createElement({
                    type: 'button',
                    attributes: {
                        className: `${statisticsElement.className}__reset-btn`,
                        textContent: 'Reset',
                        eventListener: ['click', () => {
                            localStorage.clear();
                            replaceChildren('.main', [
                                statisticsUI(getCards()),
                            ]);
                        }],
                    },
                }),
            ],
        }),
        createContentElement({
            type: 'div',
            attributes: {
                className: `${statisticsElement.className}__table-container`,
            },
            children: [
                createContentElement({
                    type: 'table',
                    attributes: {
                        className: `${statisticsElement.className}__table`,
                    },
                    children: [
                        createContentElement({
                            type: 'tr',
                            attributes: {
                                className: `${statisticsElement.className}__titles`,
                            },
                            children: columnNames.map((name) => createElement({
                                type: 'th',
                                attributes: {
                                    className: `${statisticsElement.className}__item`,
                                    textContent: name,
                                    eventListener: ['click', (event) => {
                                        const currentTitle = (
                                            event.currentTarget as HTMLElement
                                        ).textContent;
                                        if (!currentTitle) return;
                                        if (columnNames.some((element) => element !== currentTitle && (element.includes('▲') || element.includes('▼')))) {
                                            resetColumnNames();
                                        }
                                        let sortedCards = [];
                                        if (!currentTitle.includes('▲') && !currentTitle.includes('▼')) {
                                            sortedCards = sortCardsAsc(cards, currentTitle);
                                            columnNames[columnNames.indexOf(currentTitle)] = `${currentTitle}▲`;
                                        } else if (currentTitle.includes('▲')) {
                                            sortedCards = sortCardsDesc(cards, currentTitle.slice(
                                                0, currentTitle.length - 1,
                                            ));
                                            columnNames[columnNames.indexOf(currentTitle)] = `${currentTitle.slice(0, currentTitle.length - 1)}▼`;
                                        } else {
                                            sortedCards = getCards();
                                            columnNames[
                                                columnNames.indexOf(currentTitle)
                                            ] = currentTitle.slice(
                                                0, currentTitle.length - 1,
                                            );
                                        }
                                        replaceChildren('.main', [
                                            statisticsUI(sortedCards),
                                        ]);
                                    }],
                                },
                            })),
                        }),
                        ...cards.map((card) => createContentElement({
                            type: 'tr',
                            attributes: {
                                className: `${statisticsElement.className}__word`,
                            },
                            children: Object.values(card).map((value) => createElement({
                                type: 'td',
                                attributes: {
                                    className: `${statisticsElement.className}__item`,
                                    textContent: value,
                                },
                            })),
                        })),
                    ],
                }),
            ],
        }),
    );
    return statisticsElement;
};

export default statisticsUI;
