/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { ITask } from "../@types";
import Task from "./Task";
import Divider from "./ui/Divider";

type TaskListProps = {
  tasks: ITask[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

function TaskList({ tasks, toggleTask, deleteTask }: TaskListProps) {
  const renderItem = ({ item }: ListRenderItemInfo<ITask>) => (
    <Task task={item} toggleTask={toggleTask} deleteTask={deleteTask} />
  );

  return (
    <View style={styles.container}>
      {!!tasks?.length && <Divider />}
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
});

export default TaskList;
