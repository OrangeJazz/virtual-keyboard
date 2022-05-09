// import keysArr from './js/keyCodes.js';
let keys;
let capsLock;
let text;
let lang;
let shiftStatus;
let capsStatus;
const body = document.querySelector('body');
let letter = '';
const keyboardStatus = {
  shiftOn: false,
  altOn: false,
  ctrlOn: false,
  uppercase: false,
  capsOn: false,
  lang: 'en',
  langs: ['en', 'ru'],
};
let langNum = keyboardStatus.langs.indexOf(keyboardStatus.lang);
const ru = [
  ['ё', 'Ё'],
  ['1', '!'],
  ['2', '"'],
  ['3', '№'],
  ['4', ';'],
  ['5', '%'],
  ['6', ':'],
  ['7', '?'],
  ['8', '*'],
  ['9', '('],
  ['0', ')'],
  ['-', '_'],
  ['=', '+'],
  ['Backspace'],
  ['Tab'],
  ['й', 'Й'],
  ['ц', 'Ц'],
  ['у', 'У'],
  ['к', 'К'],
  ['е', 'Е'],
  ['н', 'Н'],
  ['г', 'Г'],
  ['ш', 'Ш'],
  ['щ', 'Щ'],
  ['з', 'З'],
  ['х', 'Х'],
  ['ъ', 'Ъ'],
  ['Delete'],
  ['Caps Lock'],
  ['ф', 'Ф'],
  ['ы', 'Ы'],
  ['в', 'В'],
  ['а', 'А'],
  ['п', 'П'],
  ['р', 'Р'],
  ['о', 'О'],
  ['л', 'Л'],
  ['д', 'Д'],
  ['ж', 'Ж'],
  ['э', 'Э'],
  ['\\', '|'],
  ['Enter'],
  ['Shift'],
  ['я', 'Я'],
  ['ч', 'Ч'],
  ['с', 'С'],
  ['м', 'М'],
  ['и', 'И'],
  ['т', 'Т'],
  ['ь', 'Ь'],
  ['б', 'Б'],
  ['ю', 'Ю'],
  ['.', ','],
  ['Up'],
  ['Shift'],
  ['Ctrl'],
  ['Alt'],
  [' '],
  ['Alt'],
  ['Ctrl'],
  ['Left'],
  ['Down'],
  ['Right'],
];
const en = [
  ['`', '~'],
  ['1', '!'],
  ['2', '@'],
  ['3', '#'],
  ['4', '$'],
  ['5', '%'],
  ['6', '^'],
  ['7', '&'],
  ['8', '*'],
  ['9', '('],
  ['0', ')'],
  ['-', '_'],
  ['=', '+'],
  ['Backspace'],
  ['Tab'],
  ['q', 'Q'],
  ['w', 'W'],
  ['e', 'E'],
  ['r', 'R'],
  ['t', 'T'],
  ['y', 'Y'],
  ['u', 'U'],
  ['i', 'I'],
  ['o', 'O'],
  ['p', 'P'],
  ['[', '{'],
  [']', '}'],
  ['Delete'],
  ['Caps Lock'],
  ['a', 'A'],
  ['s', 'S'],
  ['d', 'D'],
  ['f', 'F'],
  ['g', 'G'],
  ['h', 'H'],
  ['j', 'J'],
  ['k', 'K'],
  ['l', 'L'],
  [';', ':'],
  ["'", '"'],
  ['\\', '|'],
  ['Enter'],
  ['Shift'],
  ['z', 'Z'],
  ['x', 'X'],
  ['c', 'C'],
  ['v', 'V'],
  ['b', 'B'],
  ['n', 'N'],
  ['m', 'M'],
  [',', '<'],
  ['.', '>'],
  ['/', '?'],
  ['Up'],
  ['Shift'],
  ['Ctrl'],
  ['Alt'],
  [' '],
  ['Alt'],
  ['Ctrl'],
  ['Left'],
  ['Down'],
  ['Right'],
];

const keysArr = [[...en], [...ru]];
const codes = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Delete',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Backslash',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];
const excepsions = [
  'Backspace',
  'Tab',
  'Delete',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
  'ArrowUp',
  'ControlLeft',
  'ControlRight',
  'AltLeft',
  'AltRight',
  'ArrowRight',
  'ArrowDown',
  'ArrowLeft',
];

function setLangEn() {
  window.sessionStorage.setItem('lang', 'en');
}

function setLangRu() {
  window.sessionStorage.setItem('lang', 'ru');
}
function getLang() {
  return sessionStorage.getItem('lang');
}

