const showButton = document.querySelector('.main__show_hidden')
const hiddenBlock = document.querySelector('.main__hidden')

showButton.onclick = () => {
    if (showButton.classList[0] == 'main__show_hidden') {
        showButton.classList.remove('main__show_hidden')
        showButton.classList.add('main__show_shown')
        hiddenBlock.style.display = 'grid'
        showButton.textContent = 'Скрыть'
    } else {
        showButton.classList.remove('main__show_shown')
        showButton.classList.add('main__show_hidden')
        hiddenBlock.style.display = 'none'
        showButton.textContent = 'Показать все'
    }
}