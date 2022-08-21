import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native';
import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";


type ItemToDo = {
  text: string;
  id: string
}

export default function App() {

  const [courseGoals, setCourseGoals] = useState<ItemToDo[]>(
    [],
  );

  const [modalIsVisible, setModalIsVisible] = useState(false)


  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };


  const addGoalHandler = (enteredGoal: any) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} onEndGoal={endAddGoalHandler} visible={modalIsVisible} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return (
              <GoalItem itemData={itemData} onDeleteItem={deleteGoalHandler} />
            )
          }}
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceHorizontal={false} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e0858",
  },
  goalsContainer: {
    flex: 4,
  },
});
