

function solucao(palpite, palavra) {
    let c = 0
    for(const letra of palavra){
        if(letra == palpite){
            c++
        }
    }
    console.log(c)
}

function processData(input) {
    const [palpite, palavra] = input.split(" ");
  	solucao(palpite, palavra);
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
