import React from "react";
import { StyleSheet, View } from "react-native";

function Divider() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#f3f3f3",
    borderBottomWidth: 1,
  },
});

export default Divider;
