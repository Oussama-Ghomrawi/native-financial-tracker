import React from "react";


import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default SettingsCard = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circular}></View>
        <Text style={styles.itemText}> Title</Text>
        <View style={styles.buttons}></View>
        <View style={styles.square1}>
          <Text style={styles.edit}>Edit</Text>
        </View>
        <View style={styles.square2}>
          <Text style={styles.delete}>Delete</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    display: "flex",
    padding: 15,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square1: {
    width: 44,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  buttons: {},
  square2: {
    width: 44,
    height: 24,
    backgroundColor: "red",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  edit: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  delete: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    color: "black",
  },
});

