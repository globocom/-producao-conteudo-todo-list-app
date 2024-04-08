import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "./ui/Button";

type TaskFormProps = {
  addTask: (text: string) => void;
};

function TaskForm({ addTask }: TaskFormProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    addTask(input);
    setInput("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Adicionar tarefa..."
      />
      <Button title="Adicionar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 50,
  },
  input: {
    flexGrow: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 20,
    borderColor: "#007AFF",
    borderWidth: 2,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default TaskForm;
