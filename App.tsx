/*
 * Copyright (c) 2024, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import { StyleSheet, View } from "react-native";
import MainScreen from "./src/screens/MainScreen"; 

export default function App() {
  return (
    <View style={styles.container}> 
        <MainScreen /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
 
