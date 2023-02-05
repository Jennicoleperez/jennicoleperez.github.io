const menu = document.querySelector('.menu')
const links = document.querySelector('.links')

menu.addEventListener('click', () => {
    menu.classList.menu('rotate')
    links.classList.menu('activar')
})

