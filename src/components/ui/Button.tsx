/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  type?: "primary" | "dark" | "light" | "warning";
  disabled?: boolean;
};

const Button = ({
  onPress,
  title,
  type = "primary",
  disabled = false,
}: ButtonProps) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[styles.button, styles[type], disabled && styles.disabled]}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 6,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
  },
  primary: {
    backgroundColor: "#6200ee",
  },
  warning: {
    backgroundColor: "#D32F2F",
  },
  dark: {
    backgroundColor: "#000000",
  },
  light: {
    backgroundColor: "#388E3C",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
