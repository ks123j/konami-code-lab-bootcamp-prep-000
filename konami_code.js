const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;

function init() {
  const input = document.addEventListener('keydown', Konami_Code(e) {
    console.log(e.which);
  });
  function Konami_Code(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length){
        alert(code);
        index = 0;
      }
    } else {
        index = 0;
      }
  }
}
