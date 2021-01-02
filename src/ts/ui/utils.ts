import { IContentElement, IElement } from '../interfaces';

const addEventListener = (element: HTMLElement, props: IElement | IContentElement): void => {
    const { attributes } = props;
    if (attributes.eventListener) {
        const [type, callback] = attributes.eventListener;
        if (type === 'click') element.addEventListener(type, callback);
        delete attributes.eventListener;
    }
};

const createElement = (props: IElement): HTMLElement => {
    const element = document.createElement(props.type);
    addEventListener(element, props);
    Object.assign(element, props.attributes);
    return element;
};

const createContentElement = (props: IContentElement): HTMLElement => {
    const element = document.createElement(props.type);
    Object.assign(element, props.attributes);
    if (props.children) {
        element.append(
            ...props.children,
        );
    }
    return element;
};

const replaceChildren = (parentClass: string, children: HTMLElement[]): void => {
    const parent = document.querySelector(parentClass);
    if (!parent) return;
    parent.innerHTML = '';
    parent.append(
        ...children,
    );
};

const makeMenuItemActive = (category: string): void => {
    const menuItems = [...document.querySelectorAll('.menu__list-item-link')];
    const activeMenuItem = menuItems.find((element) => element.classList.contains('menu__list-item-link_active'));
    const targetMenuItem = menuItems.find((element) => element.textContent === category);
    activeMenuItem?.classList.remove('menu__list-item-link_active');
    targetMenuItem?.classList.add('menu__list-item-link_active');
};

const playAudio = (src: string): void => {
    const audio = document.createElement('audio');
    audio.src = src;
    audio.play();
};

export {
    createElement,
    createContentElement,
    replaceChildren,
    makeMenuItemActive,
    playAudio,
};
