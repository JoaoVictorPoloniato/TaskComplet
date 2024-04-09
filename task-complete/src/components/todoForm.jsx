
import React from 'react';

function TodoForm() {
  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <form>
        <input type="text" placeholder="Digite o Título" />
        <select>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Exercicios">Exercicios</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;
