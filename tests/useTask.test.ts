/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import { act, renderHook } from "@testing-library/react-hooks";
import { useTask } from "../src/hooks/useTask";
import { TASK_LIST_STORAGE_KEY } from "../src/constants/app";

describe("useTask", () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("permite adicionar uma tarefa", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("Nova Tarefa");
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].text).toBe("Nova Tarefa");
  });

  it("não permite adicionar uma tarefa vazia", async () => {
    const { result } = renderHook(() => useTask());
  
    await act(async () => { 
      await expect(result.current.addTask("")).rejects.toThrow(
        "O texto da tarefa não pode estar vazio"
      );
    });
    expect(result.current.tasks.length).toBe(0);
  });

  it("não permite adicionar uma tarefa com apenas espaços", async () => {
    const { result } = renderHook(() => useTask());
  
    await act(async () => {
      await expect(result.current.addTask("   ")).rejects.toThrow(
        "O texto da tarefa não pode estar vazio"
      );
    });
  
    expect(result.current.tasks.length).toBe(0);
  });
  

  it("permite alternar o estado de conclusão de uma tarefa", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("Tarefa Teste");
    });

    expect(result.current.tasks.length).toBe(1);

    act(() => {
      result.current.toggleTask(result.current.tasks[0].id);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  it("permite deletar uma tarefa", () => {
    const { result } = renderHook(() => useTask());
   
    act(() => {
      result.current.addTask("Tarefa 1");
      result.current.addTask("Tarefa 2");
    });
  
    expect(result.current.tasks.length).toBe(2);
    expect(result.current.tasks[0].text).toBe("Tarefa 1");
    expect(result.current.tasks[1].text).toBe("Tarefa 2");
  
    act(() => {
      result.current.deleteTask(result.current.tasks[0].id);
    });
  
     expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].text).toBe("Tarefa 2");
  });
  
  

  it("carrega as tarefas do localStorage ao iniciar", () => { 
    const fakeTasks = JSON.stringify([
      {
        id: "abc123",
        text: "Tarefa armazenada",
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue(fakeTasks); 

    const { result } = renderHook(() => useTask());
   
    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].id).toBe("abc123");
    expect(result.current.tasks[0].text).toBe("Tarefa armazenada");
  });


  it("chama localStorage.setItem ao adicionar uma tarefa", () => {
    const { result } = renderHook(() => useTask());
  
    act(() => {
      result.current.addTask("Teste persistência");
    });
  
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
     
    const lastCall = (localStorage.setItem as jest.Mock).mock.calls.pop();
    expect(lastCall[0]).toBe(TASK_LIST_STORAGE_KEY); 
  });

  it("converte 'createdAt' em instância de Date ao carregar do localStorage", () => {
    const fakeTasks = JSON.stringify([
      {
        id: 100,
        text: "Verificar data",
        completed: false,
        createdAt: "2025-01-01T00:00:00.000Z",
      },
    ]);
  
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue(fakeTasks);
  
    const { result } = renderHook(() => useTask());
  
    expect(result.current.tasks[0].createdAt).toBeInstanceOf(Date);
  });

  it("permite alternar a conclusão de uma tarefa (toggle on/off)", () => {
    const { result } = renderHook(() => useTask());
    
    let taskId: string;
   
    act(() => {
      result.current.addTask("Que beleza é viver a natureza!");
    });
   
    expect(result.current.tasks.length).toBe(1);
   
    taskId = result.current.tasks[0].id;
   
    act(() => {
      result.current.toggleTask(taskId);
    });
    expect(result.current.tasks[0].completed).toBe(true);
   
    act(() => {
      result.current.toggleTask(taskId);
    });
    expect(result.current.tasks[0].completed).toBe(false);
  });
  
   
  
});
