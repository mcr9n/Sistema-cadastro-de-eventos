let lista_de_participantes = [];

let teclado = require('prompt-sync')();
console.log("Insira o nome do evento:");
let nome_do_evento = teclado();
console.log("Insira a data do evento separada por -");
let data_do_evento = teclado();
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
var data1 = new Date(dataAtual);
var data2 = new Date(data_do_evento);
if(data_do_evento <= dataAtual){
    console.log("Evento não permitido");
     
}else{
    console.log("Evento permitido")
    do{
        console.log("Informe o nome do participante:")
        let nome_do_participante = teclado();
        console.log("Informe a idade do participante");
        let idade_do_participante = teclado();
        if(idade_do_participante >= 18){
            console.log("Informe se o participante é palestrante:")
            let funcao_participante = teclado();
            if(lista_de_participantes.length < 100){
                lista_de_participantes.push(nome_do_participante);
                console.log("Participante cadastrado");
                console.log("Deseja cadastrar denovo?(s/n)");
                var deseja_cadastrar_denovo = teclado();
            } else{
                console.log("Participantes demais cadastrados");
                var deseja_cadastrar_denovo = "n";
            }
        } else{
            console.log("O participante não pode ser menor de idade.")
            console.log("Deseja cadastrar denovo?(s/n)")
            var deseja_cadastrar_denovo = teclado();
        }
    }while(deseja_cadastrar_denovo != "n")
    console.log("Essa é a lista de participantes:")
    console.log(lista_de_participantes);
    



}







