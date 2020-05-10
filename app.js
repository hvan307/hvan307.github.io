function main() {
  const menuToggler = document.querySelector('.menu-toggler')
  const topNav = document.querySelector('.top-nav')

  menuToggler.addEventListener('click', () => {
    menuToggler.classList.toggle('open')
    topNav.classList.toggle('open')
  })
}

window.addEventListener('DOMContentLoaded', main)
