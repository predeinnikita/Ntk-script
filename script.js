start('https://YOUR/SOME/SOURCE');

function start(url) {
  const iframe = initIframe(url);

  runOnKeys(() => {
    setCss(iframe, {
      right: iframe.style.right == '-50000px'? '5px': '-50000px'
    })
  }, 'KeyQ', 'KeyW');

  runOnKeys(() => {
    setCss(iframe, {
      opacity: iframe.style.opacity == 0.3? 1: 0.3
    })
  }, 'KeyQ', 'KeyE');
}

function initIframe(url) {
  let iframe = document.createElement('iframe');
  iframe.src = url
  document.body.insertAdjacentElement('beforeend', iframe);
  setCss(iframe, {
    position: 'fixed',
    right: '-50000px',
    top: '80%',
    width: '658px',
    height: '150px',
    display: 'block',
    'z-index': '99999999',
    overflow: 'auto',
    'background-color': 'white',
    opacity: 0.3,
    width: '604px'
  });
  
  return iframe;
}

function runOnKeys(func, ...codes) {
  let pressed = new Set();
  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);
    for (let code of codes) {
      if (!pressed.has(code)) { return; }
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });
}

function setCss(element, styles) {
  for (s in styles) {
    element.style[s] = styles[s];
  }
}
