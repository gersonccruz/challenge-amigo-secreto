//Faça um código para adicionar nomes a uma lista e use um botão para sortear o nome do amigo
let listaDeAmigos = [];

function adicionarAmigo(){
    const entradaAmigo = document.getElementById('amigo');
    //trim evita entrada com apenas espaços.
    const nomeAmigo = entradaAmigo.value.trim();
    if (nomeAmigo == ''){
        return alert('Por favor, insira um nome');
    } else {
        listaDeAmigos.push(nomeAmigo);
        entradaAmigo.value = '';
        mostrarLista();
    }
}

function mostrarLista(){
    const amigosLista = document.getElementById('lista');
    amigosLista.innerHTML = '';
    for(i=0;i<listaDeAmigos.length;i++){
        amigosLista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}

function sortearAmigo(){
    const listaAparente = document.getElementById('lista');
    const amigoSorteado = document.getElementById('resultado');
    if(listaDeAmigos == ''){
        alert('A lista de amigos está vazia!');
    } else {
        nomeSorteado = Math.floor(Math.random() * listaDeAmigos.length);
        amigoSorteado.innerHTML = `O seu amigo secreto sorteado foi: ${listaDeAmigos[nomeSorteado]}`
        listaAparente.innerHTML = '';
    }
}