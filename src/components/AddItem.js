import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write the name of a movie"
        placeholderTextColor = "#FFFFFF"
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      <Button title="ADD" color="#007D70"  onPress={onAddItem} />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#007D70",
    borderRadius: 15,
    padding: 10,
    width: "80%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    color: "white",
  },
});
