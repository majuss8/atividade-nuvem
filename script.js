const cadastrarTarefa = (event) => {
  event.preventDefault();

  const tarefa = document.querySelector('input').value;
  if (tarefa.trim() === "") {
    alert("Por favor, insira uma tarefa.");
    return;
  }

  const lista = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = tarefa;
  lista.appendChild(li);

  document.querySelector('input').value = ''; 
}