/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */


// TODO: 
// 1. Criar um estado (ITask[]) para gerenciar as tarefas.
// 2. Implementar addTask(text): deve recusar texto vazio e adicionar a nova tarefa com id único e data de criação.
// 3. Implementar toggleTask(id) e deleteTask(id) para alterar o status e remover tarefas, respectivamente.
// 4. Ler as tarefas do localStorage ao inicializar (recriando o campo "createdAt" como Date).
// 5. Salvar o array de tarefas no localStorage sempre que for atualizado.
// Dica: observe os testes em tests/useTask.test.ts para entender o comportamento esperado.


 
import { ITask } from "../models/ITask"; 

type UseTaskProps = {
  tasks: ITask[];
  addTask: (text: string) => Promise<void>;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export function useTask(): UseTaskProps {
  
}
