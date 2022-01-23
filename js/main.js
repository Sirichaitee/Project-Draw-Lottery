let menuButton = document.getElementById('mobileMenuButton');
let mainMenu = document.getElementById('mainMenu');

function openMenu() {
  if ( mainMenu.classList.contains('opened') ) {
    mainMenu.classList.remove('opened');
  } else {
    mainMenu.classList.add('opened');
  }
}