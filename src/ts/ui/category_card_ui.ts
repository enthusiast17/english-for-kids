import { ICategoryCardUI } from '../interfaces';
import { createContentElement, createElement } from './utils';

const categoryCardUI = (props: ICategoryCardUI): HTMLElement => {
    const cardElement = document.createElement('div');
    cardElement.className = props.className;
    const parentClassName = props.className.split('__')[0];
    cardElement.append(
        createContentElement({
            type: 'div',
            attributes: { className: `${parentClassName}__card-content` },
            children: [
                createElement({
                    type: 'h2',
                    attributes: { className: `${parentClassName}__card-title`, textContent: props.content.title },
                }),
            ],
        }),
        createElement({
            type: 'img',
            attributes: { className: `${parentClassName}__card-img`, src: props.img.src, alt: props.img.alt },
        }),
    );
    cardElement.addEventListener('click', props.onClick);
    return cardElement;
};

export default categoryCardUI;
