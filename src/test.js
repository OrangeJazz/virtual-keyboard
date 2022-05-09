const codes = [
  ['`', '~', 'ё', 'Ё'],
  ['1', '!', '1', '!'],
  ['2', '@', '2', '"'],
  ['3', '#', '3', '№'],
  ['4', '$', '4', ';'],
  ['5', '%', '5', '%'],
  ['6', '^', '6', ':'],
  ['7', '&', '7', '?'],
  ['8', '*', '8', '*'],
  ['9', '(', '9', '('],
  ['0', ')', '0', ')'],
  ['-', '_', '-', '_'],
  ['=', '+', '=', '+'],
  ['Backspace'],
  ['Tab'],
  ['q', 'Q', 'й', 'Й'],
  ['w', 'W', 'ц', 'Ц'],
  ['e', 'E', 'у', 'У'],
  ['r', 'R', 'к', 'К'],
  ['t', 'T', 'е', 'Е'],
  ['y', 'Y', 'н', 'Н'],
  ['u', 'U', 'г', 'Г'],
  ['i', 'I', 'ш', 'Ш'],
  ['o', 'O', 'щ', 'Щ'],
  ['p', 'P', 'з', 'З'],
  ['[', '{', 'х', 'Х'],
  [']', '}', 'ъ', 'Ъ'],
  ['Delete'],
  ['CapsLock'],
  ['a', 'A', 'ф', 'Ф'],
  ['s', 'S', 'ы', 'Ы'],
  ['d', 'D', 'в', 'В'],
  ['f', 'F', 'а', 'А'],
  ['g', 'G', 'п', 'П'],
  ['h', 'H', 'р', 'Р'],
  ['j', 'J', 'о', 'О'],
  ['k', 'K', 'л', 'Л'],
  ['l', 'L', 'д', 'Д'],
  [';', ':', 'ж', 'Ж'],
  ["'", '"', 'э', 'Э'],
  ['\\', '|', '\\', '|'],
  ['Enter'],
  ['ShiftLeft'],
  ['z', 'Z', 'я', 'Я'],
  ['x', 'X', 'ч', 'Ч'],
  ['c', 'C', 'с', 'С'],
  ['v', 'V', 'м', 'М'],
  ['b', 'B', 'и', 'И'],
  ['n', 'N', 'т', 'Т'],
  ['m', 'M', 'ь', 'Ь'],
  [',', '<', 'б', 'Б'],
  ['.', '>', 'ю', 'Ю'],
  ['/', '?', '.', ','],
  ['ArrowUp'],
  ['ShiftRight'],
  ['ControlLeft'],
  ['AltLeft'],
  ['Space'],
  ['AltRight'],
  ['CotrolRight'],
  ['ArrowLeft'],
  ['ArrowDown'],
  ['ArrowRight'],
];

const setKeys = () => {
  // console.log('click');
  // if (keyboardStatus.uppercase == true) {
  //   console.log(keyboardStatus.uppercase);
  //   showLowerKeys(0);
  //   keyboardStatus.uppercase = false;
  //   console.log(keyboardStatus.uppercase);
  // } else {
  //   console.log(keyboardStatus.uppercase);
  //   showUppercaseKeys(0);
  //   keyboardStatus.uppercase = true;
  //   console.log(keyboardStatus.uppercase);
  // }
};

// const showRuLowerKeys = () => {
//   for (let i = 0; i < keys.length; i++) {
//     if (keysArr[i].length > 1) keys[i].innerText = keysArr[i][2];
//     if (keysArr[i].length == 1) keys[i].innerText = keysArr[i][0];
//     keys[i].setAttribute('keyname', keys[i].innerText);
//   }
// };
// const showRuUppercaseKeys = () => {
//   for (let i = 0; i < keys.length; i++) {
//     if (keysArr[i].length > 1) keys[i].innerText = keysArr[i][3];
//     if (keysArr[i].length == 1) keys[i].innerText = keysArr[i][0];
//     keys[i].setAttribute('keyname', keys[i].innerText);
//   }
// };

