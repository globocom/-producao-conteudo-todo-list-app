import React, { createContext } from 'react'; 
import { ITask } from '../models/ITask';

// TODO:
// 1. Criar o TaskProvider utilizando o hook useTask().
// 2. Retornar (Provider) que exponha { tasks, addTask, toggleTask, deleteTask }.
// 3. No useTasksContext(), utilize o createContext() acima para permitir acesso aos dados do TaskProvider.
// Dica: observe o teste em tests/TaskContext.test.ts para ver como o contexto é consumido e quais funções são esperadas.


interface TaskProviderProps {
  children: React.ReactNode;
}

interface TaskContextProps {
  tasks: ITask[];
  addTask: (text: string) => Promise<void>;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TasksContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => Promise.resolve(),
  toggleTask: () => {},
  deleteTask: () => {},
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
};

export function useTasksContext() {
}
