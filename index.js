let menuButton = document.querySelector('.menu')
let menuOpen = document.querySelector('.menu-open')

document.addEventListener('touchstart', function (event) {
  if (event.target.innerHTML === 'menu') {
    menuOpen.classList.toggle('hidden')
    if (!menuOpen.classList.contains('move-up')) {
      menuOpen.classList.add('move-up')
      menuOpen.classList.remove('move-down')
      menuButton.classList.add('menu-open-icon')
    } else {
      menuOpen.classList.add('move-down')
      menuOpen.classList.remove('move-up')
      menuButton.classList.remove('menu-open-icon')
    }
  }
})
