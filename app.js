//Faça um código para adicionar nomes a uma lista e use um botão para sortear o nome do amigo
let listaDeAmigos = [];

function adicionarAmigo(){
    const entradaAmigo = document.getElementById('amigo');
    //trim evita entrada com apenas espaços.
    const nomeAmigo = entradaAmigo.value.trim();
    if (nomeAmigo === ''){
        return alert('Por favor, insira um nome');
    } else {
        listaDeAmigos.push(nomeAmigo);
        entradaAmigo.value = '';
    }
}