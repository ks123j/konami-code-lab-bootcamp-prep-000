const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function triggerKeyDown(which) {
  const input = document.addEventListener('keydown', function(e) {
    console.log(e.which);
  });
  document.body.dispatchEvent(input);
}


function init() {
  function Konami_Code(e) {
    const key = parseInt(e.detail || e.which);
    for (let i = 0, l = code.length; i < l; i++) {
      if (key === code[i]) {
        triggerKeyDown(code[i])
        alert (code[i]);
        if (key === code.length){
          i = 0;
        }
      } else {
        i = 0;
      }
    }
  }
}