const showLowerKeys = (l) => {
  for (let i = 0; i < keys.length; i += 1) {
    [keys[i].innerText] = [keysArr[l][i][0]];
    keys[i].setAttribute('keyname', keys[i].innerText);
  }
};
const showUppercaseKeys = (l) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (keysArr[l][i].length > 1) [keys[i].innerText] = [keysArr[l][i][1]];
    if (keysArr[l][i].length === 1) [keys[i].innerText] = [keysArr[l][i][0]];
    keys[i].setAttribute('keyname', keys[i].innerText);
  }
};
const showCapscaseKeys = (l) => {
  for (let i = 15; i < keys.length; i += 1) {
    if (keysArr[l][i].length > 1) [keys[i].innerText] = [keysArr[l][i][1]];
    if (keysArr[l][i].length === 1) [keys[i].innerText] = [keysArr[l][i][0]];
    keys[i].setAttribute('keyname', keys[i].innerText);
  }
};

const setLang = () => {
  langNum = keyboardStatus.langs.indexOf(keyboardStatus.lang);
  showLowerKeys(langNum);
  lang.textContent = keyboardStatus.lang.toUpperCase();
};

const createHTML = () => {
  body.innerHTML = `
    <main class="container">
    <div class="post">
      <h1>Virtual Keyboard</h1>
    </div>
    <div class="screen">
      <textarea name="text" class="text" cols="300" rows="10"></textarea>
    </div>
    <div class="keyboard eng">
      <div class="wrapper">
        <div class="row">
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn btn--double"></div>
        </div>
        <div class="row">
          <div class="btn btn--plus-half"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn btn--plus-half"></div>
        </div>
        <div class="row">
          <div class="btn btn--plus-half btn--caps-lock"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn btn--plus-half"></div>
        </div>
        <div class="row">
          <div class="btn btn--double btn--left-shift"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn btn--special"></div>
          <div class="btn btn--arrowUp"></div>
          <div class="btn btn--right-shift"></div>
        </div>
        <div class="row">
          <div class="btn btn--plus-half btn--ctrl"></div>
          <div class="btn btn--plus-half btn--alt"></div>
          <div class="btn btn--space"></div>
          <div class="btn btn--plus-half btn--alt"></div>
          <div class="btn btn--plus-half btn--ctrl"></div>

          <div class="btn btn--arrowLeft"></div>
          <div class="btn btn--arrowDown"></div>
          <div class="btn btn--arrowRight"></div>
        </div>
      </div>
    </div>

    <div class="post">
      <p>
        Current language: <span class="lang"></span>. To switch
        language press 'Alt+Ctrl'
      </p>
      <p class="status">Shift is <span class="shift-status"></span></p>
      <p class="status">CapsLock is <span class="caps-status"></span></p>
    </div>
  </main>`;
  keys = [...document.querySelectorAll('.btn')];
  capsLock = document.querySelector('.btn--caps-lock');
  text = document.querySelector('.text');
  lang = document.querySelector('.lang');
  shiftStatus = document.querySelector('.shift-status');
  capsStatus = document.querySelector('.caps-status');
  if (keyboardStatus.shiftOn) {
    shiftStatus.textContent = 'On';
  } else {
    shiftStatus.textContent = 'Off';
  }
  if (keyboardStatus.capsOn) {
    capsStatus.textContent = 'On';
  } else {
    capsStatus.textContent = 'Off';
  }
  if (!getLang()) {
    keyboardStatus.lang = 'en';
    setLangEn();
  } else {
    keyboardStatus.lang = getLang();
    if (keyboardStatus.lang === 'en') setLangEn();
    else setLangRu();
  }

  setLang();
};
createHTML();
const changeLang = () => {
  if (keyboardStatus.lang === 'en') {
    keyboardStatus.lang = 'ru';
    setLangRu();
    setLang();
  } else {
    keyboardStatus.lang = 'en';
    setLangEn();
    setLang();
  }
};

window.addEventListener('keydown', (e) => {
  // text.focus();
  const keyCode = e.code;
  let keyNum;
  for (let i = 0; i < codes.length; i += 1) {
    if (codes[i] === keyCode) keyNum = i;
  }

  if (keyCode !== 'CapsLock') {
    keys[keyNum].classList.add('active');
  }
  if (!excepsions.includes(keyCode)) {
    e.preventDefault();
    letter = keys[keyNum].getAttribute('keyname');
    text.value += letter;
  }
  if (keyCode === 'Tab') {
    e.preventDefault();
    letter = '  ';
    text.value += letter;
  }
  if (keyCode === 'Space') {
    e.preventDefault();
    letter = ' ';
    text.value += letter;
  }
  if (keyCode === 'CapsLock') {
    capsLock.classList.toggle('active');
    if (capsLock.classList.contains('active')) {
      capsStatus.textContent = 'On';
      keyboardStatus.capsOn = true;
      showCapscaseKeys(langNum);
    } else {
      capsStatus.textContent = 'Off';
      keyboardStatus.capsOn = false;
      showLowerKeys(langNum);
    }
  }
  if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    shiftStatus.textContent = 'On';
    keyboardStatus.shiftOn = true;
    showUppercaseKeys(langNum);
  }
  if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    e.preventDefault();
    keyboardStatus.altOn = true;
    if (keyboardStatus.ctrlOn) {
      changeLang();
    }
  }
  if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    e.preventDefault();
    keyboardStatus.ctrlOn = true;
    if (keyboardStatus.altOn) {
      changeLang();
    }
  }
});
window.addEventListener('keyup', (e) => {
  const keyCode = e.code;
  let keyNum;
  for (let i = 0; i < codes.length; i += 1) {
    if (codes[i] === keyCode) keyNum = i;
  }
  if (keyCode !== 'CapsLock') {
    keys[keyNum].classList.remove('active');
  }
  if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    shiftStatus.textContent = 'Off';
    keyboardStatus.shiftOn = false;
    showLowerKeys(langNum);
  }
  if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    keyboardStatus.altOn = false;
  }
  if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    keyboardStatus.ctrlOn = false;
  }
});

