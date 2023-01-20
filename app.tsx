import { useState } from "react";
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCoarseGoals] = useState([]);
  function goalInputHandler(
    enteredText: string | NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    setEnteredGoalText(enteredText.toString);
  }
  function goalHandeler() {
    setCoarseGoals((currentCoarseGoals) => [
      ...currentCoarseGoals,
      enteredGoalText,
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChange={goalInputHandler}
        />
        <Button title="Add Goal" onPress={goalHandeler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <Text style={styles.goalItem} key={goal}>
            goal
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
