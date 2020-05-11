function main() {
  const menuToggler = document.querySelector('.menu-toggler')
  const topNav = document.querySelector('.top-nav')
  const navLinkHome = document.querySelector('.nav-link.home')
  const navLinkAbout = document.querySelector('.nav-link.about')
  const navLinkSkills = document.querySelector('.nav-link.skills')
  const navLinkPortfolio = document.querySelector('.nav-link.portfolio')
  const navLinkContacts = document.querySelector('.nav-link.contacts')
  const modalButton = document.querySelector('.modal-button')
  const modal = document.querySelector('.modal')
  const closeButton = document.querySelector('.modal-close')

  menuToggler.addEventListener('click', () => {
    menuToggler.classList.toggle('open')
    topNav.classList.toggle('open')
  })

  navLinkHome.addEventListener('click', () => {
    menuToggler.classList.remove('open')
    topNav.classList.remove('open')
  })

  navLinkAbout.addEventListener('click', () => {
    menuToggler.classList.remove('open')
    topNav.classList.remove('open')
  })

  navLinkSkills.addEventListener('click', () => {
    menuToggler.classList.remove('open')
    topNav.classList.remove('open')
  })

  navLinkPortfolio.addEventListener('click', () => {
    menuToggler.classList.remove('open')
    topNav.classList.remove('open')
  })

  navLinkContacts.addEventListener('click', () => {
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
