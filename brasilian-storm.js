


function solucao(notas) {
    let somaNotas = notas.reduce((acc, current) => acc + current)
    let menorNota = Math.min(...notas)
    let maiorNota = Math.max(...notas)
    let somaDescartadas = maiorNota + menorNota
    let media = (somaNotas - somaDescartadas) / (notas.length - 2)
    console.log(media)
     
      
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