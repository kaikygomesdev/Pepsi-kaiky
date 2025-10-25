/*MUDANDO AS PEPSIS*/

function imgSlider(anything) {
  document.querySelector(".pepsi").src = anything;
}

/*MUDANCO A COR DO BACKGROUD*/

function chanceBgColor(color) {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
}


/*MENU*/
function menuToggle(){
  const toggleMenu = document.querySelector('.toggleMenu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active')
  navigation.classList.toggle('active')
}
