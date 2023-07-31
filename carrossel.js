

function solucao(sequencia) {
    const carrossel = [0, 1, 2, 3, 4, 5, 6]
let i = 0;
for (const comando of sequencia) {
  if (comando == '>') {
    i++;
  } else {
    i--;
  }
    i = (i + 7) % 7
}


console.log(carrossel[i]);

}

function processData(input) {
    solucao(input);
} 
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
