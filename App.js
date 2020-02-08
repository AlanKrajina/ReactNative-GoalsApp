import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [enteredTextGoal, newTextFunc] = useState('')

  const inputHandler = enteredText => {
    newTextFunc(enteredText)
  }

// create state to store enteredTextGoal from TextInput:

  const [goals, setGoals] = useState([])    // goals new empty array
                                            // setGoals function to set state

  const addGoalHandler = () => {
    setGoals(currentGoals => 
      [...currentGoals, {id: Math.random().toString(), value: enteredTextGoal}])   // onPress creates ne array of objects --> item.value TO USE
    }

  return (
    <View style={styles.screen}>
          <GoalInput 
            inputFunc={inputHandler}
            goalFunc={addGoalHandler}
            text={enteredTextGoal}/>
          <FlatList 
            keyExtractor={item => item.id}
            data={goals}                  
            renderItem={itemData=> <GoalItem data={itemData}/> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    allignItems: 'center'
  },
  textStyle: {
    width: '50%', 
    borderColor: 'black', 
    borderWidth: 1
  }
});
