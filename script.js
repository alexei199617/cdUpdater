const navbar = document.querySelector('.navbar');
const char = document.querySelector('.char');
const sectNewChar = document.querySelector('.sectNewChar');
const newCharBtnBox = document.querySelector('.newCharBtnBox');

// const petCard1 = document.getElementById('petCard1');

navbar.addEventListener('click', () => {
  let et = event.target;
  if (et.classList.contains('navBtn') == true) {
    console.log(et.id)
  }
});

char.addEventListener('click', () => {
  let et = event.target;
  if (et.classList.contains('new') == true) {
    // console.log('gg')
    sectNewChar.classList.remove('dNone');
  }
});
newCharBtnBox.addEventListener('click', () => {
  let et = event.target;
  // console.log(et.classList);
  if (et.classList.contains('close') == true) {
    // console.log('close')
    sectNewChar.classList.add('dNone');
  }
});
