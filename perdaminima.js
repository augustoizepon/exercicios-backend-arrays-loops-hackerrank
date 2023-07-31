

function solucao(precos) {
    const diferencas = []
 

for(let i = 0; i < precos.length; i++) {
 let diferenca = 0
 const preco = precos[i]
for (let index = 0; index < precos.length; index++) {
    let precoDois = precos[index]
  diferenca = preco - precoDois
    if(precoDois < preco && index > i) {
        diferencas.push(Math.abs(diferenca))
    }
}
}
if(Math.min(... diferencas) > 0){
 console.log(Math.min(... diferencas))
}
}


function processData(input) {
 const precos = input.split(" ").map(x => parseInt(x));
   solucao(precos);
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