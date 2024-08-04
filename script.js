const area = prompt("Você deseja seguir na área de 'Front-End' ou 'Back-End?' Digite o nome da área:");
let linguagem = "";

if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");

} else if (area === "Back-End"){
    linguagem = ("Você quer aprender C# ou Java");

} else {
    alert("Você não inseriu nenhuma área válida!!!");
}

const especilidadeOuFullstack = prompt("Digite 1 para se especializar na área escolhida ou 2 para seguir se desenvolvendo como Full-Stack");
if (especilidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área ${area} !`);

} else if (especilidadeOuFullstack == 2){
    alert(`Para ser um Full-Stack é necessário aprender mais linguagens além de ${linguagem}`);

} else{
    alert(`Você não inseriu nenhum valor!`);

}

let msg = prompt("Tem mais alguma linguagem que queira aprender? Em caso positivo digite 'ok'.");

while (msg == "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt("Tem mais alguma t4ecnologia que você gpstaria de aprender? Em caso positivo digite 'ok'");
}