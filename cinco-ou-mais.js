

function solucao(precos) {
    if (precos.length >= 1){
    const total = precos.reduce((acc, current) => acc + current)
    if (precos.length >= 5) {
        let menorValor = precos[0];
        for (let i = 0; i < precos.length; i++) {
            if (precos[i] < menorValor) {
                menorValor = precos[i];
            }

        }
        console.log(total - menorValor)
    } else {
        console.log(total)
    }
} else {
    console.log(0)
}
    
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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