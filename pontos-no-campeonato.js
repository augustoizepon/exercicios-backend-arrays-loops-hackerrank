

function solucao(resultados) {
	let pt = 0 
    for(const resultado of resultados) {
        if(resultado == `V`) {
          pt = pt + 3
        } else if(resultado == `E`){
          pt++
        }
    }
console.log(pt)
}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
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