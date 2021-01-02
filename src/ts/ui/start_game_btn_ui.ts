import { IStartGameBtnUI } from '../interfaces';

const startGameBtnUI = (props: IStartGameBtnUI) => {
    const startGameBtnElement = document.createElement('button');
    startGameBtnElement.className = props.className;
    startGameBtnElement.textContent = 'Start game';
    startGameBtnElement.addEventListener('click', props.onClick);
    return startGameBtnElement;
};

export default startGameBtnUI;
