/*
    Data
*/

interface ICard {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
}

interface ICategory {
    title: string,
    cards: ICard[],
}

interface ITrain {
    title: string,
    translatedTitle: string,
    imgSrc: string,
    audioSrc: string,
}

interface IPlay {
    title: string,
    imgSrc: string,
}

/*
    UI/Element
*/

interface ICategoryCardUI {
    className: string,
    content: {
        title: string,
    },
    img: {
        src: string,
        alt: string,
    },
    onClick: (this: HTMLElement, event: MouseEvent) => void,
}

interface ITrainCardUI {
    className: string,
    content: {
        title: string,
        translatedTitle: string,
    },
    img: {
        src: string,
        alt: string,
    },
    audio: {
        src: string,
    },
    onClick: (this: HTMLElement, event: MouseEvent) => void,
    onMouseLeave: (this: HTMLElement, event: MouseEvent) => void,
}

interface IPlayCardUI {
    className: string,
    img: {
        src: string,
        alt: string,
    },
    onClick: (this: HTMLElement, event: MouseEvent) => void,
}

interface IStartGameBtnUI {
    className: string,
    onClick: (this: HTMLElement, event: MouseEvent) => void,
}

interface IRepeatBtnUI {
    className: string,
    onClick: (this: HTMLElement, event: MouseEvent) => void,
}

/*
    Utils
*/

interface IElement {
    type: string,
    attributes: {
        type?: string,
        for?: string,
        className: string,
        src?:string,
        alt?: string,
        href?: string,
        textContent?: string,
        eventListener?: [string, (this: HTMLElement, event: MouseEvent) => void],
    },
}

interface IContentElement {
    type: string,
    attributes: {
        className: string,
        href?: string,
        eventListener?: [string, (this: HTMLElement, event: MouseEvent) => void],
    },
    children?: HTMLElement[],
}

/*
    States
*/

interface ICardsState {
    category: string,
    cards: ICard[],
    set: (props: {category?: string, cards?: ICard[]}) => void,
    restart: () => void,
}

interface IGameState {
    isStarted: boolean,
    currentIndex: number,
    cards: { wrongCount: number, card: ICard }[],
    set: (props: {
        isStarted?: boolean,
        currentIndex?: number,
        cards?:{ wrongCount: number, card: ICard }[]
    }) => void,
    restart: () => void,
}

/*
    Storage
*/

interface ICardStorage {
    category?: string,
    word: string,
    translation: string,
    trained: number,
    correct: number,
    incorrect: number,
    percentage: number,
}

export {
    ICard,
    ICategory,
    ITrain,
    IPlay,
    ICategoryCardUI,
    ITrainCardUI,
    IPlayCardUI,
    IStartGameBtnUI,
    IRepeatBtnUI,
    IElement,
    IContentElement,
    ICardsState,
    IGameState,
    ICardStorage,
};
