

function solucao(disparos) {
    let acertos = 0
   for(const disparo of disparos) {
       if (disparo >= 70) {
           acertos++
       }
   }
   console.log(acertos >= 3 ? acertos : `ELIMINADO`)

}

function processData(input) {
   solucao(input.split(' ').map(x => Number(x)).filter(x => x));
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