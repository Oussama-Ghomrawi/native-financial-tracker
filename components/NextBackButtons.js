import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function NextBackButtons(props) {
  return (
    <View style={styles.ButtonContainer}>
      <Button onPress={() => props.setRange(props.range - 1)} title="Previous"></Button>
      <Button onPress={() => props.setRange(props.range + 1)} title="   Next   " />
    </View>
  );
}
const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: "rgb(239, 242, 245)",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff"
  },
});

export default NextBackButtons;
