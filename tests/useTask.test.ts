import { act, renderHook } from "@testing-library/react-hooks";
import { useTask } from "../src/hooks/useTask";

describe("useTask", () => {
  it("permite adicionar uma tarefa", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("Nova Tarefa");
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].text).toBe("Nova Tarefa");
  });

  it("não permite adicionar uma tarefa vazia", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("");
    });

    expect(result.current.tasks.length).toBe(0);
  });

  it("não permite adicionar uma tarefa com apenas espaços", () => {
    const { result } = renderHook(() => useTask());

    act(() => {
      result.current.addTask("   ");
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
    });

    act(() => {
      result.current.addTask("Tarefa 2");
    });

    act(() => {
      result.current.deleteTask(result.current.tasks[0].id);
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].text).toBe("Tarefa 2");
  });
});
