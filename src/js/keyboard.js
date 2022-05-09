class Keyboard {
  constructor() {
    this.body = document.querySelector('body');
  }
  buildHTML() {
    this.body.innerHTML = `
    <main class="container">
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
          <div class="btn btn--plus-half btn--ctrl">Ctrl</div>

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
  }
}
