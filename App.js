import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

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
          <FlatList 
            keyExtractor={item => item.id}
            data={goals}                  // our current state array
            renderItem={itemData=> (      // iterating through goals array that has objects
              <Text style={styles.listItem}>{itemData.item.value}</Text>  // outputing each object from array
            )} />
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
  },
  listItem: {
    padding: 10,
    borderColor: 'blue',
    backgroundColor: 'grey',
    borderWidth: 1,
    margin: 2
  }
});
