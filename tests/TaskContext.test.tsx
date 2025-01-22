/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */ 

import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { TaskProvider, useTasksContext } from "../src/contexts/TaskContext";


beforeAll(() => {
  jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("TaskContext", () => {
  it("fornece tasks e as funções (addTask, toggleTask, deleteTask)", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <TaskProvider>{children}</TaskProvider>
    );

    const { result } = renderHook(() => useTasksContext(), { wrapper });

    expect(result.current.tasks).toHaveLength(0);

    act(() => {
      result.current.addTask("Primeira Tarefa");
      result.current.addTask("Segunda Tarefa");
    });

    expect(result.current.tasks).toHaveLength(2);
    expect(result.current.tasks[0].text).toBe("Primeira Tarefa");
    expect(result.current.tasks[1].text).toBe("Segunda Tarefa");

    const firstId = result.current.tasks[0].id;
    act(() => {
      result.current.toggleTask(firstId);
    });

    expect(result.current.tasks[0].completed).toBe(true);

    const secondId = result.current.tasks[1].id;
    act(() => {
      result.current.deleteTask(secondId);
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text).toBe("Primeira Tarefa");
  });
});
