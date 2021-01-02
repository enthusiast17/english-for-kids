const progressUI = (): HTMLElement => {
    const progressElement = document.createElement('div');
    progressElement.className = 'progress';
    return progressElement;
};

const addStar = (isColored: boolean): void => {
    const progressElement = document.querySelector('.progress');

    if (progressElement) {
        const starElement = document.createElement('img');
        starElement.className = 'progress__star';
        if (isColored) {
            starElement.src = './src/assets/data/img/star-win.svg';
            starElement.alt = 'colored star';
        } else {
            starElement.src = './src/assets/data/img/star.svg';
            starElement.alt = 'uncoloder star';
        }
        progressElement.prepend(
            starElement,
        );
    }
};

export {
    progressUI,
    addStar,
};
