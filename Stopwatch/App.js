import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StopwatchContainer from "./stopwatch/stopwatch.container";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stopwatch/Timer Project</Text>

      <StopwatchContainer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "8%",
    borderRadius: 0,
  },

  title: {
    fontSize: 30,
    color: "white",
    marginBottom: "8%"
  }

});