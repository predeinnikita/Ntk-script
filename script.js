let iframe = document.createElement('iframe');
iframe.src = 'your answers source'
document.body.insertAdjacentElement('beforeend', iframe);

function bindCss(element, styles) {
  for (s in styles) {
    element.style[s] = styles[s];
  }
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

const iframeStyles = {
        position: 'fixed',
        right: '-50000px',
        top: '90%',
        width: '658px',
        height: '56px',
        display: 'block',
        'z-index': '99999999',
        overflow: 'auto',
        'background-color': 'white'
}

bindCss(iframe, iframeStyles);

runOnKeys(() => {
  bindCss(iframe, {
    right: '-50000px',
  })
}, 'KeyE');

runOnKeys(() => {
  bindCss(iframe, {
    right: '5px',
  })
}, 'KeyQ');