document.addEventListener('mousedown', (e) => {
  text.focus();
  const currentKey = e.target;
  if (!keys.includes(currentKey)) return;
  let keyNum;
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i] === currentKey) keyNum = i;
  }
  const keyCode = codes[keyNum];
  // console.log(keyCode);
  if (keyCode !== 'CapsLock') {
    keys[keyNum].classList.add('active');
  }
  if (!excepsions.includes(keyCode)) {
    // text.focus();
    e.preventDefault();
    letter = keys[keyNum].getAttribute('keyname');
    text.value += letter;
  }
  if (keyCode === 'Tab') {
    // text.focus();
    e.preventDefault();
    letter = '  ';
    text.value += letter;
  }
  if (keyCode === 'Space') {
    // text.focus();
    e.preventDefault();
    letter = ' ';
    text.value += letter;
  }
  if (keyCode === 'CapsLock') {
    capsLock.classList.toggle('active');
    if (capsLock.classList.contains('active')) {
      capsStatus.textContent = 'On';
      keyboardStatus.capsOn = true;
      showCapscaseKeys(langNum);
    } else {
      capsStatus.textContent = 'Off';
      keyboardStatus.capsOn = false;
      showLowerKeys(langNum);
    }
  }
  if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    shiftStatus.textContent = 'On';
    keyboardStatus.shiftOn = true;
    showUppercaseKeys(langNum);
  }
  if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    e.preventDefault();
    keyboardStatus.altOn = true;
    if (keyboardStatus.ctrlOn) {
      changeLang();
    }
  }
  if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    e.preventDefault();
    keyboardStatus.ctrlOn = true;
    if (keyboardStatus.altOn) {
      changeLang();
    }
  }
  if (keyCode === 'Delete') {
    let caretposition;
    if (text.selectionStart === 0) {
      caretposition = text.selectionStart;
      text.value = text.value.slice(caretposition + 1);
      text.selectionStart = caretposition;
    } else if (
      text.selectionStart === undefined ||
      text.selectionStart === null
    ) {
      caretposition = text.value.length;
    } else {
      caretposition = text.selectionStart;
      text.value =
        text.value.slice(0, caretposition) +
        text.value.slice(caretposition + 1);
      text.selectionStart = caretposition;
    }
  }
  if (keyCode === 'Enter') {
    e.preventDefault();
    letter = '\n';
    text.value += letter;
  }
  if (keyCode === 'ArrowLeft') {
    e.preventDefault();
    letter = '←';
    text.value += letter;
  }
  if (keyCode === 'ArrowRight') {
    e.preventDefault();
    letter = '→';
    text.value += letter;
  }
  if (keyCode === 'ArrowUp') {
    e.preventDefault();
    letter = '↑';
    text.value += letter;
  }
  if (keyCode === 'ArrowDown') {
    e.preventDefault();
    letter = '↓';
    text.value += letter;
  }
  if (keyCode === 'Backspace') {
    e.preventDefault();
    let caretposition;
    if (!text.selectionStart) {
      caretposition = text.value.length;
    } else {
      caretposition = text.selectionStart;
      text.value =
        text.value.slice(0, caretposition - 1) +
        text.value.slice(caretposition);
      text.selectionStart = caretposition - 1;
      text.selectionEnd = text.selectionStart;
    }
  }
});

document.addEventListener('mouseup', (e) => {
  // text.focus();
  const currentKey = e.target;
  if (!keys.includes(currentKey)) return;
  let keyNum;
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i] === currentKey) keyNum = i;
  }
  const keyCode = codes[keyNum];
  if (keyCode !== 'CapsLock') {
    keys[keyNum].classList.remove('active');
  }
  if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    shiftStatus.textContent = 'Off';
    keyboardStatus.shiftOn = false;
    showLowerKeys(langNum);
  }
  if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    keyboardStatus.altOn = false;
  }
  if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    keyboardStatus.ctrlOn = false;
  }
});
// const changeText = () => {
//   text.focus();
//   // console.log(e);
// };
// document.addEventListener('click', changeText);
