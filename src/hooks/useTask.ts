/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import { ITask } from "../@types";

type UseTaskProps = {
  tasks: ITask[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

export function useTask(): UseTaskProps {
  /// TODO:
}
