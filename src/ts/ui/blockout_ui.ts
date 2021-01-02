const blockoutUI = (): HTMLElement => {
    const blockoutElement = document.createElement('div');
    blockoutElement.className = 'blockout';
    blockoutElement.addEventListener('click', () => {
        const menuUI = document.querySelector('.menu');
        const burgerMenuUI = document.querySelector('.burger-menu');
        if (!menuUI || !burgerMenuUI) return;
        const children = Array.from(burgerMenuUI.children);
        menuUI.classList.remove('menu_show');
        burgerMenuUI.classList.remove('burger-menu_white');
        children.forEach((element) => element.classList.remove('burger-menu__line_white'));
        blockoutElement.classList.remove('blockout_show');
    });
    return blockoutElement;
};

export default blockoutUI;
