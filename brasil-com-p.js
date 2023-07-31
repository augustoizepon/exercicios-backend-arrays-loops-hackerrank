

function solucao(primeiraLetra, segundaLetra, palavras) {
    const arrayPalavras = []
	for(let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i]
        if(palavra.charAt(0) == primeiraLetra && palavra.charAt(1) == segundaLetra) {
            console.log(palavra)
            arrayPalavras.push(palavra)
        }
    } 
    if(arrayPalavras.length == 0) {
        console.log(`NENHUMA`)
    }
 
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
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