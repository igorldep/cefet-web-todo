let tarefas = [
    { nome: "Comprar leite", categoria: "compras", realizada: false },
    { nome: "Escutar música boa", categoria: "lazer", realizada: true }
];


const listaTarefas = document.querySelector('ul#lista-tarefas');


function InsereTarefaNaPagina (tarefa) {
    const elementos = document.createElement('li');
    
    elementos.classList.add('item-tarefa');
    elementos.classList.add(`categoria-${tarefa.categoria}`);

    // Exercício 5
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
tarefas.forEach(InsereTarefaNaPagina);


const nomeNovaTarefa = document.querySelector('input#nova-tarefa-nome');
const novaCaregoriaTarefa = document.querySelector('select#nova-tarefa-categoria');
const btnNovaTarefa = document.querySelector("#incluir-nova-tarefa");

function IncluirNovaTarefa () {
    const nome = nomeNovaTarefa.value;
    if(nome){
        const tarefa = { 
            nome: nome, 
            categoria: novaCaregoriaTarefa.value, 
            realizada: false 
        };

        tarefas.push(tarefa);
        InsereTarefaNaPagina(tarefa);
    
        nomeNovaTarefa.value = '';
        nomeNovaTarefa.focus();

    }
}

btnNovaTarefa.addEventListener("click", IncluirNovaTarefa);


const filtroCategoria = document.querySelector("#filtro-de-categoria");

filtroCategoria.addEventListener("change", e => {
    const categoriaSelecionada = e.currentTarget.value;
    const listaTarefas = document.querySelectorAll(".item-tarefa");

    //Antigo Valor: "" -> Antigo Vazio
    if(categoriaSelecionada === "todas"){ 
        listaTarefas.forEach(t => {
            t.classList.remove('retido-no-filtro');
        });
    }

    const tarefasFiltradas = Array.from(listaTarefas).filter(evt => {
        return evt.classList.contains(`categoria-${categoriaSelecionada}`);
    });

    listaTarefas.forEach(t => {
        t.classList.add('retido-no-filtro');
    });
    tarefasFiltradas.forEach(t => {
        t.classList.remove('retido-no-filtro');
    })
});



nomeNovaTarefa.addEventListener("keyup", e => {
    if(e.key === "Enter"){
        IncluirNovaTarefa(e);
    }
});