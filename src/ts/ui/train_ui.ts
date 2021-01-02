import { storeCard } from '../engine/storage';
import { ITrain } from '../interfaces';
import trainCardUI from './train_card_ui';
import { playAudio } from './utils';

const trainUI = (trainCards: ITrain[]): HTMLElement => {
    const trainElement = document.createElement('div');
    trainElement.className = 'train';
    trainElement.append(
        ...trainCards.map((element) => trainCardUI({
            className: `${trainElement.className}__card`,
            content: { title: element.title, translatedTitle: element.translatedTitle },
            img: { src: element.imgSrc, alt: element.title },
            audio: { src: element.audioSrc },
            onClick: (event) => {
                const currentElement = event.target as HTMLElement;
                if (currentElement.classList.contains('train__card-rotate')
                || currentElement.closest('.card_rotate') !== null) return;
                playAudio(element.audioSrc);
                storeCard({
                    word: element.title,
                    translation: element.translatedTitle,
                    trained: 1,
                    correct: 0,
                    incorrect: 0,
                    percentage: 0,
                });
            },
            onMouseLeave: (event) => {
                const currentCard = event.target as HTMLElement;
                currentCard.classList.remove('card_rotate');
            },
        })),
    );
    return trainElement;
};

export default trainUI;
