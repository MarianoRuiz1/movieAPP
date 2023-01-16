import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AddItem from "./src/components/AddItem";
import { Checkbox } from "react-native-paper";
import Modal from "./src/components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [modalVisble, setModalVisible] = useState(false);
  const MyCheckbox = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxClick = () => {
      setChecked(!checked);
    };

    return (
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        color="#FFFFFF"
        onPress={handleCheckboxClick}
      />
    );
  };

  const onHandleChangeItem = (text) => {
    setTextItem(text);
  };

  const addItem = () => {
    setList((prevState) => [...prevState, textItem]);
    setTextItem("");
  };

  const handleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const onHandleDelete = (item) => {
    console.log(item);
    setList((prevState) => prevState.filter((element) => element !== item));
    setModalVisible(!modalVisble);
  };

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text style={styles.itemStyle}>{item}</Text>

      <MyCheckbox item={item} />

      <Button
        title="Edit"
        color="#00665C"
        textAlign="right"
        onPress={() => handleModal(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Watchlist</Text>
        <Text style={styles.subtitle}>
          Add the name of a movie you want to see and mark it one time you saw
          it
        </Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
      <Modal
        isVisible={modalVisble}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        onDismissModal={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00665C",
  },
  titleContainer: {
    height: 300,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  subtitle: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "#007D70",
    borderRadius: 10,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  itemStyle: {
    alignContent: "flex-start",
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
