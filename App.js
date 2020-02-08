import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredTextGoal, newTextFunc] = useState('')

  const inputHandler = enteredText => {
    newTextFunc(enteredText)
  }

// create state to store enteredTextGoal from TextInput:

  const [goals, setGoals] = useState([])    // goals new empty array
                                            // setGoals function to set state

  const addGoalHandler = () => {
    setGoals([...goals, enteredTextGoal])   // add all elements 'enteredTextGoal' to new -> ...goals                    
  }                                        // goals is new state we use

// outputing onPress ADD
  const newViews = goals.map(el=> <Text key={el}>{el}</Text>)


  return (
    <View style={styles.screen}>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder='Course Goal' 
              style={styles.textStyle}
              onChangeText={inputHandler}
              value={enteredTextGoal}
              />
            <Button 
              title='ADD'
              onPress={addGoalHandler}
              />
          </View>
          <View>
            {newViews}
          </View>
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
