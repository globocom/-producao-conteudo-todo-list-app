/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import { StyleSheet, View } from "react-native";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTask } from "./hooks/useTask";
import { getContainerStyles } from "./utils/stylesUtils";

export default function Main() {
  const { tasks, addTask, toggleTask, deleteTask } = useTask();

  return (
    <View style={[styles.container, getContainerStyles()]}>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 20,
  },
});
