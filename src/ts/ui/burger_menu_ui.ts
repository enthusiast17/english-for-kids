import { createElement } from './utils';

export const menuAction = () => {
    const menuUI = document.querySelector('.menu');
    const blockoutUI = document.querySelector('.blockout');
    const burgerMenuElement = document.querySelector('.burger-menu');
    if (!menuUI || !blockoutUI || !burgerMenuElement) return;
    const children = Array.from(burgerMenuElement.children);
    if (!menuUI?.classList.contains('menu_show')) {
        document.body.classList.add('stop-scrolling');
        menuUI?.classList.add('menu_show');
        setTimeout(() => {
            burgerMenuElement.classList.add('burger-menu_white');
            children.forEach((element) => element.classList.add('burger-menu__line_white'));
            blockoutUI?.classList.add('blockout_show');
        }, 500);
    } else {
        menuUI?.classList.remove('menu_show');
        blockoutUI?.classList.remove('blockout_show');
        burgerMenuElement.classList.remove('burger-menu_white');
        children.forEach((element) => element.classList.remove('burger-menu__line_white'));
        document.body.classList.remove('stop-scrolling');
    }
};

const burgerMenuUI = (): HTMLElement => {
    const burgerMenuElement = document.createElement('div');
    burgerMenuElement.className = 'burger-menu';
    burgerMenuElement.append(
        ...Array.from(Array(3).keys()).map(() => createElement({
            type: 'span',
            attributes: {
                className: `${burgerMenuElement.className}__line`,
            },
        })),
    );
    let blockout = false;
    burgerMenuElement.addEventListener('click', () => {
        if (!blockout) {
            menuAction();
            blockout = true;
            setTimeout(() => {
                blockout = false;
            }, 500);
        }
    });
    return burgerMenuElement;
};

export default burgerMenuUI;
