/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CheckboxProps = {
  isChecked: boolean;
  onToggle: () => void;
  label?: string;
};

const Checkbox = ({ isChecked, onToggle, label }: CheckboxProps) => (
  <TouchableOpacity onPress={onToggle} style={styles.container}>
    <View style={[styles.checkbox, isChecked && styles.checked]}>
      {isChecked && <Text style={styles.checkmark}>✓</Text>}
    </View>
    {label && <Text style={styles.label}>{label}</Text>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#444",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#6200ee",
  },
  checkmark: {
    color: "#ffffff",
  },
  label: {
    color: "#000",
  },
});

export default Checkbox;
