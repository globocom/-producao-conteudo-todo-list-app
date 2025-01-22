/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native";

import Task from "./Task";
import Divider from "./ui/Divider";
import { ITask } from "../models/ITask";

type TaskListProps = {
  tasks: ITask[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

function TaskList({ tasks, toggleTask, deleteTask }: TaskListProps) {
  const renderItem = ({ item }: ListRenderItemInfo<ITask>) => (
    <Task task={item} toggleTask={toggleTask} deleteTask={deleteTask} />
  );
 
  if (!tasks?.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyListText}>Nenhuma tarefa cadastrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Divider />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20, 
  },
  emptyListText: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
});

export default TaskList;
