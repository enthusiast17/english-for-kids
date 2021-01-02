import { IRepeatBtnUI } from '../interfaces';

const repeatBtnUI = (props: IRepeatBtnUI) => {
    const repeatBtnElement = document.createElement('button');
    repeatBtnElement.className = props.className;
    repeatBtnElement.textContent = 'Repeat word';
    repeatBtnElement.addEventListener('click', props.onClick);
    return repeatBtnElement;
};

export default repeatBtnUI;
