function main() {
  const menuToggler = document.querySelector('.menu-toggler')
  const topNav = document.querySelector('.top-nav')

  menuToggler.addEventListener('click', () => {
    console.log('hello')
    menuToggler.classList.toggle('open')
    topNav.classList.toggle('open')
  })
}

window.addEventListener('DOMContentLoaded', main)

// $(document).ready(function () {
//   $('.menu-toggler').on('click', function () {
//     $(this).toggleClass('open')
//     $('.top-nav').toggleClass('open')
