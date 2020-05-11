function main() {
  const menuToggler = document.querySelector('.menu-toggler')
  const topNav = document.querySelector('.top-nav')
  const navLink = document.querySelector('.nav-link')
  const modalButton = document.querySelector('.modal-button')
  const modal = document.querySelector('.modal')
  const closeButton = document.querySelector('.modal-close')

  menuToggler.addEventListener('click', () => {
    menuToggler.classList.toggle('open')
    topNav.classList.toggle('open')
  })

  navLink.addEventListener('click', () => {
    menuToggler.classList.remove('open')
    topNav.classList.remove('open')
  })

  modalButton.addEventListener('click', () => {
    modal.classList.toggle('is-active')
  })

  closeButton.addEventListener('click', () => {
    modal.classList.toggle('is-active')
  })

  AOS.init({
    easing: 'ease',
    duration: 1800,
    startEvent: 'DOMContentLoaded'
  }) 
}

window.addEventListener('DOMContentLoaded', main)
