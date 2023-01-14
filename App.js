import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Task from "./src/components/Task";
// import { TextInput } from 'react-native-rapi-ui'

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss(); //--> To Dismiss whnever the + button is being clicked
    setTaskList([...taskList, task]);
    setTask("");
  };
  const completeTask = (index) => {
    let copyList = [...taskList]; //--> Creating copy of the taskList array.
    copyList.splice(index, 1); //--> This makes another array where the element at index === index would be removed and again would be set to copyList which we want.
    setTaskList(copyList);
  };
  return (
    <View style={style?.container}>
      <View style={style?.tasksWrapper}>
        <Text style={style?.sectionTitle}>Today's Tasks</Text>
        <View style={style?.items}>
          {taskList.length === 0 ? (
            <Text style={style?.elsestatement}>No Tasks Added</Text>
          ) : (
            taskList.map((item, ind) => {
              return (
                <TouchableOpacity key={ind}>
                  <Task text={item} ind={ind} delete={completeTask} />
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style?.writeTaskWrapper}
      >
        <TextInput
          onChangeText={(text) => {
            setTask(text);
          }}
          value={task}
          style={style?.input}
          placeholder="Write a Task..."
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={style?.addWrapper}>
            <Text style={style?.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    // height:100,
    height: "100%",
    overflow: "scroll",
  },
  elsestatement: {
    paddingHorizontal: 4,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    borderRadius: 60,
    backgroundColor: "white",
    padding: 15,
    width: 280,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    alignItems: "center",
    backgroundColor: "white",
    width: 60,
    height: 60,
    justifyContent: "center",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "C0C0C0",
  },
  addText: {},
});

export default App;
