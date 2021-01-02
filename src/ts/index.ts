import { categories, cards } from './data';
import categoriesUIState from './state/categories_ui_state';
import blockoutUI from './ui/blockout_ui';
import burgerMenuUI from './ui/burger_menu_ui';
import categoriesUI from './ui/categories_ui';
import menuUI from './ui/menu_ui';
import toggleUI from './ui/toggle_ui';
import { createContentElement, createElement } from './ui/utils';

const categoriesElement = categoriesUI(
    categories.map((element, idx) => ({ title: element, cards: cards[idx] })),
);

categoriesUIState.element = categoriesElement;

document.body.append(
    createContentElement({
        type: 'header',
        attributes: {
            className: 'header',
        },
        children: [
            burgerMenuUI(),
            toggleUI(),
        ],
    }),
    createContentElement({
        type: 'main',
        attributes: {
            className: 'main',
        },
        children: [
            categoriesElement,
        ],
    }),
    createContentElement({
        type: 'footer',
        attributes: {
            className: 'footer',
        },
        children: [
            createContentElement({
                type: 'a',
                attributes: {
                    className: 'footer__logo',
                    href: 'https://rs.school/js/',
                },
                children: [
                    createElement({
                        type: 'img',
                        attributes: {
                            className: 'footer__img',
                            src: './src/assets/icons/rs_school_js.svg',
                            alt: 'rs school icon',
                        },
                    }),
                ],
            }),
            createElement({
                type: 'a',
                attributes: {
                    className: 'footer__author',
                    href: 'https://github.com/enthusiast17',
                    textContent: '@enthusiast17, 2020',
                },
            }),
        ],
    }),
    menuUI(
        categories.map((element, idx) => ({ title: element, cards: cards[idx] })),
    ),
    blockoutUI(),
);
