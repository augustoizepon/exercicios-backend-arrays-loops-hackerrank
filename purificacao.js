function solucao(stringCorrompida) {
	const input = stringCorrompida
    const inputFiltered = input.replace(/[!@#$%^&*()_+]/g, ``)
    console.log(inputFiltered)
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