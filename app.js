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
    menuToggler.classList.toggle('open')
    // topNav.classList.toggle('open')
  })

  modalButton.addEventListener('click', () => {
    modal.classList.toggle('is-active')
  })

  closeButton.addEventListener('click', () => {
    modal.classList.toggle('is-active')
  })
}

window.addEventListener('DOMContentLoaded', main)