// document.addEventListener('keydown', function (e) {
//   for (let i = 0; i < keys.length; i++) {
//     if (
//       e.key == keys[i].getAttribute('keyname')
//       // || e.key == keys[i].getAttribute('lowerCaseName')
//     ) {
//       keys[i].classList.add('active');
//     }
//     if (e.code == 'Space') {
//       space.classList.add('active');
//     }
//     if (e.code == 'ShiftLeft') {
//       leftShift.classList.add('active');
//       rightShift.classList.remove('active');
//       shiftStatus.textContent = 'On';
//       keyboardStatus.shiftOn = true;
//     }
//     if (e.code == 'ShiftRight') {
//       rightShift.classList.add('active');
//       leftShift.classList.remove('active');
//       shiftStatus.textContent = 'On';
//       keyboardStatus.shiftOn = true;
//     }
//     if (e.code == 'CapsLock' && Date.now() - lastTime > 250) {
//       capsLock.classList.toggle('active');
//       if (capsLock.classList.contains('active')) {
//         capsStatus.textContent = 'On';
//         keyboardStatus.capsOn = true;
//       } else {
//         capsStatus.textContent = 'Off';
//         keyboardStatus.capsOn = false;
//       }
//       lastTime = Date.now();
//     }
//     if (e.key == 'Tab') {
//       e.preventDefault();
//       // tab.classList.add('active');
//     }
//     if (e.key == 'Alt') {
//       e.preventDefault();
//     }
//     if (e.key == 'Control') {
//       e.preventDefault();
//       // console.log('ctrl');
//     }
//   }

//   // if
// });
// document.addEventListener('keyup', function (e) {
//   for (let i = 0; i < keys.length; i++) {
//     if (
//       e.key == keys[i].getAttribute('keyname') ||
//       e.key == keys[i].getAttribute('lowerCaseName')
//     ) {
//       keys[i].classList.remove('active');
//       // keys[i].classList.add('remove');
//     }
//     if (e.code == 'Space') {
//       space.classList.remove('active');
//     }
//     if (e.code == 'ShiftLeft') {
//       leftShift.classList.remove('active');
//       shiftStatus.textContent = 'Off';
//       keyboardStatus.shiftOn = false;
//     }
//     if (e.code == 'ShiftRight') {
//       rightShift.classList.remove('active');
//       shiftStatus.textContent = 'Off';
//       keyboardStatus.shiftOn = false;
//     }
//     if (e.key == 'Tab') {
//       e.preventDefault();
//       // tab.classList.remove('active');
//     }

//     // setTimeout(() => {
//     //   keys[i].classList.remove('remove'), 200;
//     // });
//   }
// });

