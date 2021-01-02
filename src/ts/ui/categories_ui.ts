import cardsState from '../state/cards_state';
import { ICategory } from '../interfaces';
import categoryCardUI from './category_card_ui';
import playUI from './play_ui';
import trainUI from './train_ui';
import { makeMenuItemActive, replaceChildren } from './utils';

const categoriesUI = (categories: ICategory[]): HTMLElement => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'category';
    categoryElement.append(
        ...categories.map((category) => categoryCardUI({
            className: `${categoryElement.className}__card`,
            content: {
                title: category.title,
            },
            img: {
                src: category.cards[0].image,
                alt: category.title,
            },
            onClick: () => {
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
                cardsState.set({ category: category.title, cards: category.cards });
            },
        })),
    );
    return categoryElement;
};

export default categoriesUI;
