/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";
import { ITask } from "../models/ITask";

type TaskProps = {
  task: ITask;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

function Task({ task, toggleTask, deleteTask }: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.contentContainer}>
        <Checkbox
          isChecked={task.completed}
          onToggle={() => toggleTask(task.id)}
        />
        <Text style={[styles.taskText, task.completed && styles.completed]}>
          {task.text}
        </Text>
      </View>

      <View style={styles.buttons}>
        <Button
          type="warning"
          onPress={() => deleteTask(task.id)}
          title="Delete"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 4,
    borderRadius: 10,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  taskText: {
    maxWidth: "90%",
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  buttons: {
    flexDirection: "row",
  },
});

export default Task;