window.addEventListener('keydown', function (e) {
  text.focus();
  console.log(e.code);
  let letter = '';
  // if(e.key !==)

  for (let i = 0; i < keys.length; i++) {
    // keys[i].getAttribute('keyname');
    e.preventDefault();
    if (e.key == letter) {
      // console.log(e);
      // e.preventDefault();
      keys[i].classList.add('active');
    }
    // if (e.key == letter && !excepsions.includes(letter)) {
    //   e.preventDefault();
    //   text.value += letter;
    // }
    if (e.code == 'Space') {
      space.classList.add('active');
    }
    if (e.code == 'ShiftLeft' && Date.now() - lastTime > 250) {
      leftShift.classList.add('active');
      rightShift.classList.remove('active');
      shiftStatus.textContent = 'On';
      keyboardStatus.shiftOn = true;
      showUppercaseKeys(0);
      lastTime = Date.now();
    }
    if (e.code == 'ShiftRight' && Date.now() - lastTime > 250) {
      rightShift.classList.add('active');
      leftShift.classList.remove('active');
      shiftStatus.textContent = 'On';
      keyboardStatus.shiftOn = true;
      showUppercaseKeys(0);
      lastTime = Date.now();
    }
    if (e.code == 'CapsLock' && Date.now() - lastTime > 250) {
      capsLock.classList.toggle('active');
      if (capsLock.classList.contains('active')) {
        capsStatus.textContent = 'On';
        keyboardStatus.capsOn = true;
        showCapscaseKeys(0);
      } else {
        capsStatus.textContent = 'Off';
        keyboardStatus.capsOn = false;
        showLowerKeys(0);
      }
      lastTime = Date.now();
    }
    if (e.key == 'Tab') {
      e.preventDefault();
      text.value += ` `;
    }
    if (e.key == 'Alt') {
      e.preventDefault();
      keyboardStatus.altOn = true;
      if (keyboardStatus.cltrOn) {
        changeLang();
      }
    }
    if (e.key == 'Control') {
      e.preventDefault();
      keyboardStatus.ctrlOn = true;
      for (let j = 0; j < ctrl.length; j++) {
        ctrl[j].classList.add('active');
      }
      if (keyboardStatus.altOn) {
        changeLang();
      }
    }

    if (e.key == 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }
    if (e.key == 'ArrowRight') {
      arrowRight.classList.add('active');
    }
    if (e.key == 'ArrowUp') {
      arrowUp.classList.add('active');
    }
    if (e.key == 'ArrowDown') {
      arrowDown.classList.add('active');
    }
  }
});
window.addEventListener('keyup', function (e) {
  for (let i = 0; i < keys.length; i++) {
    if (
      e.key == keys[i].getAttribute('keyname') ||
      e.key == keys[i].getAttribute('lowerCaseName')
    ) {
      keys[i].classList.remove('active');
    }
    if (e.code == 'Space') {
      space.classList.remove('active');
    }
    if (e.code == 'ShiftLeft') {
      leftShift.classList.remove('active');
      shiftStatus.textContent = 'Off';
      keyboardStatus.shiftOn = false;
      showLowerKeys(0);
    }
    if (e.code == 'ShiftRight') {
      rightShift.classList.remove('active');
      shiftStatus.textContent = 'Off';
      keyboardStatus.shiftOn = false;
      showLowerKeys(0);
    }
    if (e.key == 'Tab') {
      // e.preventDefault();
      // tab.classList.remove('active');
    }
    if (e.key == 'Alt') {
      keyboardStatus.altOn = false;
    }
    if (e.key == 'Control') {
      keyboardStatus.ctrlOn = false;
      for (let j = 0; j < ctrl.length; j++) {
        ctrl[j].classList.remove('active');
      }

      // console.log('ctrl');
    }

    if (e.key == 'ArrowLeft') {
      arrowLeft.classList.remove('active');
    }
    if (e.key == 'ArrowRight') {
      arrowRight.classList.remove('active');
    }
    if (e.key == 'ArrowUp') {
      arrowUp.classList.remove('active');
    }
    if (e.key == 'ArrowDown') {
      arrowDown.classList.remove('active');
    }

    // setTimeout(() => {
    //   keys[i].classList.remove('remove'), 200;
    // });
  }
});
const onBtn = (keyCode) => {
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
  if (keyCode == 'ShiftLeft' || keyCode == 'ShiftRight') {
    shiftStatus.textContent = 'On';
    keyboardStatus.shiftOn = true;
    showUppercaseKeys(langNum);
  }
  if (keyCode == 'AltLeft' || keyCode == 'AltRight') {
    e.preventDefault();
    keyboardStatus.altOn = true;
    if (keyboardStatus.ctrlOn) {
      changeLang();
    }
  }
  if (keyCode == 'ControlLeft' || keyCode == 'ControlRight') {
    e.preventDefault();
    keyboardStatus.ctrlOn = true;
    if (keyboardStatus.altOn) {
      changeLang();
    }
  }
};

const offBtn = (keyCode, keyNum) => {
  if (keyCode != 'CapsLock') {
    keys[keyNum].classList.remove('active');
  }
  if (keyCode == 'ShiftLeft' || keyCode == 'ShiftRight') {
    shiftStatus.textContent = 'Off';
    keyboardStatus.shiftOn = false;
    showLowerKeys(langNum);
  }
  if (keyCode == 'AltLeft' || keyCode == 'AltRight') {
    keyboardStatus.altOn = false;
  }
  if (keyCode == 'ControlLeft' || keyCode == 'ControlRight') {
    keyboardStatus.ctrlOn = false;
  }
};
const setKeys = (l) => {
  if (keyboardStatus.shiftOn === true) {
    showLowerKeys(l);
    keyboardStatus.shiftOn = false;
  } else {
    showUppercaseKeys(l);
    keyboardStatus.shiftOn = true;
  }
};
