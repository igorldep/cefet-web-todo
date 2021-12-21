//0
let tarefas = [
    { nome: "Comprar leite", categoria: "compras", realizada: false },
    { nome: "Escutar música boa", categoria: "lazer", realizada: true }
];

const listaTarefas = document.querySelector('ul#lista-tarefas');

//1
function InsereTarefaNaPagina (tarefa) {
    const elementos = document.createElement('li');
    
    elementos.classList.add('item-tarefa');
    elementos.classList.add(`categoria-${tarefa.categoria}`);

    elementos.addEventListener('click', () => {
        elementos.classList.toggle('marcado');
        tarefa.realizada = !tarefa.realizada;
    })

    if(tarefa.realizada)
        elementos.classList.add('marcado');    
    
    const textoElemento = document.createElement('p');
    textoElemento.innerHTML = tarefa.nome;

    elementos.appendChild(textoElemento);
    listaTarefas.appendChild(elementos);
}


listaTarefas.innerHTML = '';
tarefas.forEach(insereTarefaNaPagina);