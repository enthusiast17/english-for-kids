import { ITrainCardUI } from '../interfaces';
import { createContentElement, createElement } from './utils';

const trainCardUI = (props: ITrainCardUI): HTMLElement => {
    const trainCardElement = document.createElement('div');
    trainCardElement.className = props.className;
    const parentClassName = props.className.split('__')[0];
    trainCardElement.append(
        createContentElement({
            type: 'div',
            attributes: { className: `${parentClassName}__card-front` },
            children: [
                createContentElement({
                    type: 'div',
                    attributes: { className: `${parentClassName}__card-content` },
                    children: [
                        createElement({
                            type: 'h2',
                            attributes: { className: `${parentClassName}__card-title`, textContent: props.content.title },
                        }),
                        createElement({
                            type: 'button',
                            attributes: {
                                className: `${parentClassName}__card-rotate`,
                                eventListener: ['click', () => {
                                    trainCardElement.classList.add('card_rotate');
                                }],
                            },
                        }),
                    ],
                }),
                createElement({
                    type: 'img',
                    attributes: { className: `${parentClassName}__card-img`, src: props.img.src, alt: props.img.alt },
                }),
            ],
        }),
        createContentElement({
            type: 'div',
            attributes: { className: `${parentClassName}__card-back` },
            children: [
                createContentElement({
                    type: 'div',
                    attributes: { className: `${parentClassName}__card-content` },
                    children: [
                        createElement({
                            type: 'h2',
                            attributes: { className: `${parentClassName}__card-title`, textContent: props.content.translatedTitle },
                        }),
                    ],
                }),
                createElement({
                    type: 'img',
                    attributes: { className: `${parentClassName}__card-img`, src: props.img.src, alt: props.img.alt },
                }),
            ],
        }),
    );
    trainCardElement.addEventListener('click', props.onClick);
    trainCardElement.addEventListener('mouseleave', props.onMouseLeave);
    return trainCardElement;
};

export default trainCardUI;
