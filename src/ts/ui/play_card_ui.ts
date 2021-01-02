import { IPlayCardUI } from '../interfaces';
import { createElement } from './utils';

const playCardUI = (props: IPlayCardUI): HTMLElement => {
    const playCardElement = document.createElement('div');
    playCardElement.className = props.className;
    const parentClassName = props.className.split('__')[0];
    playCardElement.append(
        createElement({
            type: 'img',
            attributes: {
                className: `${parentClassName}__card-img`,
                src: props.img.src,
                alt: props.img.alt,
            },
        }),
    );
    playCardElement.addEventListener('click', props.onClick);
    return playCardElement;
};

export default playCardUI;
