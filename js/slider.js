(function () {
    const sliders = [...document.querySelectorAll('.novedades__body')];
    const buttonNext = document.querySelector('#next')
    const buttonBefore = document.querySelector('#before')

    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });
    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentNovedades = document.querySelector('.novedades__body--show').dataset.id
        value = Number(currentNovedades);
        value += add;

        sliders[Number(currentNovedades) - 1].classList.remove('novedades__body--show')
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('novedades__body--show');
    }

})();