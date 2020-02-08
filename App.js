import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [oldState, stateFunk] = useState('')


  return (
    <View style={styles.screen}>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder='Course Goal' 
              style={styles.textStyle}/>
            <Button 
              title='ADD'
              onPress={()=> stateFunk()}
              />
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
