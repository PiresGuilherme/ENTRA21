fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log('Todas as tarefas: ', data))
.catch(error => console.error('Erro ao ler as tarefas', error));

const newTask = {
    title: 'Nova tarefa',
    completed: false
};
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newTask)
})
.then(response => response.json())
.then(data => console.log('Tarefa criada: ', data))
.catch(error => console.error('Erro ao criar a tarefa', error));


const updateTask = {
    id: 1,
    title: 'Tarefa atualizada',
    completed: true,
};
fetch(`https://jsonplaceholder.typicode.com/todos/${updateTask.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(updateTask)
})
.then(response => response.json())
.then(data => console.log('Tarefa atualizada: ', data))
.catch(error => console.error('Erro ao criar a tarefa', error));



const taskIdToDelete = 1;
 fetch(`https://jsonplaceholder.typicode.com/todos/${taskIdToDelete}`, {
 method: 'DELETE'
})
.then(response => {
    if (response.ok) {
        console.log('Tarefa excluida com sucesso.');
    } else {
        throw new Error(`Erro ao excluir tarefa: ${response.status}`)
    }
})
.catch(error => console.error('Erro ao excluir tarefa', error))


function buscando() {
    buscar.onclick = () => {
        fetch('http://localhost:3000/usuario')
        .then(response => response.json())
        .then(dado => {
            cdado.forEach(pessoa => {
                console.log(pessoa);
                const tabela = document.querySelector('#tabela')
                const corpo = document.createElement('td')
                tabela.appendChild(corpo);
                corpo.innerHTML = pessoa.nome;
            });
        })
        .catch(err => console.error(err))
    }
}
