import React from "react";
import { View, Text, Button, StyleSheet, Picker } from "react-native";

function TimeType(props) {
  return (
    <Picker
      default={'monthly'}
      style={{ height: 50, width: 150 }}
      onValueChange={(item) => {
       
        props.setValue(item);
        props.setRange(0);
      }}
    >
      <Picker.Item label="weekly" value="weekly" />
      <Picker.Item label="monthly" value="monthly" />
      <Picker.Item label="yearly" value="yearly" />
    </Picker>
  );
}
export default TimeType;
