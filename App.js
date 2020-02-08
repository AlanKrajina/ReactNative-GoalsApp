import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [enteredTextGoal, newTextFunc] = useState('')

  const inputHandler = enteredText => { // props function takes input value
    newTextFunc(enteredText)   // and creates NEW enteredTextGoal STATE
  }

// create state to store enteredTextGoal from TextInput:
  const [goals, setGoals] = useState([])    // goals new STATE - empty ARRAY
                                            // setGoals function to set state

  const addGoalHandler = () => {  // onPress updates GOALS STATE array with new objects
    setGoals(currentGoals =>      // -> current - previous GOALS STATE
      [...currentGoals, {id: Math.random().toString(), value: enteredTextGoal}]) // combines previous and newly created object into GOALS ARRAY
    }                                                                      // newly created -> from enteredTextGoal STATE (input string)

  const deleteItem = itemID => {  // itemID is the props.id we send to <GoalItem/> (every newly created row has its own id upon creation)
    setGoals(currentGoals => {      // -> current - previous GOALS STATE
      return currentGoals.filter(item => item.id !== itemID)  // checks current GOALS and returns NEW ARRAY (GOALS)
    })                                       // items in goals that dont match to the clicked one
  }                                //  (clicked has specific itemID from props & ALL ids in GOALS ARRAY)


  return (
    <View style={styles.screen}>
          <GoalInput 
            inputFunc={inputHandler}
            goalFunc={addGoalHandler}
            text={enteredTextGoal}/>
          <FlatList 
            keyExtractor={item => item.id}
            data={goals}                  
            renderItem={itemData=> <GoalItem id={itemData.item.id} removeItem={deleteItem} data={itemData}/> } />
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
