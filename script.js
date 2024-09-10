const cadastrarTarefa = (event) => {
  event.preventDefault();
  const tarefa = document.querySelector('input[name="tarefa"]').value;
  const lista = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = tarefa;
  lista.appendChild(li);
}